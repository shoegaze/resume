const fs = require('node:fs')
const path = require('node:path')
const pug = require('pug')


const DIR_TEMPLATES = path.join(__dirname, 'templates')
const DIR_DIST = path.join(__dirname, 'dist')


function buildResume() {
  try {
    // Create `dist` dir if it does not exist
    if (!fs.existsSync(DIR_DIST)) {
      fs.mkdirSync(DIR_DIST)
    }

    // Build resume
    const fd = fs.openSync(path.join(DIR_DIST, 'resume.html'), 'w')
    const resume = pug.compileFile(
      path.join(DIR_TEMPLATES, 'index.pug'),
      {
        pretty: true
      })

    fs.writeSync(fd, resume({
      name: 'Spike'
    }))
  }
  catch (err) {
    console.error(err)
  }
}

buildResume()
