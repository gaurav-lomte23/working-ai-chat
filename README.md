---

# 🧠 AI Chat Application (Mistral-powered)

An **AI-powered chat application** built with **Node.js**, **Express**, and **Mistral AI API**, designed to deliver intelligent real-time responses in a simple, lightweight interface.

🚀 **Live on Render** – easy to deploy, scalable, and beginner-friendly.

---

## 🖼️ Preview
![App Screenshot](./mistral-ai-1.png)
![App Screenshot](./mistral-ai-2.png)




## ✨ Features

* ⚡ **Powered by Mistral AI** – cutting-edge LLMs for natural conversations.
* 🌐 **REST API integration** – simple API calls with JSON responses.
* 🛠️ **Express.js backend** – lightweight and fast server setup.
* 🔒 **Environment variable support** – API keys stored securely with `dotenv`.
* 📦 **Easy deployment** – ready for Render, Heroku, or any Node hosting.
* 🎨 **Minimal & clean architecture** – easy to extend with new features.

---

## 🌟 Highlighting Mistral AI

Mistral AI is one of the most **advanced and efficient open-weight LLMs**, known for:

* 🧩 **Small but powerful models** – optimized for cost and speed.
* 🔥 **Open-weight availability** – transparent and community-driven.
* 🌍 **Multilingual capabilities** – works across multiple languages.
* 💡 **Flexible integration** – can power chatbots, apps, and business tools.

---

## ⚠️ Note on Free Tier

When using the **free Mistral API key**, you may encounter this error:

```
Sending message to Mistral API: working
Response status: 429
Mistral API response: {
  object: 'error',
  message: 'Service tier capacity exceeded for this model.',
  type: 'service_tier_capacity_exceeded',
  param: null,
  code: '3505'
}
```

👉 This simply means **the free service tier is at capacity**.
Upgrade to a **paid tier** for higher availability and reliability.

---

## 🛠️ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/gaurav-lomte23/working-ai-chat.git
cd working-ai-chat
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create a `.env` file and add your Mistral API key:

```env
MISTRAL_API_KEY=your_api_key_here
```

### 4️⃣ Run locally

```bash
npm start
```

---

## 🚀 Deployment

This app is **Render-ready**. Just connect your GitHub repo and Render will:

1. Install dependencies (`npm install`)
2. Run your start script (`node server.js`)
3. Serve your chatbot 🎉

---

## 🤝 Contributing

Contributions are welcome!
Feel free to **fork the repo**, submit PRs, or open issues with feature ideas.

---

## 📜 License

This project is licensed under the **MIT License**.

---

💡 Built with ❤️ by [Gaurav Lomte](https://github.com/gaurav-lomte23)

---



