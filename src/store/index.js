import Vue from 'vue';
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user_info'
import permission from './modules/permission'

import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    app,
    permission
  },
  getters
});
export default store
