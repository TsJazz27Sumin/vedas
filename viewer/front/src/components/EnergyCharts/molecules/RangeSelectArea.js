import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import { AppProvider } from '@shopify/polaris';
import RangeSelect from '../atoms/RangeSelect'
import Color from '../../../services/color';

const RangeSelectArea = (props) => {

  const StyledComponents = getStyledComponents();
  const RangeSelectArea = StyledComponents.RangeSelectArea;

  return (
    <div>
      <RangeSelectArea>
        <AppProvider>
          <RangeSelect
            range_slider={props.range_slider}
            unit={props.unit}
            year_and_month={props.year_and_month}
          />
        </AppProvider>
      </RangeSelectArea>
    </div>
  )
}

const getStyledComponents = () => {

  let RangeSelectArea = styled.div`
  background: ${Color.snowWhite};
  
  border: 1px solid ${Color.white};
  border-radius: 12px;

  height: 100px;
  width: 94%;
  
  padding: 2% 2% 0% 2%;
  margin:  0% 0% 0% 2%;
  `;

  if (isMobile) {
    RangeSelectArea = styled(RangeSelectArea)`
    width: 100%;
    
    margin-left: 0%;
    padding-top: 6%;
    `;
  }


  return {
    RangeSelectArea : RangeSelectArea
  };
}

export default RangeSelectArea