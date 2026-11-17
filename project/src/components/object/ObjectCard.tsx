export interface IObjectProps{
    nome: string;
    imagem: string;
    descricao: string;
    data: string;
}

export function ObjectCard({nome, imagem, descricao, data}:IObjectProps){
    return(
        <article className="objeto-card">
            <img src={imagem} alt={nome} />

            <div className="objeto-card_info">
                <h3>{nome}</h3>
                <span>{data}</span>
                <p>{descricao}</p>
            </div>
        </article>
    );
}