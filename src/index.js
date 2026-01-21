const express = require('express');
const {serviceConfig , logger} = require("./config")
const helmet = require('helmet')
const v1 = require("./routes")
const app = express();

// prevent various attacks
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({extended : true}));


app.use("/api" , v1)



app.listen(serviceConfig.PORT , ()=>{
        console.log(`server is running at port ${serviceConfig.PORT}`);
})
