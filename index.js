
const express = require('express')
const app = express()

const JSONArray = require('./file.json')


// PUT request
// PUT request is for changing data
// usually, we use route params, so if we have an entire JSON file, if we want to change just the part of that JSON file where id: 2, then we specify 2 as /:id



// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// GET request where we send something in the response body
app.get('/api', (req, res) => {
    
    // in Insomnia, we will send a GET request with a JSON object as the body, to prove that we do, log req.body to the console
    // we will send...
    // {
    //     "name": "Ishan",
    //     "age": 21
    // }
    console.log(req.body)

    res.status(200).send('GET request done')

})


// PUT request
// the first step is to find the specific thing you want to update, in this case, that is located in req.body
// the second step is to replace it with something else, use res.body for that
// if you are updating something, you are sending something new, that new information will be located in res.body
app.put('/api', (req, res) => {

    // we are trying to update the name, so we need to get that out of the body
    const {name} = req.body
    // console.log(name)

    res.status(200).send('PUT request done')

})








// listening on port
app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

