import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Privacy = (props) => {

  const dict = props.dict;
  const handleSubmit = props.handleSubmit;

  let Privacy = styled.div`
  font-family: Roboto;
  position: absolute;
  width: 90%;
  height: 10%;
  left: 5%;
  top: 65%
  color: #000;
  font-size: 18px;
  line-height: 32px;
`;

  let PrivacyAccept = styled.button`
  position: absolute;
  width: 24%;
  height: 9%;
  left: 38%;
  top: 85%;
  background: #0084FF;
  border-radius: 4px;
`;

  let PrivacyAcceptP = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  color: #fff;
`;

  if (isMobile) {
    Privacy = styled(Privacy)`
    height: 10%;
    top: 63%;
    font-size: 16px;
  `;

    PrivacyAccept = styled(PrivacyAccept)`
    width: 60%;
    height: 7%;
    left: 20%;
    top: 86%;
    font-size: 16px;
  `;
  }


  return (
    <div>
      <Privacy>
        <p>
          {dict.contact_text3}
        </p>
        <br />
        <p>
          {dict.contact_text4}
          <a
            href="https://corp.panair.jp/privacy_short"
            external="true"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.contact_text5}
          </a>
          {dict.contact_text6}
        </p>
        <p>
          {dict.contact_text7}
        </p>
      </Privacy>
      <br />
      <PrivacyAccept
        onClick={handleSubmit}>
        <PrivacyAcceptP>{dict.contact_submit}</PrivacyAcceptP>
      </PrivacyAccept>
      <br />
    </div>
  )
}

export default Privacy