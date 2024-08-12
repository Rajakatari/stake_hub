# Trading Orders Platform Backend

## Overview

This repository contains the backend code for the Trading Orders Platform. The backend is built using Node.js, Express, and MySQL, and it handles order management, matching, and storage.

## Features

- Place orders
- Match orders based on price
- Manage pending and completed orders
- Handle cross-origin requests

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/trading-orders-backend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd trading-orders-backend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file for environment variables:**

    ```env
    DB_HOST=your_db_host
    DB_DATABASE=your_db_name
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    ```

## Running the Server

Start the server with:

```bash
npm start
