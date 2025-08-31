// server.mjs
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [];
let nextId = 1;

app.get('/health', (_req, res) => res.send('ok'));

app.post('/api/users', (req, res) => {
  const user = { id: nextId++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
