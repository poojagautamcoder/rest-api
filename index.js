import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use('/users', userRoutes)
app.get('/',(req, res) =>{
    console.log('[/test]')
    res.send('hello from the homepage')
})

app.listen(PORT, ()=>{console.log(`server is getting started on port http://localhost:${PORT}`)})