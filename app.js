const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this on each deploy to verify new version
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
