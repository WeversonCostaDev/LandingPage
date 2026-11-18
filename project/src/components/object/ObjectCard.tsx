import "./ObjectCard.css"; 

export interface IObjectProps{
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
    data: string;
}

export function ObjectCard({id, nome, imagem, descricao, data}:IObjectProps){
    return(
        <article className="object-card">
            <img src={imagem} alt={nome} />

            <div className="object-card_info">
                <h3>{nome}</h3>
                <span>{data}</span>
                <p>{descricao}</p>
            </div>
        </article>
    );
}