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

// view-our-menu
export interface ViewOurMenu {
    title: string;
    description: string;
    subtitle: string;
    img: string;
}

export interface ViewOurMenuObj {
    data: ViewOurMenu | null;
    error: boolean;
}

