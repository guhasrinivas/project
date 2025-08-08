# 🧭 Wanderlust

A modern, full-featured travel listings web app built with Node.js, Express, MongoDB, and EJS. Wanderlust lets users discover, create, review, and manage unique travel accommodations from around the world.

![Wanderlust Screenshot](https://images.unsplash.com/photo-1625505826533-5c80aca7d157?auto=format&fit=crop&w=800&q=60)

---

## ✨ Features

- 🏠 **Browse Listings:** View beautiful places to stay, with images, prices, and locations.
- ➕ **Create Listings:** Authenticated users can add new listings with details and images.
- ✏️ **Edit & Delete:** Owners can edit or remove their own listings.
- ⭐ **Reviews:** Leave ratings and comments on listings.
- 🔒 **Authentication:** Secure signup, login, and session management.
- 🚦 **Validation:** Robust server-side and client-side form validation.
- 💬 **Flash Messages:** User feedback for actions and errors.
- 📱 **Responsive Design:** Looks great on desktop and mobile.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up MongoDB:**
   - Make sure MongoDB is running locally at `mongodb://127.0.0.1:27017/wanderlust`
   - (Optional) Seed the database with sample data:
     ```sh
     node init/index.js
     ```

4. **Start the server:**
   ```sh
   node app.js
   ```
   Visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** EJS, Bootstrap 5, custom CSS
- **Authentication:** Passport.js, express-session
- **Validation:** Joi
- **Flash Messages:** connect-flash

---

## 📂 Project Structure

```
controllers/    # Route handlers
init/           # Database seeding scripts
models/         # Mongoose schemas
public/         # Static assets (CSS, JS)
routes/         # Express route modules
utils/          # Utility classes (error handling, async)
views/          # EJS templates
app.js          # Main application entry point
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

> Made with ❤️ for travelers and explorers.
