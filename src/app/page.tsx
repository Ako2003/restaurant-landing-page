"use client"
import Image from "next/image";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import {EmblaOptionsType} from "embla-carousel";
import "@/app/css/embla.css"

const OPTIONS: EmblaOptionsType = { dragFree: true }


export default function Home() {
  return (
    <main>
        <section style={{ height: 'calc(100vh + 150px)' }}>
          <div className="main-background bg-norepeat bg-center h-full">
              <div className="container">
                <h4 className="pt-44 leading-10">BRASSERIE <br /> & BAR</h4>
              </div>
          </div>
        </section>

        {/* Our Menu */}
        <section className="py-10">
            <div className="container flex items-start gap-x-10">
                <h2>Our Menu</h2>
                <div>
                    <p className="max-w-[400px]">
                        I{"'"}m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <a href="/menu">
                        <p className="mt-10 uppercase text-xl underline">Explore Menu</p>
                    </a>
                </div>
            </div>
        </section>

        {/* Meal Images */}
        <section className="py-5">
            <div className="flex gap-x-5">
                <Image src={"/images/c837a6_672d04d8ce4b44a8b10f03e4f65e33d1~mv2.avif"} alt={"First Meal"} width={482} height={912} className="w-full h-[912px] object-cover" />
                <Image src={"/images/c837a6_d41ecdd313844ab48dacf8604cd46337~mv2.avif"} alt={"Second Meal"} width={482} height={912} className="w-full h-[912px] object-cover"/>
            </div>
        </section>

        {/* About Us */}
        <section className="bg-green">
            <div className="h-[759px]">
                <div className="flex justify-center items-center gap-x-5 h-full">
                    <h2 className="uppercase max-w-[500px] leading-20">It{"'"}s always more than good food</h2>
                    <div className="max-w-[500px] flex flex-col justify-between h-[210px]">
                        <p>I{"'"}m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <a>
                            <p className="uppercase text-xl underline">About us</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Moments */}
        <section className="my-10">
            <div className="container mb-20">
                <div className="flex items-end justify-between">
                    <h2 className="leading-14">PUREMENT MOMENTS</h2>
                    <p className="uppercase text-xl underline">Follow us</p>
                </div>
            </div>
            <div className="mt-20">
                <EmblaCarousel options={OPTIONS} />
            </div>
        </section>
    </main>
  );
}
