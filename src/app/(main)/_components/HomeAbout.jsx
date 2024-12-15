"use client";

import Container from "@/components/ui/Container";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeAboutContents } from "../../../../public/data/homeAbout";

const HomeAbout = () => {
  return (
    <Container>
      <div>
        <Swiper
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, FreeMode]}
        >
          {homeAboutContents?.map((content) => {
            return (
              <SwiperSlide key={content.id}>
                {/* Card */}
                <div className="h-[300px] space-y-4 rounded-xl border border-zinc-500 p-8 text-center sm:h-[330px] md:h-[360px] md:space-y-5 lg:h-[420px]">
                  <div className="inline-block text-6xl text-arx-primary">
                    {content.icon}
                  </div>
                  <h4 className="text-custom-style text-xl font-bold md:text-2xl">
                    {content.title}
                  </h4>
                  <p className="text-zinc-300">{content.description}</p>
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
