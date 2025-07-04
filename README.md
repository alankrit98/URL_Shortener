# 🔗 URL Shortener

A simple and efficient URL Shortener application that transforms long URLs into short, easy-to-share links. Built with Node.js, Express, and MongoDB, it supports custom aliases, redirection, and click tracking.

## 🚀 Features

- ✅ Shorten long URLs instantly
- 🏷️ Create custom aliases for shortened links
- 🔁 Redirect to original URLs seamlessly
- 📊 Track click count for each shortened URL
- 🗑️ Delete short URLs
- 🌐 RESTful API support

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/alankrit98/URL_Shortener.git
   cd URL_Shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```bash
   touch .env
   ```

   Add the following:
   ```env
   PORT=8001
   MONGODB_URI = your_mongodb_connection_string
   BASE_URL = http://localhost:8001
   ```

4. **Run the app**
   ```bash
   npm start
   ```

## 📬 API Endpoints

| Method | Endpoint        | Description                       |
|--------|------------------|-----------------------------------|
| POST   | `/api/shorten`   | Create a short URL                |
| GET    | `/:shortCode`    | Redirect to the original URL      |
| GET    | `/api/:shortCode`| Get details (clicks, original URL)|

## 📁 Project Structure

```
url-shortener/
│
├── models/
│   └── url.js          # Mongoose schema
├── routes/
│   └── url.js          # API routes
├── .env                # Environment variables
├── server.js           # App entry point
└── README.md
```

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
