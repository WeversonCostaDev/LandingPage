import { Link } from "react-router-dom";
import "./CTA.css";

interface CTAProps{
    texto: string,
    destino: string,
};

export function CTA({texto, destino}: CTAProps){
    return (
        <Link className="cta" to={destino}>
            {texto}
        </Link>
    );
}