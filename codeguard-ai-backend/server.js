const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Прокси для анализа кода с Python-сервиса
app.post('/api/analyze', async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    try {
        // Запрос к Python-сервису на анализ кода
        const response = await axios.post('http://localhost:5000/analyze', { code });
        res.json({ analysis: response.data });
    } catch (error) {
        console.error("Error during code analysis:", error);
        res.status(500).json({ error: 'Error during analysis' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
