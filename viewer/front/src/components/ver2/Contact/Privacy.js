import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Privacy = (props) => {

  const dict = props.dict;
  const handleSubmit = props.handleSubmit;

  let Privacy = styled.div`
  font-family: Roboto;
  font-size: 18px;
  color: #000;

  width: 90%;
  height: 10%;
  
  position: absolute;
  top: 65%
  left: 5%;
  
  line-height: 32px;
`;

  let PrivacyAccept = styled.button`
  border-radius: 4px;

  background: #0084FF;
  
  height: 9%;
  width: 24%;
  
  position: absolute;
  top: 85%;
  left: 38%;
`;

  let PrivacyAcceptP = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: #fff;

  line-height: 22px;
`;

  if (isMobile) {
    Privacy = styled(Privacy)`
    font-size: 16px;

    height: 10%;
    
    top: 63%;
  `;

    PrivacyAccept = styled(PrivacyAccept)`
    font-size: 16px;

    height: 7%;
    width: 60%;
    
    top: 86%;
    left: 20%;
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