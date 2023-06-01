const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('convertHandler should correctly read a whole number input.', function() {
    assert.strictEqual(convertHandler.getNum('4gal'), 4);
  });
  test('convertHandler should correctly read a decimal number input.', function() {
    assert.strictEqual(convertHandler.getNum('4.1gal'), 4.1);
  });
  test('convertHandler should correctly read a fractional input.', function() {
    assert.strictEqual(convertHandler.getNum('4/5gal'), .8);
  });
  test('convertHandler should correctly read a fractional input with a decimal.', function() {
    assert.strictEqual(convertHandler.getNum('4.5/5gal'), .9);
  });
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', function() {
    assert.strictEqual(convertHandler.getNum('4/5/5gal'), 'invalid number');
    assert.strictEqual(convertHandler.getNum('4/5/5'), 'invalid number and unit')
  });
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function() {
    assert.strictEqual(convertHandler.getNum('gal'), 1);
  });
  test('convertHandler should correctly read each valid input unit.', function() {
    assert.strictEqual(convertHandler.getUnit('4.1gal'), 'gal');
    assert.strictEqual(convertHandler.getUnit('4.1L'), 'L');
    assert.strictEqual(convertHandler.getUnit('4.1mi'), 'mi');
    assert.strictEqual(convertHandler.getUnit('4.1km'), 'km');
    assert.strictEqual(convertHandler.getUnit('4.1lbs'), 'lbs');
    assert.strictEqual(convertHandler.getUnit('4.1kg'), 'kg');
  });
  test('convertHandler should correctly return an error for an invalid input unit.', function() {
    assert.strictEqual(convertHandler.getUnit('4.1gak'), 'invalid unit')
  });
  test('convertHandler should return the correct return unit for each valid input unit.', function() {
    assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L');
    assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal');
    assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km');
    assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi');
    assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs');
  });
  test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', function() {
    assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons');
    assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters');
    assert.strictEqual(convertHandler.spellOutUnit('mi'), 'miles');
    assert.strictEqual(convertHandler.spellOutUnit('km'), 'kilometers');
    assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds');
    assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms');
  });
  test('convertHandler should correctly convert gal to L.', function() {
    assert.strictEqual(convertHandler.convert(4, 'gal'), 15.14164)
  });
  test('convertHandler should correctly convert L to gal.', function() {
    assert.strictEqual(convertHandler.convert(4, 'L'), 1.05669)
  });
  test('convertHandler should correctly convert mi to km.', function() {
    assert.strictEqual(convertHandler.convert(4, 'mi'), 6.43736)
  });
  test('convertHandler should correctly convert km to mi.', function() {
    assert.strictEqual(convertHandler.convert(4, 'km'), 2.48549)
  });
  test('convertHandler should correctly convert lbs to kg.', function() {
    assert.strictEqual(convertHandler.convert(4, 'lbs'), 1.81437)
  });
  test('convertHandler should correctly convert kg to lbs.', function() {
    assert.strictEqual(convertHandler.convert(4, 'kg'), 8.81850)
  });
});