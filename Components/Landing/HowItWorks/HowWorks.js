import Image from "next/image";

export default function HowWorks() {
  return (
    <div>
      <div className="px-[8.3vw] flex flex-col gap-[12vh]">
        <div className="flex flex-col items-start">
          <h4>How it Works</h4>
          <h1 className="text-[28px] lg:text-5xl font-bold align-center 2xl:text-[72px]">
            How it Works ?
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[2vh]">
            <Image src={"/Map.png"} width={364} height={104}></Image>
            <div className="flex flex-col gap-[0.5vh]">
              <h1 className="font-bold text-3xl">Map</h1>
              <p className="text-xl">Turn your idea from concept to MVP</p>
            </div>
          </div>

          <div className="flex flex-col gap-[2vh]">
            <Image src={"/Farmers.png"} width={364} height={104}></Image>
            <div className="flex flex-col gap-[0.5vh]">
              <h1 className="font-bold text-3xl">Product</h1>
              <p className="text-xl">
                Sketch out the product to align the user needs
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[2vh]">
            <Image src={"/Products.png"} width={364} height={104}></Image>
            <div className="flex flex-col gap-[0.5vh]">
              <h1 className="font-bold text-3xl">List of Farmers</h1>
              <p className="text-xl">
                Convert the designs into a live application
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[2vh]">
            <Image src={"/Contact.png"} width={104} height={104}></Image>
            <div className="flex flex-col gap-[0.5vh]">
              <h1 className="font-bold text-3xl">Contact</h1>
              <p className="text-xl">Launching the application to the market</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
