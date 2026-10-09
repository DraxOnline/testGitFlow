import express from 'express' 

const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World\n This is a test for Git Flow');
  });

app.get('/health', (req, res) => {
  res.json({ 
    status: 'UP',
    timestamp: new Date().toISOString()});
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
} )