from flask import Flask, request, jsonify
from prometheus_flask_exporter import PrometheusMetrics
from prometheus_client import make_wsgi_app
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.serving import run_simple
import threading

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

# Create a dispatcher to serve the app and metrics on different ports
app_dispatcher = DispatcherMiddleware(app, {
    '/metrics': make_wsgi_app()
})

def run_metrics_server():
    run_simple('0.0.0.0', 8080, app_dispatcher)

if __name__ == '__main__':
    # Start the metrics server in a separate thread
    metrics_thread = threading.Thread(target=run_metrics_server)
    metrics_thread.start()
    
    # Run the main app on port 5000
    app.run(host='0.0.0.0', port=5000)