from flask import Flask, request, jsonify
from prometheus_flask_exporter import PrometheusMetrics
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from prometheus_client import make_wsgi_app

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

# Expose metrics on /metrics
app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
    '/metrics': make_wsgi_app()
})

if __name__ == '__main__':
    # Run the app on port 5000
    from werkzeug.serving import run_simple
    run_simple('0.0.0.0', 5000, app)