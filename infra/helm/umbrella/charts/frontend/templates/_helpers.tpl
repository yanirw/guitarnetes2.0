{{/*
Expand the name of the chart.
*/}}
{{- define "name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" | lower | replace "_" "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" | lower | replace "_" "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- $name = printf "%s-%s" .Release.Name $name | replace "_" "-" | lower }}
{{- $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{/*
Define the chart information.
*/}}
{{- define "chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" | lower | replace "_" "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "labels" -}}
helm.sh/chart: {{ include "chart" . }}
{{ include "selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service | lower }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "selectorLabels" -}}
app.kubernetes.io/name: {{ include "name" . }}
app.kubernetes.io/instance: {{ .Release.Name | lower | replace "_" "-" }}
{{- end }}

{{/*
Service Account Name
*/}}
{{- define "serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "fullname" .) .Values.serviceAccount.name | replace "_" "-" | lower }}
{{- else }}
{{- default "default" .Values.serviceAccount.name | replace "_" "-" | lower }}
{{- end }}
{{- end }}
