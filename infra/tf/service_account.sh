#!/bin/bash

#creats a service account to create all the tf resources in this tf code
# provide project id to the script as argumant

# Check if a project ID and user/service account were provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <PROJECT_ID> <USER_OR_SERVICE_ACCOUNT>"
  exit 1
fi

PROJECT_ID=$1
USER_OR_SERVICE_ACCOUNT=$2
SERVICE_ACCOUNT_ID="test-policies"
SERVICE_ACCOUNT_NAME="Test Policies Service Account"
ROLE_ID="customRoleTestPolicies"
ROLE_TITLE="Custom Role for Test Policies"
ROLE_DESCRIPTION="A custom role for test policies service account"
PERMISSIONS=(
  "compute.networkAdmin"
  "storage.objectAdmin"
  "storage.objectUser"
  "browser"
  "kubernetes.engineAdmin"
  "organizationPolicyViewer"
  "customPolicyViewer"
)

# Create the service account
gcloud iam service-accounts create ${SERVICE_ACCOUNT_ID} \
  --display-name "${SERVICE_ACCOUNT_NAME}" \
  --project ${PROJECT_ID}

# Build the permissions list
PERMISSIONS_LIST=$(IFS=,; echo "${PERMISSIONS[*]}")

# Create the custom role
gcloud iam roles create ${ROLE_ID} \
  --project ${PROJECT_ID} \
  --title "${ROLE_TITLE}" \
  --description "${ROLE_DESCRIPTION}" \
  --permissions ${PERMISSIONS_LIST}

# Assign the custom role to the service account
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member "serviceAccount:${SERVICE_ACCOUNT_ID}@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role "projects/${PROJECT_ID}/roles/${ROLE_ID}"

# Grant the iam.serviceAccountUser role to the user or service account running the script
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member "user:${USER_OR_SERVICE_ACCOUNT}" \
  --role "roles/iam.serviceAccountUser"

echo "Service account and custom role have been created and assigned."
echo "Service Account: ${SERVICE_ACCOUNT_ID}@${PROJECT_ID}.iam.gserviceaccount.com"
echo "Custom Role: projects/${PROJECT_ID}/roles/${ROLE_ID}"
echo "The iam.serviceAccountUser role has been granted to ${USER_OR_SERVICE_ACCOUNT}"
