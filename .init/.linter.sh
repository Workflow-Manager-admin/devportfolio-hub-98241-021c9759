#!/bin/bash
cd /home/kavia/workspace/code-generation/devportfolio-hub-98241-021c9759/portfolio_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

