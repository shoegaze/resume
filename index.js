const fs = require('node:fs')
const path = require('node:path')
const pug = require('pug')


const DIR_TEMPLATES = path.join(__dirname, 'templates')
const DIR_DIST = path.join(__dirname, 'dist')


function buildResume() {
  function makeDist() {
    if (!fs.existsSync(DIR_DIST)) {
      fs.mkdirSync(DIR_DIST)
    }
  }

  function build() {
    const fd = fs.openSync(path.join(DIR_DIST, 'resume.html'), 'w')
    const resume = pug.compileFile(
      path.join(DIR_TEMPLATES, 'index.pug'),
      {
        pretty: true
      })

    const output = resume({
      name: 'Spike'
    })

    return [fd, output]
  }

  function writeOutput(fd, output) {
    fs.writeSync(fd, output)
  }

  try {
    makeDist();
    const [fd, output] = build();
    writeOutput(fd, output);
  }
  catch (err) {
    console.error(err)
  }
}

buildResume()
