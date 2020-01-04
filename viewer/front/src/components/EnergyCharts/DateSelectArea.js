import React from '../../../node_modules/react'
import styled from '../../../node_modules/styled-components';
import { isMobile } from "react-device-detect";
import { AppProvider } from '../../../node_modules/@shopify/polaris';
import DateSelect from './DateSelect'
import Color from '../../services/color';

const DateSelectArea = (props) => {

  let DateSelectArea = styled.div`
  background: ${Color.snowWhite};
  border: 1px solid ${Color.white};
  border-radius: 12px;

  height: 100px;
  width: 94%;

  padding: 2% 0% 2% 2%;
  margin:  0% 0% 0% 2%;
  `;

  let DateSelectAreaHelp = styled.div`
  font-family: Roboto;

  color: ${Color.rgbaGray};

  padding: 0% 0% 0% 0%;
  margin:  -3.5% 0% 0% 45%;

  display: flex;
  `;

  if (isMobile) {
    DateSelectArea = styled(DateSelectArea)`
    width: 100%;
    margin-left: 0%;
    `;
  }

  return (
    <div>
      <DateSelectArea>
        <AppProvider>
          <DateSelect
            dict={props.dict}
            unit={props.unit}
            date_select={props.date_select}
          />
          <DateSelectAreaHelp>
            <p>{props.dict.analyze_condtion_text5}</p>
          </DateSelectAreaHelp>
        </AppProvider>
      </DateSelectArea>
    </div>
  )
}

export default DateSelectArea