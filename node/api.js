const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, ()=>{
    console.log('Start Server : localhost:3001');
});

console.log(uuidAPIKey.create());

//DataBase 에서 관리해야하지만 일단 변수로 선헌
const key = {
    apiKey: 'DY7CEQD-8CW4ZG8-HEDCMMQ-AN9VDN2',
    uuid: '6f8ec75d-4338-4fc1-8b9a-ca525553b6d4'
}

// : = 어떤 값이든 들어갈 수 있다.
app.get('/api/sales/:apikey/:year', async (req, res) => {
    let {
        apikey,
        year
    } = req.params;
    
    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid.');
    }
    else {
        if(year == '2019') {
            let data = [{
                product: "반도체",
                amount: "3928840000"
            },
            {
                product: "냉장고",
                amount: "1928840000"
            }
            ]
            res.send(data);
        }
        else if( year == '2020'){
            let data = [{
                product: "반도체",
                amount: "2928840000"
            },
            {
                product: "냉장고",
                amount: "928840000"
            }
            ]
            res.send(data);
        }
    }
})