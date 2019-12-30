import React from 'react'
import styled from 'styled-components';


const ConditionDetailSecond = (props) => {

  const dict = props.dict;
  const electoric_power_company = props.electoric_power_company;
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  // const handleElectricPowersChange = electoric_power_company.handleValueChange;

  const ConditionDetailArea2 = styled.div`
    height: 14%;
    margin-left: 5%;
    background: #fff;
    border-radius: 16px;
  ` ;
  
  const ConditionDetailParam = styled.div`
  display: inline-block;
  padding: 1%;
  width: 16.5%;
  background: #fff;
  cursor: pointer;
  border-radius: 16px;
` ;

  const ConditionDetailParamLabel = styled.div`
  display: inline-block;

  margin-top: 4%;
  margin-left: 5%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: #000;
` ;

  const ConditionDetailParamButton = styled.button`
  width: 13%;
  padding-top: 10%;
  border-radius: 2px;
  cursor: pointer;
` ;

  const setBackGround = (checked) => { 
    return checked ? styled(ConditionDetailParamButton)` background: #6DDCFF;` : styled(ConditionDetailParamButton)` background: #D8D8D8;`
  };

  const ConditionDetailParamButtonAll = setBackGround(allChecked);
  const ConditionDetailParamButtonJapan = setBackGround(electricPowersChecked.japanChecked);
  const ConditionDetailParamButtonHepco = setBackGround(electricPowersChecked.hepcoChecked);
  const ConditionDetailParamButtonTohokuepco = setBackGround(electricPowersChecked.tohokuepcoChecked);
  const ConditionDetailParamButtonRikuden = setBackGround(electricPowersChecked.rikudenChecked);
  const ConditionDetailParamButtonTepco = setBackGround(electricPowersChecked.tepcoChecked);
  const ConditionDetailParamButtonChuden = setBackGround(electricPowersChecked.chudenChecked);
  const ConditionDetailParamButtonKepco = setBackGround(electricPowersChecked.kepcoChecked);
  const ConditionDetailParamButtonEnergia = setBackGround(electricPowersChecked.energiaChecked);
  const ConditionDetailParamButtonYonden = setBackGround(electricPowersChecked.yondenChecked);
  const ConditionDetailParamButtonKyuden = setBackGround(electricPowersChecked.kyudenChecked);
  const ConditionDetailParamButtonOkiden = setBackGround(electricPowersChecked.okidenChecked);

  const ConditionDetailParamArea1 = styled.div`
  width: 100%;
  
` ;

  const ConditionDetailParamArea2 = styled.div`
  width: 100%;
  border-radius: 12px;
` ;

  return (
    <div>
      <ConditionDetailArea2>
        <ConditionDetailParamArea1>
          <ConditionDetailParam
            onClick={()=> handleAllChange(!allChecked)}
          >
            <ConditionDetailParamButtonAll/>
            <ConditionDetailParamLabel>
              <p>{dict.all}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('japan')}
          >
            <ConditionDetailParamButtonJapan />
            <ConditionDetailParamLabel>
              <p>{dict.japan}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('hepco')}
          >
            <ConditionDetailParamButtonHepco />
            <ConditionDetailParamLabel>
              <p>{dict.hepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('tohokuepco')}
          >
            <ConditionDetailParamButtonTohokuepco />
            <ConditionDetailParamLabel>
              <p>{dict.tohokuepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('rikuden')}
          >
            <ConditionDetailParamButtonRikuden />
            <ConditionDetailParamLabel>
              <p>{dict.rikuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('tepco')}
          >
            <ConditionDetailParamButtonTepco />
            <ConditionDetailParamLabel>
              <p>{dict.tepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
        </ConditionDetailParamArea1>
        <ConditionDetailParamArea2>
          <ConditionDetailParam
            onClick={()=> console.log('chuden')}
          >
            <ConditionDetailParamButtonChuden />
            <ConditionDetailParamLabel>
              <p>{dict.chuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('kepco')}
          >
            <ConditionDetailParamButtonKepco />
            <ConditionDetailParamLabel>
              <p>{dict.kepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('energia')}
          >
            <ConditionDetailParamButtonEnergia />
            <ConditionDetailParamLabel>
              <p>{dict.energia}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('yonden')}
          >
            <ConditionDetailParamButtonYonden/>
            <ConditionDetailParamLabel>
              <p>{dict.yonden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('kyuden')}
          >
            <ConditionDetailParamButtonKyuden />
            <ConditionDetailParamLabel>
              <p>{dict.kyuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam
            onClick={()=> console.log('okiden')}
          >
            <ConditionDetailParamButtonOkiden />
            <ConditionDetailParamLabel>
              <p>{dict.okiden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
        </ConditionDetailParamArea2>
      </ConditionDetailArea2>
    </div>
  )
}

export default ConditionDetailSecond