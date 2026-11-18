import {Logo} from "../Logo.tsx";
import {CTA} from "../CTA/CTA.tsx";
import {Navigation} from "../navigation/Navigation.tsx";
import type { Cores } from "../../types/Cores.ts";
import type { CSSProperties } from "react";
import "./Header.css";

import logoImagem from "../../assets/imagens/logo.png";

interface HeaderProps{
    children?: React.ReactNode;
    cores: Cores;
    titulo: string;
    subtitulo?: string;
}

export function Header({children, cores, titulo, subtitulo}: HeaderProps){
    
    const coresCss = {
        "--head-background": cores.corFundo,
        "--head-border": cores.corBorda,
    } as CSSProperties;

    return(

        <header id={"header"} style={coresCss}>

            <div className="header-superior">

                <Logo
                    src={logoImagem}
                    alt={"imagem da logo"}
                />
                
                <div className="header-actions">
                    <Navigation
                        links={[
                            {label: "sobre", to: "/about"},
                            {label: "contato", to: "contact"},
                        ]}
                        cores={{
                            corFundo: "#ffffff",
                            corHover: "#2563eb",
                            corTexto: "#334155",
                        }}
                    />
                    <CTA
                        texto="Conheça nosso site"
                        destino="/"
                        cores={{
                            corFundo: "#2563eb",
                            corHover: "#1d4ed8",
                            corTexto: "#ffffff",
                            corTitulo: "#0f172a",
                            corSubtitulo: "#475569",
                        }}
                    />
                </div>
            </div>
            <div className="header-titulo">
                <h1>{titulo}</h1>
                {subtitulo ? <p>{subtitulo}</p> : null}
            </div>
            {children}
        </header>
    );
}