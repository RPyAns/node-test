const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.json({'sound':'멍멍'})
})

app.get('/cat', function (req, res) {
  res.send('고양이')
})

app.get('/user/:id', function (req, res) {
  // const p = req.params
  // console.log(p)
  const q = req.query;
  console.log(q)


  res.json({'userid': q})
})

app.get('/post_t/:id', function (req, res) {
  const p = req.params;
  console.log(p);
  const b = req.body;
  console.log(b);

  res.json({'userid': b})
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params;
  console.log(name);


  res.json({'sound': name})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
