{{/*
Expand the name of the chart.
*/}}
{{- define "echo_server.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" | lower | replace "_" "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If the release name contains the chart name it will be used as a full name.
*/}}
{{- define "echo_server.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" | lower | replace "_" "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- $name = printf "%s-%s" .Release.Name $name | replace "_" "-" | lower }}
{{- $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "echo_server.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" | lower | replace "_" "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "echo_server.labels" -}}
helm.sh/chart: {{ include "echo_server.chart" . }}
{{ include "echo_server.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service | lower }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "echo_server.selectorLabels" -}}
app.kubernetes.io/name: {{ include "echo_server.name" . }}
app.kubernetes.io/instance: {{ .Release.Name | lower | replace "_" "-" }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "echo_server.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "echo_server.fullname" .) .Values.serviceAccount.name | replace "_" "-" | lower }}
{{- else }}
{{- default "default" .Values.serviceAccount.name | replace "_" "-" | lower }}
{{- end }}
{{- end }}
