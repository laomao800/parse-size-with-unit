'use strict'

var CSS_UNITS = [
  'em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc',
  'ch','rem','vh','vw','vmin','vmax'
]

module.exports = function(value, defaultUnit) {
  var validReg = new RegExp('^-?\\d+(.\\d+)?(' + CSS_UNITS.join('|') + ')$', 'i')
  var unit = 'px'
  if (defaultUnit) {
    unit = CSS_UNITS.indexOf(defaultUnit) > -1
    ? defaultUnit
    : 'px'
  }
  if (validReg.test(value)) {
    return value
  } else if (typeof value === 'number') {
    return value + unit
  }
  var num = parseInt(value, 10)
  return !isNaN(num) ? num + unit : null
}
