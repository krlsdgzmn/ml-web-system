import model0 from "@/assets/model0.svg";
import model1 from "@/assets/model1.svg";
import model2 from "@/assets/model2.svg";
import model3 from "@/assets/model3.svg";
import Header from "@/components/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    { src: model0, title: "Cargo Pants", price: "PHP 799" },
    {
      src: model1,
      title: "Graphic Oversized-T",
      price: "PHP 899",
    },
    {
      src: model2,
      title: "Oversized T-Shirt and Cargo Shorts",
      price: "PHP 1299",
    },
    { src: model3, title: "T-Shirt and Cargo Shorts", price: "PHP 1299" },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto flex min-h-[75vh] justify-center text-base">
        <section className="h-full w-full py-8">
          <h1 className="bg-gradient-to-b from-gray-500 to-black bg-clip-text pb-2 text-center text-5xl font-bold text-transparent dark:to-white">
            MKSG Clothing
          </h1>
          <p className="text-center text-lg text-foreground/80">
            Gallery section of MKSG Clothing
          </p>

          <div className="container mx-auto py-10">
            <Carousel>
              <CarouselPrevious />
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card>
                      <CardHeader className="relative h-[425px]">
                        {isLoading && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <AiOutlineLoading3Quarters
                              className="animate-spin"
                              size={24}
                            />
                          </div>
                        )}
                        <Dialog>
                          <DialogTrigger>
                            <img
                              src={image.src}
                              alt={image.title}
                              className={`h-[375px] w-full rounded object-cover object-top ${
                                isLoading ? "hidden" : ""
                              }`}
                              onLoad={() => setIsLoading(false)}
                            />
                          </DialogTrigger>
                          <DialogContent>
                            <img
                              src={image.src}
                              alt={image.title}
                              className={`rounded ${isLoading ? "hidden" : ""}`}
                              onLoad={() => setIsLoading(false)}
                            />
                          </DialogContent>
                        </Dialog>
                      </CardHeader>
                      <CardContent className="flex h-20 flex-col justify-end">
                        <h2 className="text-sm font-semibold">{image.title}</h2>
                        <p className="text-sm text-foreground/60">
                          {image.price}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}
