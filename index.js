const express = require('express') //express 모듈을 가져온다
const app = express() //새로운 익스프레스 앱을 만듦
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://roto:abcd1234@cluster0.sosu7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))