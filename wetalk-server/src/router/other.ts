var express = require('express')
const request = require('request')

const mRouter: any = express.Router()

// const Tag = Models.Tag

mRouter.get('/weather', (req: any, res: any, next: any) => {
  let url: string = 'https://www.apiopen.top/weatherApi'
  request.get({url, qs: req.query}, (err: any, httpResponse: any, body: any) => {
    res.send(body)
  })
})

mRouter.get('/musics', (req: any, res: any, next: any) => {
  let url: string = 'https://api.apiopen.top/searchMusic'
  request.get({url, qs: req.query}, (err: any, httpResponse: any, body: any) => {
    res.send(body)
  })
})

module.exports = mRouter