export declare const Button: ({ className, children, disabled, name, ...props }: Props) => import("react").JSX.Element;
interface Props extends React.DOMAttributes<HTMLButtonElement> {
    name?: string;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}
export {};
