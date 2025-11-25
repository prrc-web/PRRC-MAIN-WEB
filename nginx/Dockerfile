FROM nginx:alpine

# Copy nginx config at build time to avoid macOS mount/deadlock issues
COPY nginx.conf /etc/nginx/nginx.conf

# Default command
CMD ["nginx", "-g", "daemon off;"]
