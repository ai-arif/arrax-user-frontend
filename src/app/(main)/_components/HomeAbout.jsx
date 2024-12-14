"use client";

import Container from "@/components/ui/Container";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeAboutContents } from "../../../../public/data/homeAbout";

const HomeAbout = () => {
  return (
    <Container>
      <div>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: {
              // slidesPerView: "auto-fill",
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          pagination={{ dynamicBullets: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
        >
          {homeAboutContents?.map((content) => {
            return (
              <SwiperSlide key={content.id}>
                {/* Review Card */}
                <div className="mb-12 rounded-md border px-8 pb-6 pt-16 shadow-lg md:mb-16">
                  <div>
                    <h4 className="mb-4 text-lg font-bold">{content.title}</h4>
                    <p>{content.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default HomeAbout;
