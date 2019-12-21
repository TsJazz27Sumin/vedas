import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, Form, FormLayout, TextField, Button } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import axios from 'axios'
import wordDictionaryService from '../services/word_dictionary'

const Contact = (props) => {

  const qs = props.query_param;
  const lang = qs.lang;
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
                  <a href="https://corp.panair.jp/privacy_short" target="_blank"  rel="noopener noreferrer">
                    {dict.contact_text5}
                  </a>
                  {dict.contact_text6}
                </p>
                <p>
                  {dict.contact_text7}
                </p>
                <br/>
                <Button onClick={() => handleSubmit(fullName, email, contactInformation)}>{dict.contact_submit}</Button>
                <br/>
              </FormLayout>
            </Form>
        )}
          
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div style={{ height: '250px' }}>
      <AppProvider>
        <Frame>
          {contact}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(Contact)
