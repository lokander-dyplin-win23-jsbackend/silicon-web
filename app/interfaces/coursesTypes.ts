export interface Course {
    id: number;
    imageUri: string;
    imageHeaderUri: string;
    isBestseller: boolean;
    isDigital: boolean;
    categories: string[];
    title: string;
    ingress: string;
    starRating: number;
    reviews: string;
    likesInProcent: string;
    likesInNumbers: string;
    hours: string;
    authors: string[];
    prices: {
        currency: string;
        price: number;
        discount: number;
    };

    content: {
        description: string;
        includes: string[];
        programDetails: ProgramDetails[];
    };

    
}
export interface ProgramDetails {
    id: number;
    title: string;
    description: string;
}

