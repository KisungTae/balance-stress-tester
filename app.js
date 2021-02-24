const axios = require('axios')

testSwipeLikeForDeadlock()

function testSwipeLikeForDeadlock() {
    var url = 'http://localhost:8080/swipe/click'
    var headers = { 'content-type': 'application/json' }
    var data1 = {
        "accountId": "67cfc7e3-9302-4a98-8870-b113baf81d73",
        "identityToken": "9495e4b6-1433-4d64-bed8-3760c9d3e6b2",
        "swipedId": "f8849505-878d-4d8a-8632-e284a1010529",
        "answers": { "1": true, "2": true, "10": false }
    }
    var data2 = {
        "accountId": "f8849505-878d-4d8a-8632-e284a1010529",
        "identityToken": "9495e4b6-1433-4d64-bed8-3760c9d3e6b2",
        "swipedId": "67cfc7e3-9302-4a98-8870-b113baf81d73",
        "answers": { "1": true, "2": true, "10": false }
    }

    var post1 = axios.post(url, JSON.stringify(data1), { headers: headers })
    var post2 = axios.post(url, JSON.stringify(data2), { headers: headers })

    axios.all([
        post1, post2
    ]).then(axios.spread((data1, data2) => {
        // output of req.
        console.log('data1', data1)
        console.log('data2', data2)
    })).catch(errors => {
        console.log(errors)
    });

}
