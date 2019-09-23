const parseSizeWithUnit = require('./')

describe('Default unit', () => {
  it('Default "px"', () => {
    expect(parseSizeWithUnit(50)).toBe('50px')
  })
  it('Specify default unit', () => {
    expect(parseSizeWithUnit(50, 'em')).toBe('50em')
  })
  it('Specify invalid unit', () => {
    expect(parseSizeWithUnit(50, 'xxxx')).toBe('50px')
  })
})

describe('All valid unit', () => {
  it('"50" -> "50px"', () => {
    expect(parseSizeWithUnit('50')).toBe('50px')
  })

  it('"50px" -> "50px"', () => {
    expect(parseSizeWithUnit('50px')).toBe('50px')
  })

  it('"50%" -> "50%"', () => {
    expect(parseSizeWithUnit('50%')).toBe('50%')
  })

  it('"50.5px" -> "50.5px"', () => {
    expect(parseSizeWithUnit('50.5px')).toBe('50.5px')
  })

  it('"50.5%" -> "50.5%"', () => {
    expect(parseSizeWithUnit('50.5%')).toBe('50.5%')
  })
})

describe('Invalid parse', () => {
  it('"a" -> null', () => {
    expect(parseSizeWithUnit('a')).toBe(null)
  })
  it('[] -> null', () => {
    expect(parseSizeWithUnit([])).toBe(null)
  })
  it('{} -> null', () => {
    expect(parseSizeWithUnit({})).toBe(null)
  })
})
