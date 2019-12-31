import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const SolarSampleImages = () => {

  const public_url = process.env.PUBLIC_URL;
  const solar_sample1 = public_url + '/usage/solar_sample/solar_sample1.png';
  const solar_sample2 = public_url + '/usage/solar_sample/solar_sample2.png';
  const solar_sample3 = public_url + '/usage/solar_sample/solar_sample3.png';
  const solar_sample4 = public_url + '/usage/solar_sample/solar_sample4.png';
  const solar_sample5 = public_url + '/usage/solar_sample/solar_sample5.png';

  let SolarSampleSection = styled.section`
  position: absolute;
  padding-right: 9%;
  padding-top: 5%;
`;

  let SolarSamplePagingSection = styled.section`
  position: absolute;
  padding-right: 9%;
  top: 50%;
  width: 91%;
`;

  let SolarSampleImage = styled.div`
  padding-left: 8%;
  padding-top: 3%;
  padding-bottom: 3%;
  width: 90%;
  margin-left: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
  background: #F9F9F9;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

  let SolarSampleImagePageing = styled.div`
    padding-left: 43%;
    padding-top: 3%;
    padding-bottom: 3%;
    width: 50%;
  `;

  if(isMobile){
    SolarSampleImagePageing = styled(SolarSampleImagePageing)`
      display: none;
    `;
  }

  return (
    <div>
      <div className="slideContents">
        <SolarSampleSection id="slide1">
          <SolarSampleImage>
            <img width="90%" src={solar_sample1} alt="solar sample1" />
          </SolarSampleImage>
        </SolarSampleSection>
        <SolarSampleSection id="slide2">
          <SolarSampleImage>
            <img width="90%" src={solar_sample2} alt="solar sample1" />
          </SolarSampleImage>
        </SolarSampleSection>
        <SolarSampleSection id="slide3">
          <SolarSampleImage>
            <img width="90%" src={solar_sample3} alt="solar sample1" />
          </SolarSampleImage>
        </SolarSampleSection>
        <SolarSampleSection id="slide4">
          <SolarSampleImage>
            <img width="90%" src={solar_sample4} alt="solar sample1" />
          </SolarSampleImage>
        </SolarSampleSection>
        <SolarSampleSection id="slide5">
          <SolarSampleImage>
            <img width="90%" src={solar_sample5} alt="solar sample1" />
          </SolarSampleImage>
        </SolarSampleSection>
      </div>
      <div className="slidePagings">
        <SolarSamplePagingSection id="page1">
          <SolarSampleImagePageing>
            <svg width="160" height="13" viewBox="0 0 160 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.9999 11.7083C45.8994 11.7083 48.2499 9.37645 48.2499 6.49996C48.2499 3.62348 45.8994 1.29163 42.9999 1.29163C40.1004 1.29163 37.7499 3.62348 37.7499 6.49996C37.7499 9.37645 40.1004 11.7083 42.9999 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M79.75 11.7083C82.6495 11.7083 85 9.37645 85 6.49996C85 3.62348 82.6495 1.29163 79.75 1.29163C76.8505 1.29163 74.5 3.62348 74.5 6.49996C74.5 9.37645 76.8505 11.7083 79.75 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M116.25 11.7083C119.149 11.7083 121.5 9.37645 121.5 6.49996C121.5 3.62348 119.149 1.29163 116.25 1.29163C113.351 1.29163 111 3.62348 111 6.49996C111 9.37645 113.351 11.7083 116.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M153.25 11.4167C156.149 11.4167 158.5 9.08482 158.5 6.20834C158.5 3.33185 156.149 1 153.25 1C150.351 1 148 3.33185 148 6.20834C148 9.08482 150.351 11.4167 153.25 11.4167Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25006 11.7083C9.14955 11.7083 11.5001 9.37645 11.5001 6.49996C11.5001 3.62348 9.14955 1.29163 6.25006 1.29163C3.35057 1.29163 1.00006 3.62348 1.00006 6.49996C1.00006 9.37645 3.35057 11.7083 6.25006 11.7083Z" fill="#6DDCFF" stroke="#6DDCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SolarSampleImagePageing>
        </SolarSamplePagingSection>
        <SolarSamplePagingSection id="page2">
          <SolarSampleImagePageing>
            <svg width="160" height="13" viewBox="0 0 160 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.9999 11.7083C45.8994 11.7083 48.2499 9.37645 48.2499 6.49996C48.2499 3.62348 45.8994 1.29163 42.9999 1.29163C40.1004 1.29163 37.7499 3.62348 37.7499 6.49996C37.7499 9.37645 40.1004 11.7083 42.9999 11.7083Z" fill="#6DDCFF" stroke="#6DDCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M79.7499 11.7083C82.6494 11.7083 84.9999 9.37645 84.9999 6.49996C84.9999 3.62348 82.6494 1.29163 79.7499 1.29163C76.8504 1.29163 74.4999 3.62348 74.4999 6.49996C74.4999 9.37645 76.8504 11.7083 79.7499 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M116.25 11.7083C119.149 11.7083 121.5 9.37645 121.5 6.49996C121.5 3.62348 119.149 1.29163 116.25 1.29163C113.351 1.29163 111 3.62348 111 6.49996C111 9.37645 113.351 11.7083 116.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M153.25 11.4167C156.149 11.4167 158.5 9.08482 158.5 6.20834C158.5 3.33185 156.149 1 153.25 1C150.351 1 148 3.33185 148 6.20834C148 9.08482 150.351 11.4167 153.25 11.4167Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 11.7083C9.14949 11.7083 11.5 9.37645 11.5 6.49996C11.5 3.62348 9.14949 1.29163 6.25 1.29163C3.3505 1.29163 1 3.62348 1 6.49996C1 9.37645 3.3505 11.7083 6.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SolarSampleImagePageing>
        </SolarSamplePagingSection>
        <SolarSamplePagingSection id="page3">
          <SolarSampleImagePageing>
            <svg width="160" height="13" viewBox="0 0 160 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.9999 11.7083C45.8994 11.7083 48.2499 9.37645 48.2499 6.49996C48.2499 3.62348 45.8994 1.29163 42.9999 1.29163C40.1004 1.29163 37.7499 3.62348 37.7499 6.49996C37.7499 9.37645 40.1004 11.7083 42.9999 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M79.7499 11.7083C82.6494 11.7083 84.9999 9.37645 84.9999 6.49996C84.9999 3.62348 82.6494 1.29163 79.7499 1.29163C76.8504 1.29163 74.4999 3.62348 74.4999 6.49996C74.4999 9.37645 76.8504 11.7083 79.7499 11.7083Z" fill="#6DDCFF" stroke="#6DDCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M116.25 11.7083C119.149 11.7083 121.5 9.37645 121.5 6.49996C121.5 3.62348 119.149 1.29163 116.25 1.29163C113.351 1.29163 111 3.62348 111 6.49996C111 9.37645 113.351 11.7083 116.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M153.25 11.4167C156.149 11.4167 158.5 9.08482 158.5 6.20834C158.5 3.33185 156.149 1 153.25 1C150.351 1 148 3.33185 148 6.20834C148 9.08482 150.351 11.4167 153.25 11.4167Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 11.7083C9.14949 11.7083 11.5 9.37645 11.5 6.49996C11.5 3.62348 9.14949 1.29163 6.25 1.29163C3.3505 1.29163 1 3.62348 1 6.49996C1 9.37645 3.3505 11.7083 6.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SolarSampleImagePageing>
        </SolarSamplePagingSection>
        <SolarSamplePagingSection id="page4">
          <SolarSampleImagePageing>
            <svg width="160" height="13" viewBox="0 0 160 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.9999 11.7083C45.8994 11.7083 48.2499 9.37645 48.2499 6.49996C48.2499 3.62348 45.8994 1.29163 42.9999 1.29163C40.1004 1.29163 37.7499 3.62348 37.7499 6.49996C37.7499 9.37645 40.1004 11.7083 42.9999 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M79.7499 11.7083C82.6494 11.7083 84.9999 9.37645 84.9999 6.49996C84.9999 3.62348 82.6494 1.29163 79.7499 1.29163C76.8504 1.29163 74.4999 3.62348 74.4999 6.49996C74.4999 9.37645 76.8504 11.7083 79.7499 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M116.25 11.7083C119.149 11.7083 121.5 9.37645 121.5 6.49996C121.5 3.62348 119.149 1.29163 116.25 1.29163C113.351 1.29163 111 3.62348 111 6.49996C111 9.37645 113.351 11.7083 116.25 11.7083Z" fill="#6DDCFF" stroke="#6DDCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M153.25 11.4167C156.149 11.4167 158.5 9.08482 158.5 6.20834C158.5 3.33185 156.149 1 153.25 1C150.351 1 148 3.33185 148 6.20834C148 9.08482 150.351 11.4167 153.25 11.4167Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 11.7083C9.14949 11.7083 11.5 9.37645 11.5 6.49996C11.5 3.62348 9.14949 1.29163 6.25 1.29163C3.3505 1.29163 1 3.62348 1 6.49996C1 9.37645 3.3505 11.7083 6.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SolarSampleImagePageing>
        </SolarSamplePagingSection>
        <SolarSamplePagingSection id="page5">
          <SolarSampleImagePageing>
            <svg width="160" height="13" viewBox="0 0 160 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.9999 11.7083C45.8994 11.7083 48.2499 9.37645 48.2499 6.49996C48.2499 3.62348 45.8994 1.29163 42.9999 1.29163C40.1004 1.29163 37.7499 3.62348 37.7499 6.49996C37.7499 9.37645 40.1004 11.7083 42.9999 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M79.7499 11.7083C82.6494 11.7083 84.9999 9.37645 84.9999 6.49996C84.9999 3.62348 82.6494 1.29163 79.7499 1.29163C76.8504 1.29163 74.4999 3.62348 74.4999 6.49996C74.4999 9.37645 76.8504 11.7083 79.7499 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M116.25 11.7083C119.149 11.7083 121.5 9.37645 121.5 6.49996C121.5 3.62348 119.149 1.29163 116.25 1.29163C113.351 1.29163 111 3.62348 111 6.49996C111 9.37645 113.351 11.7083 116.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M153.25 11.4167C156.149 11.4167 158.5 9.08482 158.5 6.20834C158.5 3.33185 156.149 1 153.25 1C150.351 1 148 3.33185 148 6.20834C148 9.08482 150.351 11.4167 153.25 11.4167Z" fill="#6DDCFF" stroke="#6DDCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.25 11.7083C9.14949 11.7083 11.5 9.37645 11.5 6.49996C11.5 3.62348 9.14949 1.29163 6.25 1.29163C3.3505 1.29163 1 3.62348 1 6.49996C1 9.37645 3.3505 11.7083 6.25 11.7083Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SolarSampleImagePageing>
        </SolarSamplePagingSection>
      </div>
    </div>
  )
}

export default SolarSampleImages