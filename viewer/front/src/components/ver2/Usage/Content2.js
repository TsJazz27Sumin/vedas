import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import SolarSampleImages from './SolarSampleImages'

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const Content2 = (props) => {

  const dict = props.dict;
  const lang = props.lang;
  const Text1 = props.Text1;

  const public_url = process.env.PUBLIC_URL;
  const peak_sample = public_url + '/usage/peak_sample/peak_sample.png';

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
    font-size: 42px;
    line-height: 49px;
    color: #000;
  `;

  if (isMobile) {
    Content2 = styled(Content2)`
      height: 80%;
    `;

    LetsFind = styled(LetsFind)`
      padding-top: 20%;
      padding-left: 15%;
      font-size: 35px;
    `;
  }

  return (
    <Content2>
      <Text1><p>{dict.how_to_use_text13}</p></Text1>
      <br/>
      <br/>
      <Text1><SampleCaseATag id="case1" href={baseUrl + '?lang=' + lang + '&case=1'}>{dict.how_to_use_text14}</SampleCaseATag></Text1>
      <Text1><p>{dict.how_to_use_text15}</p></Text1>
      <SolarSampleImages />
      <EnergyPeakSample>
        <Text1><SampleCaseATag id="case2" href={baseUrl + '?lang=' + lang + '&case=2'}>{dict.how_to_use_text16}</SampleCaseATag></Text1>
        <Text1><p>{dict.how_to_use_text17}</p></Text1>
      </EnergyPeakSample>
      <EnergyPeakSampleImage>
        <img width="100%" src={peak_sample} alt="peak sample" />
      </EnergyPeakSampleImage>

      {
        isMobile ? null :(
        <OtherSample>
          <Text1><p>{dict.how_to_use_text18}</p></Text1>
          <Text1><SampleCaseATag id="case3" href={baseUrl + '?lang=' + lang + '&case=3'}>{dict.how_to_use_text19}</SampleCaseATag></Text1>
          <Text1><SampleCaseATag id="case4" href={baseUrl + '?lang=' + lang + '&case=4'}>{dict.how_to_use_text20}</SampleCaseATag></Text1>
          <Text1><SampleCaseATag id="case5" href={baseUrl + '?lang=' + lang + '&case=5'}>{dict.how_to_use_text21}</SampleCaseATag></Text1>
        </OtherSample>
        )
      }
      <LetsFind>
        <p>{dict.how_to_use_text22}</p>
      </LetsFind>
    </Content2>
  )
}

export default Content2