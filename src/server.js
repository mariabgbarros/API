const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();
//Cors Configuration - Start
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
        res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
        )
        return res.status(200).json({})
    }
    next()
})
  //Cors Configuration - End
app.use(express.json())
app.use(routes);


const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log("Servidor rodando na porta "+port);
});

