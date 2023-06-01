function ConvertHandler() {
  const unitInfo = {
    'gal': {
      convertUnit: 'L',
      spelledOut: 'gallons',
      convertNum: 3.78541,
    },
    'L': {
      convertUnit: 'gal',
      spelledOut: 'liters',
      convertNum: 1/3.78541,
    },
    'mi': {
      convertUnit: 'km',
      spelledOut: 'miles',
      convertNum: 1.60934,
    },
    'km': {
      convertUnit: 'mi',
      spelledOut: 'kilometers',
      convertNum: 1/1.60934,
    },
    'lbs': {
      convertUnit: 'kg',
      spelledOut: 'pounds',
      convertNum: 0.453592,
    },
    'kg': {
      convertUnit: 'lbs',
      spelledOut: 'kilograms',
      convertNum: 1/0.453592,
    },
  }

  
  this.getNum = function(input) {
    let index
    if(/[a-z]/i.test(input)){
      index = input.match(/[a-z]/i).index
    } else {
      index = input.length
    }

    if (index === 0) {return 1};
    let numString = input.slice(0, index)
    if((numString.match(/\//g)||[]).length >= 2){
      if(unitInfo[input.slice(index)] === undefined || index === null){
        return'invalid number and unit'
      }
      return 'invalid number'
    }
    
    let result = eval(numString);
    
    return result;
  };
  
  this.getUnit = function(input) {
    let index
    if(/[a-z]/i.test(input)){
      index = input.match(/[a-z]/i).index
    } else {
      return'invalid unit'
    }
    let result = input.slice(index);
    
    if(result !== 'L' && result != 'l'){
      result = result.toLowerCase()
    } else {
      result = result.toUpperCase()
    }
    
    if (unitInfo[result] === undefined) {
      return 'invalid unit'
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = unitInfo[initUnit].convertUnit;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = unitInfo[unit].spelledOut;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let result = Math.round(initNum * unitInfo[initUnit].convertNum * 100000) / 100000;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
