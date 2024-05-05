const express = require('express') 
const app = express()
const port = 3000
const router = express.Router()

router.post('/login', (req, res) => {
	res.send("{}")
})

router.post('/logout', (req, res) => {
	res.send("{}")
})

router.post('/signup', (req, res) => {
	res.send("{}")
})

router.get('/messages', (req, res) => {
	res.send("{}")
})

router.post('/sendmsg', (req, res) => {
	res.send("{}")
})

router.delete('/deletemsg', (req, res) => {
	res.send("{}")
})

router.post('/editmsg', (req, res) => {
	res.send("{}")
})

router.get("/chats", (req, res) => {
	res.send("{}")
})

app.use('/', router)

app.listen(port, () => {
	console.log(`Running on port ${port}`)
})
