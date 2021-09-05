const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp');

app.use('/', express.static(path.join(__dirname, '/template')))

app.use(bodyParser.json())

let port = process.env.PORT || 8080;

app.post('/login-with-facebook',async (req,res) => {
    const {accessToker, userID } = req.body

    const response = await fetch('https://www.facebook.com/v11.0/dialog/oauth?app_id=3757381837820315&auth_type=&cbt=1630773886943&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fvers')
    
    const json = await response.json()

    if(json.userID === userID){
        // 
    }
    else{
        //impersonate some 
        //just give the warning 
    }
})

app.listen(port, _ => console.log('listening'))