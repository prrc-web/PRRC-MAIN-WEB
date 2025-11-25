#!/usr/bin/env bash
set -euo pipefail
PROJECT_DIR=$(cd "$(dirname "$0")/.." && pwd)
NEXT_DIRS=("$PROJECT_DIR/prrc-next-app" "$PROJECT_DIR/payload-backend")
for NEXT_DIR in "${NEXT_DIRS[@]}"; do
	if [ -d "${NEXT_DIR}" ]; then
		echo "Installing devDependencies and preparing husky in ${NEXT_DIR}..."
		cd "${NEXT_DIR}"
		npm install
		npm run prepare || true
		echo "Husky (pre-commit hooks) prepared for ${NEXT_DIR}."
	else
		echo "Skipping ${NEXT_DIR} (not found)."
	fi
done
