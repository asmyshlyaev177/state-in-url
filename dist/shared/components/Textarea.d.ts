export declare const Textarea: ({ className, value, onChange, ...rest }: Props) => import("react").JSX.Element;
interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
    className: string;
    value: string;
    onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
}
export {};
