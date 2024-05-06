const express = require('express') 
const app = express()
app.use(express.json())
const port = 3000
const router = express.Router()

async function digestMessage(message) {
	const msgUint8 = new TextEncoder().encode(message);
	const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray
	  .map((b) => b.toString(16).padStart(2, "0"))
	  .join("");
	return hashHex;
  }

let active_users = {}

router.post('/login', async function(req, res) {
	let required_attrs = ["name", "password"]
	for(let i = 0; i < required_attrs.length; i++)
	{
		if(!Object.hasOwn(req.body, required_attrs[i]))
		{
			res.status(400).send('Bad Request')
			console.log("dict")
			return
		}
	}
	if(Object.keys(req.body).length != required_attrs.length)
	{
		res.status(400).send('Bad Request')
		console.log("dict")
		return
	}
	let user_logged = await digestMessage(req.body["name"] + Date.now().toString())
	console.log({user_logged: user_logged})
	return res.status(200).json({user_logged: user_logged})
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