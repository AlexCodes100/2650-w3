function listApply(list, f) {
  for (let i = 0; i < list.length; i++) {
    list[i] = f(list[i]);
  }
}

function cadToUsd(cad) {
  return cad * 0.73;
}

function cadsToUsds(list) {
  listApply(list, cadToUsd);
  return list;
}

const isOdd = (x) => x % 2 === 1;

function every(list, f) {
  return list.reduce((accumulator, currentValue) => {
    return accumulator && f(currentValue);
  }, true);
}

function assert(value, message) {
  if (!value) {
    throw new Error(message || "Assertion failed");
  }
}

function assertEquals(actual, expected, message) {
  if (actual != expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

function assertListEquals(actual, expected, message) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error(message || `Expected both arguments to be arrays`);
  }
  if (actual.length !== expected.length) {
    throw new Error(
      message ||
        `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
    );
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        message ||
          `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
      );
    }
  }
}

let list1 = [1, 2, 3];
listApply(list1, (x) => x + 1);
assertListEquals(list1, [2, 3, 4], "First list test failed");

assertEquals(cadToUsd(1), 0.73, "cadToUsd test failed for input 1");

let cadList = [1, 10, 100];
assertListEquals(cadsToUsds(cadList.slice()), [0.73, 7.3, 73], "cadsToUsds test failed");

assert(every([1, 3, 5], isOdd), "every test failed for all odd numbers");
assert(!every([1, 2, 3], isOdd), "every test failed for mixed numbers");

