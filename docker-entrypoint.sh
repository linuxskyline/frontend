#!/bin/sh
cat << EOF > /usr/share/nginx/html/config.json
{
    "api_root": "${API_ROOT}"
}
EOF

# Run default nginx entrypoint
nginx -g 'daemon off;'