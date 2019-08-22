// test/index.js of module pug-pdf

'use strict';

const pugpdf = require('../'),
   fs = require('fs');

function helper(input, output, options) {

    console.log('Creating PDF file %s from PUG template %s...', output, input);

    const outputStream = fs.createWriteStream(output);

    outputStream.on('finish', () => {
        console.log('   ... %s complete', output);
    });

    const inputStream = fs.createReadStream(input);
    inputStream.on('error', (err) => {
        console.log('   ... error %s processing templage %s', err.message, input);
        console.error(err);
    });

    inputStream
          .pipe(pugpdf(options))
          .pipe(outputStream);

}

const dir = __dirname + '/';

const options = {
    // phantomPath -- use default
    cssPath: __dirname + '/test.css',
    paperFormat: 'A4',
    paperOrientation: 'portrait',
    paperBorder: '1cm',
    renderDelay: 500,
    locals: {},
};

helper(dir + 'simple.pug', dir + 'simple.pdf', options);

//helper(dir + 'complex.pug', dir + 'complex.pdf', options);

// Need to clone options object, otherwise changes to it 
// affect all calls to helper().
const options2 = Object.assign({}, options);
options2.paperOrientation = 'landscape';
//helper(dir + 'images.pug', dir + 'images.pdf', options2);
