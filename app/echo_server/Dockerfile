FROM python:3.9-slim
WORKDIR /app
COPY ../requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY ./echo_server/echo_server.py /app
EXPOSE 5000
CMD ["python", "echo_server.py"]
