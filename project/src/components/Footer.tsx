
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBoxOpen,
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";

import { Navigation } from "../components/navigation/Navigation";
import "./Footer.css";

export function Footer() {

    const linksNavegacao = [
        { label: "Início", to: "#inicio" },
        { label: "Objetos encontrados", to: "#objetos" },
        { label: "Como funciona", to: "#como-funciona" }
    ];

    const linksAjuda = [
        { label: "Dúvidas frequentes", to: "#duvidas" },
        { label: "Entre em contato", to: "#contato" },
        { label: "Enviar mensagem", to: "mailto:contato@seudominio.com" }
    ];

    return (
        <footer className="footer">

            <div className="footer-content">

                {/* Identidade */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <span>Achados & Perdidos</span>
                    </div>

                    <p>
                        Conectando pessoas e ajudando objetos
                        perdidos a encontrarem o caminho de
                        volta para seus donos.
                    </p>
                </div>

                {/* Navegação */}
                <div className="footer-navigation">
                    <h3>Navegação</h3>

                    <Navigation
                        links={linksNavegacao}
                        modo="ancora"
                        className="footer-navigation_links"
                    />
                </div>

                {/* Ajuda */}
                <div className="footer-help">
                    <h3>Ajuda</h3>

                    <Navigation
                        links={linksAjuda}
                        modo="ancora"
                        className="footer-help_links"
                    />
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Achados & Perdidos. Todos os direitos reservados.
                </p>

                <a href="#inicio" aria-label="Voltar ao início">
                    Voltar ao topo
                    <FontAwesomeIcon icon={faArrowUp} />
                </a>
            </div>

        </footer>
    );
}
