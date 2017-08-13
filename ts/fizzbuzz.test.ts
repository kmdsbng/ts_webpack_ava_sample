import {fizzbuzz} from "./fizzbuzz";
import test from 'ava';

test("FizzBuzz test", (t) =>{
  t.is(fizzbuzz(2), "1 2 ");
  t.is(fizzbuzz(3), "1 2 Fizz ");
  t.is(fizzbuzz(15), "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz ");
});

