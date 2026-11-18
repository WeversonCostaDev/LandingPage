import { Link } from "react-router-dom";
import type { Cores } from "../types/Cores";
import type { CSSProperties } from "react";
import "./Navigation.css";

interface INavigationLink{
    label: string;
    to: string;
}

interface INavigationProps{
    links: Array<INavigationLink>;
    cores: Cores | null;
}


export function Navigation({links, cores}: INavigationProps){

    const coresCss = {
        "--nav-texto": cores?.corTexto,
        "--nav-fundo": cores?.corFundo,
        "--nav-hover": cores?.corHover,
    } as CSSProperties;

    return (
        <nav id={"navigation"} style={coresCss}>
            <ul>
                {
                    links.map(link => 
                    <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>)
                }
            </ul>
        </nav>
    );
} 