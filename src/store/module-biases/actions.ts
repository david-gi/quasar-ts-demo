import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { BiasesStateInterface } from "./state";
import { StepItem } from "../../components/models";

const actions: ActionTree<BiasesStateInterface, StateInterface> = {
  fetchBiases({ commit }) : void {
    // api call...
    const data = null;
    // then commit the data (call state mutation)
    commit("SET_BIAS_LIST", data);
  },
};

export default actions;
