import { store } from "quasar/wrappers";
import Vuex from "vuex";

import biases from "./module-biases";
import { IBiasesState } from "./module-biases/state";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface IState {
  biases: IBiasesState;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<IState>({
    modules: {
      biases,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });

  return Store;
});
