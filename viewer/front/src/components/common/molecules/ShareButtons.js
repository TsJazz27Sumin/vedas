import React from 'react'
import ReactGA from 'react-ga';
import { Stack } from '@shopify/polaris';
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  WeiboShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from 'react-share';
import axios from 'axios'

const ShareButtons = (props) => {

  const type = props.type;
  const current_url = window.location.href;
  const public_url = process.env.PUBLIC_URL;

  const size = type === "small" ? 32 : 64;
  const weibo_icon = type === "small" ? public_url + '/common/sns/weibo_32x32.png' : public_url + '/common/sns/weibo_64x64.png';

  const share_button_click = (type, current_url, pathname) => {
    
    const action = 'Share by ' + type + " at " + pathname;

    ReactGA.event({
      category: 'SNS Share',
      action: action,
    });

    const baseUrl = process.env.REACT_APP_API_BASE_URL + 'viewer/analyzer/'
    const data = { 
      "type" : type, 
      "url" : current_url,
     };
    axios.post(baseUrl + 'share', data);
  };

  return (
    <Stack>
      <FacebookShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Facebook', current_url, props.pathname)}
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Twitter', current_url, props.pathname)}
        hashtags={["Vedas", "電力見える化"]}
      >
        <TwitterIcon size={size} round />
      </TwitterShareButton>

      <LineShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Line', current_url, props.pathname)}
      >
        <LineIcon size={size} round />
      </LineShareButton>

      <WeiboShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Weibo', current_url, props.pathname)}
      >
        <img width='100%' src={weibo_icon} alt="weibo_icon"/>
      </WeiboShareButton>
    </Stack>
  )
}

export default ShareButtons