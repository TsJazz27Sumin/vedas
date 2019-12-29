import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const ContentTitle = ({ Title }) => {

  let ContentTitleStyledDiv = styled.div`
    position: absolute;
    left: 25%;
    top: 10%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 200%;
    line-height: 54px;
    color: #25282B;
  `;

  if(isMobile){
    ContentTitleStyledDiv = styled(ContentTitleStyledDiv)`
      top: 2%;
    `;
  } 

  return (
    <div>
      <ContentTitleStyledDiv>
        {Title}
      </ContentTitleStyledDiv>
    </div>
  )
}

export default ContentTitle