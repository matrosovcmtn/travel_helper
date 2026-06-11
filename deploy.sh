#!/usr/bin/env bash
# Сборка и публикация на GitHub Pages (ветка gh-pages).
# Не требует scope `workflow` у токена — пушим только статику из dist/.
set -e

REPO_URL="https://github.com/matrosovcmtn/travel_helper.git"
BRANCH="gh-pages"

npm run build

cd dist
rm -rf .git                     # Vite сохраняет .git при очистке dist — убираем, чтобы init был чистым
touch .nojekyll                 # отключить Jekyll, отдавать файлы как есть
git init -q
git checkout -q -b "$BRANCH"
git add -A
git -c user.name="Daniil Matrosov" -c user.email="danilmatr05062003@gmail.com" \
    commit -q -m "Deploy $(date -u +%FT%TZ)"
git push -q -f "$REPO_URL" "$BRANCH"
cd ..
rm -rf dist/.git

echo "✓ Опубликовано в ветку $BRANCH"
