import clsx from "clsx";

import Image from "next/image";

import { getSiteMetaData } from "@utils/helpers";
import profilePicture from "@/content/assets/profile.jpg";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx("flex flex-wrap items-center space-x-3 justify-between lg:mt-24 lg:flex-nowrap", className)}>
      <p className="text-base leading-7 lg:text-lg">
        Hello there, I am <strong>Steve Kibuika</strong>, to say I love Javascript would be an understatement.
        <br />
        I like to build great experiences for the web and experimenting with esoteric features of Javascript.
        <br />
        Currently, I am a Fullstack Developer at <a href="https://granularit.com/">Granular IT</a> by day and by night, I am experimenting with TypeScript and Go.
        <br />
        <br />
        I am cool on{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          twitter
        </a>, I promise.
      </p>
      <div className="flex-shrink-0 mb-0 overflow-hidden mt-8">
        <Image
          width={300}
          height={300}
          src={profilePicture}
          alt="Profile"
          placeholder="blur"
        />
      </div>

      
    </div>
  );
}
