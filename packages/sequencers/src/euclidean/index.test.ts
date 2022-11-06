import Euclidean from "./index";

test("test Euclidean Alogrithm up", async () => {
  let euclidean = new Euclidean(5, 13, 0);
  let result = euclidean.gates();
  expect(result).toStrictEqual([
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ]);

  expect(euclidean.gate(1)).toBeTruthy;
  expect(euclidean.gate(2)).toBeFalsy;
});

test("test Euclidean Alogrithm up", async () => {
  let euclidean = new Euclidean(5, 13, 1);
  let result = euclidean.gates();
  expect(result).toStrictEqual([
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
  ]);

  expect(euclidean.gate(2)).toBeTruthy;
  expect(euclidean.gate(3)).toBeFalsy;
});
