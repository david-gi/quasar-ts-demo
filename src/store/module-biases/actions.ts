import { ActionTree } from "vuex";
import { IStore } from "../index";
import { IBiasesState } from "./state";

const actions: ActionTree<IBiasesState, IStore> = {
  fetchBiases({ commit }) : void {
    // api call...
    const data = null;
    // then commit the data (call state mutation)
    commit("SET_BIAS_LIST", data);
  },
};

export default actions;
