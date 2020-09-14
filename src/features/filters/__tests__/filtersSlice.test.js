import filter, {
  setVisibilityFilter,
  VisibilityFilters
} from "../filtersSlice";

describe("filters reducer", () => {
  it("should handle initial state", () => {
    expect(filter(undefined, {})).toEqual(VisibilityFilters.SHOW_ALL);
  });

  it("should handle setting visibility with empty state", () => {
    expect(
      filter([], {
        type: setVisibilityFilter.type,
        payload: VisibilityFilters.SHOW_COMPLETED
      })
    ).toEqual(VisibilityFilters.SHOW_COMPLETED);
  });

  it("should handle setting visibility with non empty state", () => {
    expect(
      filter(VisibilityFilters.SHOW_ACTIVE, {
        type: setVisibilityFilter.type,
        payload: VisibilityFilters.SHOW_COMPLETED
      })
    ).toEqual(VisibilityFilters.SHOW_COMPLETED);
  });
});
