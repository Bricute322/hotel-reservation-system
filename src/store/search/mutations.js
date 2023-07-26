export const searchFilter = (state, searching) => {
  state.searching = searching;
};
export const emptySearch = (state, noData) => {
  state.noDataSearch = noData;
};
