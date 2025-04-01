from flask import Flask, render_template, request, jsonify, send_from_directory
import requests
import os
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/echo', methods=['POST'])
def echo():
    message = request.form.get('message', '')
    try:
        response = requests.post(app.config['ECHO_SERVER_URL'], 
                                json={"message": message},
                                timeout=5)
        if response.status_code == 200:
            return jsonify({"status": "success", "message": response.json()['message']})
        else:
            return jsonify({"status": "error", "message": f"Echo server returned status code: {response.status_code}"})
    except requests.exceptions.RequestException as e:
        return jsonify({"status": "error", "message": f"Error connecting to echo server: {str(e)}"})

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})

@app.route('/download-cv')
def download_cv():
    return send_from_directory('static', 'yanir_winnik_cv.pdf')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)