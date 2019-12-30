import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import wordDictionaryService from '../../../services/word_dictionary'
import styled from 'styled-components';

const EnergyCharts = (props) => {

  const lang = props.lang;
  const dict = wordDictionaryService.getV2(lang);
  const handleMenuChange = props.handleMenuChange;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  // const Content = styled.div`
  //   position: absolute;
  //   width: 92%;
  //   height: 50%;
  //   left: 4%;
  //   top: 5%;

  //   background: #fff;
  //   border: 1px solid #fff;
  //   box-sizing: border-box;
  //   border-radius: 16px;
  // `;

  const AnalyzeArea = styled.div`
    height: 200%;
    width: 91%;
    position: absolute;
    left: 4.1%;
    right: 4.1%;
    top: 140%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  const ConditionArea = styled.div`
    height: 86%;
    width: 95%;
    background: #fff;
` ;

  const ConditionDetailArea1 = styled.div`
    height: 15%;
    margin-left: 5%;
    background: #efefef;
  ` ;

  const ConditionDetailArea2 = styled.div`
    height: 20%;
    margin-left: 5%;
    background: #efefef;
  ` ;

  const ConditionDetailArea3 = styled.div`
    height: 20%;
    margin-left: 5%;
    background: #efefef;
  ` ;

  const ConditionDetailTitle = styled.div`
    height: 4%;
    margin-top: 3%;
    margin-left: 5%;
    background: #aaa;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;

    color: #000;
  ` ;

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    height: 11%;
    top: 73%;
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

  return (
    <AnalyzeArea>
      <ConditionArea>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text1}</p></ConditionDetailTitle>
        <ConditionDetailArea1>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </ConditionDetailArea1>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text2}</p></ConditionDetailTitle>
        <ConditionDetailArea2>
          <div>
            <div></div>
            <div></div>
          </div>
        </ConditionDetailArea2>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text3}</p></ConditionDetailTitle>
        <ConditionDetailArea3>
          <div>
            <div></div>
            <div></div>
          </div>
        </ConditionDetailArea3>
      </ConditionArea>
      {/* <Content>
        <p>contact</p>
      </Content> */}
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </AnalyzeArea>
  )
}

export default EnergyCharts