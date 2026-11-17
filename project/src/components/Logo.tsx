interface LogoProps{
    src: string;
    alt: string;
}

export function Logo({src, alt}: LogoProps){
    return (
        <img width={"50px"} src={src} alt={alt}/>
    );
}