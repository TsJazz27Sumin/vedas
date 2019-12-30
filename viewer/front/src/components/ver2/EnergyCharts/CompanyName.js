import React from 'react'

const CompanyName = ({ company_name, jurisdiction }) => {
  return (
    <div>
      {company_name} {jurisdiction} (MWh)
    </div>
  )
}

export default CompanyName