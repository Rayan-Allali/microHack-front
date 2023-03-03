import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-[3.5vh]">
      <div className="w-screen bg-cover bg-[url('/footer-bg.png')] flex items-center justify-between px-[8.3vw] py-[18vh]">
        <div>
          <Image src={"/Logo.png"} width={448} height={226}></Image>
        </div>
        <div className="flex gap-[5.4vw]">
          <div className="flex flex-col gap-[2.5vh]">
            <h2 className="font-bold upper">About us </h2>
            <ul className="flex flex-col gap-[2.22vh]">
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[2.5vh]">
            <h2 className="font-bold upper">About us </h2>
            <ul className="flex flex-col gap-[2.22vh]">
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[2.5vh]">
            <h2 className="font-bold upper">About us </h2>
            <ul className="flex flex-col gap-[2.22vh]">
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
              <li className="flex gap-[0.6vw]">
                <Image src={"/arrow-right.svg"} width={10} height={18}></Image>
                <p className="text-[#929292]"> Mission and vision</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="">copyright, All Rights Resreved</h3>
    </div>
  );
}
