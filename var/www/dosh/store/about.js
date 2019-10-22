export const namespaced = true
const axios = require('axios');

export const state = () => ({
  objects: [],
  status: 0
});

export const actions = {
  async GET_OBJECTS({commit}, lang) {
    try {
      commit("SET_STATUS_TABLE", 1);
      let objects = await axios.get("http://dosh-back.loldev.ru/api/get-content?pageName=about&lang="+lang,
        {
          headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          }
        }
      );
      if (objects.status === 200) {
        commit("SET_OBJECTS", objects.data.result)
        commit("SET_STATUS_TABLE", 2)
      } else {
        commit("SET_STATUS_TABLE", -1)
        console.log("We have got some troubles")
      }
    } catch (e) {
      commit("SET_STATUS_TABLE", -1)
    }
  }
}

export const mutations = {
  SET_OBJECTS(state, data) {
    state.objects = data
  },
  SET_STATUS_TABLE(state, status) {
    state.status = status
  }
}

