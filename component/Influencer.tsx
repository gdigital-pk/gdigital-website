"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

import { StaticImageData } from "next/image";

type Person = {
  img: string | StaticImageData; // <-- allow imported images
  name: string;
  role: string;
};

type InfluencerProps = {
  people: Person[];
};

export default function Influencer({ people }: InfluencerProps) {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      freeMode={true}
      speed={4000}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      breakpoints={{
        320: { slidesPerView: 1.2 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {people.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={person.img}
              alt={person.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent p-6 flex flex-col justify-end">
              <p className="text-gray-900 text-lg font-bold">{person.name}</p>
              <p className="text-[#129F68] text-md">{person.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}