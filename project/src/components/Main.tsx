import { Carousel } from "./carousel/Carousel";
import imagemCamisa from "../assets/imagens/camisa.jpg";
interface IMainProps{
    children?: React.ReactNode;
}

export function Main({children}: IMainProps){
    return(
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
            {
            id: 6,
            nome: "Camisa",
            imagem: imagemCamisa,
            descricao: "Camisa encontrada na biblioteca.",
            data: "17/11/2026"
            },
            {
            id: 7,
            nome: "Camisa",
            imagem: imagemCamisa,
            descricao: "Camisa encontrada na biblioteca.",
            data: "17/11/2026"
            },
        ]}
        />
    );
}