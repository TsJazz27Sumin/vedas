import React from 'react'
import styled from 'styled-components';

const CompanyName = ({ company_name, jurisdiction }) => {

  let CompanyNameArea = styled.div`
  padding: 0% 0% 0% 0%;
  margin:  5% 0% 0% 0%;
  `;

  return (
    <CompanyNameArea>
      {company_name} {jurisdiction} (MWh)
    </CompanyNameArea>
  )
}

const getStyledComponents = (lang) => {


  return {
    xxx :xxx
  };
}

export default CompanyName