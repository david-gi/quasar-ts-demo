import { Module } from "vuex";
import { IStore } from "../index";
import state, { IBiasesState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const biasesModule: Module<IBiasesState, IStore> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default biasesModule;
