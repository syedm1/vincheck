const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const helmet = require('helmet')

const port = parseInt(process.env.PORT, 10) || 3100
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(helmet())
  server.use(compression())

  const staticPath = path.join(__dirname, '../static')
  server.use('/static', express.static(staticPath, {
    maxAge: '30d',
    immutable: true
  }))

  server.use("/diagnostic",(req, res)=>{
    res.send("OK")
  })

  server.use("/callVinCheck",(req, res)=>{
    const MAX_VIN_LENGTH = 18
    if(req.query?.vinNumber && req.query?.vinNumber?.length < MAX_VIN_LENGTH){
      res.send("good vin")
    }

    res.send("check called")
  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  startServer()

  function startServer () {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})
