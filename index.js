const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('node_modules'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

/*app.get('/', (req, res) => {
	app.use('index')
  //res.send('Hello World!')
})*/

app.get('/', function (req, res) {
	res.render('home')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})