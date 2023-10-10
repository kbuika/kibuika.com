import clsx from "clsx";

import Image from "next/image";

import { getSiteMetaData } from "@utils/helpers";
import profilePicture from "@/content/assets/profile.jpg";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx("flex flex-wrap items-center space-x-3 justify-between lg:mt-24 lg:flex-nowrap", className)}>
      <p className="text-base leading-7 lg:text-lg">
        Hello there, I am <strong>Steve Kibuika</strong>, I have been writing a lot of TypeScript and Javascript recently.
        <br />
        I am still wrapping my head around Next.js App Router.
        <br />
        Recently, I have been telling dad jokes and speaking to interesting people at <a href="https://anchor.fm/concurrency-podcast" target="_blank" rel="noopener noreferrer">The Concurrency Podcast</a>. 
        I write code and run operations at an events agency - <a href="https://tikomatata.com/" target="_blank" rel="noopener noreferrer">Tikomatata</a>, I am experimenting with Go and Ruby.
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
