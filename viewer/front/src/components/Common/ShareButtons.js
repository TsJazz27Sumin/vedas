import React from '../../../node_modules/react'
import ReactGA from '../../../node_modules/react-ga';
import { Stack } from '../../../node_modules/@shopify/polaris';
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  WeiboShareButton,
} from '../../../node_modules/react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from '../../../node_modules/react-share';
import axios from '../../../node_modules/axios'

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
      {/* TODO:実際にシェアできるか調整をする。https://github.com/nygardk/react-share */}
      <FacebookShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Facebook', current_url, props.pathname)}
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={current_url}
        beforeOnClick={() => share_button_click('Twitter', current_url, props.pathname)}
        hashtags={["パネイル", "Panair", "Vedas", "電力見える化"]}
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