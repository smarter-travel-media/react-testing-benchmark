import {expect} from "chai";

describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
   var sum = require('../src/add');
   expect(sum(1, 2)).to.equal(3);
 });
});
