/*
“Gestión de usuarios con errores sutiles”
Tu equipo dejó una API para gestionar usuarios, pero hay errores de lógica, duplicación de código y falta de validaciones. Tu tarea es detectar y corregir al menos 5 problemas, explicando cada decisión como si estuvieras en una entrevista técnica.
*/

const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
	{ id: 1, nombre: 'Ana', email: 'ana@mail.com' },
	{ id: 2, nombre: 'Luis', email: 'luis@mail.com' },
];

// Crear usuario
app.post('/usuarios', (req, res) => {
	const { nombre, email } = req.body;
	const nuevo = { id: usuarios.length + 1, nombre, email };
	usuarios.push(nuevo);
	res.send('Usuario creado');
});

// Obtener todos
app.get('/usuarios', (req, res) => {
	res.send(usuarios);
});

// Obtener uno
app.get('/usuarios/:id', (req, res) => {
	const id = req.params.id;
	const usuario = usuarios.find((u) => u.id == id);
	res.send(usuario);
});

// Eliminar
app.delete('/usuarios/:id', (req, res) => {
	const id = req.params.id;
	usuarios = usuarios.filter((u) => u.id != id);
	res.send('Usuario eliminado');
});

app.listen(3000);
