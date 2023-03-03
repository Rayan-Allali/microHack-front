import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="w-full overflow-hidden flex items-center justify-between px-[8.3vw] z-1">
        <Image src={"/About.png"} width={778} height={778}></Image>
        <div className="flex flex-col gap-[4.2vh]">
          <div className="flex flex-col items-start">
            <h4>About us</h4>
            <h1 className="text-[28px] lg:text-5xl font-bold align-center 2xl:text-[72px]">
              About AgriConnect{" "}
            </h1>
          </div>
          <p className="max-w-[33vw] text-[1.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <Image
        className="w-full mt-[-50vh] -z-1"
        src={"/Line.svg"}
        width={1920}
        height={348}
      ></Image>
    </div>
  );
}
