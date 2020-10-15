import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share"
const SocialIcons = () => {
    return (
        <div>
            <FacebookShareButton url="www.google.com">
              <FacebookIcon size={32} round={true}></FacebookIcon>
            </FacebookShareButton>
            <LinkedinShareButton>
              <LinkedinIcon size={32} round={true}></LinkedinIcon>
            </LinkedinShareButton>
            <RedditShareButton>
              <RedditIcon size={32} round={true}></RedditIcon>
            </RedditShareButton>
            <TwitterShareButton>
              <TwitterIcon size={32} round={true}></TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton>
              <WhatsappIcon size={32} round={true}></WhatsappIcon>
            </WhatsappShareButton>
        </div>
    )
}

export default SocialIcons
