export type Link = {
    label: string;
    to: string;
}

export type LinkSection = {
    id: number;
    title: string;
    links: Array<Link>;
    modo: "ancora" | "router";
}

export type Cores = {
    corFundo?: string | null,
    corHover?: string | null,
    corTitulo?: string | null,
    corSubtitulo?: string | null,
    corTexto?: string | null,
    corTexto2?: string | null,
    corBorda?: string | null,
    corLogo?: string | null,
}