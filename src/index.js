const express = require('express')  
require('./db/mongoose') // the file runs and db connection is established 
const userRouter = require('./routers/user') 
const taskRouter = require('./routers/task')

const app = express() 
const port = process.env.PORT 

app.use(express.json()) // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(userRouter) 
app.use(taskRouter)

app.listen(port, () => { 
    console.log('Server is up and running on port ' + port)
}) 

