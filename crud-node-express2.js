/*
“API de productos con errores”
Tu compañero dejó este código para una API de productos. Tu tarea es detectar al menos 5 errores o malas prácticas, corregirlos y explicar por qué lo hiciste.
*/

const express = require('express');
const app = express();

app.use(express.json());

let productos = [
	{ id: 1, name: 'Laptop', price: 1200 },
	{ id: 2, name: 'Mouse', price: 25 },
];

// Crear producto
app.post('/productos', (req, res) => {
	const { name, price } = req.body;
	if (!name && !price)
		return res.status(400).json({ error: 'Name and price are required' });
	const newProduct = { id: productos.length + 1, name, price };
	productos.push(newProduct);
	res.status(201).json(newProduct);
});

// Obtener todos
app.get('/productos', (req, res) => {
	res.json(productos);
});

// Obtener uno
app.get('/productos/:id', (req, res) => {
	const producto = productos.find((p) => p.id === req.params.id);
	if (!producto) return res.status(404).json({ error: 'Product not found' });
	res.json(producto);
});

// Actualizar
app.put('/productos/:id', (req, res) => {
	const producto = productos.find((p) => p.id === req.params.id);
	if (!producto) return res.status(404).json({ error: 'Product not found' });

	const { name, price } = req.body;
	if (!name && !price)
		return res.status(400).json({ error: 'Name and price are required' });

	if (name) producto.nombre = name;
	if (price) producto.precio = price;
	res.json(producto);
});

// Eliminar
app.delete('/productos/:id', (req, res) => {
	productos = productos.filter((p) => p.id !== req.params.id);
	res.status(204).send();
});

app.listen(3000);
