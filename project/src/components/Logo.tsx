
interface ILogoProps {
    src: string;
    alt: string;
    width?: string;
    className?: string;
}

export function Logo({
    src,
    alt,
    width = "50px",
    className
}: ILogoProps) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            className={`logo ${className?? ""}`}
        />
    );
}