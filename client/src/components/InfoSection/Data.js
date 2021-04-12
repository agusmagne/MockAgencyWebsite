import toTheMoon from "../../images/to_the_moon.svg";
import data from "../../images/data.svg";
import invest from "../../images/invest.svg";
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Top quality display",
  headline: "Get ready to blow up",
  description:
    "Professional website and business analysis is what you need to get to your point B. We'll get you there",
  buttonLabel: "Contact us now",
  imgStart: false,
  img: toTheMoon,
  alt: "To the moon",
  dark: true,
  primary: true,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Feed your business with the right data",
  headline: "We understand your needs",
  description:
    "Getting your data together is one of the most important things to do in order for you to know, well... what to do. We take care of that. Trust us",
  buttonLabel: "How we manage your data",
  imgStart: true,
  img: data,
  alt: "To the moon",
  dark: true,
  primary: false,
};

export const homeObjThree = {
  id: "invest",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "You're our best investment",
  headline: "Using your money wisely",
  description:
    "Taking care of your money is our top priority. We work hard for you to earn as much as possible, exploiting your investment at maximum",
  buttonLabel: "Our bundles",
  imgStart: false,
  img: invest,
  alt: "Invest",
  dark: true,
  primary: false,
};
