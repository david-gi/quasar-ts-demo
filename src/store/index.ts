import { store } from "quasar/wrappers";
import Vuex, { Module } from "vuex";

import biases from "./module-biases";
import { IBiasesState } from "./module-biases/state";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface IStore {
  biases: Module<IBiasesState, IStore>;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<IStore>({
    modules: {
      biases,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });

  return Store;
});

// without quasar wrapper (part of an attempt to get a fully typed store)
// Vue.use(Vuex);

// export default new Vuex.Store<IStore>({
//   modules: {
//     biases,
//   },

//   // enable strict mode (adds overhead!)
//   // for dev mode only
//   strict: !!process.env.DEV,
// });
