import { priceFormat } from "../src";

describe("Price Format", () => {
  it("formatting local currency", () => {
    const value = 350;

    const newValue = priceFormat(value);

    expect(newValue);
  });
});
