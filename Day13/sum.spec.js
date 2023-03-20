const fungsi = require("./index");
test("testing sum function", () => {
	expect(fungsi.sum(1, 2)).toBe(3);
});

test("testing multyple function", () => {
	expect(fungsi.multyple(1, 2)).toBe(2);
});
