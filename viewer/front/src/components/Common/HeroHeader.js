import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const HeroHeader = (props) => {

  let Hero = styled.div`
  padding: 10% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  `;

  let MainTitle = styled.div`
  padding: 0% 25% 0% 25%;
  margin:  0% 0% 0% 0%;

  opacity: 0;

  position: absolute;

  animation: appeare 1s ease 2s 1 normal forwards running;
  `;

  let VedasLogo = styled.div`
  padding: 0% 35% 0% 35%;
  margin:  0% 0% 0% 0%;

  opacity: 0;

  position: absolute;
  top: 94%;

  animation: appeare 1s ease 4s 1 normal forwards running;
  `;

  const lang = props.lang;
  const public_url = process.env.PUBLIC_URL;

  if (isMobile) {
    if(lang === "ch"){
      Hero = styled(Hero)`
      padding-top: 15%;
      `;

      MainTitle = styled(MainTitle)`
      padding-right: 24%;
      padding-left: 24%;
      margin-left: -8%;
      `;
    } else {
      Hero = styled(Hero)`
      padding-top: 15%;
      `;
      MainTitle = styled(MainTitle)`
      padding-left: 15%;
      padding-right: 15%;
      `;
    }

    VedasLogo = styled(VedasLogo)`
    padding-left: 30%;
    padding-right: 30%;
    `;
  }

  let main_title_image = null
  if (lang === "jp") {
    main_title_image = public_url + '/common/hero/main-title.png';
    MainTitle = styled(MainTitle)`
    top: 56.3%;
    `;
  } else if (lang === "ch") {
    main_title_image = public_url + '/common/hero/main-title-ch.png';
    MainTitle = styled(MainTitle)`
    padding-left: 34%;
    top: 57.3%;
    `;
  } else {
    main_title_image = public_url + '/common/hero/main-title-en.png';
    MainTitle = styled(MainTitle)`
    top: 57.3%;
    `;
  }
  const vedas_logo_image = public_url + '/common/logo/vedas.png';

  return (
    <Hero>
      <svg className="start" width="100%" height="10%" viewBox="0 0 1440 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path className="st2" d="M-110 331.41C-92.712 331.41 26.9003 331.41 367.046 331.41C707.191 331.41 899.011 209.816 1005.33 173.824C1111.65 137.832 1219.98 137.832 1219.98 137.832H1449" stroke="#9B00E3" strokeWidth="10" />
          <path className="st2" d="M-94.7808 30H296.508C365.173 30 433.706 63.4966 467.348 140.151C509.401 235.97 635.888 260.123 705.209 260.123C760.667 260.123 1340.7 254.758 1445.5 254.758" stroke="#FF33AD" strokeWidth="10" />
          <path className="st2" d="M-96 259.955H414.712C504.333 259.955 593.783 233.48 637.693 172.893C692.58 97.1603 857.672 78.0697 948.151 78.0697C1020.53 78.0697 1312.21 78.0697 1449 78.0697" stroke="#FFED48" strokeWidth="10" />
          <path className="st2" d="M-103 216.695H404.824C493.938 216.695 695.298 233.43 781.952 161.453C935.246 34.1219 1019.51 45.8756 1109.47 45.8756C1181.45 45.8756 1316.98 45.8756 1453 45.8756" stroke="#6DDCFF" strokeWidth="10" />
          <path className="st1" d="M1453 23.5041C1435.83 23.5041 1317.07 23.5041 979.32 23.5041C641.575 23.5041 451.109 120.616 345.538 149.361C239.966 178.107 132.407 178.107 132.407 178.107H-95" stroke="#9B00E3" strokeWidth="10" />
          <path className="st2" d="M-120 298.93H405.587C497.819 298.93 589.873 270.942 635.062 206.894C691.549 126.833 861.449 106.652 954.563 106.652C1029.05 106.652 1329.23 106.652 1470 106.652" stroke="#FF33AD" strokeWidth="10" />
          <path className="st2" d="M-287 5H293.79C395.709 5 497.432 26.3692 547.368 75.2711C609.787 136.399 797.532 151.807 900.426 151.807C982.741 151.807 1314.44 151.807 1470 151.807" stroke="#FFED48" strokeWidth="10" />
          <path className="st2" d="M-146 269.658H381.406C473.956 269.658 683.08 263.618 773.076 289.595C932.281 335.549 1019.79 331.307 1113.23 331.307C1187.98 331.307 1328.74 331.307 1470 331.307" stroke="#6DDCFF" strokeWidth="10" />
        </g>
      </svg>
      <MainTitle>
        <img width="100%" src={main_title_image} alt="main title" />
      </MainTitle>
      <VedasLogo>
        <img width="100%" src={vedas_logo_image} alt="vedas logo" />
      </VedasLogo>
    </Hero>
  )
}

export default HeroHeader