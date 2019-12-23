import React from 'react'
import { Stack } from '@shopify/polaris';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WorkplaceIcon,
  LineIcon,
  EmailIcon,
} from 'react-share';
import axios from 'axios'

const ShareButtons = ({ current_url }) => {

  const public_url = process.env.PUBLIC_URL;
  const weibo_icon = public_url + '/sns/weibo_32x32.png';

  const share_button_click = (type, current_url) => {
    const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'
    const data = { 
      "type" : type, 
      "url" : current_url,
     };
    axios.post(baseUrl + 'share', data);
  };

  return (
    <Stack>
      {/* TODO:実際にシェアできるか調整をする。https://github.com/nygardk/react-share */}
      <FacebookShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Facebook', current_url)}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Linkedin', current_url)}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Twitter', current_url)}
        hashtags={["パネイル", "Panair", "Vedas", "電力見える化"]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WorkplaceShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Workplace', current_url)}
      >
        <WorkplaceIcon size={32} round />
      </WorkplaceShareButton>

      <LineShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Line', current_url)}
      >
        <LineIcon size={32} round />
      </LineShareButton>

      <EmailShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Email', current_url)}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>

      <WeiboShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Weibo', current_url)}
      >
        <img width='100%' src={weibo_icon} alt="weibo_icon"/>
      </WeiboShareButton>
    </Stack>
  )
}

export default ShareButtons