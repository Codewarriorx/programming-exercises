import test from 'ava';
import candy from './index.js';

test('Test Case 1', t => {
    let answer = candy([1,0,2]);
    t.is(answer, 5);
});

test('Test Case 2', t => {
    let answer = candy([1,2,2]);
    t.is(answer, 4);
});

test('Test Case 3', t => {
    let answer = candy([1,2,87,87,87,2,1]);
    t.is(answer, 13);
});


test('Test Case 4', t => {
    let answer = candy([1,3,4,5,2]);
    t.is(answer, 11);
});

test('Test Case 5', t => {
    let answer = candy([1,3,2,2,1]);
    t.is(answer, 7);
});

test('Test Case 6', t => {
    let answer = candy([1,6,10,8,7,3,2]);
    t.is(answer, 18);
});