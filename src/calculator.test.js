const add = require("./calculator"); // import our greeting

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});

it("should return number sum of two given numbers", () => {
	expect(add("1,3")).toBe(4);
});