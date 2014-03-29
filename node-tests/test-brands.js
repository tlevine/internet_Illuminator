var test = require('tap').test;
var brands = require('../data/brands.js')

test('replace', function (t) {
  t.plan(1)
  var observed = brands.replace('hsaoehoeu aoe  oeht Lightlife tnoaetnsoeu')
  var expected = 'hsaoehoeu aoe  oeht Lightlife (ConAgra) tnoaetnsoeu')
  t.equal(chunk, '0123456789')
})
