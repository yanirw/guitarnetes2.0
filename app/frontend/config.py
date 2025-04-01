import os

class Config:
    # Application configuration
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-key-for-guitarnetes')
    
    # Echo server configuration
    ECHO_SERVER_URL = os.environ.get('ECHO_SERVER_URL', 'https://echo.yanirw.com/echo')
    
    # Project metadata
    PROJECT_NAME = "Guitarnetes 2.0"
    PROJECT_DESCRIPTION = """
    A DevOps Kubernetes demonstration project consisting of two microservices:
    a frontend service and an echo server backend. This project showcases CI/CD pipelines, 
    ArgoCD deployment, and best practices for containerized applications.
    """
    
    # Author information
    AUTHOR = "Yanir Winnik"
    POSITION = "DevOps Engineer"
    EMAIL = "hbhr932@gmail.com"
    GITHUB_URL = "https://github.com/yanirw"
    PROJECT_REPO = "https://github.com/yanirw/guitarnetes2.0"
    
    # About me text
    ABOUT_TEXT = """
    I'm a passionate DevOps Engineer with expertise in containerization, Kubernetes orchestration, 
    and CI/CD pipeline implementation. My focus is on automating deployment processes and 
    implementing infrastructure as code to streamline development workflows.
    
    My technical skills include:
    • Kubernetes and container orchestration
    • CI/CD pipelines (Jenkins, GitHub Actions)
    • Infrastructure as Code (Terraform, CloudFormation)
    • Cloud platforms (AWS, GCP, Azure)
    • Monitoring and observability (Prometheus, Grafana)
    
    This project demonstrates my approach to microservices architecture and DevOps best practices.
    """