import React from "react";
import { Checkbox, Stack } from "@shopify/polaris";

const JapanEnergyCheckboxes = props => {
  const dict = props.dict;
  const electricPowersChecked = props.electricPowersChecked;
  const handleElectricPowersChange = props.handleElectricPowersChange;
  return (
    <div>
      <Stack>
        <Checkbox
          label={dict.all}
          checked={props.allChecked}
          onChange={props.handleAllChange}
        />
        <Checkbox
          label={dict.hepco}
          checked={electricPowersChecked.hepcoChecked}
          onChange={handleElectricPowersChange.handleHepcoChange}
        />
        <Checkbox
          label={dict.tohokuepco}
          checked={electricPowersChecked.tohokuepcoChecked}
          onChange={handleElectricPowersChange.handleTohokuepcoChange}
        />
        <Checkbox
          label={dict.rikuden}
          checked={electricPowersChecked.rikudenChecked}
          onChange={handleElectricPowersChange.handleRikudenChange}
        />
        <Checkbox
          label={dict.tepco}
          checked={electricPowersChecked.tepcoChecked}
          onChange={handleElectricPowersChange.handleTepcoChange}
        />
        <Checkbox
          label={dict.chuden}
          checked={electricPowersChecked.chudenChecked}
          onChange={handleElectricPowersChange.handleChudenChange}
        />
      </Stack>
      <Stack>
        <Checkbox
          label={dict.kepco}
          checked={electricPowersChecked.kepcoChecked}
          onChange={handleElectricPowersChange.handleKepcoChange}
        />
        <Checkbox
          label={dict.energia}
          checked={electricPowersChecked.energiaChecked}
          onChange={handleElectricPowersChange.handleEnergiaChange}
        />
        <Checkbox
          label={dict.yonden}
          checked={electricPowersChecked.yondenChecked}
          onChange={handleElectricPowersChange.handleYondenChange}
        />
        <Checkbox
          label={dict.kyuden}
          checked={electricPowersChecked.kyudenChecked}
          onChange={handleElectricPowersChange.handleKyudenChange}
        />
        <Checkbox
          label={dict.okiden}
          checked={electricPowersChecked.okidenChecked}
          onChange={handleElectricPowersChange.handleOkidenChange}
        />
      </Stack>
    </div>
  );
};

export default JapanEnergyCheckboxes;
