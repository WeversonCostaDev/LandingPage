import {Logo} from "./Logo.tsx";
import {CTA} from "./cta.tsx";
import {Navigation} from "./Navigation.tsx";

import logoImagem from "../assets/imagens/logo.png";

interface HeaderProps{
    children?: React.ReactNode;
}

export function Header({children}: HeaderProps){
    return(

        <header>

            <Logo
                src={logoImagem}
                alt={"imagem da logo"}
            />

            <Navigation
                links={[
                    {label: "sobre", to: "/about"},
                    {label: "contato", to: "contact"}
                ]}
            />

            <CTA
                texto="Conheça nosso site"
                destino="/"
            />

            {children}
        </header>
    );
}