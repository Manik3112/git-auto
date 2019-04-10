echo "Pulling from Master" 

git pull origin master

echo "Pulled successfully from master"

npm i

echo "Installing New Modules if Any"

echo "Restarting server..."

forever stopall
forever start app.js

echo "Server restarted Successfully"
