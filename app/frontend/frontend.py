from flask import Flask, request, render_template_string
import os
import requests

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def show_version():
    version = os.getenv('DOCKER_IMAGE_VERSION', 'Version not set')
    echo_response = ""
    if request.method == 'POST':
        message = request.form['message']
        response = requests.post('http://echo-server:5000/echo', json={"message": message})
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
