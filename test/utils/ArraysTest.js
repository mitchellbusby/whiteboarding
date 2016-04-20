var ArraysModule = require('../../src/utils/arrays');

describe('arrays utility module', () => {
  it('should be defined', () => {
    expect(ArraysModule).to.not.be.undefined;
  });
  it('should be able to shuffle an array in-place, and all values should be accounted for', () => {
    let input = [ 2, 4, 6, 8, 10 ];
    let inputReference = [ 2, 4, 6, 8, 10 ];
    let output = ArraysModule.ShuffleArray(input);
    expect(output).to.equal(input);
    inputReference.forEach(inputItem => {
      expect(output.indexOf(inputItem)).to.not.equal(-1);
    });
  });
})
