import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import ShareButtons from 'components/common/molecules/ShareButtons'
import Color from 'services/color';

const Article = (props) => {

  const StyledComponents = getStyledComponents();
  const ShareButtonArea = StyledComponents.ShareButtonArea;
  const Text1 = StyledComponents.Text1;
  const Text2 = StyledComponents.Text2;

  const text_list = props.texts.split(',');

  let TextList = []
  for(let i = 0; i < text_list.length; i++){
    TextList.push(<Text2><p>{text_list[i]}</p></Text2>);
  }

  return (
    <div>
      <Text1><p>{props.date}</p></Text1>
      {TextList}
      <ShareButtonArea>
        <ShareButtons type={"small"} pathname={props.pathname}/>
      </ShareButtonArea>
    </div>
  )
}

const getStyledComponents = () => {

  let ShareButtonArea = styled.div`
  padding: 3% 0% 3% 4%;
  `;

  let Text1 = styled.div`
  border-radius: 54px;
  border: 8px solid ${Color.white};

  font-family: Roboto;
  font-size: 36px;
  color: ${Color.black};

  padding: 3% 0% 3% 3%;
  margin:  0% 0% 0% 0%;
  
  line-height: 30px;
`;

  let Text2 = styled.div`
  border-radius: 54px;
  border: 8px solid ${Color.white};
  
  font-family: Roboto;
  font-size: 22px;
  color: ${Color.black};

  padding: 0% 0% 0% 3%;
  margin:  0% 0% 0% 0%;

  line-height: 26px;
`;

  if (isMobile) {
    Text1 = styled(Text1)`
    font-size: 22px;
  `;

    Text2 = styled(Text2)`
    font-size: 18px;
  `;

    ShareButtonArea = styled(ShareButtonArea)`
    padding-left: 50%;
  `;
  }

  return {
    ShareButtonArea : ShareButtonArea,
    Text1 : Text1,
    Text2 : Text2
  };
}

export default Article