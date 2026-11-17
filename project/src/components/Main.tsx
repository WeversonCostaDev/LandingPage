import { Carousel } from "./carousel/Carousel";
interface IMainProps{
    children?: React.ReactNode;
}

export function Main({children}: IMainProps){
    return(
        <Carousel
            objects={[
            {
            nome: "Camisa",
            imagem: "/imagens/camisa.jpg",
            descricao: "Camisa encontrada na biblioteca.",
            data: "17/11/2026"
            },
        ]}
        />
    );
}