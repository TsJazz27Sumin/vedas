import React from 'react'
import styled from 'styled-components';

const ContentTitle = ({ Title }) => {

  const ContentTitleStyledDiv = styled.div`
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

  return (
    <div>
      <ContentTitleStyledDiv>
        {Title}
      </ContentTitleStyledDiv>
    </div>
  )
}

export default ContentTitle