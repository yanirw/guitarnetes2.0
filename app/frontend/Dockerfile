FROM python:3.9-slim

WORKDIR /app

# Install dependencies first (better caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create directory for static files if it doesn't exist
RUN mkdir -p static

EXPOSE 3000

CMD ["python", "app.py"]