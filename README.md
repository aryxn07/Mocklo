# Mocklo 🌍

Mocklo is a **Node.js + Express.js** application that detects a user's location using their IP address and retrieves matching users from **MongoDB**.

## 🚀 Features

* 🌍 IP-based geolocation
* 🗄️ MongoDB Atlas with Mongoose
* 🔎 Location-based user filtering
* 🎨 EJS server-side rendering
* 🌱 Database seeding
* 🔐 Environment variable configuration

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Geo IPify
* Mapbox SDK

## ⚙️ Setup

```bash
git clone https://github.com/aryxn07/Mocklo_.git
cd Mocklo_
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
GEO_API_KEY=your_geo_ipify_api_key
```

Run the application:

```bash
node app.js
```

The server runs on:

```text
http://localhost:8080
```

## 🌱 Seed Database

```bash
node init/index.js
```

## 📌 Main Route

```text
GET /locations
```

Detects the user's location and displays users from the detected country.

## 👨‍💻 Author

**Aryan Raj**

[GitHub](https://github.com/aryxn07)
