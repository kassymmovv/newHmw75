const express = require('express');
const app = express();
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;
const port = 8000;

app.use(express.json());
app.use(cors());
app.post('/encode',(req,res) => {

    console.log(req.body);
const fle = {
    "message":Vigenere.Cipher(req.body.password).crypt(req.body.message)
};
    res.send(fle)
});
app.post('/decode',(req,res) => {
    console.log(req.body);
    const fle = {
        "message":Vigenere.Decipher(req.body.password).crypt(req.body.message)
    };
    res.send(fle)
});

app.listen(port,()=> {
    console.log(`Server start on ${port} port`)
});