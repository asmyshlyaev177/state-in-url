export declare const form: Form;
type Form = {
    name: string;
    age?: number;
    'agree to terms': boolean;
    tags: {
        id: string;
        value: {
            text: string;
            time: Date;
            iso?: string;
        };
    }[];
};
export {};
