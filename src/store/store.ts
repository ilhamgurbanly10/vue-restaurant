//@ts-ignore
import { createStore } from 'vuex';
import commonModule from '@/store/modules/common';

const store = createStore({
    modules: {
      common: commonModule, 
    },
});

export default store;


