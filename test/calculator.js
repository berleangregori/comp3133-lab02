const assert = require('assert');
const calculator = require('../app/calculator');

describe('Validating Calculator Functions', () => {

    it('should return 7 when adding 5 + 2 PASS', () => {
        assert.equal(calculator.add(5, 2), 7); 
    });

    it('should return 8 when adding 5 + 2 FAIL', () => {
        assert.equal(calculator.add(5, 2), 8); 
    });

    it('should return 3 when subtracting 5 - 2 PASS', () => {
        assert.equal(calculator.sub(5, 2), 3); 
    });

    it('should return 5 when subtracting 5 - 2 FAIL', () => {
        assert.equal(calculator.sub(5, 2), 5); 
    });

    it('should return 10 when multiplying 5 * 2 PASS', () => {
        assert.equal(calculator.mul(5, 2), 10); 
    });

    it('should return 12 when multiplying 5 * 2 FAIL', () => {
        assert.equal(calculator.mul(5, 2), 12); 
    });

    it('should return 5 when dividing 10 / 2 PASS', () => {
        assert.equal(calculator.div(10, 2), 5); 
    });

    it('should return 2 when dividing 10 / 2 FAIL', () => {
        assert.equal(calculator.div(10, 2), 2); 
    });
});
