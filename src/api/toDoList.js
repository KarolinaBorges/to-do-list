import { privateApi } from "./index";

export const toDoListsApiMixin = {
  methods: {
    async list() {
      return await privateApi.get("/lists");
    },
    async create(title) {
      const res = await privateApi.post("/lists/new", title);
      return res;
    },
    async view(ListId) {
      return await privateApi.get(`/lists/${ListId}`);
    },
    async remove(ListId) {
      return await privateApi.delete(`/lists/${ListId}`);
    },
    async updateList(ListId, payload) {
      await privateApi.patch(`/lists/${ListId}`, payload);
    },
  },
};