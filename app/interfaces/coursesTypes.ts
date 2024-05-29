export interface Course {
    Id: string;
    ImageUri: string;
    ImageHeaderUri: string;
    IsBestseller: boolean;
    IsDigital: boolean;
    Categories: string[];
    Title: string;
    Ingress: string;
    StarRating: number;
    Reviews: string;
    LikesInProcent: string;
    LikesInNumbers: string;
    Hours: string;
    Authors: string[];
    Prices: {
        Currency: string;
        Price: number;
        Discount: number;
    };

    Content: {
        Description: string;
        Includes: string[];
        ProgramDetails: {
            Id: number;
            Title: string;
            Description: string;
        }[];
    };
    
}

