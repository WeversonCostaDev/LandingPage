import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import type { Cores } from "../types/Cores";
import "./CTA.css";


interface CTAProps{
    texto: string,
    destino: string,
    cores: Cores;
};

export function CTA({texto, destino, cores}: CTAProps){

    const coresCss = {
        "--cta-fundo": cores.corFundo,
        "--cta-hover": cores.corHover,
        "--cta-texto": cores.corTexto
    } as CSSProperties


    return (
        <Link className="cta" to={destino} style={coresCss}>
            {texto}
        </Link>
    );
}