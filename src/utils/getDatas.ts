import api from './api'
import type { OurStoryObj, ViewOurMenuObj, CommentsObj, SelectionsObj, SpecialRecipesObj, HeroObj } from '@/../interfaces/Common';

export const getOurStory = async (): Promise<OurStoryObj> => {
  try {

    let data: OurStoryObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
        title: 'BİZİM HEKAYƏ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
        subtitle: 'DADLI VƏ LƏZZƏTLİ',
        first_image: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-1.jpg',
        second_image: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-2.jpg'
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getViewOurMenu = async (): Promise<ViewOurMenuObj> => {
  try {

    let data: ViewOurMenuObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
        title: 'İNQREDİENTLƏR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
        subtitle: 'DADLI VƏ LƏZZƏTLİ',
        img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-4.jpg',
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getComments = async (): Promise<CommentsObj> => {
  try {

    let data: CommentsObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
        comments: [
          {
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/testimonial2.png',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            name: 'AYSU GURBANLY'
          },
          {
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/testimonial2.png',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            name: 'AYSU GURBANLY'
          },
          {
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/testimonial2.png',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            name: 'AYSU GURBANLY'
          },
          {
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/testimonial2.png',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            name: 'AYSU GURBANLY'
          },
        ],
        bg_img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-parallax-1.jpg',
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getSelections = async (): Promise<SelectionsObj> => {
  try {

    let data: SelectionsObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
       data: [
        {
          id: 1,
          img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
          title: 'CHEESE CROISSANTS',
          key: 'CHEESE-CROISSANTS'
        },
        {
          id: 2,
          img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image4.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
          title: 'BRUSCHETTI',
          key: 'BRUSCHETTI'
        },
        {
          id: 3,
          img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
          title: 'AWESOME VEGETABLES',
          key: 'AWESOME-VEGETABLES'
        },
        {
          id: 4,
          img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image4.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
          title: 'TASTY SNACKS',
          key: 'TASTY-SNACKS'
        },
        {
          id: 5,
          img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
          title: 'ALL-TIME BEST RECIPES',
          key: 'ALL-TIME-BEST-RECIPES'
        },
        {
          id: 6,
          img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image4.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
          title: 'MEAL FOR WHOLE FAMILY',
          key: 'MEAL-FOR-WHOLE-FAMILY'
        }
       ],
       buttons: [
        {
          id: 1,
          value: 'CHEESE-CROISSANTS',
          label: 'CHEESE CROISSANTS'
        },
        {
          id: 2,
          value: 'BRUSCHETTI',
          label: 'BRUSCHETTI'
        },
        {
          id: 3,
          value: 'AWESOME-VEGETABLES',
          label: 'AWESOME VEGETABLES'
        },
        {
          id: 4,
          value: 'TASTY-SNACKS',
          label: 'TASTY SNACKS'
        },
        {
          id: 5,
          value: 'ALL-TIME-BEST-RECIPES',
          label: 'ALL-TIME BEST RECIPES'
        },
        {
          id: 6,
          value: 'MEAL-FOR-WHOLE-FAMILY',
          label: 'MEAL FOR WHOLE FAMILY'
        }
       ]
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getSpecialRecipes = async (): Promise<SpecialRecipesObj> => {
  try {

    let data: SpecialRecipesObj = { data: null, error: false };
    const res = await api.get('todos/');
    data.data = {
        title: 'XÜSUSİ RESEPTLƏR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
        subtitle: 'DADLI VƏ LƏZZƏTLİ',
        data: [
          {
            title: 'XÜSUSİ RESEPTLƏR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            date: '11 APREL, 2016 SAĞLAM',
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/blog-post1.jpg',
            comment_count: 10,
            slug: 'special-recipe'
          },
          {
            title: 'XÜSUSİ RESEPTLƏR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            date: '15 APREL, 2016 SAĞLAM',
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/blog-post2.jpg',
            comment_count: 5,
            slug: 'special-recipe'
          },
          {
            title: 'XÜSUSİ RESEPTLƏR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
            date: '20 APREL, 2016 SAĞLAM',
            img: 'https://savory.qodeinteractive.com/wp-content/uploads/2016/04/blog-post3.jpg',
            comment_count: 20,
            slug: 'special-recipe'
          }
        ]
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

export const getHero = async (): Promise<HeroObj> => {
  try {

    let data: HeroObj = { data: [], error: false };
    const res = await api.get('todos/');
    data.data = [
      {
        title: 'MENYULARIMIZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
        subtitle: 'DADLI VƏ LƏZZƏTLİ',
        img: '//savory.qodeinteractive.com/wp-content/uploads/2016/10/main-home-slide2n.jpg',
        slug: 'menu-1'
      },
      {
        title: 'RESTORAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
        subtitle: 'DADLI VƏ LƏZZƏTLİ',
        img: '//savory.qodeinteractive.com/wp-content/uploads/2016/10/main-home-slide1.jpg',
        slug: 'menu-1'
      },
      {
        title: 'LƏZZİZ MƏTBƏXİMİZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.',
        subtitle: 'DADLI VƏ LƏZZƏTLİ',
        img: '//savory.qodeinteractive.com/wp-content/uploads/2016/10/main-home-slide3.jpg',
        slug: 'menu-1'
      }
    ]
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: [], error: true };
  }
};

