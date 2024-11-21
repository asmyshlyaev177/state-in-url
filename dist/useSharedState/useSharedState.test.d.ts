export declare const form: Form;
type Form = {
    name: string;
    age?: number;
    agree_to_terms: boolean;
    tags: {
        id: string;
        value: {
            text: string;
            time: Date;
        };
    }[];
};
export {};
