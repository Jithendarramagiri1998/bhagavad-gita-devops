Here is your content formatted into a clean, professional `README.md` file:

```markdown
# 📖 Bhagavad Gita Multilingual Web Application – Full DevOps Project

This project is a full-stack real-time Bhagavad Gita web application that supports **multilingual sloka reading (English, Hindi, Telugu)** with a beautiful UI, designed like a book. It is completely deployed using modern **DevOps tools** on **AWS EC2**, integrated with **Umami analytics** for user traffic monitoring.

---

## 🌐 Live Demo

- **Frontend (Netlify)**: https://your-netlify-app-name.netlify.app  
- **Backend (Render or EC2)**: http://your-backend-domain/api/chapters  
- **Umami Analytics**: http://<your-ec2-ip>:3001  

---

## ✨ Features

- 📚 Read all Bhagavad Gita slokas chapter-wise
- 🌍 Language support: English, Hindi, Telugu
- 📖 Book-like reading interface
- ⚙️ Backend REST API (Node.js + Express)
- 🎨 Frontend React with modern UI
- 📊 Umami traffic analytics (free & open-source)
- 🚀 Hosted via Docker and NGINX on AWS EC2
- 📦 Deployment-ready with Docker Compose

---

## 🛠️ Technologies Used

| Layer        | Tool/Service                     |
|--------------|----------------------------------|
| Frontend     | React, HTML, CSS, Netlify        |
| Backend      | Node.js, Express, JSON           |
| Analytics    | Umami (self-hosted)              |
| Hosting      | Netlify (Frontend), EC2/Render (Backend) |
| DevOps       | Docker, Docker Compose, NGINX    |
| Monitoring   | Umami (custom dashboard)         |
| OS           | Ubuntu 22.04 on AWS EC2          |

---

## 📁 Project Structure

```

bhagavad-gita-devops/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── data/
│       └── chapter-1.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   └── public/
│       └── index.html
├── docker-compose.yml
├── nginx.conf
└── README.md

````

---

## ✅ Setup Instructions

### 1️⃣ Backend API Setup (Node.js + Express)

Go to the backend folder:

```bash
cd ~/bhagavad-gita-devops/backend
````

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Test API:

```bash
curl http://localhost:5000/api/chapters
```

---

### 2️⃣ Chapter & Sloka API Endpoints

| Endpoint                          | Description                 |
| --------------------------------- | --------------------------- |
| `/api/chapters`                   | Get all chapters            |
| `/api/chapters/:id`               | Get metadata of a chapter   |
| `/api/chapters/:id/slokas`        | Get all slokas in a chapter |
| `/api/chapters/:id/slokas/:verse` | Get specific sloka by verse |

---

### 3️⃣ Frontend Setup (React)

Go to frontend folder:

```bash
cd ~/bhagavad-gita-devops/frontend
```

Update `App.js` to point to your backend URL:

```js
fetch("http://<your-ec2-ip>:5000/api/chapters")
```

Build the app:

```bash
npm install
npm run build
```

Deploy the `build/` folder to Netlify or host it using NGINX.

---

### 4️⃣ Host Frontend with NGINX (Optional)

Move the build folder:

```bash
cp -r build /var/www/html/gita
```

Update your `nginx.conf`:

```nginx
server {
  listen 80;
  server_name your-domain.com;

  root /var/www/html/gita;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

Restart NGINX:

```bash
sudo systemctl restart nginx
```

---

### 5️⃣ Umami Analytics Setup (on EC2)

Clone Umami repository:

```bash
git clone https://github.com/umami-software/umami.git
cd umami
```

Configure `.env` and `docker-compose.yml`
(Default port: **3001**)

Run:

```bash
docker-compose up -d
```

Access dashboard:

```
http://<your-ec2-ip>:3001
```

Add the tracking script in your frontend `index.html`:

```html
<script
  async
  defer
  data-website-id="your-site-id"
  src="http://<your-ec2-ip>:3001/umami.js"
></script>
```

---

## 📈 Monitor Usage (via Umami)

Login to `http://<your-ec2-ip>:3001` to view:

* Total visitors
* Daily views
* Real-time activity
* Pages visited

✅ 100% Free & Privacy-Respecting

---

## 🧪 Testing API Endpoints

```bash
# Get all chapters
curl http://localhost:5000/api/chapters

# Get all slokas from Chapter 1
curl http://localhost:5000/api/chapters/1/slokas
```

---

## 📝 Notes

* All slokas are stored as JSON in `backend/data/`
* Each chapter is saved like: `chapter-1.json`, `chapter-2.json`, etc.
* Multilingual support is built-in (English, Hindi, Telugu)
* Frontend offers a book-style chapter and verse reading experience

---

### 🙏 Inspired by the timeless wisdom of the Bhagavad Gita.

```

Let me know if you'd like me to:
- Add license or contribution sections
- Replace placeholder URLs/IPs with real ones
- Format this for a GitHub repository automatically
```
