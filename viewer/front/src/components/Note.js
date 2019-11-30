import React from 'react'

const Note = ({ group, demand, solar }) => {
  return (
    <li>
      {group.replace(',', '/').replace(']', '').replace('[', '')} : demand = {demand}
    </li>
  )
}

export default Note