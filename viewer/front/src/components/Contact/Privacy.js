import React from '../../../node_modules/react'
import styled from '../../../node_modules/styled-components'
import { isMobile } from "react-device-detect"
import Color from '../../services/color'

const Privacy = (props) => {

  const dict = props.dict;
  const handleSubmit = props.handleSubmit;

  let Privacy = styled.div`
  font-family: Roboto;
  font-size: 18px;
  color: ${Color.black};

  width: 90%;
  height: 10%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 65%
  left: 5%;
  right: 0%;
  bottom: 0%;
  
  line-height: 32px;
`;

  let PrivacyAccept = styled.button`
  border-radius: 4px;

  background: ${Color.primaryBlue};
  
  height: 9%;
  width: 24%;
  
  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 85%;
  left: 38%;
  right: 0%;
  bottom: 0%;
`;

  let PrivacyAcceptP = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: ${Color.white};

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