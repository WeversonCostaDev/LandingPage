import {Header} from "./Header.tsx"
import {Footer} from "./Footer.tsx";
import {Main} from "./Main.tsx";
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