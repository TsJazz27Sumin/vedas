import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const HeroWithoutTitle = () => {

  let Hero = styled.div`
  padding: 10% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  `;

  if (isMobile) {
    Hero = styled(Hero)`
    padding-top: 15%;
  `;
  }

  return (
    <Hero>
      <svg className="start" width="100%" height="10%" viewBox="0 0 1440 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path className="st2" d="M-13.9976 99.1476H494.18C583.356 99.1476 672.362 89.4595 716.054 67.2891C770.669 39.576 934.942 32.5902 1024.97 32.5902C1097 32.5902 1387.22 32.5902 1523.33 32.5902" stroke="#FFED48" strokeWidth="10" />
          <path className="st2" d="M-20.9628 83.3174H484.341C573.013 83.3174 773.373 89.4414 859.597 63.1027C1012.13 16.5084 1095.97 20.8094 1185.49 20.8094C1257.11 20.8094 1391.97 20.8094 1527.32 20.8094" stroke="#6DDCFF" strokeWidth="10" />
          <path className="st2" d="M1527.32 12.623C1510.23 12.623 1392.06 12.623 1055.99 12.623C719.917 12.623 530.396 48.1592 425.349 58.678C320.302 69.1967 213.276 69.1967 213.276 69.1967H-13.0024" stroke="#9B00E3" strokeWidth="10" />
          <path className="st2" d="M-37.8784 113.41H485.1C576.874 113.41 668.472 103.168 713.437 79.7309C769.643 50.4342 938.7 43.0492 1031.35 43.0492C1105.47 43.0492 1404.16 43.0492 1544.23 43.0492" stroke="#FF33AD" strokeWidth="10" />
          <path className="st2" d="M-204.05 5.85175H373.858C475.271 5.85175 576.49 13.6714 626.177 31.5661C688.287 53.9345 875.1 59.5731 977.483 59.5731C1059.39 59.5731 1389.44 59.5731 1544.23 59.5731" stroke="#FFED48" strokeWidth="10" />
        </g>
      </svg>
    </Hero>
  )
}

export default HeroWithoutTitle