import { main } from "./main";

describe("A Test", () => {
  it("succeeds", () => {
    expect(true as boolean).toEqual(true as boolean);
  });

  it("works", () => {
    main()
  });
});
