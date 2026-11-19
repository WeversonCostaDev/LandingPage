import { Link } from "react-router-dom";
import type { Cores } from "../../types/Cores";
import type { CSSProperties } from "react";

interface INavigationLink{
    label: string;
    to: string;
}

interface INavigationProps{
    links: Array<INavigationLink>;
    cores?: Cores | null;
    modo?: "router" | "ancora";
    className?: string;
}

export function Navigation({links, cores=null, modo= "router", className}: INavigationProps){

    const coresCss = {
        "--nav-texto": cores?.corTexto,
        "--nav-fundo": cores?.corFundo,
        "--nav-hover": cores?.corHover,
    } as CSSProperties;

    return (
        <nav className={className} style={coresCss}>
            <ul>
                {
                    links.map(link =>( 
                        <li key={link.to}>
                            {modo === "router" ? (
                                <Link to={link.to}>
                                    {link.label}
                                </Link>
                             ) : (
                                <a href={link.to}>
                                    {link.label}
                                </a>
                            )}
                        </li>)
                    )
                }
            </ul>
        </nav>
    );
} 