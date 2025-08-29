/*
CRUD con errores
- Lee el código.
- Señala al menos 5 errores o malas prácticas.
- Propón la versión corregida.
- Justifica brevemente tus cambios
*/

const express = require('express');
const app = express();

app.use(express.json());

// CREATE
app.post('/user', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ error: 'Name required' });
	}
	const newUser = { id: '123', name };
	users.push(newUser);
	res.status(201).json(newUser);
});

// READ ALL
app.get('/user', (req, res) => {
	res.json(users);
});

// READ ONE
app.get('/user:id', (req, res) => {
	const user = users.find((user) => user.id === req.params.id);
	if (!user) return res.status(404).json({ error: 'User not found' });
	res.json(user);
});

// UPDATE
app.patch('/user:id', (req, res) => {
	const user = users.find((user) => user.id === req.params.id);
	if (!user) return res.status(404).json({ error: 'User not found' });

	user.name = req.body.name || user.name;
	res.json(user);
});

// DELETE
app.delete('/user:id', (req, res) => {
	users = users.filter((user) => user.id !== req.params.id);
	res.status(204).send();
});

app.listen(3000);
