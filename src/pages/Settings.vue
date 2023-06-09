<template>
  <div class="settings">
    <h1>Welcome to the Settings Page</h1>
    <p>This page allows you to manage various settings for your application's back-end.</p>
    <h2>Backend Information</h2>
    <ul>
      <li><strong>Express:</strong> A fast and minimalist web application framework for Node.js.</li>
      <li><strong>CORS:</strong> Cross-Origin Resource Sharing middleware for enabling cross-domain communication.</li>
      <li><strong>MongoDB:</strong> A popular NoSQL database for storing and retrieving data.</li>
    </ul>
    <h2>API Endpoints</h2>
    <p>Here are the available API endpoints:</p>
    <ul>
      <li><code>GET /orders</code>: Retrieves a list of orders from the MongoDB database.</li>
      <li><code>GET /orders/:id</code>: Retrieves a specific order by its ID.</li>
      <li><code>POST /orders</code>: Creates a new order and saves it to the database.</li>
      <li><code>PATCH /orders/:id</code>: Updates an existing order with new information.</li>
      <li><code>DELETE /orders/:id</code>: Deletes an order from the database.</li>
      <li><code>GET /products</code>: Retrieves a list of products from the MongoDB database.</li>
      <li><code>GET /products/:id</code>: Retrieves a specific product by its ID.</li>
      <li><code>POST /products</code>: Creates a new product and saves it to the database.</li>
      <li><code>PATCH /products/:id</code>: Updates an existing product with new information.</li>
      <li><code>DELETE /products/:index</code>: Deletes a product from the database by its index.</li>
    </ul>
    <h2>Data Formats</h2>
    <p>Here is an example of the data formats used for orders and products:</p>
    <h3>Orders Format:</h3>
    <pre><code>
{
  "id": 3,
  "title": "Long and descriptive order title",
  "date": "2017-06-29 12:09:33",
  "group": null,
  "owner": "Alexander Christorozhdestvensky",
  "products": [
    {
      "id": 1,
      "quantity": 2,
      "isNew": 1,
      "guarantee": {
        "start": "2017-06-29 12:09:33",
        "end": "2017-06-29 12:09:33"
      },
      "price": [
        {
          "value": 100,
          "symbol": "USD",
          "isDefault": 0
        },
        {
          "value": 2600,
          "symbol": "UAH",
          "isDefault": 1
        }
      ]
    }
  ]
}
    </code></pre>
    <h3>Product Format:</h3>
    <pre><code>
{
  "id": 1,
  "serialNumber": 1234,
  "photo": "https://static.bhphoto.com/images/multiple_images/images500x500/1657721733_IMG_1794925.jpg",
  "title": "Gigabyte M27F A 27\" 165 Hz KVM Gaming Monitor",
  "type": "Monitors",
  "specification": "Specification 1",
  "price": [
    {
      "value": 100,
      "symbol": "USD",
      "isDefault": 0
    },
    {
      "value": 2600,
      "symbol": "UAH",
      "isDefault": 1
    }
  ]
}
    </code></pre>
    <h2>Powered by Open Source</h2>
    <p>This application utilizes the power of open-source technologies:</p>
    <ul>
      <li><strong>Vue:</strong> A progressive JavaScript framework for building user interfaces.</li>
      <li><strong>Vite:</strong> A fast development build tool for modern web applications.</li>
      <li><strong>Git and GitHub:</strong> Version control and collaboration platform for developers.</li>
    </ul>
    <h2>The Power of AI</h2>
    <p>And of course, this application wouldn't be complete without the help of AI:</p>
    <ul>
      <li><strong>OpenAI:</strong> The advanced AI model powering intelligent responses and interactions.</li>
    </ul>
    <p>We hope you enjoy using this application and exploring the world of open-source and AI!</p>
  </div>
</template>

<script>
export default {
  name: 'Settings',
};
</script>

<style scoped>
.settings {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  width: 100%;
  overflow-x: hidden;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

ul {
  margin-bottom: 20px;
  list-style-type: disc;
  padding-left: 20px;
}

code {
  display: block;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 4px;
  margin-bottom: 10px;
}

pre {
  margin-bottom: 20px;
}
</style>
