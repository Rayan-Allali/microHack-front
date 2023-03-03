import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-screen bg-white px-[8.3vw] flex justify-between py-[2.5vh]">
      <Image src={"/Logo.png"} width={142} height={72}></Image>
      <div className="flex gap-[3.5vw] items-center">
        <ul className="flex gap-[3.6vw]">
          <li>Home</li>
          <li>About</li>
          <li>How it works</li>
          <li>FAQ</li>
        </ul>
        <div className="bg-[#E1E1E1] w-[1px] h-[56px]"></div>
        <div className="flex gap-[1.6vw]">
          <p>Eng</p>
          <Image src={"/arrow-down.svg"} width={14} height={9}></Image>
        </div>
      </div>
    </div>
  );
}
