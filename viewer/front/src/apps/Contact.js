import React, { useState, useCallback, useEffect } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, Form, FormLayout, TextField, Button, Link } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import axios from 'axios'
import VedasTopBar from '../components/VedasTopBar'
import wordDictionaryService from '../services/word_dictionary'

const Contact = (props) => {

  useEffect(() => {
    const pathname = '/contact';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const qs = props.query_param;
  const lang = props.lang;
  const dict = wordDictionaryService.get(lang);

  const [complete, setComplete] = useState(false);

  const [fullName, setFullName] = useState('');
  const handleFullNameChange = useCallback((newValue) => setFullName(newValue), []);

  const [email, setEmail] = useState('');
  const handleEmailChange = useCallback((newValue) => setEmail(newValue), []);

  const [contactInformation, setContactInformation] = useState('');
  const handleContactInformationChange = useCallback((newValue) => setContactInformation(newValue), []);

  const handleSubmit = useCallback((fullName, email, contactInformation) => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'
    const data = { 
      "full_name" : fullName, 
      "email" : email,
      "contact_information" : contactInformation
     };
    axios.post(baseUrl + 'contact', data);
    setFullName('');
    setEmail('');
    setContactInformation('');
    setComplete(true);
    window.scrollTo(0, 0);
  }, []);

  const [is_privacy_link_click, setIsPrivacyLinkClick] = useState(false);

  const contact = (
    <Page title="Contact">
      <Layout>
        <Layout.Section>
          {
            complete ? (
            <p>{dict.contact_complete}</p>
          ):(
            <Form>
              <FormLayout>
                <br/>
                <p>{dict.contact_text1}</p>
                <p>{dict.contact_text2}</p>
                <p>{dict.contact_note}</p>
                <br/>
                <TextField
                  id="id_full_name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  label={dict.contact_item_name}
                  type="text"
                  minLength="1"
                  maxLength="100"
                />
                <TextField
                  id="id_email"
                  value={email}
                  onChange={handleEmailChange}
                  label={dict.contact_item_mail}
                  type="email"
                  minLength="1"
                  maxLength="254"
                />
                <TextField
                  id="id_contact_information"
                  label={dict.contact_item_input}
                  value={contactInformation}
                  onChange={handleContactInformationChange}
                  minLength="1"
                  maxLength="1000"
                  multiline
                />
                <br/>
                <p>
                  <strong>
                    {dict.contact_text3}
                  </strong>
                </p>
                <p>
                  {dict.contact_text4}
                  <Link 
                    url="https://corp.panair.jp/privacy_short"
                    external="true"
                    onClick={() => setIsPrivacyLinkClick(true)}
                    >
                      {dict.contact_text5}
                  </Link>
                  {dict.contact_text6}
                </p>
                <p>
                  {dict.contact_text7}
                </p>
                <br/>
                <Button disabled={is_privacy_link_click===false} onClick={() => handleSubmit(fullName, email, contactInformation)}>{dict.contact_submit}</Button>
                <br/>
              </FormLayout>
            </Form>
        )}
          
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div>
      <VedasTopBar location={props.location} qs={qs} lang={lang}/>
      <div style={{ height: '250px' }}>
        <AppProvider>
          <Frame>
            {contact}
          </Frame>
        </AppProvider>
      </div>
    </div>
  );
}

export default withRouter(Contact)
