import { api } from "boot/axios";
export const searchHotels = async ({ commit }, searchPayload) => {
  await api.post(`client/search/`, searchPayload).then((response) => {
    const searchFilter = response.data.data;
    commit("searchFilter", searchFilter);
    commit("emptySearch", { message: "NO DATA" });
  });
};
