import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import { AppProvider } from '@shopify/polaris';
import DateSelect from './DateSelect'

const DateSelectArea = (props) => {

  let DateSelectArea = styled.div`
    height: 100px;
    width: 94%;
    margin-top: 0%;
    margin-left: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    background: #F0F0F0;
    border: 1px solid #fff;
    border-radius: 12px;
  `;

  let DateSelectAreaHelp = styled.div`
    margin-top: -3.5%;
    margin-left: 45%;
    font-family: Roboto;
    display: flex;
    color: rgba(0, 0, 0, 0.34);
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