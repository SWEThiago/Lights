import json
from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Função para carregar os dados do arquivo JSON com a codificação UTF-8
def load_lights_data():
    with open('panel_lights.json', 'r', encoding='utf-8') as file:
        return json.load(file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/lights', methods=['GET'])
def get_lights():
    lights = load_lights_data()
    return jsonify(lights)

if __name__ == "__main__":
    app.run(debug=True)
