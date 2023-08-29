import { createStore } from 'vuex'
import postModule from '@/store/modules/post';

// modullara bolerek cagirma
const store = createStore({
    modules: {
      post: postModule, // Register the user module
    },
});


export default store;


