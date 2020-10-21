import { StepItem } from "src/components/models";
import { MutationTree } from "vuex";
import { BiasesStateInterface } from "./state";

const mutation: MutationTree<BiasesStateInterface> = {
  SET_BIAS_LIST(state: BiasesStateInterface, data?: StepItem[]) {
    if (data) state.biasList = data;
  },
};

export default mutation;
