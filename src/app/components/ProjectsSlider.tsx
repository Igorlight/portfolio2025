"use client";
import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsData } from "../data/projectsData";
import Image from "next/image";
import MainButton from "./MainButton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


export default function ProjectsSlider() {
  return (
    <div>
      <div className="w-full flex items-center justify-between mb-4 px-4 gap-4">
      <div className="swiper-pagination-custom flex flex-wrap gap-4"></div>
        <button className="swiper-button-prev-custom p-4 border border-white/15 cursor-pointer">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        
        
        <button className="swiper-button-next-custom p-4 border border-white/15 cursor-pointer">
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white/30 inline-block"></span>`;
          },
        }}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={500}
        noSwiping={true}
        noSwipingClass="swiper-slide"
        className="w-full"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="grid grid-cols-16 border-y border-white/15">
              {/* Ваш контент слайда */}
              <div className="md:col-span-6 col-span-16 flex flex-col justify-between">
                <div className="p-4">
                  <h3 className="text-2xl mb-4">{project.title}</h3>
                  <p className="text-gray-500 font-mono text-sm leading-6 mb-2">{project.descr}</p>
                  {project.descr2 ? <p className="text-gray-500 font-mono text-sm leading-6">{project.descr2}</p> : null}
                </div>
                <div className="w-full">
                  <div className="px-4">
                    <p>Стек проекта</p>
                    <div className="flex flex-wrap">
                      {project.tech.length > 0
                        ? project.tech.map((tech) => (
                          <Tooltip key={tech.alt} delayDuration={0}>
                            <TooltipTrigger>
                            <Image
                              src={tech.img}
                              alt={tech.alt}
                              width={80}
                              height={80}
                            />
                            </TooltipTrigger>
                            <TooltipContent>{tech.name}</TooltipContent>
                          </Tooltip>
                          ))
                        : "Нет информации"}
                    </div>
                  </div>
                  {project.link ? (
                    <MainButton
                      text="Перейти на сайт"
                      address={project.link}
                      className="border-b-0"
                      target="_blank"
                    />
                  ) : null}
                </div>
              </div>
              <div className="md:col-span-10 col-span-16 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-diagonal-pattern"></div>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={998}
                  height={720}
                  className="relative z-20"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}