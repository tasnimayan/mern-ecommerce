## Functionality for All users (Logged or Not Logged)

ProductBrandList
ProductCategoryList
ProductSliderList
ProductDetails
ProductListByBrand
ProductListByCategory
ProductListBySimilar
ProductListByKeyword
ProductListByRemark
ProductReviewList

## Functionality for logged users

CreateProductReview

# E-commerce Web Application using MERN Stack

This project is an E-commerce application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Leveraging the power of these technologies, I've tried to developed a fully functional and scalable online marketplace that offers a seamless shopping experience.

## Features

- > User Authentication: Secure user sign-up, login, and authentication functionalities.
- > Product Catalog: Browse through a wide range of products with detailed descriptions and images.
- > Shopping Cart: Add and manage items in the cart before making a purchase.
- > Payment Gateway Integration: Seamless integration of payment gateways for smooth transactions.
- > Order Management: Track orders and manage their status throughout the process.
- > Admin Dashboard: Manage products, orders, and user data efficiently.

## Authors

- [@tasnimayan](https://www.github.com/tasnimayan)

## Installation

<ol>
  <li>Clone the repository.<li>
  <li>Navigate to the project directory.<li>
  <li>Install dependencies using

```bash
  npm install
```

  <li>
  <li>Configure environment variables.<li>
  <li>Run the development server using npm start.<li>
</ol>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - type: Number

`DATABASE` - type: String

`JWT_SECRET` - type: String

`NODE_ENV` - type: String

`JWT_COOKIE_EXPIRES_IN` - type: String

`JWT_EXPIRES` - type: String

`HOST_MAIL` - type: String

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
