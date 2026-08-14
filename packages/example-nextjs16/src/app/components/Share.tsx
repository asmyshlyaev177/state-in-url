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
import type { ShareCopy } from "../i18n/copy/types";

const shareUrl = 'https://github.com/asmyshlyaev177/state-in-url'
const size = 48

export const Share = ({ copy }: { copy: ShareCopy }) => {
  // Pre-fills the Twitter/Reddit dialogs; it is read on the other site, not here.
  const title = copy.dialogTitle;

  return (
    <div className="share-block flex items-center max-sm:justify-evenly sm:justify-center sm:gap-4 w-full">

      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="share-icon"
        name="X/Twitter-share-button"
        aria-label={copy.buttons.x}
      >
        <XIcon size={size} round />
      </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          className="share-icon"
        name="LinkedIn-share-button"
        aria-label={copy.buttons.linkedin}
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
        aria-label={copy.buttons.reddit}
        >
          <RedditIcon size={size} round />
        </RedditShareButton>

      <VKShareButton
        url={shareUrl}
        image={`${vercelUrl}/social_banner.png`}
        className="share-icon"
        name="VK-share-button"
        aria-label={copy.buttons.vk}
      >
        <VKIcon size={size} round />
      </VKShareButton>

      <FacebookShareButton
        url={shareUrl}
        className="share-icon"
        name="Facebook-share-button"
        aria-label={copy.buttons.facebook}
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>
    </div>
  )
}
