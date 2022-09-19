const pug = require('pug')


const resume = pug.compileFile('templates/index.pug')

console.log(resume({
  name: 'Spike'
}))

