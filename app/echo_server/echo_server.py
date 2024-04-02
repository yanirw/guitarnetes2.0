from flask import Flask, request, jsonify
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
metrics = PrometheusMetrics(app)

# Create a counter metric
echo_requests = metrics.counter(
    'echo_requests', 'Number of echo requests received', labels={'endpoint': 'echo'})

@app.route('/echo', methods=['POST'])
@echo_requests
def echo():
    data = request.json
    return jsonify(data)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
