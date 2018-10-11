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

it("should return sumerize multiple numbers", () => {
	expect(add("1,3,5")).toBe(9);
});


it("should handle new lines between numbers", () => {
	expect(add("1\n2,3")).toBe(6);
});