from flask import Flask, request, jsonify
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

app = Flask(__name__)

# Загрузка модели и токенизатора
model_name = "microsoft/codebert-base"
model = AutoModelForSequenceClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Функция для анализа кода
def analyze_code(code: str):
    inputs = tokenizer(code, return_tensors="pt", truncation=True, padding=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    predictions = torch.argmax(logits, dim=-1).item()
    return predictions

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    code = data.get('code')
    if not code:
        return jsonify({"error": "No code provided"}), 400
    
    result = analyze_code(code)
    return jsonify({"prediction": result})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
