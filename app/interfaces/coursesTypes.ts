export interface Course {
    id: number;
    isBestseller: boolean;
    image: string;
    title: string;
    author: string;
    price: string;
    discountPrice: string | null;
    hours: string;
    likesInProcent: string;
    likesInNumbers: string;
}

