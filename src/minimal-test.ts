import express from 'express';

const app = express();
const PORT = 3004;

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Minimal server working!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Minimal server running on port ${PORT}`);
});
