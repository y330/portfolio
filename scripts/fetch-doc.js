//author: Russel Goldenberg, The Pudding
//https://github.com/the-pudding/starter/blob/master/scripts/fetch-doc.js

import fs from 'fs'
import archieml from 'archieml'
import got from 'got'
import CWD from process.cwd()
import CONFIG_PATH from `${CWD}/config.json`
import CONFIG from JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
import { doc } from CONFIG.google

const makeRequest = (opt, cb) => {
  const url = `https://docs.google.com/document/d/${opt.id}/export?format=txt`
  got(url)
    .then(response => {
      const parsed = archieml.load(response.body)
      const str = JSON.stringify(parsed)
      const file = `${CWD}/${opt.filepath || 'data/doc.json'}`
      fs.writeFile(file, str, err => {
        if (err) console.error(err)
        cb()
      })
    })
    .catch(error => {
      console.log(error)
    })
}
function init() {
  let i = 0
  const next = () => {
    const d = doc[i]
    if (d.id)
      makeRequest(d, () => {
        i += 1
        if (i < doc.length) next()
        else process.exit()
      })
  }

  next()
}

export const init = () => {
  let i = 0
  const next = () => {
    const d = doc[i]
    if (d.id)
      makeRequest(d, () => {
        i += 1
        if (i < doc.length) next()
        else process.exit()
      })
  }

  next()
}


init()
