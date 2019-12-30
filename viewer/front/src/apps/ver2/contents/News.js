import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import ShareButtons from '../../../components/ver2/ShareButtons'
import styled from 'styled-components';
import wordDictionaryService from '../../../services/word_dictionary'
import { isMobile } from "react-device-detect";

const News = (props) => {

  const lang = props.lang;
  const dict = wordDictionaryService.getV2(lang);
  const handleMenuChange = props.handleMenuChange;

  useEffect(() => {
    const pathname = '/' + lang + '/news';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
    height: 900px;
    width: 91%;
    padding-left: 4%;
    padding-top: 2%;
    margin-left: 4%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  let ContentTitle = styled.div`
  padding-left: 1.5%;
  padding-bottom: 0.5%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  line-height: 54px;
  color: #25282B;
`;

  let Content = styled.div`
  width: 96%;
  left: 4%;

  background: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 16px;
  padding-bottom: 5%;
  border-radius: 16px;
`;

let ShareButtonArea = styled.div`
  padding-top: 3%;
  padding-left: 4%;
  padding-bottom: 3%;
`;

  let Text1 = styled.div`
  padding-top: 3%;
  padding-left: 3%;
  padding-bottom: 3%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 30px;
  border-radius: 54px;
  
  color: #000;
  
  border: 8px solid #fff;
`;

  let Text2 = styled.div`
  padding-left: 3%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  border-radius: 54px;
  
  color: #000;
  
  border: 8px solid #fff;
`;

  let LogoArea = styled.div`
    position: absolute;
    width: 50%;
    height: 11%;
    top: 70%;
  `;

  let VedasLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 48%;
    cursor: pointer;
  `;

  let PanairLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 92%;
    cursor: pointer;
  `;

  const Title = (
    <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.912 0.599998V23H16.488L4.136 7.832V23H0.00800014V0.599998H3.432L15.784 15.768V0.599998H19.912ZM42.7143 19.512V23H25.9143V0.599998H42.2663V4.088H30.0743V9.912H40.8903V13.336H30.0743V19.512H42.7143ZM79.7753 0.599998L72.3513 23H67.9353L62.3993 6.424L56.7673 23H52.3193L44.8953 0.599998H49.2153L54.7833 17.624L60.5753 0.599998H64.4153L70.0793 17.72L75.8073 0.599998H79.7753ZM90.1083 23.32C88.3803 23.32 86.7056 23.0747 85.0843 22.584C83.4843 22.0933 82.2149 21.4427 81.2763 20.632L82.7163 17.4C83.6336 18.1253 84.7536 18.7227 86.0763 19.192C87.4203 19.64 88.7643 19.864 90.1083 19.864C91.7723 19.864 93.0096 19.5973 93.8203 19.064C94.6523 18.5307 95.0683 17.8267 95.0683 16.952C95.0683 16.312 94.8336 15.7893 94.3643 15.384C93.9163 14.9573 93.3403 14.6267 92.6363 14.392C91.9323 14.1573 90.9723 13.8907 89.7563 13.592C88.0496 13.1867 86.6629 12.7813 85.5963 12.376C84.5509 11.9707 83.6443 11.3413 82.8763 10.488C82.1296 9.61333 81.7563 8.44 81.7563 6.968C81.7563 5.73067 82.0869 4.61067 82.7483 3.608C83.4309 2.584 84.4443 1.77333 85.7883 1.176C87.1536 0.578665 88.8176 0.279999 90.7803 0.279999C92.1456 0.279999 93.4896 0.450666 94.8123 0.792C96.1349 1.13333 97.2763 1.624 98.2362 2.264L96.9243 5.496C95.9429 4.92 94.9189 4.48267 93.8523 4.184C92.7856 3.88533 91.7509 3.736 90.7483 3.736C89.1056 3.736 87.8789 4.01333 87.0683 4.568C86.2789 5.12267 85.8843 5.85867 85.8843 6.776C85.8843 7.416 86.1083 7.93867 86.5563 8.344C87.0256 8.74933 87.6123 9.06933 88.3163 9.304C89.0203 9.53867 89.9803 9.80533 91.1963 10.104C92.8603 10.488 94.2256 10.8933 95.2923 11.32C96.3589 11.7253 97.2656 12.3547 98.0123 13.208C98.7803 14.0613 99.1643 15.2133 99.1643 16.664C99.1643 17.9013 98.8229 19.0213 98.1403 20.024C97.4789 21.0267 96.4656 21.8267 95.1003 22.424C93.7349 23.0213 92.0709 23.32 90.1083 23.32Z" fill="#25282B" />
    </svg>
  );

  if (isMobile) {
    ContentArea = styled(ContentArea)`
    height: 609px;
    `;
    ContentTitle = styled(ContentTitle)`
      padding-left: 33%;
      margin-top: 3%;
    `;
    Content = styled(Content)`
      margin-top: 4%;
    `;
    Text1 = styled(Text1)`
      font-size: 22px;
    `;

    Text2 = styled(Text2)`
      font-size: 18px;
    `;
  }

  return (
    <ContentArea>
      <ContentTitle>{Title}</ContentTitle>
      <Content>
        <Text1><p>2020/02/01</p></Text1>
        <Text2><p>{dict.sample_news2}</p></Text2>
        <ShareButtonArea>
          <ShareButtons/>
        </ShareButtonArea>
        <Text1><p>2020/01/19</p></Text1>
        <Text2><p>{dict.sample_news1}</p></Text2>
        <ShareButtonArea>
          <ShareButtons/>
        </ShareButtonArea>
      </Content>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </ContentArea>
  )
}

export default News