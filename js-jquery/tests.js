test("Object Literal Test", function () {
expect(2);
var expected = 'Vehicle: 2000 Ford Fusion';
var actual = car1.getInfo();
equal(actual, expected, 'Expected value: ' + expected +
' Actual value: ' + actual);
var expected = 'Vehicle: 2010 BMW Z4';
var actual = car2.getInfo();
equal(actual, expected, 'Expected value: ' + expected +
' Actual value: ' + actual);
});