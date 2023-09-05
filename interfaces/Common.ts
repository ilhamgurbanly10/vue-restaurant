// OurStory
export interface OurStory {
    title: string;
    description: string;
    subtitle: string;
    first_image: string;
    second_image: string;
}

export interface OurStoryObj {
    data: OurStory | null;
    error: boolean;
}

