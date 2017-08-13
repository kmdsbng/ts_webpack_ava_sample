"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("./fizzbuzz");
const ava_1 = require("ava");
ava_1.default("FizzBuzz test", (t) => {
    t.is(fizzbuzz_1.fizzbuzz(2), "1 2 ");
    t.is(fizzbuzz_1.fizzbuzz(3), "1 2 Fizz ");
    t.is(fizzbuzz_1.fizzbuzz(15), "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz ");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml6emJ1enoudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2ZpenpidXp6LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFDcEMsNkJBQXVCO0FBRXZCLGFBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLDZEQUE2RCxDQUFDLENBQUM7QUFDcEYsQ0FBQyxDQUFDLENBQUMifQ==