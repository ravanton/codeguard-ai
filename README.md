# 🧠 CodeGuard AI

CodeGuard AI — это AI-помощник для анализа исходного кода, построенный на базе моделей CodeBERT/StarCoder. Приложение включает в себя:
- 🧩 Backend на Flask (Python)
- 💻 Frontend на React
- 🤖 Интеграцию с HuggingFace для работы с AI-моделями

## 📸 Превью

![screenshot](https://user-images.githubusercontent.com/your-github-id/demo.png)

---

## 🚀 Возможности

- 🔍 Анализ кода на уязвимости или антипаттерны
- 🧠 Использование предобученной модели (CodeBERT / StarCoder)
- 🌐 REST API через Flask backend
- 💡 Удобный UI на React
- ⚙️ Готов к запуску в Codespaces

---

## 🛠️ Установка

### 📦 Клонировать проект

```bash
git clone https://github.com/your-username/codeguard-ai.git
cd codeguard-ai

## 🧠 Backend (Flask)

cd codeguard-ai-backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
(откроется на http://localhost:5000)

## 💻 Frontend (React)
cd codeguard-ai-frontend
npm install
npm start


