import { StepItem } from "src/components/models";
import { GetterTree } from "vuex";
import { IState } from "../index";
import { IBiasesState } from "./state";

const getters: GetterTree<IBiasesState, IState> = {
  titledBiases(context): StepItem[] {
    // filter Biases that have titles
    return context.biasList.filter((bias) => !!bias.title);
  },
};

export default getters;
