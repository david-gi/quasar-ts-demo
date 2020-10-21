import { Module } from "vuex";
import { IState } from "../index";
import state, { IBiasesState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const biasesModule: Module<IBiasesState, IState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default biasesModule;
