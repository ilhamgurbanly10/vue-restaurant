import api from './api'
import { OurStoryObj, ViewOurMenuObj } from '@/../interfaces/Common';

export const getOurStory = async (): Promise<OurStoryObj> => {
  try {

    let data: OurStoryObj = { data: null, error: false };
    const res = await api.get('city/');
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
    const res = await api.get('city/');
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

