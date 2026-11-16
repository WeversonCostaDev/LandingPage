interface FooterProps{
    children?: React.ReactNode;
}

export function Footer({children}: FooterProps){
    return(    
        <>
            {children}
        </>
    );
}