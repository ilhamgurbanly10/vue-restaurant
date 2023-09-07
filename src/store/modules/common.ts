
import axios from 'axios';
import { OurStoryObj, ViewOurMenuObj, CommentsObj, selectionsObj } from '@/../interfaces/Common';
import { getOurStory, getViewOurMenu, getComments, getSelections } from '@/utils/getDatas';

export default {
  state(): {ourStory: OurStoryObj, viewOurMenu: ViewOurMenuObj, comments: CommentsObj, selections: selectionsObj } {
    return {
      ourStory: { data: null, error: false },
      viewOurMenu: { data: null, error: false },
      comments: { data: null, error: false },
      selections: { data: null, error: false },
    }
  },
  mutations: {
    setOurStory(state: {ourStory: OurStoryObj}, payload: OurStoryObj) {
      state.ourStory = payload;
    },
    setViewOurMenu(state: {viewOurMenu: ViewOurMenuObj}, payload: ViewOurMenuObj) {
      state.viewOurMenu = payload;
    },
    setComments(state: {comments: CommentsObj}, payload: CommentsObj) {
      state.comments = payload;
    },
    setSelections(state: {selections: selectionsObj}, payload: selectionsObj) {
      state.selections = payload;
    }
  },
  getters: {
    ourStory(state: {ourStory: OurStoryObj}) {
      return state.ourStory;
    },
    viewOurMenu(state: {viewOurMenu: ViewOurMenuObj}) {
      return state.viewOurMenu;
    },
    comments(state: {comments: CommentsObj}) {
      return state.comments;
    },
    selections(state: {selections: selectionsObj}) {
      return state.selections;
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
    },
    async getComments(context: { commit: Function }, payload: CommentsObj) {
      let data: CommentsObj = {data: null, error: false};
      data = await getComments();
      context.commit('setComments', data);
    },
    async getSelections(context: { commit: Function }, payload: selectionsObj) {
      let data: selectionsObj = {data: null, error: false};
      data = await getSelections();
      context.commit('setSelections', data);
    }
  }
}








