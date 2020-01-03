import React from 'react'
import styled from 'styled-components';

const CompanyName = ({ company_name, jurisdiction }) => {

  let CompanyNameArea = styled.div`
  margin-top: 5%;
  `;

  return (
    <CompanyNameArea>
      {company_name} {jurisdiction} (MWh)
    </CompanyNameArea>
  )
}

export default CompanyName