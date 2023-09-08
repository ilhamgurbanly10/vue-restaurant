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

// hero
export interface Hero {
    title: string;
    description: string;
    subtitle: string;
    img: string;
    slug: string;
}

export interface HeroObj {
    data: Hero[];
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

// comments
export interface Comment {
    img: string;
    comment: string;
    name: string;
}

export interface Comments {
    comments: Comment[];
    bg_img: string;
}

export interface CommentsObj {
    data: Comments | null;
    error: boolean;
}

// selections
export interface SelectionsData {
    id: number;
    img: string;
    text: string;
    title: string;
    key: string;
}

export interface SelectionsButtons {
    id: number;
    value: string;
    label: string;
}

export interface Selections {
    data: SelectionsData[];
    buttons: SelectionsButtons[];
}

export interface SelectionsObj {
    data: Selections | null;
    error: boolean;
}

// special-recipes
export interface SpecialRecipe {
    title: string;
    description: string;
    date: string;
    img: string;
    slug: string;
    comment_count: number;
}

export interface SpecialRecipes {
    title: string;
    description: string;
    subtitle: string;
    data: SpecialRecipe[];
}

export interface SpecialRecipesObj {
    data: SpecialRecipes | null;
    error: boolean;
}

