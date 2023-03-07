import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import ShareButtons from 'components/common/molecules/ShareButtons'

const ShareButtonArea = (props) => {

  const StyledComponents = getStyledComponents();
  const ShareButtonArea = StyledComponents.ShareButtonArea;

  return (
    <ShareButtonArea>
      <ShareButtons type="big" pathname={props.pathname}/>
    </ShareButtonArea>
  )
}

const getStyledComponents = () => {

  let ShareButtonArea = styled.div`
  padding: 0% 0% 0% 0%;
  margin:  4% 0% 0% 37%;
  `;

  if (isMobile) {
    ShareButtonArea = styled(ShareButtonArea)`
    margin-top: 10%;
    margin-left: 9%;
    `;
  }

  return {
    ShareButtonArea : ShareButtonArea
  };
}

export default ShareButtonArea