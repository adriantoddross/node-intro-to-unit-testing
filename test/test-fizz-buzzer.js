'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz if num % 3 === 0', function (){
    const normalCases = [
      {a: 12, expected: 'fizz'},
      {a: 9, expected: 'fizz'},
      {a: 36, expected: 'fizz'}
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
});

describe('fizzBuzzer', function() {
  it('should return buzz if num % 5 === 0', function (){
    const normalCases = [
      {a: 25, expected: 'buzz'},
      {a: 35, expected: 'buzz'},
      {a: 40, expected: 'buzz'}
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
});

describe('fizzBuzzer', function() {
  it('should return fizz-buzz if num % 15 === 0', function (){
    const normalCases = [
      {a: 30, expected: 'fizz-buzz'},
      {a: 45, expected: 'fizz-buzz'},
      {a: 60, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
});

describe('fizzBuzzer', function() {
  it('only accepts numbers as an input', function (){
    const edgeCases = [
      {a: 'PIZZA'},
      {a: undefined},
      {a: false}
    ];

    edgeCases.forEach(function(input){
      expect(function () {
        fizzBuzzer(input.a);
      }).to.throw(Error);
    });
  });
});