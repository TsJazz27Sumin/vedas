import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, Form, FormLayout, TextField, Button } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import wordDictionaryService from '../services/word_dictionary'

const Contact = (props) => {
  const qs = props.query_param;
  const lang = qs.lang;
  const dict = wordDictionaryService.get(lang);

  const [name, setName] = useState('');
  const handleNameChange = useCallback((newValue) => setName(newValue), []);

  const [email, setEmail] = useState('');
  const handleEmailChange = useCallback((newValue) => setEmail(newValue), []);

  const [contactInformation, setContactInformation] = useState('');
  const handleContactInformationChange = useCallback((newValue) => setContactInformation(newValue), []);

  const handleSubmit = useCallback((_event) => {
    setName('');
    setEmail('');
    setContactInformation('');
  }, []);

  const contact = (
    <Page title="Contact">
      <Layout>
        <Layout.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <br/>
              <p>{dict.contact_text1}</p>
              <p>{dict.contact_text2}</p>
              <p>{dict.contact_note}</p>
              <br/>
              <TextField
                value={name}
                onChange={handleNameChange}
                label={dict.contact_item_name}
                type="text"
                minLength="1"
                maxLength="100"
              />
              <TextField
                value={email}
                onChange={handleEmailChange}
                label={dict.contact_item_mail}
                type="email"
                minLength="1"
                maxLength="254"
              />
              <TextField
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
              <Button submit>{dict.contact_submit}</Button>
              <br/>
            </FormLayout>
          </Form>
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
