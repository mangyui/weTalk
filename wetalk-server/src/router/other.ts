var express = require('express')
const request = require('request')
const fs = require('fs')
var multiparty = require('connect-multiparty')
var upload = multiparty()

const mRouter: any = express.Router()

// const Tag = Models.Tag

function setStatus (err: any, res: any, body: any) {
  if (err) {
    res.send({ rec: -1 })
  } else {
    let resBody = JSON.parse(body)
    resBody.rec = 0
    res.send(resBody)
  }
}

mRouter.get('/weather', (req: any, res: any, next: any) => {
  let url: string = 'https://www.apiopen.top/weatherApi'
  request.get({url, qs: req.query}, (err: any, httpResponse: any, body: any) => {
    setStatus(err, res, body)
  })
})

mRouter.get('/musics', (req: any, res: any, next: any) => {
  let url: string = 'https://api.apiopen.top/searchMusic'
  request.get({url, qs: req.query}, (err: any, httpResponse: any, body: any) => {
    setStatus(err, res, body)
  })
})

mRouter.get('/getGarbage', (req: any, res: any, next: any) => {
  let url: string = 'http://api.choviwu.top/garbage/getGarbage'
  request.get({url, qs: req.query}, (err: any, httpResponse: any, body: any) => {
    setStatus(err, res, body)
  })
})

mRouter.get('/recentGs', (req: any, res: any, next: any) => {
  let url: string = 'http://api.choviwu.top/garbage/recentGs'
  request.get({url, qs: req.query}, (err: any, httpResponse: any, body: any) => {
    setStatus(err, res, body)
  })
})

mRouter.post('/garbageImg', upload, (req: any, res: any, next: any) => {
  let url: string = 'http://api.choviwu.top/garbage/uploadFile'
  let formData = {
    file: fs.createReadStream(req.files.file.path),
  }
  request.post({url, formData: formData}, (err: any, httpResponse: any, body: any) => {
    setStatus(err, res, body)
  })
})


module.exports = mRouter