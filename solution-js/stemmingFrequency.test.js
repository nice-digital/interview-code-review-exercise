const {
  stemWord,
  run,
} = require("./stemmingFrequency");

const input =
  "Friends are friendlier friendlies that are friendly and classify the friendly classification class. Flowery flowers flow through following the flower flows.";

test("stemWord method", () => {
  const output = stemWord("friendly");
  expect(output).toBe("friend");
  const output2 = stemWord("classes");
  expect(output2).toBe("clas");
  const output3 = stemWord("classification");
  expect(output3).toBe("clas");
});

test("run method", () => {
  expect(run(input, "following")).toBe(1);
  expect(run(input, "flow")).toBe(2);
  expect(run(input, "classification")).toBe(3);
  expect(run(input, "class")).toBe(3);
  expect(run(input, "flower")).toBe(3);
  expect(run(input, "friend")).toBe(5);
  expect(run(input, "friendly")).toBe(5);
  expect(run(input, "classes")).toBe(3);
});

test("error case", () => {
  const output = run(6, "");
  expect(output.message).toBe("Input is not a string");
});

test("prefixes", () => {
  const preFixInput = "Reclassify the declassified classic before unfollowing and unfriending my friend"
  expect(run(preFixInput, "following")).toBe(1);
  expect(run(preFixInput, "flow")).toBe(0);
  expect(run(preFixInput, "classification")).toBe(2);
  expect(run(preFixInput, "class")).toBe(2);
  expect(run(preFixInput, "flower")).toBe(0);
  expect(run(preFixInput, "friend")).toBe(2);
  expect(run(preFixInput, "friendly")).toBe(2);
  expect(run(preFixInput, "classes")).toBe(2);
});
