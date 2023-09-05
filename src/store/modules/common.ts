
import axios from 'axios';
import { OurStoryObj } from '@/../interfaces/Common';
import { getOurStory } from '@/utils/getDatas';

export default {
  state(): {ourStory: OurStoryObj} {
    return {
      ourStory: { data: null, error: false },
    }
  },
  mutations: {
    setOurStory(state: {ourStory: OurStoryObj}, payload: OurStoryObj) {
      state.ourStory = payload;
    }
  },
  getters: {
    ourStory(state: {ourStory: OurStoryObj}) {
      return state.ourStory;
    }
  },
  actions: {
    async getOurStory(context: { commit: Function }, payload: OurStoryObj) {
      let data: OurStoryObj = {data: null, error: false};
      data = await getOurStory();
      context.commit('setOurStory', data);
    }
  }
}








