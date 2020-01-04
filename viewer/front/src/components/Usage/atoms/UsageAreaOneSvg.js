import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const UsageAreaOneSvg = () => {

  let UsageAreaOneSvg = styled.div`
  width: 10%;

  padding: 5.5% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  `;

  if (isMobile) {
    UsageAreaOneSvg = styled(UsageAreaOneSvg)`
    display: none;
    `;
  }

  return (
    <div>
      <UsageAreaOneSvg>
        <svg width="100%" height="354" viewBox="0 0 33 354" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.5 10C15.6716 10 15 10.6716 15 11.5L15 340.5C15 341.328 15.6716 342 16.5 342C17.3284 342 18 341.328 18 340.5L18 11.5C18 10.6716 17.3284 10 16.5 10Z" fill="#6DDCFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M31 16.5C31 8.49187 24.5081 2 16.5 2C8.49187 2 2 8.49187 2 16.5C2 24.5081 8.49187 31 16.5 31C24.5081 31 31 24.5081 31 16.5Z" fill="white" stroke="#6DDCFF" strokeWidth="3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M31 165.5C31 157.492 24.5081 151 16.5 151C8.49187 151 2 157.492 2 165.5C2 173.508 8.49187 180 16.5 180C24.5081 180 31 173.508 31 165.5Z" fill="white" stroke="#6DDCFF" strokeWidth="3" />
          <path fillRule="evenodd" clipRule="evenodd" d="M31 337.5C31 329.492 24.5081 323 16.5 323C8.49187 323 2 329.492 2 337.5C2 345.508 8.49187 352 16.5 352C24.5081 352 31 345.508 31 337.5Z" fill="white" stroke="#6DDCFF" strokeWidth="3" />
        </svg>
      </UsageAreaOneSvg>
    </div>
  )
}

const getStyledComponents = (lang) => {


  return {
    xxx :xxx
  };
}

export default UsageAreaOneSvg