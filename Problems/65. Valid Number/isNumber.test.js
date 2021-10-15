const isNumber = require('./isNumber');

test('check isNumber', () => {

    //["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
    expect(isNumber("2")).toBe(true);
    expect(isNumber("0089")).toBe(true);
    expect(isNumber("-0.1")).toBe(true);
    expect(isNumber("+3.14")).toBe(true);
    expect(isNumber("4.")).toBe(true);
    expect(isNumber("-.9")).toBe(true);
    expect(isNumber("2e10")).toBe(true);
    expect(isNumber("-90E3")).toBe(true);
    expect(isNumber("3e+7")).toBe(true);
    expect(isNumber("+6e-1")).toBe(true);
    expect(isNumber("53.5e93")).toBe(true);
    expect(isNumber("-123.456e789")).toBe(true);

    //["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].
    expect(isNumber("abc")).toBe(false);
    expect(isNumber("1a")).toBe(false);
    expect(isNumber("1e")).toBe(false);
    expect(isNumber("e3")).toBe(false);
    expect(isNumber("99e2.5")).toBe(false);
    expect(isNumber("--6")).toBe(false);
    expect(isNumber("-+3")).toBe(false);
    expect(isNumber("95a54e53")).toBe(false);
});