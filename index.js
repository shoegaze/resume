const pug = require('pug')
const fs = require('node:fs')
const path = require('node:path')


const DIR_TEMPLATES = 'templates'
const DIR_DIST = 'dist'

function buildResume() {
  try {
    // Create `dist` dir if it does not exist
    if (!fs.existsSync(DIR_DIST)) {
      fs.mkdirSync(DIR_DIST)
    }

    const fd = fs.openSync(path.join(DIR_DIST, 'resume.html'), 'w')
    const resume = pug.compileFile(path.join(DIR_TEMPLATES, 'index.pug'))

    fs.writeSync(fd, resume({
      name: 'Spike'
    }))
  }
  catch (err) {
    console.error(err)
  }
}

buildResume()
