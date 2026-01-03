export interface IButtonProps {
    label: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    handleClick?: () => void;
    customStyles?: string;
    disabled?: boolean;
}

export type ButtonVariant = 'primary' | 'primary_o' | 'secondary';

export type ButtonSize = 'sm' | 'md' | 'lg';
