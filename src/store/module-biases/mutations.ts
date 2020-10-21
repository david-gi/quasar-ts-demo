import { StepItem } from "src/components/models";
import { MutationTree } from "vuex";
import { IBiasesState } from "./state";

const mutation: MutationTree<IBiasesState> = {
  SET_BIAS_LIST(state: IBiasesState, data?: StepItem[]) {
    if (data) state.biasList = data;
  },
};

export default mutation;
