import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const ConditionDetailTitle = (props) => {

  const StyledComponents = getStyledComponents();
  const ConditionDetailTitle = StyledComponents.ConditionDetailTitle;

  return (
    <ConditionDetailTitle>
      <p>{props.dict.analyze_condtion_text4}</p>
    </ConditionDetailTitle>
  )
}

const getStyledComponents = () => {

  let ConditionDetailTitle = styled.div`
  font-family: Roboto;
  font-size: 22px;
  color: ${Color.black};

  height: 0%;
  width: auto;
  
  padding: 0% 0% 5% 0%;
  margin:  3% 0% 0% 4%;

  line-height: 26px;
  ` ;

  if (isMobile) {
    ConditionDetailTitle = styled(ConditionDetailTitle)`
    padding: 0% 0% 12% 0%;
    margin:  0% 0% 0% 4%;
    `;
  }

  return {
    ConditionDetailTitle : ConditionDetailTitle
  };
}

export default ConditionDetailTitle