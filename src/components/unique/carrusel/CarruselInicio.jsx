"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrusel.css';
import Link from 'next/link';

const Carrusel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className='contenedor-carruseles'>
      <div className="contenedor-carrusel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Parallax]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{ clickable: true }}
          parallax={true}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: `url(/img/carrusel/inicio/hero-06.jpg)` }}
            >
              <div className="overlay"></div>
              <div className="contenedor-contenido-carrusel">
                <div className="title" data-swiper-parallax="-300">SOMOS FACTORY</div>
                <div className="subtitle" data-swiper-parallax="-200">INTEGRATED LOGISTICS</div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    INGENIERÍA CIVIL, ELECTRÓNICA, ELECTRICA, SISTEMAS, MECÁNICA, AMBIENTAL E INDUSTRIAL. LOGÍSTICA “TRANSPORTE ESPECIAL DE PASAJEROS, TRANSPORTE TERRESTRE DE CARGA: SECA, LIQUIDOS, SOLIDOS, CONDENSADAS Y PRODUCTOS DERIVADOS DEL PETRÓLEO”, ALQUILER DE VEHÍCULOS Y MAQUINARIA PESADA, COMERCIALIZADOR DE BIENES Y SERVICIOS ONLINE.
                  </p>
                </div>
                <div className="contenedor-link-carrusel">
                  <Link href="/contactos" className="item-link-carrusel color-naranja">CONTACTANOS</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="swiper-slide"
              style={{ backgroundImage: `url(/img/carrusel/inicio/slider-1.jpg)` }}
            >
              <div className="overlay"></div>
              <div className="contenedor-contenido-carrusel">
                <div className="title" data-swiper-parallax="-300">Visión Innovadora</div>
                <div className="subtitle" data-swiper-parallax="-200">Y VANGUARDISTA DEL MERCADO</div>
                <div className="text" data-swiper-parallax="-100">
                  <p>PRESTANDO SOLUCIONES INTEGRALES QUE POTENCIAN LA ECONOMÍA DE SU EMPRESA</p>
                </div>
                <div className="contenedor-link-carrusel">
                  <Link href="/quienes-somos" className="item-link-carrusel color-naranja">CONOCE MÁS</Link>
                  <Link href="/contactos" className="item-link-carrusel color-azul">ESCRÍBENOS</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-button-next" ref={navigationNextRef}>
            <img src="/img/carrusel/next-right-arrow-svgrepo-com.svg" alt="Next" />
          </div>
          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <img src="/img/carrusel/left-arrow-svgrepo-com.svg" alt="Previous" />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrusel;
