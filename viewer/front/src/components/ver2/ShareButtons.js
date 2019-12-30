import React from 'react'
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

const ShareButtons = () => {

  const current_url = window.location.href;
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

      <TwitterShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Twitter', current_url)}
        hashtags={["パネイル", "Panair", "Vedas", "電力見える化"]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LineShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Line', current_url)}
      >
        <LineIcon size={32} round />
      </LineShareButton>

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