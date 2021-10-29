import getTimeReading from "./index";

describe("getTimeReading", () => {
  const createWords = (count: number) =>
    new Array(count).fill("word").join(" ");

  test("should return 0 if empty string", () => {
    expect(getTimeReading("")).toBe("0 minute");
  });

  test("should return 0 from 1 word to 199 word", () => {
    expect(getTimeReading(createWords(1))).toBe("0 minute");
    expect(getTimeReading(createWords(199))).toBe("0 minute");
  });

  test("should return 1 from 200 word to 399 word", () => {
    expect(getTimeReading(createWords(200))).toBe("1 minute");
    expect(getTimeReading(createWords(399))).toBe("1 minute");
  });

  test("should return 2 from 400 word to 599 word", () => {
    expect(getTimeReading(createWords(400))).toBe("2 minutes");
    expect(getTimeReading(createWords(599))).toBe("2 minutes");
  });
});
