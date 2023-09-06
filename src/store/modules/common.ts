
import axios from 'axios';
import { OurStoryObj, ViewOurMenuObj } from '@/../interfaces/Common';
import { getOurStory, getViewOurMenu } from '@/utils/getDatas';

export default {
  state(): {ourStory: OurStoryObj, viewOurMenu: ViewOurMenuObj} {
    return {
      ourStory: { data: null, error: false },
      viewOurMenu: { data: null, error: false },
    }
  },
  mutations: {
    setOurStory(state: {ourStory: OurStoryObj}, payload: OurStoryObj) {
      state.ourStory = payload;
    },
    setViewOurMenu(state: {viewOurMenu: ViewOurMenuObj}, payload: ViewOurMenuObj) {
      state.viewOurMenu = payload;
    }
  },
  getters: {
    ourStory(state: {ourStory: OurStoryObj}) {
      return state.ourStory;
    },
    viewOurMenu(state: {viewOurMenu: ViewOurMenuObj}) {
      return state.viewOurMenu;
    }
  },
  actions: {
    async getOurStory(context: { commit: Function }, payload: OurStoryObj) {
      let data: OurStoryObj = {data: null, error: false};
      data = await getOurStory();
      context.commit('setOurStory', data);
    },
    async getViewOurMenu(context: { commit: Function }, payload: ViewOurMenuObj) {
      let data: ViewOurMenuObj = {data: null, error: false};
      data = await getViewOurMenu();
      context.commit('setViewOurMenu', data);
    }
  }
}








