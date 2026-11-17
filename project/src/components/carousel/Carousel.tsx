import { ObjectCard } from "../object/ObjectCard";
import type {IObjectProps} from "../object/ObjectCard"

interface ICarousel{
    objects: Array<IObjectProps>
}

export function Carousel({objects}: ICarousel){
    return (
        <section className="carrossel">
            <div>
                <h2>Cabecalho</h2>
                <p>Confira os últimos objetos encontrados.</p>
            </div>

            <div className="carrossel-conteudo">
                {objects.map(obj => 
                <ObjectCard
                    nome = {obj.nome}
                    imagem= {obj.imagem}
                    descricao= {obj.descricao}
                    data= {obj.data}
                />
            )}
            </div>

        </section>
    );
} 