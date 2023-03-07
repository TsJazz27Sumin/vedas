import React from 'react'
import styled from 'styled-components';

const CompanyName = ({ company_name, jurisdiction }) => {

  const StyledComponents = getStyledComponents();
  const CompanyNameArea = StyledComponents.CompanyNameArea; 

  return (
    <CompanyNameArea>
      {company_name} {jurisdiction} (MWh)
    </CompanyNameArea>
  )
}

const getStyledComponents = () => {

  let CompanyNameArea = styled.div`
  padding: 0% 0% 0% 0%;
  margin:  5% 0% 0% 0%;
  `;

  return {
    CompanyNameArea : CompanyNameArea
  };
}

export default CompanyName