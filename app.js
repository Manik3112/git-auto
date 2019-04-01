var express = require("express");
var app = express();
var childProcess = require('child_process');
var githubUsername = 'manik3112'

app.get('/', function (req, res) {
  res.send('Welcome Abroad')
})

app.post("/webhooks/github", function (req, res) {
    var sender = req.body.sender;
    var branch = req.body.ref;

    if(branch.indexOf('master') > -1 && sender.login === githubUsername){
        deploy(res);
    }
})
function deploy(res){
    childProcess.exec(`cd ${process.cwd()} && ./deploy.sh`, function(err, stdout, stderr){
        if (err) {
         console.error(err);
         return res.send(500);
        }
        res.send(200);
      });
}
app.listen(8081, ()=>{
  console.log('listen')
})