/* eslint-disable no-unused-vars */

import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useEffect, useRef, useState } from "react";
import sself from "./sself.jpg";

import GlareHover from "/src/Animations/GlareHover/GlareHover.jsx";
import SpotlightCard from "/src/components/SpotlightCard/SpotlightCard.jsx";
import ShinyText from "/src/TextAnimations/ShinyText/ShinyText.jsx";
import TiltedCard from "/src/components/TiltedCard/TiltedCard.jsx";
import self2 from "./self2.jpg";

import CardSwap, { Card } from "/src/components/CardSwap/CardSwap.jsx";
import thesis from "./thesis.jpg";

import web from "./web.gif";
import appsheet from "./appsheet.gif";
import template from "./template.gif";
import igb from "./ig.jpg";
import mail from "./mail.jpg";
import Mailicon from "./mailicon.svg";
import githubb from "./github.jpg";

export default function Home() {
  const root = useRef(null);
  const scope = useRef(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate(".logo", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: false,
        loopDelay: 250,
      });

      // createHover('.logo', {
      //   hover:[{ scale: [
      //     { to: 1.25, ease: 'inOut(3)', duration: 200 },
      //     { to: 1, ease: createSpring({ stiffness: 300 }) }
      //   ] }]
      // });

      // Make the logo draggable around its center
      createDraggable(".logo", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      // Register function methods to be used outside the useEffect
      self.add("rotateLogo", (i) => {
        animate(".logo", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  const handleClick = () => {
    setRotations((prev) => {
      const newRotations = prev + 1;
      // Animate logo rotation on click using the method declared inside the scope
      scope.current.methods.rotateLogo(newRotations);
      return newRotations;
    });
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div
      className="justify-items-center grid container mx-auto max-w-full p-5 font-bold mb-30"
      ref={root}
    >
      <ShinyText
        text="Fankrits"
        disabled={false}
        speed={5}
        className="select-none text-5xl sm:text-7xl md:text-9xl mb-8 text-center align-middle animate-shine @keyframes shine animate-shine"
      />

      {/* <BlurText
        text="Fankrits"
        delay={500}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-5xl sm:text-7xl md:text-9xl mb-8 text-center align-middle animate-shine @keyframes shine animate-shine"
      /> */}

      <div className="relative mb-10">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          className="rounded-full padding-2 relative logo hover:scale-110 "
          playOnce={false}
        >
          <img
            onClick={handleClick}
            src={sself}
            draggable="false"
            alt="sself"
            className="centered row w-30 md:w-50 flex aspect-square rounded-full shadow-lg  "
          />
        </GlareHover>
      </div>

      <ShinyText
        text="Welcome to my website a space dedicated to showcasing my work and creative journey. Here, you'll find a curated collection of my projects, reflecting my skills, passions, and dedication to my craft. Let you explore the different sections and get a sense of who I am as a creator."
        disabled={false}
        speed={3}
        className="text-center w-full mb-10 md:w-3xl select-none"
      />
      {/* <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]  @keyframes infiniteSlider">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div> */}

      <div className="flex w-full flex-wrap-reverse lg:flex-row justify-center items-center gap-10">
        <TiltedCard
          //imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          imageSrc={self2}
          //altText="About Me"
          captionText="About Me"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          className="w-sm lg:w-3xl"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="p-5 w-full h-full ">
              <p className=" bg-white/80 rounded-full p-2 text-black/80 w-fit mb-5 select-none">
                About Me
              </p>
              <p className="select-none bg-transparent hover:glass focus:glass active:glass focus:text-white active:text-white rounded-2xl p-2 text-transparent hover:text-white duration-300 text-sm text-justify hover:text-shadow-lg/30 focus:text-shadow-lg/30 active:text-shadow-lg/30">
                Hi! I'm Fankrits, a student at Thammasat University, majoring in
                Mathematics. I have a passion for web development and enjoy
                creating applications that solve real-world problems. In my free
                time, I love to explore new technologies and work on personal
                projects.
              </p>
            </div>
          }
        />
        <div classname=" grid justify-around gap-10">
          <TiltedCard
            imageSrc={igb}
            altText=" "
            className="p-2 wrap-nowrap w-300 mt-5 mb-5"
            captionText="instagram"
            containerHeight="50px"
            containerWidth="300px"
            imageHeight="50px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <a
                href="https://www.instagram.com/fankrits"
                className="flex flex-nowrap justify-center align-middle text-center items-center justify-items-center w-60 p-3 gap-2"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                >
                  <title>Instagram icon</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
                <a className="text-white">Fankrits</a>
              </a>
            }
          />
          <div className="h-5"></div>
          <TiltedCard
            imageSrc={githubb}
            altText=" "
            className="p-2 wrap-nowrap w-300 mt-5 mb-5"
            captionText="Github"
            containerHeight="50px"
            containerWidth="300px"
            imageHeight="50px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <a
                href="https://github.com/fankritsada"
                className="flex flex-nowrap justify-center align-middle text-center items-center justify-items-center w-60 p-3 gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <a className="text-white">fankritsada</a>
              </a>
            }
          />
          <div className="h-5"></div>
          <TiltedCard
            imageSrc={mail}
            altText=" "
            className="p-2 wrap-nowrap w-300 mt-5 mb-5"
            captionText="Send email"
            containerHeight="50px"
            containerWidth="300px"
            imageHeight="50px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <a
                href="mailto:contact@fankrits.com"
                className="flex flex-nowrap justify-center align-middle text-center items-center justify-items-center w-60 p-3 gap-2"
              >
                <img src={Mailicon} className="w-8 "></img>
                <a className="text-white">contact@fankrits.com</a>
              </a>
            }
          />
        </div>
      </div>

      {/* <div className="bg-black rounded-2xl w-full mt-10">
        <div
          className="w-full grid grid-cols-4 grid-rows-1 gap-0 rounded-2xl  mt-10 p-5 "
          style={{ height: "30vw", position: "relative" }}
        >
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="up"
            pauseOnHover={true}
          />
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="up"
            pauseOnHover={true}
          />
        </div>
      </div> */}
      <div id="thesis" className="mb-10"></div>
      <div
        className="custom-spotlight-card  h-fit flex mt-15 w-full flex-wrap-reverse md:flex-nowrap"
        //spotlightColor="rgba(150, 100, 230, 0.8)"
      >
        <img
          src={thesis}
          className="w-full justify-start  mask-b-from-5% mask-b-to-80% rounded-t-2xl hover:mask-b-from-10%  hover:mask-b-to-85% hover:duration-500  hover:-translate-y-5 transition ease-in-out duration-500 hover:scale-105"
        />
        <div className="grid justify-center p-10">
          <ShinyText
            text="Thesis"
            disabled={false}
            speed={3}
            className="select-none text-4xl md:text-5xl w-full text-center md:text-start "
          />
          <ShinyText
            text="On the Bounds for Spectral Norm of Some Circulant Matrix Types with the Gaussian Padovan Numbers"
            disabled={false}
            speed={3}
            className="select-none text-sm md:text-sm lg:text-xl mb-5 w-full md:text-justify text-center"
          />
          <a
            className="select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            href="/thesis"
          >
            Read
          </a>
        </div>
      </div>
      <div id="hobby" className="mb-10"></div>
      <div className=" mt-20 w-full overflow-x-clip">
        <div className="w-full ">
          <ShinyText
            text="Hobby"
            disabled={false}
            speed={3}
            className="select-none text-4xl md:text-5xl w-full text-center md:text-start "
          />
          <ShinyText
            text="This section showcases my hobbies and interests outside of academics. I enjoy exploring various activities that fuel my creativity and passion."
            disabled={false}
            speed={3}
            className="select-none text-sm md:text-sm lg:text-xl   mb-5 md:w-1/3 md:text-justify  text-center"
          />
          {/* <a
            className="select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            href="/thesis"
          >
            Web Develop
          </a>
          <a
            className="select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            href="/thesis"
          >
            Video Editing
          </a>
          <a
            className="select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            href="/thesis"
          >
            AppSheet
          </a>
          <a
            className="select-none btn z-20 flex bg-white/60 text-black hover:bg-white hover:text-black rounded-full duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            href="/thesis"
          >
            VRJTD
          </a> */}
        </div>

        <div className="relative max-w-full scale-80 mr-40 mt-50 md:ml-100 md:mr-20 md:mt-80 lg:scale-100 lg:ml-80 lg:mr-30 lg:mt-60 ">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <SpotlightCard
                className="custom-spotlight-card w-full h-full flex flex-col"
                spotlightColor="rgba(250, 250, 250, 0.8)"
              >
                <ShinyText
                  text="Web Development"
                  disabled={false}
                  speed={3}
                  className="mb-5 text-xl"
                />
                <div className="flex flex-nowrap items-center  h-full">
                  <a
                    className="select-none border-1 h-fit w-full text-xl opacity-40 hover:opacity-100 btn  flex bg-white text-black  hover:text-black rounded-2xl duration-300 ease-in-out hover:translate-y-1 hover:-translate-x-1 hover:scale-102"
                    href="/Hobby/Web"
                  >
                    <img
                      src={web}
                      className="w-50 object-cover rounded-2xl flex opacity-30 justify-start"
                    />
                    Web Development
                  </a>
                </div>
              </SpotlightCard>
            </Card>

            <Card>
              <SpotlightCard
                className="custom-spotlight-card w-full h-full flex flex-col"
                spotlightColor="rgba(250, 250, 250, 0.8)"
              >
                <ShinyText
                  text="AppSheet"
                  disabled={false}
                  speed={3}
                  className="mb-5 text-xl"
                />
                <div className="flex flex-nowrap items-center  h-full">
                  <a
                    className="select-none border-1 h-fit w-full text-xl opacity-40 hover:opacity-100 btn  flex bg-white text-black  hover:text-black rounded-2xl duration-300 ease-in-out hover:translate-y-1 hover:-translate-x-1 hover:scale-102"
                    href="/Hobby/Appsheet"
                  >
                    <img
                      src={appsheet}
                      className="w-50 object-cover rounded-2xl flex opacity-30 justify-start"
                    />
                    AppSheet
                  </a>
                </div>
              </SpotlightCard>
            </Card>

            <Card>
              <SpotlightCard
                className="custom-spotlight-card w-full h-full flex flex-col"
                spotlightColor="rgba(250, 250, 250, 0.8)"
              >
                <ShinyText
                  text="VRJTD"
                  disabled={false}
                  speed={3}
                  className="mb-5 text-xl"
                />
                <div className="flex flex-nowrap items-center  h-full">
                  <a
                    className="select-none border-1 h-fit w-full text-xl opacity-40 hover:opacity-100 btn  flex bg-white text-black  hover:text-black rounded-2xl duration-300 ease-in-out hover:translate-y-1 hover:-translate-x-1 hover:scale-102"
                    href="/VRJTD"
                  >
                    <img
                      src={template}
                      className="w-50 object-cover rounded-2xl flex opacity-30 justify-start"
                    />
                    VRJTD
                  </a>
                </div>
              </SpotlightCard>
            </Card>

            <Card>
              <SpotlightCard
                className="custom-spotlight-card w-full h-full flex flex-col"
                spotlightColor="rgba(250, 250, 250, 0.8)"
              >
                <ShinyText
                  text="Video Editing"
                  disabled={false}
                  speed={3}
                  className="mb-5 text-xl"
                />
                <div className="flex flex-nowrap items-center  h-full">
                  <a
                    className="select-none border-1 h-fit w-full text-xl opacity-40 hover:opacity-100 btn  flex bg-white text-black  hover:text-black rounded-2xl duration-300 ease-in-out hover:translate-y-1 hover:-translate-x-1 hover:scale-102"
                    href="/Hobby/Videoedit"
                  >
                    <img
                      src={web}
                      className="w-50 object-cover rounded-2xl flex opacity-30 justify-start"
                    />
                    Video Editing
                  </a>
                </div>
              </SpotlightCard>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}
