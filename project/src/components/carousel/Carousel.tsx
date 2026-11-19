import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';
import { ObjectCard } from "../object/ObjectCard";
import { SectionHeader } from "../section-header/SectionHeader";
import type {IObjectProps} from "../object/ObjectCard"

interface ICarousel{
    objects: Array<IObjectProps>
}

export function Carousel({objects}: ICarousel){
    return (
       <section className="carousel">
            
            <SectionHeader
                label="Achados e perdidos"
                title="Objetos encontrados"
                description="Confira os últimos objetos encontrados e veja se algum deles pertence a você."
            />

           <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                grabCursor= {true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    720: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    920: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                    
            }}
           >    

                {objects.map(obj => (
                    <SwiperSlide key={obj.id} >
                        <ObjectCard
                            id={obj.id}
                            nome={obj.nome}
                            imagem={obj.imagem}
                            descricao={obj.descricao}
                            data={obj.data}
                        />
 
                    </SwiperSlide>
                ))};

           </Swiper>

        </section>
    );
} 