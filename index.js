var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config()

var Octokit = require('@octokit/rest')

const github = new Octokit({
    auth: process.env.GITHUB_TOKEN
})
const port = process.env.PORT || 6000
http.createServer(app).listen(port, function() {
  console.log('Listening on ', port);
});

app.use(bodyParser());

app.post('/', function(req, res) {
  console.dir(req.body);

  var commentText = "This issue was moved to " + req.body.to_pipeline_name + " on ZenHub."

    github.issues.createComment({
        owner: req.body.organization,
        repo: req.body.repo,
        issue_number: req.body.issue_number,
        body: commentText
    }).then(({ data }) => {
        console.log(data)
    }).catch((err) => {
        console.log("ERROR:", err)
    })

});