#!/bin/sh
cat << EOF > /usr/share/nginx/html/config.json
{
    "api_root": "${API_ROOT}",
    "token": "${API_TOKEN}"
}
EOF

# Run default nginx entrypoint
nginx -g 'daemon off;'
