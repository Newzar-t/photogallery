'use client';

import "./globals.css";
import Gallery from "./Gallery";

const photos1 = [
  {
    credit: "Alexander Lunyov",
    url: "/alexander-lunyov-CC-ygtIuZWA-unsplash.jpg",
  },
  {
    credit: "Aleksandra Zienkiewicz",
    url: "/aleksandra-zienkiewicz-bHsLLBsJu8Y-unsplash.jpg",
  },
  {
    credit: "Ana Klipper",
    url: "/ana-klipper-mIRLbBN9TZk-unsplash.jpg",
  },
];

const photos2 = [
  {
    credit: "Anna Zaro",
    url: "/anna-zaro-7zrPWuzAM2E-unsplash.jpg",
  },
  {
    credit: "Matt Wang",
    url: "/matt-wang-amjEdKaUh0Q-unsplash.jpg",
  },
  {
    credit: "Peter Thomas",
    url: "/peter-thomas-T-33kxpsAlY-unsplash.jpg",
  },
  {
    credit: "Mustafa Akin",
    url: "/mustafa-akin-BEgiMxFQLZc-unsplash.jpg",
  },
];

const photos3 = [
  {
    credit: "Hai Phung",
    url: "/hai-phung-0z76nwoF1OI-unsplash.jpg",
  },
  {
    credit: "Antoine Gravier",
    url: "/antoine-gravier-IH8fBjdZlrQ-unsplash.jpg",
  },
  {
    credit: "Livia",
    url: "/livia-z7PAkCMyOFg-unsplash.jpg",
  },
];

const photos4 = [
  {
    credit: "Elijah Pilchard",
    url: "/elijah-pilchard-5QHUhsXPNeM-unsplash.jpg",
  },
  {
    credit: "Katherine Mcadoo",
    url: "/katherine-mcadoo-fI1aVrdXh6A-unsplash.jpg",
  },
  {
    credit: "Kian Zhang",
    url: "/kian-zhang-ODuim03e_Qc-unsplash.jpg",
  },
];


const galleryDefaultStyle = "w-[20%] min-w-60 h-fit grid grid-cols-[1fr] gap-[2rem]";

export default function HomePage() {
  return (
    <html lang="en">
      <body className="flex flex-col items-center content-center gap-[4rem]">
        <h1 className="text-3xl font-bold mt-8">Gallery</h1>

        <div className="w-[95%] h-[100%] flex items-start justify-center gap-[3rem]">
          <Gallery style={galleryDefaultStyle} photos={photos1} />
          <Gallery style={galleryDefaultStyle} photos={photos2} />
          <Gallery style={galleryDefaultStyle} photos={photos3} />
          <Gallery style={galleryDefaultStyle} photos={photos4} />
        </div>
      </body>
    </html>
  );
}
