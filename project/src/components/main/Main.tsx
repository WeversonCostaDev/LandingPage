import { Carousel } from "../carousel/Carousel";
import imagemCamisa from "../../assets/imagens/camisa.jpg";
import { CTA } from "../CTA/CTA";
import "./Main.css";
interface IMainProps{
    children?: React.ReactNode;
}

export function Main({children}: IMainProps){
    return(
        <main>
            <Carousel
                objects={[
                {
                id: 1,
                nome: "Camisa",
                imagem: imagemCamisa,
                descricao: "Camisa encontrada na biblioteca.",
                data: "17/11/2026"
                },
                {
                id: 2,
                nome: "Camisa",
                imagem: imagemCamisa,
                descricao: "Camisa encontrada na biblioteca.",
                data: "17/11/2026"
                },
                {
                id: 3,
                nome: "Camisa",
                imagem: imagemCamisa,
                descricao: "Camisa encontrada na biblioteca.",
                data: "17/11/2026"
                },
                {
                id: 4,
                nome: "Camisa",
                imagem: imagemCamisa,
                descricao: "Camisa encontrada na biblioteca.",
                data: "17/11/2026"
                },
                {
                id: 5,
                nome: "Camisa",
                imagem: imagemCamisa,
                descricao: "Camisa encontrada na biblioteca.",
                data: "17/11/2026"
                },
                
            ]}
            />
            <section className="main-ctas">
                <CTA
                    texto="Perdeu algum objeto?"
                    destino="/objetos-perdidos"
                    cores={{
                        corFundo: "#2563eb",
                        corHover: "#1d4ed8",
                        corTexto: "#ffffff"
                    }}
                />

                <CTA
                    texto="Encontrou algum objeto?"
                    destino="/cadastrar-objeto"
                    cores={{
                        corFundo: "#16a34a",
                        corHover: "#15803d",
                        corTexto: "#ffffff"
                    }}
                />
            </section>

            <section>
                {children}
            </section>

        </main>
    );
}