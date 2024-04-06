FROM python:3.9-slim
WORKDIR /app
COPY ../requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY ./frontend/frontend.py /app
EXPOSE 3000
CMD ["python", "frontend.py"]
