import {Header} from "./header/Header.tsx"
import {Footer} from "./Footer.tsx";
import {Main} from "./main/Main.tsx";
export function MainLayout(){
    return(
        <>
            <Header
                cores = {{
                    corFundo: "#FFFFFF",
                    corBorda: "#E2E8F0"
                }}
                titulo="Achados e perdidos"
                subtitulo="Conectando pessoas a seus pertences perdidos"
            />

            <Main/>
            
            <Footer/>
        </>
    );
}