import React from 'react';
import XIcon from '../../../svgs/x.svg';
import FacebookIcon from '../../../svgs/facebook.svg';
import MailIcon from '../../../svgs/mail.svg';
import * as S from './styles';
import { OutboundLink } from '../../OutboundLink';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

type ShareArticleProps = {};

const ShareArticle: React.FC<ShareArticleProps> = () => {
  const url = window.location.href;

  const links = [
    <TwitterShareButton url={url}>
      <XIcon />
    </TwitterShareButton>,
    <FacebookShareButton url={url}>
      <FacebookIcon />
    </FacebookShareButton>,
    <EmailShareButton url={url}>
      <MailIcon />
    </EmailShareButton>,
  ];

  return (
    <S.Container>
      <h3>Share this article</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <OutboundLink>{link}</OutboundLink>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ShareArticle;
