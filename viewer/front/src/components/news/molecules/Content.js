import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Article from 'components/news/atoms/Article'
import Color from 'services/color';

const Content = (props) => {

  const dict = props.dict;

  const StyledComponents = getStyledComponents();
  const Content = StyledComponents.Content;

  return (
    <Content>
      <Article key="20201123" date="2021/01/08" name="20210108_" texts={dict.news2_1 + ',' + dict.news8_2} pathname={props.pathname}/>
      <Article key="20201123" date="2020/11/23" name="20201123_" texts={dict.news2_1 + ',' + dict.news8_2} pathname={props.pathname}/>
      <Article key="20200902" date="2020/09/02" name="20200902_" texts={dict.news2_1 + ',' + dict.news7_2} pathname={props.pathname}/>
      <Article key="20200803" date="2020/08/03" name="20200803_" texts={dict.news2_1 + ',' + dict.news6_2} pathname={props.pathname}/>
      <Article key="20200704" date="2020/07/04" name="20200704_" texts={dict.news2_1 + ',' + dict.news5_2} pathname={props.pathname}/>
      <Article key="20200530" date="2020/05/30" name="20200530_" texts={dict.news2_1 + ',' + dict.news4_2} pathname={props.pathname}/>
      <Article key="20200303" date="2020/03/03" name="20200303_" texts={dict.news2_1 + ',' + dict.news3_2} pathname={props.pathname}/>
      <Article key="20200201" date="2020/02/01" name="20200201_" texts={dict.news2_1 + ',' + dict.news2_2} pathname={props.pathname}/>
      <Article key="20200118" date="2020/01/18" name="20200118_" texts={dict.news1_1 + ',' + dict.news1_2} pathname={props.pathname}/>
    </Content>
  )
}

const getStyledComponents = () => {

  let Content = styled.div`
  background: ${Color.white};
  
  border: 1px solid ${Color.white};
  border-radius: 16px;

  height: auto;
  width: 98%;

  padding: 0% 0% 5% 0%;
  margin:  0% 0% 0% 0%;
  
  left: 4%;
  `;

  if (isMobile) {
    Content = styled(Content)`
    margin-top: 4%;
  `;
  }

  return {
    Content : Content
  };
}

export default Content