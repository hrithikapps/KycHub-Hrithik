# Product Comparison Dashboard

## Overview
This is a **Product Comparison Dashboard** built using **React** and **Ant Design**. The application allows users to view products, search and sort them, add products to a comparison list, and compare them side by side.

## Features
- **Navbar and Sidebar Navigation**
- **Product Details Page**
  - Displays product data in an Ant Design table.
  - Search and sorting functionalities.
  - "Compare" button to add products for comparison (disabled if already added or max limit reached).
  - Highlighted attributes for products being compared.
- **Compare Products Page**
  - Side-by-side comparison of selected products.
  - "Add More" button to open a modal for adding more products (max 4).
  - Option to remove products from the comparison list.
  - Prevents duplicate product addition.
- **Router-based navigation**
- **Loading Spinner** when fetching data.
- **Deployed on Vercel**

## Tech Stack
- **React.js** (UI framework)
- **React Router** (Navigation)
- **Redux Toolkit** (State management)
- **Ant Design** (UI components)
- **Axios** (API requests)

## API Used
[DummyJSON Products API](https://dummyjson.com/products)

### Product Attributes Displayed:
- Title
- Description
- Price
- Discount Percentage
- Brand
- Category
- Thumbnail Image

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/product-comparison-dashboard.git
   cd product-comparison-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will be available at **http://localhost:3000/**.

## Deployment
The project is deployed on **Netlify**.

[Live Demo](https://kyc-hub-hrithik.vercel.app/)




