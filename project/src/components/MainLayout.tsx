
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Main } from "./main/Main";

import type { LinkSection } from "../types/Types";

export function MainLayout() {

    const secoesFooter: Array<LinkSection> = [
        {
            id: 1,
            title: "Navegação",
            links: [
                { label: "Início", to: "#inicio" },
                { label: "Objetos encontrados", to: "#objetos" },
                { label: "Como funciona", to: "#como-funciona" }
            ],
            modo: "ancora"
        },
        {
            id: 2,
            title: "Ajuda",
            links: [
                { label: "Dúvidas frequentes", to: "#duvidas" },
                { label: "Entre em contato", to: "#contato" },
                { label: "Enviar mensagem", to: "mailto:contato@seudominio.com" }
            ],
            modo: "ancora"
        }
    ];

    return (
        <>
            <Header
                cores={{
                    corFundo: "#FFFFFF",
                    corBorda: "#E2E8F0"
                }}
                titulo="Achados e perdidos"
                subtitulo="Conectando pessoas a seus pertences perdidos"
            />

            <Main />

            <Footer
                nome="Achados & Perdidos"
                descricao="Conectando pessoas e ajudando objetos perdidos a encontrarem o caminho de volta para seus donos."
                secoes={secoesFooter}
                direitosAutorais="© 2026 Achados & Perdidos. Todos os direitos reservados."
            
                cores={{
                    corFundo: "#0f172a",
                    corHover: "#60a5fa",
                    corTitulo: "#f8fafc",
                    corTexto: "#94a3b8",
                    corTexto2:"#64748b",
                    corBorda: "#334155",
                    corLogo: "#60a5fa",
                }}
            />
        </>
    );
}
