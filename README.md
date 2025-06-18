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
- **Frontend (Optional):** HTML/CSS or React (if applicable)

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
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
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:5000
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
│   └── Url.js          # Mongoose schema
├── routes/
│   └── url.js          # API routes
├── .env                # Environment variables
├── server.js           # App entry point
└── README.md
```

## ✨ Screenshots (Optional)

Include screenshots of your UI if it has a frontend.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## 📄 License

This project is licensed under the [MIT License](LICENSE).