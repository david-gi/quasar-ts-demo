import { StepItem } from "src/components/models";
import { GetterTree } from "vuex";
import { IStore } from "../index";
import { IBiasesState } from "./state";

const getters: GetterTree<IBiasesState, IStore> = {
  titledBiases(context): StepItem[] {
    // filter Biases that have titles
    return context.biasList.filter((bias) => !!bias.title);
  },
};

export default getters;
