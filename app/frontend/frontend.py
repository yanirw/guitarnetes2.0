from flask import Flask, request, render_template_string, jsonify
import os
import requests

app = Flask(__name__)

def get_version():
    try:
        with open("version.txt", "r") as file:
            return file.read().strip()  # Read the version and strip any extraneous whitespace
    except FileNotFoundError:
        return "Version not set"

@app.route('/', methods=['GET', 'POST'])
def show_version():
    version = get_version()  # Use the function to get the version
    echo_response = ""
    if request.method == 'POST':
        message = request.form['message']
        response = requests.post('https://echo.yanirw.com/echo', json={"message": message})
        echo_response = response.json()['message']
    return render_template_string("""
        <h1>Docker Image Version: {{version}}</h1>
        <form method="post">
            Echo Message: <input type="text" name="message"><br>
            <input type="submit" value="Send">
        </form>
        <p>Echo Response: {{echo_response}}</p>
        """, version=version, echo_response=echo_response)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
