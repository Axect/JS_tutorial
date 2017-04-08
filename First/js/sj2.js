/**
 * Created by edeft on 2017-04-08.
 */
var ncat;
var ndog;
var total;

ncat = 10;
ndog = 20;
total = ndog + ncat;

var elc = document.getElementById('cat');
var eld = document.getElementById('dog');
var elt = document.getElementById('total');

elc.textContent = 'The number of cats is ' + ncat;
eld.textContent = 'The number of dogs is ' + ndog;
elt.textContent = 'Total number is ' + total;