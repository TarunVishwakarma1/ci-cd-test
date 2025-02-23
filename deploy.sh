cd ci-cd-test
git pull
bun install
bun run build
pm2 restart all

echo "Deployed successfully"