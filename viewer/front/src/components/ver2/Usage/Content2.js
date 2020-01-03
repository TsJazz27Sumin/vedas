import React from 'react'
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import SolarSampleImages from './SolarSampleImages';
import Color from '../../../services/color';

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const Content2 = (props) => {

  const track = (sample_pattern) => {
    ReactGA.event({
      category: 'Usage sample case',
      action: sample_pattern
    });
  };

  const dict = props.dict;
  const lang = props.lang;
  const Text1 = props.Text1;

  const public_url = process.env.PUBLIC_URL;
  const peak_sample = public_url + '/usage/peak_sample/peak_sample.png';

  let Content2 = styled.div`
  background: ${Color.white};
  
  border-radius: 16px;
  border: 1px solid ${Color.white};

  height: 72%;
  width: 96%;
  
  padding: 0% 0% 5% 0%;
  margin:  7% 0% 0% 0%;
  
  left: 4%;

  box-sizing: border-box;
`;

  let SampleCaseATag = styled.a`
  font-weight: bold;
  color: ${Color.primaryBlue};
  `;

  let EnergyPeakSample = styled.div`
  width: 95%;

  padding: 68% 0% 3% 0%;
  margin:  0% 0% 0% 0%;
  `;

  let EnergyPeakSampleImage = styled.div`
  padding: 5% 4% 3% 4%;
  margin:  0% 0% 0% 0%;
  `;

  let OtherSample = styled.div`
  height: auto;
  width: 95%;

  padding: 4% 0% 3% 0%;
  margin:  0% 0% 0% 0%;
  `;

  let LetsFind = styled.div`
  font-family: Roboto;
  font-size: 42px;
  color: ${Color.black};

  height: auto;
  width: ${lang === "ch" ? 100 : 95}%;

  padding-top: ${lang === "ch" ? 10 : 5}%;
  padding-left: ${lang === "ch" ? 31 : lang === "en" ? 25 : 22}%;

  line-height: 49px;
  `;

  if (isMobile) {
    Content2 = styled(Content2)`
    height: 80%;
    `;

    LetsFind = styled(LetsFind)`
    font-size: 35px;
    
    padding-top: 20%;
    padding-left: 15%;  
    `;
  }

  return (
    <Content2>
      <Text1><p>{dict.how_to_use_text13}</p></Text1>
      <br/>
      <br/>
      <Text1><SampleCaseATag onClick={()=> track("Click case1")} onTouchStart={()=> track("Click case1")} id="case1" href={baseUrl + '?lang=' + lang + '&case=1'}>{dict.how_to_use_text14}</SampleCaseATag></Text1>
      <Text1><p>{dict.how_to_use_text15}</p></Text1>
      <SolarSampleImages />
      <EnergyPeakSample>
        <Text1><SampleCaseATag onClick={()=> track("Click case2")} onTouchStart={()=> track("Click case2")} id="case2" href={baseUrl + '?lang=' + lang + '&case=2'}>{dict.how_to_use_text16}</SampleCaseATag></Text1>
        <Text1><p>{dict.how_to_use_text17}</p></Text1>
      </EnergyPeakSample>
      <EnergyPeakSampleImage>
        <img width="100%" src={peak_sample} alt="peak sample" />
      </EnergyPeakSampleImage>

      {
        isMobile ? null :(
        <OtherSample>
          <Text1><p>{dict.how_to_use_text18}</p></Text1>
          <Text1><SampleCaseATag onClick={()=> track("Click case3")} onTouchStart={()=> track("Click case3")} id="case3" href={baseUrl + '?lang=' + lang + '&case=3'}>{dict.how_to_use_text19}</SampleCaseATag></Text1>
          <Text1><SampleCaseATag onClick={()=> track("Click case4")} onTouchStart={()=> track("Click case4")} id="case4" href={baseUrl + '?lang=' + lang + '&case=4'}>{dict.how_to_use_text20}</SampleCaseATag></Text1>
          <Text1><SampleCaseATag onClick={()=> track("Click case5")} onTouchStart={()=> track("Click case5")} id="case5" href={baseUrl + '?lang=' + lang + '&case=5'}>{dict.how_to_use_text21}</SampleCaseATag></Text1>
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