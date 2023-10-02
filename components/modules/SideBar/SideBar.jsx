import { LanguageContext } from "@/pages/_app";
import Image from "next/image";
import React from "react";
import ProgressBar from "../../cores/ProgressBar/ProgressBar";
import Skill from "../../cores/Skill/Skill";
import Separator from "../../cores/separator";

const SideBar = () => {
  const [language] = React.useContext(LanguageContext);
  const sideBar = language.sideBar;
  let [activeBar, setActiveBar] = React.useState(false);
  return (
    <div className="max-w-[290px] w-[30vw] bg-secondary h-full flex flex-col relative">
      <div className="flex justify-center items-center aspect-square bg-accent z-10 w-full h-[30vw] max-h-[290px]">
        <div className="flex flex-col gap-4 items-center">
          <Image src="/images/me.png" width={100} height={100} />
          <h1 className="text-white font-semibold tracking-wide">
            Zied Mabrouk
          </h1>
          <p className="capitalize text-grey-text text-xs">
            full stack developer
          </p>
        </div>
      </div>
      <div className="h-full overflow-y-auto relative sidebar w-full">
        <div className="flex flex-col gap-8 py-8 ">
          <div className="px-8 flex justify-between">
            <div className="flex flex-col gap-2">
              {sideBar.infos.map(({ label }, index) => (
                <h6 className="text-xs">{label}</h6>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {sideBar.infos.map(({ content }, index) => (
                <h6 key={index} className="text-xs text-grey-text text-right">
                  {content}
                </h6>
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex flex-wrap px-8 justify-around">
            {sideBar.languages.map((language, index) => (
              <ProgressBar key={index} {...language} />
            ))}
          </div>
          <Separator />
          <div className="grid grid-cols-3 px-8 gap-2 relative">
            {sideBar.hardSkills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
            <div className="absolute right-0 vertical-text h-full flex justify-center">
              hard skills
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 px-8 gap-2 relative">
            {sideBar.otherSkills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
            <div className="absolute right-0 vertical-text h-full flex justify-center">
              soft skills
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-12 min-h-[48px] relative px-8 justify-evenly items-center bg-accent">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/zied.mabrouk.1042/"
          className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-25"
        >
          <Image
            src="./img/icons/fb.svg"
            alt=""
            className="p-1"
            width={25}
            height={25}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/zied.mabrouk.1042/"
          className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-25"
        >
          <Image
            src="./img/icons/github.svg"
            alt=""
            className="p-1"
            width={25}
            height={25}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/zied.mabrouk.1042/"
          className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-25"
        >
          <Image
            src="./img/icons/linkedin.svg"
            alt=""
            className="p-1"
            width={25}
            height={25}
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
