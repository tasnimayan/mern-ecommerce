# ShopinZ - MERN stack e-commerce platoform

This project is an E-commerce application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Leveraging the power of these technologies, I've tried to developed a fully functional and scalable multivendor online marketplace that offers a seamless shopping experience.

## Features

- Fully functional backend API using NODE.js
- Fully functional frontend for UI with REACT.js
- Database managed with MongoDB
- Zustand Library for state management in the client side
- Fully responsive design

## Platform Features

- User Authentication: Secure user sign-up, login, and authentication functionalities.
- Product Catalog: Browse through a wide range of products with detailed descriptions and images.
- Shopping Cart: Add and manage items in the cart before making a purchase.
- Payment Gateway Integration: Seamless integration of payment gateways for smooth transactions.
- Order Management: Track orders and manage their status throughout the process.
- Admin Dashboard: Signup, Login, Manage products, orders, and data efficiently.

## Installation

Clone the repository

```
$ git clone https://github.com/tasnimayan/mern-ecommerce.git
```

Create a .env file in the root directory

```
.env
```

.env file variables

```
PORT= port_number
DATABASE= "mongodb_connection_string"
JWT_SECRET= "secret_code_for_signing_jwt"
NODE_ENV= "development"
JWT_COOKIE_EXPIRES_IN= jwt_expiration_day_in_number
JWT_EXPIRES="x days"
HOST_MAIL="web_mail_for_mailing_service"
MAIL_PASS="web_mail_password"
```

Install project with npm

```
$ npm install
$ cd client
$ npm install
```

## Start development

start frontend

```
$ cd client
$ npm run dev
```

start Backend

```
npm run start
```

## Simple build for production

```
$ npm run build
```

## Tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Screenshots

![Home Page](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/home.png)
![Product Details](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/product.png)
![User Login](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/login.png)
![User Register](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/register.png)
![User Profile](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/profile.png)
![User Cart](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/cart.png)
![Seller Product](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/seller_products.png)
![Product Form](https://github.com/tasnimayan/mern-ecommerce/blob/main/public/screenshot/add_product.png)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - type: Number

`DATABASE` - type: String

`JWT_SECRET` - type: String

`NODE_ENV` - type: String

`JWT_COOKIE_EXPIRES_IN` - type: String

`JWT_EXPIRES` - type: String

`HOST_MAIL` - type: String

`MAIL_PASSWORD` - type: String
