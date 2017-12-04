const express = require('express')
const app = express()
const bodyParser= require('body-parser')


let PORT = process.env.PORT || 4000

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.listen(PORT)
console.log('Listening on ' + PORT)

app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});