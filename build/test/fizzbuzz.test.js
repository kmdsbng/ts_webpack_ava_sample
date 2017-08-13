"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("fizzbuzz");
const ava_1 = require("ava");
ava_1.default("FizzBuzz test", (t) => {
    t.is(fizzbuzz_1.fizzbuzz(2), "1 2 ");
    t.is(fizzbuzz_1.fizzbuzz(3), "1 2 Fizz ");
    t.is(fizzbuzz_1.fizzbuzz(15), "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz ");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml6emJ1enoudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL3Rlc3QvZml6emJ1enoudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrQztBQUNsQyw2QkFBdUI7QUFFdkIsYUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsNkRBQTZELENBQUMsQ0FBQztBQUNwRixDQUFDLENBQUMsQ0FBQyJ9