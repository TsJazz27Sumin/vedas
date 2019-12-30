import React from 'react'
import styled from 'styled-components';
import ConditionDetailFirst from './ConditionDetailFirst'
import ConditionDetailSecond from './ConditionDetailSecond'
import ConditionDetailThird from './ConditionDetailThird'

const Condition = (props) => {

  const dict = props.dict;

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
        <ConditionDetailFirst dict={dict}/>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text2}</p></ConditionDetailTitle>
        <ConditionDetailSecond dict={dict}/>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text3}</p></ConditionDetailTitle>
        <ConditionDetailThird dict={dict}/>
      </ConditionArea>
    </div>
  )
}

export default Condition