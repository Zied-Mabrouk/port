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
    <div className="w-[290px] bg-secondary h-full flex flex-col relative z-10">
      <div className="flex justify-center items-center aspect-square bg-accent z-10 w-full h-[360px] ">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/img/me.png"
            width={100}
            height={100}
            alt="profile picture"
          />
          <h1 className="text-white font-semibold tracking-wide">
            Amin Dhouib
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
                <h6 key={index} className="text-xs">
                  {label}
                </h6>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {sideBar.infos.map(({ content, link }, index) => (
                <a
                  href={link}
                  key={index}
                  className={`text-xs text-grey-text text-right ${
                    link ? "underline-offset-2 underline" : ""
                  }`}
                >
                  {content}
                </a>
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
          {sideBar.skillsTypes.map((skillsType, index) => (
            <>
              <div className="grid grid-cols-3 px-8 gap-2 relative">
                <div className="absolute right-0 vertical-text h-full flex justify-center">
                  {skillsType.label}
                </div>
                <>
                  {skillsType.list.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                  ))}
                </>
              </div>
              <Separator />
            </>
          ))}
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
            alt="fb icon"
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
            alt="github icon"
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
            alt="linkedin icon"
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
