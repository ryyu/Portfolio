'use client'

import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import NameCard from "./components/NameCard";
import ExperienceCard from "./components/ExperienceCard";
import { useState } from "react";

export default function Home() {
  const experiences = [
    {
      name: "Kiddleton",
      Title: "Kiddleton Trade Up",
      subtitle: "Points Tracking and loyalty system for a Japanese Arcade in San Francisco.",
      points: [
              "Features an employee portal for tracking inventory and customer loyalty points built using NextJS.",
              "Features a customer facing form which allows them to create an account to track their points"
      ],
      exampleLink: "https://kiddleton-tradeup.vercel.app/",
      exampleLinkLabel: "Kiddleton Trade Up Demo",
    },
    {
      name: "Codago",
      Title: "Codago",
      subtitle: "Front end developer for the web application, BeHealth.",
      points: [
              "I update the landing page from Figma desgins and customer requests.",
              "Development is done in AngularJS.",
              "Implemented Mixpanel integration for links within the landing page to track user events."
      ],
      exampleLink: "https://gobehealth.org/#/mh",
      exampleLinkLabel: "gobehealth.org",
    },
    {
      name: "Resume",
      Title: "Resume",
      subtitle: "My resume for your reference",
      points: [],
      exampleLink: "",
      exampleLinkLabel: "",
    }
  ]

  const [selected, setSelected] = useState('Codago');

  const handleClick = (sel: string) => {
    console.log("Setting state to:", sel);

    setSelected(sel);
  }

  return (
    <MaxWidthWrapper>
      <div className="py-20 flex flex-1 gap-4 h-screen min-w-32">
        <div className="flex flex-col justify-start gap-4 pe-6">
          <h1 className="text-4xl">Ryan Yu</h1>
          <hr className="border-slate-500"></hr>
          <div className="flex flex-col gap-4">
              <p className="hover:text-slate-100" onClick={() => {handleClick('Codago')}}>Codago</p>
              <p className="hover:text-slate-100" onClick={() => {handleClick('Kiddleton')}}>Kiddleton</p>
              <p className="hover:text-slate-100" onClick={() => {handleClick('Resume')}}>Resume</p>
          </div>
        </div>


        <div className="inline-block h-full min-h-[1em] w-0.5 bg-slate-500"></div>

        
        {
          experiences.map((experience, idx) => {
            if(experience.name == selected) {
              return (
                <ExperienceCard 
                  key={idx}
                  Title={experience.Title}
                  subtitle={experience.subtitle}
                  points={experience.points}
                  exampleLink={experience.exampleLink}
                  exampleLinkLabel={experience.exampleLinkLabel}
                />
              )
            }
          })
        }
        {/* <div className="max-h-screen overflow-y-auto no-scrollbar ps-6">
          <ExperienceCard />
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
}


{/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac justo finibus neque hendrerit varius at sit amet tortor. Donec in commodo neque. Cras ut felis tincidunt, dignissim magna vitae, scelerisque tellus. Nulla efficitur erat eget urna sagittis, eu pharetra enim ultricies. In eu nisi a justo ultricies consequat in ac elit. Suspendisse odio est, porttitor ut nulla sed, pellentesque pharetra risus. Curabitur sed erat a lectus elementum congue. Integer eget leo quis nibh sodales ultricies sit amet in magna. In mollis suscipit elementum. Aliquam vehicula porttitor diam et molestie. Duis rhoncus mollis nulla eget faucibus.

Pellentesque ac aliquam risus. Fusce tristique ante justo. Aliquam massa justo, pellentesque id lobortis quis, lacinia vitae quam. Ut metus purus, convallis eget diam et, sodales rutrum est. Aliquam scelerisque est ac lacus scelerisque sodales. Maecenas ligula eros, gravida ut nibh sed, convallis egestas risus. Nunc rhoncus tempus pulvinar. Nunc consequat mauris nec iaculis dapibus. Praesent dui felis, vehicula ut ante ac, porttitor posuere nisl. Nulla magna orci, tristique id dignissim nec, semper ut neque. Mauris ac tempus purus, ut porta sem. Integer at dignissim nisl. Duis vitae felis eu lorem scelerisque vehicula.

Praesent pretium ullamcorper convallis. Aenean in sapien congue, maximus sem sit amet, efficitur mi. Aliquam et fringilla arcu, eget elementum enim. Sed viverra feugiat magna vitae lobortis. Nam sagittis neque nec sollicitudin aliquet. Vestibulum mattis pharetra velit, quis cursus lectus venenatis nec. Nullam blandit purus elit, nec tincidunt sem consequat cursus. Aenean varius neque massa. Sed efficitur sapien id nisi tincidunt, sed luctus dolor faucibus. Suspendisse viverra varius tristique. Nulla a dui iaculis, vulputate orci et, tincidunt quam. Pellentesque facilisis eros odio, sed elementum enim congue ac. Nulla aliquet consectetur convallis. Sed eget lorem at mi bibendum lobortis. Praesent consequat orci felis, ut vehicula erat convallis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Aenean et ex ante. Nunc mattis interdum sapien, id tempus lorem ullamcorper ultricies. Fusce placerat volutpat libero, at bibendum nibh semper et. Mauris convallis diam mauris, vel elementum massa luctus sit amet. Pellentesque eget orci libero. Maecenas ut nulla porta, luctus ipsum id, tincidunt arcu. Vivamus ac ornare nisl. Integer porttitor lorem feugiat, feugiat sapien id, venenatis enim. Nullam egestas ante eget dapibus commodo. Nam tristique euismod orci, a maximus justo mollis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vitae orci in neque fringilla suscipit vitae a lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum nec risus dignissim odio ultricies feugiat vitae id lectus. Praesent hendrerit arcu dui, ac vulputate neque ultricies et.

Aliquam erat volutpat. Vivamus sit amet ipsum quis nisi volutpat blandit at vel ante. Sed libero ligula, tempor sit amet mollis in, sodales et quam. Vivamus ultricies sem eu pretium commodo. Quisque at leo consequat, efficitur libero ultricies, suscipit dolor. Integer ut felis iaculis, vestibulum nisi pulvinar, egestas felis. Maecenas aliquam velit ultrices metus vulputate imperdiet. Morbi luctus leo sit amet cursus tincidunt. Sed convallis ullamcorper pulvinar. Sed ullamcorper lobortis velit et imperdiet. Duis varius felis et fringilla feugiat. Maecenas sed lacus metus. Donec ullamcorper velit leo, eu ultricies lorem dapibus ut.</span> */}