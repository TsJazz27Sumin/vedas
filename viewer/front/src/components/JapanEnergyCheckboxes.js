import React from "react";
import { Checkbox } from "@shopify/polaris";

const JapanEnergyCheckboxes = props => {
  const dict = props.dict;
  return (
    <div>
      <Checkbox
        label={dict.all}
        checked={props.allChecked}
        onChange={props.handleAllChange}
      />
      <Checkbox
        label={dict.hepco}
        checked={props.hepcoChecked}
        onChange={props.handleHepcoChange}
      />
      <Checkbox
        label={dict.tohokuepco}
        checked={props.tohokuepcoChecked}
        onChange={props.handleTohokuepcoChange}
      />
      <Checkbox
        label={dict.rikuden}
        checked={props.rikudenChecked}
        onChange={props.handleRikudenChange}
      />
      <Checkbox
        label={dict.tepco}
        checked={props.tepcoChecked}
        onChange={props.handleTepcoChange}
      />
      <Checkbox
        label={dict.chuden}
        checked={props.chudenChecked}
        onChange={props.handleChudenChange}
      />
      <Checkbox
        label={dict.kepco}
        checked={props.kepcoChecked}
        onChange={props.handleKepcoChange}
      />
      <Checkbox
        label={dict.energia}
        checked={props.energiaChecked}
        onChange={props.handleEnergiaChange}
      />
      <Checkbox
        label={dict.yonden}
        checked={props.yondenChecked}
        onChange={props.handleYondenChange}
      />
      <Checkbox
        label={dict.kyuden}
        checked={props.kyudenChecked}
        onChange={props.handleKyudenChange}
      />
      <Checkbox
        label={dict.okiden}
        checked={props.okidenChecked}
        onChange={props.handleOkidenChange}
      />
    </div>
  );
};

export default JapanEnergyCheckboxes;
