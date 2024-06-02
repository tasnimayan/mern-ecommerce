
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose')


// Create Express App Instance
const app = express();





// ==========  Import Application routers  ==========
const productRouter = require('./src/routes/productRouter')
const userRouter = require('./src/routes/userRouter')
const salesRouter = require('./src/routes/salesRouter')
const invoiceRouter = require('./src/routes/invoiceRouter')
const sellerRouter = require('./src/routes/sellerRouter')


//    ==========    MIDDLEWARE     ==========

// ==========  Base Static File Provider Path  ========== 
// app.use(express.static(path.join(__dirname, './public')));


// ==========  Request Limiting For Security Purpose  ==========
const limiter = rateLimit({
	windowMs: 30 * 60_000,
	max: 5000,
	message: 'Too many requests from this IP, please try again later',
});

app.use(limiter);

// ========== Cross Origin Resource Sharing Enable  ==========
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(helmet());
app.use(xss());


// ==========  Prevent NoSQL Query Injection  ==========
app.use(mongoSanitize());


// ==========  CORS POLICY  ==========
app.use((req, res, next) => {
	res.setHeader('Content-Security-Policy', 'script-src * ');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// ==========  Request Visualizing  ==========
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
	console.log('Morgan enabled...');
}


// ==========   Database Connection   ==========
mongoose
  .connect(process.env.DATABASE, {autoIndex:false})
  .then(() => console.log('MONGODB connection successful, '+"Status:200"))
  .catch(err => console.log(err));

mongoose.connection.on('disconnected', () => {
	console.log("======= Database Disconnected ======");
});

// ==========  ROUTE HANDLERS  ==========
// app.get("/", function (req, res) {
// 	console.log("request received")
// 	res.end();
// })

app.set('etag', false)  // Server won't cache data // enable in production mode
app.use('/api/v1/products/', productRouter);
app.use('/api/v1/users/', userRouter);
app.use('/api/v1/sales/', salesRouter);
app.use('/api/v1/invoice/', invoiceRouter)
app.use('/api/v1/seller/', sellerRouter)



// app.use(express.static('client/dist'));

// Add React Front End Routing
// app.get('*',function (req,res) {
//     res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
// })


//  ==========  Invalid Route Handler  ==========
app.all('*', (req, res, next) => {
	const err = new Error(`No route found at ${req.originalUrl}`);
	if (!err.statusCode) err.statusCode = 404;
	next(err);
});

//  ==========  GLOBAL ERROR MIDDLEWARE  ==========
app.use((err, req, res, next) => {
	console.log(err)
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).send({ message: err.message });
});

module.exports = app;