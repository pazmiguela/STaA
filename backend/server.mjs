import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🎉 Server is running, Pam!');
});

app.get('/api/users', (req, res) => {
  res.send('🎉 Server is running, Pam!');
});

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
