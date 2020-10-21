// import { store } from "quasar/wrappers";
import Vue from "vue";
import Vuex, { Module } from "vuex";

import biases from "./module-biases";
import { IBiasesState } from "./module-biases/state";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface IState {
  biases: Module<IBiasesState, IState>;
}

// export default store(({ Vue }) => {
//   Vue.use(Vuex);

//   const Store = new Vuex.Store<IState>({
//     modules: {
//       biases,
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode only
//     strict: !!process.env.DEV,
//   });

//   return Store;
// });

Vue.use(Vuex);

export default new Vuex.Store<IState>({
  modules: {
    biases,
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: !!process.env.DEV,
});
