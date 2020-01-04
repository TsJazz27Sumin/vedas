import React from '../../../node_modules/react'
import styled from '../../../node_modules/styled-components';

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

export default CompanyName