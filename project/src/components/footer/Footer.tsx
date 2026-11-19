
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBoxOpen,
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";

import { FooterSection } from "./FooterSection";
import type { LinkSection, Cores } from "../../types/Types";

import "./Footer.css";

interface FooterProps {
    nome: string;
    descricao: string;
    secoes: LinkSection[];
    direitosAutorais: string;
    cores?: Cores;
}

export function Footer({
    nome,
    descricao,
    secoes,
    direitosAutorais,
    cores
}: FooterProps) {

    const estilosCores: React.CSSProperties = {
        "--footer-background": cores?.corFundo ?? undefined,
        "--footer-title": cores?.corTitulo ?? undefined,
        "--footer-logo": cores?.corLogo ?? undefined,
        "--footer-text": cores?.corTexto ?? undefined,
        "--footer-text2": cores?.corTexto2 ?? undefined,
        "--footer-hover": cores?.corHover ?? undefined,
        "--footer-border": cores?.corBorda ?? undefined
    } as React.CSSProperties;

    return (
        <footer className="footer" style={estilosCores}>

            <div className="footer-content">

                <div className="footer-brand">
                    <div className="footer-logo">
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <span>{nome}</span>
                    </div>

                    <p>{descricao}</p>
                </div>

                {secoes.map((section) => (
                    <FooterSection
                        key={section.id}
                        section={section}
                    />
                ))}

            </div>

            <div className="footer-bottom">
                <p>{direitosAutorais}</p>

                <a href="#inicio" aria-label="Voltar ao início">
                    Voltar ao topo
                    <FontAwesomeIcon icon={faArrowUp} />
                </a>
            </div>

        </footer>
    );
}
