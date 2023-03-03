import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full overflow-hidden">
      <Image
        className="absolute top-[20vh]"
        src={"/arrow-bg.svg"}
        width={280}
        height={260}
      ></Image>
      <Image
        className="absolute top-[40vh] right-0"
        src={"/arrow-bg-2.svg"}
        width={280}
        height={260}
      ></Image>

      <h1 className="text-7xl font-bold max-w-[64vw] text-center mt-[20vh] mx-auto">
        Revolutionizing Farm-to-Market with
        <span className="text-[#34986E]"> Digital</span> Solutions
      </h1>
      <p className="max-w-[43vw] text-center mt-[12vh] mx-auto text-[20px] text-[#444444]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>

      <div className="bg-[#033323] max-w-[12vw] px-[2.5vw] py-[2vh] text-2xl text-white rounded-[1.2rem] text-center mt-[5vh] mx-auto">
        Get Started
      </div>

      <div className="bg-[url('/Image-Hero.png')] h-[90vh] w-full bg-cover"></div>
    </div>
  );
}
