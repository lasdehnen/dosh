export const namespaced = true
const axios = require('axios');

export const state = () => ({
  links: [],
  languages: [],
  lang: "ru"
});

export const actions = {
  async GET_OBJECTS({commit}, lang) {
    try {
      let links = await axios.get("http://dosh-back.loldev.ru/api/get-content?pageName=glavnaya&lang="+lang,
        {
          headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          }
        }
      );
      let languages = await axios.get("http://dosh-back.loldev.ru/api/get-languages",
        {
          headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          }
        }
      );
      if (links.status === 200) {
        commit("SET_LINKS", links.data.result.links)
        commit("SET_LANGUAGES", languages.data.result)
      } else {
        console.log("We have got some troubles")
      }
    } catch (e) {
      console.log("We have got some troubles")
    }
  },
  async SET_LANG({commit}, lang) {
    commit("SET_LANG", lang)
  }
};

export const mutations = {
  SET_LINKS(state, data) {
    state.links = data
  },
  SET_LANGUAGES(state, data) {
    state.languages = data
  },
  SET_LANG(state, data) {
    state.lang = data
  }
};

export const getters = {
  links(state) {
    return state.links
  },
  languages(state) {
    return state.languages
  },
  lang(state) {
    return state.lang
  }
}
