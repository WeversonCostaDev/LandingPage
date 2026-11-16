import {Header} from "./Header.tsx"
import {Footer} from "./Footer.tsx";
export function MainLayout(){
    return(
        <>
            <Header
                links= {[
                    {label: "Sobre", to: "/about"},
                    {label: "Sobre", to: "/about"},
                    {label: "Sobre", to: "/about"},
                ]}
            />

            <main>
                
            </main>
            
            <Footer/>
        </>
    );
}