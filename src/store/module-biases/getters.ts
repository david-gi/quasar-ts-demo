import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { BiasesStateInterface } from "./state";

const getters: GetterTree<BiasesStateInterface, StateInterface> = {
  titledBiases(context) {
    // filter Biases that have titles
    return context.biasList.filter((bias) => !!bias.title);
  },
};

export default getters;
