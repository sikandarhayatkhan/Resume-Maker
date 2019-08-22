# Change Log for npm package 'pug-pdf'

## 0.1.1 2017-06-05

* Minor fixes to command-line script and test script.

## 0.1.0 2017-06-04

* Now traps template rendering errors so that a PDF file will always be created.
* Removed spurious use of 'setTimeout' within the Phantom control script.
* Simplified test/index.js and removed development dependency on Mocha.
* Switched from 'through' to 'through2'.

## 0.0.5 2017-05-30

Forked from jade-pdf2, converting all references 
to 'Jade' to read 'Pug'.
