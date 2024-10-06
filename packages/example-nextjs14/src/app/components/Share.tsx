'use client';


import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
  XIcon,
} from "react-share";

import { vercelUrl } from "../domain";

const shareUrl = 'https://github.com/asmyshlyaev177/state-in-url'
const title = 'state-in-url library'
const size = 48

export const Share = () => {
  return (
    <div className="share-block flex items-center max-sm:justify-evenly  sm:justify-center sm:gap-4 w-full">

        <FacebookShareButton
          url={shareUrl}
          className="share-icon"
          name="Facebook-share-button"
        aria-label="Facebook-share-button"
        >
          <FacebookIcon size={size} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="share-icon"
        name="X/Twitter-share-button"
        aria-label="X/Twitter-share-button"
        >
          <XIcon size={size} round />
        </TwitterShareButton>


        <LinkedinShareButton
          url={shareUrl}
          className="share-icon"
        name="LinkedIn-share-button"
        aria-label="LinkedIn-share-button"
        >
          <LinkedinIcon size={size} round />
        </LinkedinShareButton>

        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
        className="share-icon"
        name="Reddit-share-button"
        aria-label="Reddit-share-button"
        >
          <RedditIcon size={size} round />
        </RedditShareButton>

      <VKShareButton
        url={shareUrl}
        image={`${vercelUrl}/social_banner.jpg`}
        className="share-icon"
        name="VK-share-button"
        aria-label="VK-share-button"
      >
        <VKIcon size={size} round />
      </VKShareButton>
    </div>
  )
}
