const express = require('express')

const app = express()

const port = 3000

function getTest (request, response) {
  response.send('test!')
}

app.get(
  '/test',
  getTest
)

const getHomepage = (request, response) => {
  response.send(`
    <html>
      <head>
        <title>Homepage</title>
      </head>
      <body>
        <h1>Welcome</h1>

        <marquee>to our fun webpage!!!!!!!!</marquee>
      </body>
    </html>
  `)
}

app.get(
  '/',
  getHomepage
)

app.get(
  '/greeting/:user',
  function (request, response) {
    const message = `Welcome ${request.params.user}`

    response.send(message)
  }
)

app.listen(
  port,
  () => {
    console.log(`Server listening :${port}`)
  }
)
