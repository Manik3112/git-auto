echo "Pulling from Master" 

git pull origin master

echo "Pulled successfully from master"

echo "Restarting server..."

pm2 restart app.js

echo "Server restarted Successfully"
