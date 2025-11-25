#!/usr/bin/env bash
# remove Next.js build directory and .next artifacts
# MacOS/Unix shell script for developer convenience
set -euo pipefail
PROJECT_DIR=$(cd "$(dirname "$0")/.." && pwd)
NEXT_DIR="$PROJECT_DIR/prrc-next-app"
if [ -d "$NEXT_DIR/.next" ]; then
  echo "Removing $NEXT_DIR/.next..."
  rm -rf "$NEXT_DIR/.next"
  echo "Removed .next."
else
  echo ".next does not exist; nothing to remove."
fi
