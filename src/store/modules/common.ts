
import type { OurStoryObj, ViewOurMenuObj, CommentsObj, SelectionsObj, SpecialRecipesObj, HeroObj } from '@/../interfaces/Common';
import { getOurStory, getViewOurMenu, getComments, getSelections, getSpecialRecipes, getHero } from '@/utils/getDatas';

export default {
  state(): {ourStory: OurStoryObj, viewOurMenu: ViewOurMenuObj, comments: CommentsObj, selections: SelectionsObj, specialRecipes: SpecialRecipesObj, hero: HeroObj } {
    return {
      ourStory: { data: null, error: false },
      viewOurMenu: { data: null, error: false },
      comments: { data: null, error: false },
      selections: { data: null, error: false },
      specialRecipes: { data: null, error: false },
      hero: { data: [], error: false },
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
    setSelections(state: {selections: SelectionsObj}, payload: SelectionsObj) {
      state.selections = payload;
    },
    setSpecialRecipes(state: {specialRecipes: SpecialRecipesObj}, payload: SpecialRecipesObj) {
      state.specialRecipes = payload;
    },
    setHero(state: {hero: HeroObj}, payload: HeroObj) {
      state.hero = payload;
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
    selections(state: {selections: SelectionsObj}) {
      return state.selections;
    },
    specialRecipes(state: {specialRecipes: SpecialRecipesObj}) {
      return state.specialRecipes;
    },
    hero(state: {hero: HeroObj}) {
      return state.hero;
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
    async getSelections(context: { commit: Function }, payload: SelectionsObj) {
      let data: SelectionsObj = {data: null, error: false};
      data = await getSelections();
      context.commit('setSelections', data);
    },
    async getSpecialRecipes(context: { commit: Function }, payload: SpecialRecipesObj) {
      let data: SpecialRecipesObj = {data: null, error: false};
      data = await getSpecialRecipes();
      context.commit('setSpecialRecipes', data);
    },
    async getHero(context: { commit: Function }, payload: HeroObj) {
      let data: HeroObj = {data: [], error: false};
      data = await getHero();
      context.commit('setHero', data);
    }
  }
}








