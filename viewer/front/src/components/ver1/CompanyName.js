import React from 'react'

const CompanyName = ({ company_name, jurisdiction }) => {
  return (
    <li>
      {company_name} {jurisdiction} (MWh)
    </li>
  )
}

export default CompanyName