import api from './api'
import { OurStoryObj } from '@/../interfaces/Common';

export const getOurStory = async (): Promise<OurStoryObj> => {
  try {

    let data: OurStoryObj = { data: null, error: false };
    const res = await api.get('city/');
    data.data = {
        title: 'story updated',
        description: 'description',
        subtitle: 'subtitle',
        first_image: 'img',
        second_image: 'img'
    }
    return data;
    
  } catch (error) {
    console.error('Error fetching:', error);
    return { data: null, error: true };
  }
};

