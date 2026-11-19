import "./ObjectCard.css"; 

export interface IObjectProps{
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
    data: string;
}

export function ObjectCard(object :IObjectProps){
    return(
        <article className="object-card">
            <img src={object.imagem} alt={object.nome} />

            <div className="object-card_info">
                <h3>{object.nome}</h3>
                <span>{object.data}</span>
                <p>{object.descricao}</p>
            </div>
        </article>
    );
}