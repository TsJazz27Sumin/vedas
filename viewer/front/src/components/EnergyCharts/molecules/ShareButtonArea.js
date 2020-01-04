import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import ShareButtons from '../../common/molecules/ShareButtons'

const ShareButtonArea = (props) => {

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

  return (
    <ShareButtonArea>
      <ShareButtons type="big" pathname={props.pathname}/>
    </ShareButtonArea>
  )
}

export default ShareButtonArea