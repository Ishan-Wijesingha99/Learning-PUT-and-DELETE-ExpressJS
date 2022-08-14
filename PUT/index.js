
const express = require('express')
const app = express()



// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))



// GET request where we send something in the response body
app.get('/api', (req, res) => {
    
    // in Insomnia, we will send a GET request with a JSON object as the body, to prove that we do, log req.body to the console
    // we will send...
    // {
    //     "firstName": "Ishan",
    //     "age": 21
    // }
    console.log(req.body)

    // always make sure you end the request
    res.status(200).send('GET request done')
})



// PUT request
// PUT request is for changing data
// the first step is to find the specific thing you want to update, in this case, it is the firstName property in in req.body
// the second step is to replace it with something else, that's as simple as redefining it using javaScript, req.body.name = 'Jimmy'
app.put('/api', (req, res) => {

    // the body we send for this PUT request will be the same as for the GET request above
    // we will send...
    // {
    //     "firstName": "Ishan",
    //     "age": 21
    // }

    // this is how you update the value, pretty simple
    req.body.firstName = 'Jimmy'

    // what will be returned is...
    // {
    // 	"firstName": "Jimmy",
    // 	"age": 21
    // }
    res.status(200).json(req.body)
})



// listening on port
app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})