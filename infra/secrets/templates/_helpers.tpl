{{/* Define dependencies for SecretStore */}}
{{- define "secretstore.annotations" -}}
helm.sh/hook: pre-install,pre-upgrade
helm.sh/hook-weight: "-5"
{{- end -}}

{{/* Define dependencies for ExternalSecret */}}
{{- define "externalsecret.annotations" -}}
helm.sh/hook: post-install,post-upgrade
helm.sh/hook-weight: "5"
{{- end -}}