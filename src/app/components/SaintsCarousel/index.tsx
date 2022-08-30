import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SaintsCarousel: React.FC = () => {

  const saints = [
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
      {
        name: "São José",
        image:
          "http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg",
        description:
          "Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.",
      },
    ]

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {saints.map((saint, i) => (
          <SwiperSlide key={i}>
            <div className="saint-card">
              <img src={saint.image} alt={saint.name} />
              <h3>{saint.name}</h3>
              <p>{saint.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaintsCarousel;
