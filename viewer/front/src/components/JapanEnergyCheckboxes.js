import React from 'react'
import {Checkbox} from '@shopify/polaris';

const JapanEnergyCheckboxes = (
    { 
        dict, 
        hepcoChecked,
        handleHepcoChange, 
        tohokuepcoChecked, 
        handleTohokuepcoChange,
        rikudenChecked,
        handleRikudenChange,
        tepcoChecked,
        handleTepcoChange,
        chudenChecked,
        handleChudenChange,        
        kepcoChecked,
        handleKepcoChange,
        energiaChecked,
        handleEnergiaChange,
        yondenChecked,
        handleYondenChange,
        kyudenChecked,
        handleKyudenChange,
        okidenChecked,
        handleOkidenChange
}
) => {
  return (
    <div>
        <Checkbox
            label={dict.hepco}
            checked={hepcoChecked}
            onChange={handleHepcoChange}
          />
          <Checkbox
            label={dict.tohokuepco}
            checked={tohokuepcoChecked}
            onChange={handleTohokuepcoChange}
          />
          <Checkbox
            label={dict.rikuden}
            checked={rikudenChecked}
            onChange={handleRikudenChange}
          />
          <Checkbox
            label={dict.tepco}
            checked={tepcoChecked}
            onChange={handleTepcoChange}
          />
          <Checkbox
            label={dict.chuden}
            checked={chudenChecked}
            onChange={handleChudenChange}
          />
          <Checkbox
            label={dict.kepco}
            checked={kepcoChecked}
            onChange={handleKepcoChange}
          />
          <Checkbox
            label={dict.energia}
            checked={energiaChecked}
            onChange={handleEnergiaChange}
          />
          <Checkbox
            label={dict.yonden}
            checked={yondenChecked}
            onChange={handleYondenChange}
          />
          <Checkbox
            label={dict.kyuden}
            checked={kyudenChecked}
            onChange={handleKyudenChange}
          />
          <Checkbox
            label={dict.okiden}
            checked={okidenChecked}
            onChange={handleOkidenChange}
          />
    </div>
  )
}

export default JapanEnergyCheckboxes