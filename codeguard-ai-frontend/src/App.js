import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://literate-waffle-p5694qr7qxvh7q75-5000.app.github.dev/analyze', { code });
      setResult(response.data.result || 'Ответ получен, но без данных');
    } catch (error) {
      setResult('Ошибка при анализе: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>🧠 CodeGuard AI</h1>
      <textarea
        rows="10"
        cols="80"
        placeholder="Вставь код для анализа..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br />
      <button onClick={handleAnalyze} disabled={loading || !code}>
        {loading ? 'Анализируем...' : 'Анализировать'}
      </button>
      <div style={{ marginTop: '20px', textAlign: 'left', whiteSpace: 'pre-wrap' }}>
        <strong>Результат:</strong>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
