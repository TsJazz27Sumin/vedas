import React from 'react'
import styled from 'styled-components';
import ConditionDetailFirst from './ConditionDetailFirst'
import ConditionDetailSecond from './ConditionDetailSecond'
import ConditionDetailThird from './ConditionDetailThird'

const Condition = (props) => {

  const dict = props.dict;
  const electoric_power_data = props.electoric_power_data;
  const electoric_power_company = props.electoric_power_company;
  const electoric_power_resource = props.electoric_power_resource;

  const ConditionArea = styled.div`
    height: 500px;
    width: 95%;
` ;

  const ConditionDetailTitle = styled.div`
    height: 0%;
    margin-top: 3%;
    padding-bottom: 3%;
    margin-left: 5%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;

    color: #000;
  ` ;
  
  return (
    <div>
      <ConditionArea>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text1}</p></ConditionDetailTitle>
        <ConditionDetailFirst dict={dict} electoric_power_data={electoric_power_data}/>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text2}</p></ConditionDetailTitle>
        <ConditionDetailSecond dict={dict} electoric_power_company={electoric_power_company}/>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text3}</p></ConditionDetailTitle>
        <ConditionDetailThird dict={dict} electoric_power_resource={electoric_power_resource}/>
      </ConditionArea>
    </div>
  )
}

export default Condition