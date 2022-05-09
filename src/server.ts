import express from 'express'

const app = express();
const port = 3333;

app.get('/users', (req,res) => {
    return( res.send('Alô, moleque!'))
})

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}/`)
});
