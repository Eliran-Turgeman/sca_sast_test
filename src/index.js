const _ = require('lodash');
const mongoose = require('mongoose');
const marked = require('marked');
const $ = require('jquery');

function testFunction() {
    // Dummy function using the vulnerable packages
    console.log(_.join(['Hello', 'world'], ' '));
    console.log(marked('# Marked in Node.js'));
    console.log($('body').text());
}

testFunction();
