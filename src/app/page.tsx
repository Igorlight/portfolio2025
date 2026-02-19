"use client";
import Image from "next/image";
import MainButton from "./components/MainButton";
import { Plus } from "lucide-react";
import ProjectsSlider from "./components/ProjectsSlider";
import Link from "next/link";
import Logo from "./components/Logo";
import ProfileCard from "./components/ProfileCard";
export default function Home() {
  return (
    <div>
      <main className="max-w-[1632px] px-2 md:px-4 mx-auto font-sans">
        <section
          id="hero"
          className="grid grid-cols-16 min-h-[calc(100vh-64px)] relative"
        >
          <div className="flex flex-col justify-center col-span-16 md:col-span-4 relative">
            <div className="hidden md:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15 z-10"></div>
            <div className="hidden md:block absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15 z-10"></div>
            <p className="text-gray-500 font-mono text-xl">Портфолио</p>
            <h1 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[96px] font-bold leading-[1.05] md:w-[120%] mb-4 z-20 relative">
              <p>Канаев Игорь Сергеевич</p>
            </h1>
            <h2 className="text-gray-500 font-mono text-xl mb-4">
              Frontend разработчик, создающий современные веб-приложения
            </h2>
            <div>
              <MainButton
                text="Написать мне"
                address="https://wa.me/79141056954"
                target="_blank"
              />
              <MainButton
                text="Посмотреть проекты"
                className="border-y-0 border-b-1"
                address="#projects"
              />
            </div>
          </div>
          <div className="hidden md:col-span-12 md:relative md:flex items-center justify-center p-4">
            
            <div className="absolute inset-0 bg-diagonal-pattern"></div>
            <ProfileCard
  name="IGOR KANAEV"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  showUserInfo={false}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  behindGlowColor="rgba(125, 190, 255, 0.67)"
  iconUrl="/tech/react.svg"
  behindGlowEnabled
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
  behindGlowSize="50%"
/>
          </div>
        </section>
        <section className="relative py-20 md:py-40">
          <div className="grid grid-cols-16 absolute top-0 left-0 w-full h-full -z-10">
            <div className="col-span-4 w-full md:border-x md:border-white/15 h-full relative">
              <div className="absolute top-0 right-0 md:hidden bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15"></div>
              <div className="absolute top-0 left-0 md:hidden bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15"></div>
            </div>
            <div className="col-span-4 w-full h-full relative">
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15"></div>
            </div>
            <div className="col-span-4 w-full h-full relative">
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15"></div>
            </div>
            <div className="col-span-4 w-full h-full relative">
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-white/15"></div>
            </div>
          </div>
          <h3 className="text-center text-4xl font-bold mb-10">
            Основной стек технологий
          </h3>
          <ul className="grid grid-cols-16">
            <li className="flex items-center justify-center col-span-4 md:col-span-2 md:col-start-3 border-y md:border-l border-white/15 relative">
              <Image
                src="/tech/react.svg"
                alt="nextjs icon"
                width={200}
                height={200}
              />
              <Plus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-80 size-6" />
            </li>
            <li className="flex items-center justify-center col-span-4 md:col-span-2 border-y md:border-r border-white/15">
              <Image
                src="/tech/nextjs.svg"
                alt="nextjs icon"
                width={200}
                height={200}
              />
            </li>
            <li className="flex items-center justify-center col-span-4 md:col-span-2 border-y border-white/15">
              <Image
                src="/tech/tailwind.svg"
                alt="nextjs icon"
                width={200}
                height={200}
              />
            </li>
            <li className="flex items-center justify-center col-span-4 md:col-span-2 border-y md:border-r border-white/15">
              <Image
                src="/tech/zustand.svg"
                alt="nextjs icon"
                width={200}
                height={200}
              />
            </li>
            <li className="flex items-center justify-center col-span-4 col-start-5 md:col-span-2 border-b md:border-y border-white/15">
              <Image
                src="/tech/prisma.svg"
                alt="nextjs icon"
                width={200}
                height={200}
              />
            </li>
            <li className="flex items-center justify-center col-span-4 md:col-span-2 border-b md:border-y md:border-r border-white/15 relative">
              <Image
                src="/tech/postgresql.svg"
                alt="nextjs icon"
                width={200}
                height={200}
              />
              <Plus className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-80 size-6" />
            </li>
          </ul>
        </section>
        <section className="relative py-20 md:py-40">
          <div className="grid grid-cols-16 absolute top-0 left-0 w-full h-full">
            <div className="col-span-4 border-x border-white/15"></div>
            <div className="col-span-4 border-r border-white/15 relative">
              <div className="absolute inset-0 bg-diagonal-pattern"></div>
            </div>
            <div className="col-span-4 border-r border-white/15 relative">
              <div className="absolute inset-0 bg-diagonal-pattern"></div>
            </div>
            <div className="col-span-4 border-r border-white/15"></div>
          </div>
          <div className="sm:grid sm:grid-cols-16">
            <div className="col-span-8 flex flex-col justify-between gap-20 bg-background relative border border-white/15 p-4 md:p-5 lg:p-15">
              <p className="text-xl lg:text-2xl mb-4">
                Создаю современные веб-приложения с использованием
                React-экосистемы. Специализируюсь на frontend разработке с
                возможностью создания full-stack решений через Next.js API
                routes.
              </p>
              <h3 className="text-sm lg:text-xl text-gray-500">Обо мне</h3>
              <Plus className="absolute top-0 right-0 hidden sm:block translate-x-1/2 -translate-y-1/2 opacity-80 size-6 z-10" />
            </div>
            <div className="col-span-8 flex flex-col justify-between gap-20 bg-background relative border-b border-x sm:border-y sm:border-x-0 sm:border-r border-white/15 p-4 md:p-5 lg:p-15">
              <p className="text-xl lg:text-2xl mb-4">
                HTML, CSS, SCSS, REACT, NEXT, TAILWIND, ZUSTAND, CONTEXT API,
                SHADCN, PRISMA, REST API, POSTGRESQL.
              </p>
              <h3 className="text-sm lg:text-xl text-gray-500">
                Что я использую
              </h3>
            </div>
          </div>
        </section>
        <section className="relative py-20 md:py-40 border-x border-t border-white/15">
          <h3 id="projects" className="text-center text-4xl font-bold mb-10">
            Мои проекты
          </h3>
          <ProjectsSlider />
        </section>
      </main>
      <footer className="relative border-t border-white/15 text-sm pb-10 md:pb-0">
        <div className="md:grid md:grid-cols-16 max-w-[1632px] px-2 md:px-4 mx-auto">
          <div className="col-span-8 flex items-center justify-between px-4 pt-4 md:px-0 md:pt-0">
            <div className="flex flex-row items-center gap-4">
              <Logo className="py-0" />
              <p className="text-gray-500">© 2025 Канаев Игорь Сергеевич</p>
            </div>
          </div>
          <div className="col-span-4 border-l-0 md:border-l border-white/15 h-full px-4 pt-4 md:pb-40">
            <h3 className="mb-4 font-bold">Навигация</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-white/80 transition-colors"
                >
                  Наверх
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-white/80 transition-colors"
                >
                  Проекты
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 border-l-0 md:border-l border-white/15 h-full px-4 pt-4 md:pb-40">
            <h3 className="mb-4 font-bold">Контакты</h3>
            <ul className="flex flex-row gap-2">
              <li className="hover:-translate-y-1 transition-all ease-in-out">
                <Link href="https://wa.me/79141056954" target="_blank">
                  <Image
                    src="/socials/whatsapp.png"
                    width={30}
                    height={30}
                    unoptimized={true}
                    alt="whatsapp icon"
                    className="w-[30px] h-[30px]"
                  />
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-all ease-in-out">
                <Link href="https://t.me/Igorlajty" target="_blank">
                  <Image
                    src="/socials/telegram.png"
                    width={30}
                    height={30}
                    unoptimized={true}
                    alt="telegram icon"
                    className="w-[30px] h-[30px]"
                  />
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-all ease-in-out">
                <Link href="https://github.com/Igorlight/" target="_blank">
                  <Image
                    src="/socials/github.png"
                    width={30}
                    height={30}
                    unoptimized={true}
                    alt="github icon"
                    className="w-[30px] h-[30px]"
                  />
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-all ease-in-out">
                <Link href="https://vk.com/askalak" target="_blank">
                  <Image
                    src="/socials/vk.png"
                    width={30}
                    height={30}
                    unoptimized={true}
                    alt="vkontakte icon"
                    className="w-[30px] h-[30px]"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
