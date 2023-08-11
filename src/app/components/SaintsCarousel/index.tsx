import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Container } from 'react-bootstrap';
import { Content, Main } from './styles';
import { makeid } from '../../utilities';

const SaintsCarousel: React.FC = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    765: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  const saints = [
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
    {
      name: 'São José',
      image: 'http://www.rccbrasil.org.br/imagens/images/Espiritualidade/2017_03/20170302_saojose_04.jpg',
      description:
        'Segundo o Novo Testamento, o esposo da Virgem Maria e o pai putativo de Jesus. O nome José é a versão lusófona do hebraico Yosef, por meio do latim Iosephus.',
    },
  ];

  return (
    <Main>
      <Container>
        <Content>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            breakpoints={breakpoints}
            onSlideChange={() => {}}
            onSwiper={console.log}
            navigation
            modules={[Autoplay, Navigation]}
          >
            {saints.map((saint) => (
              <SwiperSlide key={`slider-saint-${makeid()}`}>
                <div className="saint-card">
                  <img src={saint.image} alt={saint.name} />
                  <div className="saint-content">
                    <h3>{saint.name}</h3>
                    <p>{saint.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Content>
      </Container>
    </Main>
  );
};

export default SaintsCarousel;
