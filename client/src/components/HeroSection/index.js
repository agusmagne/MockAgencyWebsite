import React, { useState } from "react";
import background from "../../videos/background.mp4";
import Button from "../Button";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(!hover);
  }

  return (
    <>
      <HeroContainer>
        <HeroBackground>
          <VideoBackground
            autoPlay
            loop
            muted
            src={background}
            type="video/mp4"
          />
        </HeroBackground>
        <HeroContent>
          <HeroH1>Web design specially made for you</HeroH1>
          <HeroP>
            Sign up to our newsletter today and get a 15% discount on your
            totally personalized website
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="/signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
