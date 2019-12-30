import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import SolarSampleImages from '../../../components/ver2/SolarSampleImages'
import styled from 'styled-components';
import wordDictionaryService from '../../../services/word_dictionary'
import { isMobile } from "react-device-detect";

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const Usage = (props) => {

  const lang = props.lang;
  const dict = wordDictionaryService.getV2(lang);
  const handleMenuChange = props.handleMenuChange;

  const public_url = process.env.PUBLIC_URL;
  const peak_sample = public_url + '/usage/peak_sample/peak_sample.png';

  useEffect(() => {
    const pathname = '/' + lang + '/usage';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
    height: 4300px;
    width: 91%;
    padding-left: 4%;
    padding-top: 2%;
    margin-left: 4%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  if (lang === "en"){
    ContentArea = styled(ContentArea)`
    height: 4400px;
  `;
  }

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

  let Content1 = styled.div`
    width: 96%;
    height: 19%;
    left: 4%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
    padding-bottom: 5%;
    border-radius: 16px;
  `;

  let Content2 = styled.div`
    width: 96%;
    height: 72%;
    left: 4%;
    margin-top: 7%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
    padding-bottom: 5%;
    border-radius: 16px;
  `;

  let Text1 = styled.div`
    padding-top: 3%;
    padding-left: 3%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 40px;
    border-radius: 54px;
    
    color: #000;
    
    border: 8px solid #fff;
  `;

  let Text2 = styled.div`
    padding-left: 3.8%;
    padding-top: 1%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #8C8C8C;
  `;

  let UsageAreaOneSvg = styled.div`
    position: absolute;
    padding-top: 5.5%;
    width: 10%;
  `;

  let UsageAreaOneTextArea1 = styled.div`
    position: absolute;
    padding-left: 6.8%;
    padding-top: 2.5%;
    width: 80%;
  `;

  let UsageAreaOneTextArea2 = styled.div`
    position: absolute;
    padding-left: 6.8%;
    padding-top: 12.7%;
    width: 80%;
  `;

  let UsageAreaOneTextArea3 = styled.div`
    position: absolute;
    padding-left: 6.8%;
    padding-top: 24.75%;
    width: 80%;
  `;

  let SampleCaseATag = styled.a`
    font-weight: bold;
    color: #0084FF;
  `;

  let EnergyPeakSample = styled.div`
    padding-top: 68%;
    padding-bottom: 3%;
    width: 95%;
  `;

  let EnergyPeakSampleImage = styled.div`
    padding-left: 4%;
    padding-right: 4%;
    padding-top: 5%;
    padding-bottom: 3%;
  `;

  let OtherSample = styled.div`
    padding-top: 4%;
    padding-bottom: 3%;
    width: 95%;
  `;

  let LetsFind = styled.div`
    padding-top: 5%;
    padding-left: 22%;
    width: 95%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 49px;

    color: #000;
  `;

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    height: 0%;
    top: 97%;
  `;

  let VedasLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 28%;
    cursor: pointer;
  `;

  let PanairLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 74%;
    cursor: pointer;
  `;

  const Title = (
    <svg width="101" height="30" viewBox="0 0 101 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.64 23.32C7.54667 23.32 5.136 22.456 3.408 20.728C1.68 18.9787 0.816 16.4827 0.816 13.24V0.599998H4.976V13.08C4.976 17.4747 6.87467 19.672 10.672 19.672C14.448 19.672 16.336 17.4747 16.336 13.08V0.599998H20.432V13.24C20.432 16.4827 19.568 18.9787 17.84 20.728C16.1333 22.456 13.7333 23.32 10.64 23.32ZM31.154 23.224C29.7673 23.224 28.4127 23.0427 27.09 22.68C25.7673 22.3173 24.7113 21.8587 23.922 21.304L25.458 18.264C26.226 18.776 27.1433 19.192 28.21 19.512C29.298 19.8107 30.3647 19.96 31.41 19.96C33.7993 19.96 34.994 19.3307 34.994 18.072C34.994 17.4747 34.6847 17.0587 34.066 16.824C33.4687 16.5893 32.498 16.3653 31.154 16.152C29.746 15.9387 28.594 15.6933 27.698 15.416C26.8233 15.1387 26.0553 14.6587 25.394 13.976C24.754 13.272 24.434 12.3013 24.434 11.064C24.434 9.44267 25.106 8.152 26.45 7.192C27.8153 6.21067 29.65 5.72 31.954 5.72C33.1273 5.72 34.3007 5.85867 35.474 6.136C36.6473 6.392 37.6073 6.744 38.354 7.192L36.818 10.232C35.3673 9.37867 33.7353 8.952 31.922 8.952C30.7487 8.952 29.8527 9.13333 29.234 9.496C28.6367 9.83733 28.338 10.296 28.338 10.872C28.338 11.512 28.658 11.9707 29.298 12.248C29.9593 12.504 30.9727 12.7493 32.338 12.984C33.7033 13.1973 34.8233 13.4427 35.698 13.72C36.5727 13.9973 37.3193 14.4667 37.938 15.128C38.578 15.7893 38.898 16.728 38.898 17.944C38.898 19.544 38.2047 20.824 36.818 21.784C35.4313 22.744 33.5433 23.224 31.154 23.224ZM48.8708 5.72C51.3881 5.72 53.3081 6.328 54.6308 7.544C55.9748 8.73867 56.6468 10.552 56.6468 12.984V23H52.8708V20.92C52.3801 21.6667 51.6761 22.2427 50.7588 22.648C49.8628 23.032 48.7748 23.224 47.4948 23.224C46.2148 23.224 45.0948 23.0107 44.1348 22.584C43.1748 22.136 42.4281 21.528 41.8948 20.76C41.3828 19.9707 41.1268 19.0853 41.1268 18.104C41.1268 16.568 41.6921 15.3413 42.8228 14.424C43.9748 13.4853 45.7774 13.016 48.2308 13.016H52.6468V12.76C52.6468 11.5653 52.2841 10.648 51.5588 10.008C50.8548 9.368 49.7988 9.048 48.3908 9.048C47.4308 9.048 46.4814 9.19733 45.5428 9.496C44.6254 9.79467 43.8468 10.2107 43.2068 10.744L41.6388 7.832C42.5348 7.14933 43.6121 6.62667 44.8708 6.264C46.1294 5.90133 47.4628 5.72 48.8708 5.72ZM48.3268 20.312C49.3294 20.312 50.2148 20.088 50.9828 19.64C51.7721 19.1707 52.3268 18.5093 52.6468 17.656V15.672H48.5188C46.2148 15.672 45.0628 16.4293 45.0628 17.944C45.0628 18.6693 45.3508 19.2453 45.9268 19.672C46.5028 20.0987 47.3028 20.312 48.3268 20.312ZM78.8965 5.912V20.408C78.8965 26.424 75.8245 29.432 69.6805 29.432C68.0378 29.432 66.4805 29.2187 65.0085 28.792C63.5365 28.3867 62.3205 27.7893 61.3605 27L63.1525 23.992C63.8992 24.6107 64.8378 25.1013 65.9685 25.464C67.1205 25.848 68.2832 26.04 69.4565 26.04C71.3338 26.04 72.7098 25.6133 73.5845 24.76C74.4592 23.9067 74.8965 22.6053 74.8965 20.856V19.96C74.2138 20.7067 73.3818 21.272 72.4005 21.656C71.4192 22.04 70.3418 22.232 69.1685 22.232C67.5472 22.232 66.0752 21.8907 64.7525 21.208C63.4512 20.504 62.4165 19.5227 61.6485 18.264C60.9018 17.0053 60.5285 15.5653 60.5285 13.944C60.5285 12.3227 60.9018 10.8933 61.6485 9.656C62.4165 8.39733 63.4512 7.42667 64.7525 6.744C66.0752 6.06133 67.5472 5.72 69.1685 5.72C70.4058 5.72 71.5258 5.92267 72.5285 6.328C73.5525 6.73333 74.4058 7.352 75.0885 8.184V5.912H78.8965ZM69.7765 18.84C71.2912 18.84 72.5285 18.392 73.4885 17.496C74.4698 16.5787 74.9605 15.3947 74.9605 13.944C74.9605 12.5147 74.4698 11.352 73.4885 10.456C72.5285 9.56 71.2912 9.112 69.7765 9.112C68.2405 9.112 66.9818 9.56 66.0005 10.456C65.0405 11.352 64.5605 12.5147 64.5605 13.944C64.5605 15.3947 65.0405 16.5787 66.0005 17.496C66.9818 18.392 68.2405 18.84 69.7765 18.84ZM100.219 14.552C100.219 14.8293 100.198 15.224 100.155 15.736H86.7473C86.9819 16.9947 87.5899 17.9973 88.5713 18.744C89.5739 19.4693 90.8113 19.832 92.2833 19.832C94.1606 19.832 95.7073 19.2133 96.9233 17.976L99.0673 20.44C98.2993 21.3573 97.3286 22.0507 96.1553 22.52C94.9819 22.9893 93.6593 23.224 92.1873 23.224C90.3099 23.224 88.6566 22.8507 87.2273 22.104C85.7979 21.3573 84.6886 20.3227 83.8993 19C83.1313 17.656 82.7473 16.1413 82.7473 14.456C82.7473 12.792 83.1206 11.2987 83.8673 9.976C84.6353 8.632 85.6913 7.58667 87.0353 6.84C88.3793 6.09333 89.8939 5.72 91.5793 5.72C93.2433 5.72 94.7259 6.09333 96.0273 6.84C97.3499 7.56533 98.3739 8.6 99.0993 9.944C99.8459 11.2667 100.219 12.8027 100.219 14.552ZM91.5793 8.92C90.2993 8.92 89.2113 9.304 88.3153 10.072C87.4406 10.8187 86.9073 11.8213 86.7153 13.08H96.4113C96.2406 11.8427 95.7179 10.84 94.8433 10.072C93.9686 9.304 92.8806 8.92 91.5793 8.92Z" fill="#25282B" />
    </svg>
  );

  if (isMobile) {
    if (lang === "en"){
      ContentArea = styled(ContentArea)`
      height: 2800px;
    `;
    } else {
      ContentArea = styled(ContentArea)`
      height: 2500px;
    `;
    }

    ContentTitle = styled(ContentTitle)`
      top: 1%;
      padding-left: 32%;
      padding-bottom: 2%;
      padding-top: 7%;
    `;

    Content1 = styled(Content1)`
      height: 10%;
    `;

    Content2 = styled(Content2)`
      height: 80%;
    `;

    Text1 = styled(Text1)`
      font-size: 19px;
    `;

    Text2 = styled(Text2)`
      display: none;
    `;

    UsageAreaOneTextArea1 = styled(UsageAreaOneTextArea1)`
      display: none;
    `;

    UsageAreaOneTextArea2 = styled(UsageAreaOneTextArea2)`
      display: none;
    `;

    UsageAreaOneTextArea3 = styled(UsageAreaOneTextArea3)`
      display: none;
    `;

    UsageAreaOneSvg = styled(UsageAreaOneSvg)`
      display: none;
    `;

    LetsFind = styled(LetsFind)`
      padding-top: 27%;
      padding-left: 9%;
      font-size: 35px;
    `;
  }

  return (
    <ContentArea>
      <ContentTitle>{Title}</ContentTitle>
      <Content1>
        <Text1><p>{dict.how_to_use_text1}</p></Text1>
        <Text1><p>{dict.how_to_use_text2}</p></Text1>
        <UsageAreaOneSvg>
          <svg width="100%" height="354" viewBox="0 0 33 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 10C15.6716 10 15 10.6716 15 11.5L15 340.5C15 341.328 15.6716 342 16.5 342C17.3284 342 18 341.328 18 340.5L18 11.5C18 10.6716 17.3284 10 16.5 10Z" fill="#6DDCFF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M31 16.5C31 8.49187 24.5081 2 16.5 2C8.49187 2 2 8.49187 2 16.5C2 24.5081 8.49187 31 16.5 31C24.5081 31 31 24.5081 31 16.5Z" fill="white" stroke="#6DDCFF" strokeWidth="3" />
            <path fillRule="evenodd" clipRule="evenodd" d="M31 165.5C31 157.492 24.5081 151 16.5 151C8.49187 151 2 157.492 2 165.5C2 173.508 8.49187 180 16.5 180C24.5081 180 31 173.508 31 165.5Z" fill="white" stroke="#6DDCFF" strokeWidth="3" />
            <path fillRule="evenodd" clipRule="evenodd" d="M31 337.5C31 329.492 24.5081 323 16.5 323C8.49187 323 2 329.492 2 337.5C2 345.508 8.49187 352 16.5 352C24.5081 352 31 345.508 31 337.5Z" fill="white" stroke="#6DDCFF" strokeWidth="3" />
          </svg>
        </UsageAreaOneSvg>
        <UsageAreaOneTextArea1>
          <Text1><p>{dict.how_to_use_text3}</p></Text1>
          <Text2><p>{dict.how_to_use_text4}</p></Text2>
        </UsageAreaOneTextArea1>
        <UsageAreaOneTextArea2>
          <Text1><p>{dict.how_to_use_text5}</p></Text1>
          <Text2><p>{dict.how_to_use_text6}</p></Text2>
          <Text2><p>{dict.how_to_use_text7}</p></Text2>
          <Text2><p>{dict.how_to_use_text8}</p></Text2>
        </UsageAreaOneTextArea2>
        <UsageAreaOneTextArea3>
          <Text1><p>{dict.how_to_use_text9}</p></Text1>
          <Text2><p>{dict.how_to_use_text10}</p></Text2>
          <Text2><p>{dict.how_to_use_text11}</p></Text2>
          <Text2><p>{dict.how_to_use_text12}</p></Text2>
        </UsageAreaOneTextArea3>
      </Content1>
      <Content2>
        <Text1><p>{dict.how_to_use_text13}</p></Text1>
        <br/>
        <br/>
        <Text1><SampleCaseATag id="case1" href={baseUrl + '?lang=' + lang + '&case=1'}>{dict.how_to_use_text14}</SampleCaseATag></Text1>
        <Text1><p>{dict.how_to_use_text15}</p></Text1>
        <SolarSampleImages />
        <EnergyPeakSample>
          <Text1><SampleCaseATag id="case1" href={baseUrl + '?lang=' + lang + '&case=2'}>{dict.how_to_use_text16}</SampleCaseATag></Text1>
          <Text1><p>{dict.how_to_use_text17}</p></Text1>
        </EnergyPeakSample>
        <EnergyPeakSampleImage>
          <img width="100%" src={peak_sample} alt="peak sample" />
        </EnergyPeakSampleImage>
        <OtherSample>
          <Text1><p>{dict.how_to_use_text18}</p></Text1>
          <Text1><SampleCaseATag id="case1" href={baseUrl + '?lang=' + lang + '&case=3'}>{dict.how_to_use_text19}</SampleCaseATag></Text1>
          <Text1><SampleCaseATag id="case1" href={baseUrl + '?lang=' + lang + '&case=4'}>{dict.how_to_use_text20}</SampleCaseATag></Text1>
          <Text1><SampleCaseATag id="case1" href={baseUrl + '?lang=' + lang + '&case=5'}>{dict.how_to_use_text21}</SampleCaseATag></Text1>
        </OtherSample>
        <LetsFind>
          <p>{dict.how_to_use_text22}</p>
        </LetsFind>
      </Content2>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </ContentArea>
  )
}

export default Usage