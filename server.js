import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`\n Escutando na porta ${port}`);
  console.log('http://localhost:3001');
});
