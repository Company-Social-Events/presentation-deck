// import images from assets
import IBMiXLogo from "./assets/imgs/ibm-ix-logo.png";
import IBMLogo from "./assets/imgs/ibm-logo.svg";
import Mentor1 from "./assets/imgs/person-90.png";
import Mentor2 from "./assets/imgs/person-90.png";
import Mentor3 from "./assets/imgs/person-90.png";
import Mentor4 from "./assets/imgs/person-90.png";
import Mentor5 from "./assets/imgs/person-90.png";
import Mentor6 from "./assets/imgs/person-90.png";
import Mentor7 from "./assets/imgs/person-90.png";
import Mentor8 from "./assets/imgs/person-90.png";
import reactjs from "./assets/imgs/reactjs.png";
import mongodb from "./assets/imgs/mongodb.png";
import nextjs from "./assets/imgs/nextjs.png";
import expressJS from "./assets/imgs/expressJS.png";
import nodejs from "./assets/imgs/nodejs.png";

export * from "./SlideTemplate1";
export * from "./SlideTemplate2";
export * from "./MyTheme";
export * from "./Slide1";
export * from "./Slide2";
export * from "./Slide3";
export * from "./Slide4";
export * from "./Slide5";
export * from "./Slide6";
export * from "./Slide7";
export * from "./Slide8";
export * from "./Slide9";
export * from "./Slide10";
export * from "./Slide11";
export * from "./Slide12";

//don't use real names or pictures because of GDPR?
const Mentors = [
    {
        name: 'Mentor 1',
        img: Mentor1
    },
    {
        name: 'Mentor 2',
        img: Mentor2
    },
    {
        name: 'Mentor 3',
        img: Mentor3
    },
    {
        name: 'Mentor 4',
        img: Mentor4
    },
    {
        name: 'Mentor 5',
        img: Mentor5
    },
    {
        name: 'Mentor 6',
        img: Mentor6
    },
    {
        name: 'Mentor 7',
        img: Mentor7
    },
    {
        name: 'Mentor 8',
        img: Mentor8
    }
];

const MERNStackImgs = {
    reactjs,
    nextjs,
    nodejs,
    expressJS,
    mongodb
}

export {IBMiXLogo, IBMLogo, Mentors, MERNStackImgs };
