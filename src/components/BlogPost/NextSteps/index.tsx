import React from 'react';
import * as S from './styles';
import { Author } from '../../../typings/author';
import LinkIcon from '../../../svgs/link-icon.svg';
import SlackIcon from '../../../svgs/slack-outline.svg';
import XIcon from '../../../svgs/x.svg';
import FacebookIcon from '../../../svgs/facebook.svg';
import MailIcon from '../../../svgs/mail.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { OutboundLink } from '../../OutboundLink';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getInitials } from '../../bio';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type NextStepsProps = {
  author: Author;
};

const SocialLink = ({ link }: { link?: string }) => {
  if (!link) {
    return null;
  }

  let icon = <LinkIcon />;

  if (link.includes('linkedin')) {
    icon = <LinkedInIcon />;
  }

  if (link.includes('facebook')) {
    icon = <FacebookIcon />;
  }

  if (link.includes('mail')) {
    icon = <MailIcon />;
  }

  if (link.includes('slack')) {
    icon = <SlackIcon />;
  }

  if (link.includes('x.com') || link.includes('twitter')) {
    icon = <XIcon />;
  }

  return (
    <OutboundLink className="social-link" href={link}>
      {icon}
    </OutboundLink>
  );
};

const NextSteps: React.FC<NextStepsProps> = ({ author }) => {
  const nextStepsItems = [
    'Read about Lorem ipsum dolor sit amet, consectetur',
    'Learn about Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
  ];

  return (
    <S.Container>
      <div className="next-steps">
        <h3>Next steps</h3>
        <ul>
          {nextStepsItems.map((item) => (
            <li key={item}>
              {item} <ChevronRightIcon />
            </li>
          ))}
        </ul>
      </div>
      {author && (
        <div className="about-the-author">
          <h3>About the author</h3>
          <div className="author-info">
            <div>
              <div className="photo-section">
                <div className="photo-container">
                  {author.picture ? (
                    <GatsbyImage
                      className="img"
                      image={author.picture.localFile.childImageSharp.gatsbyImageData}
                      alt="Profile picture"
                      loading="eager"
                    />
                  ) : (
                    <div className="initials">{getInitials(author.name)}</div>
                  )}
                </div>
                <div className="author-name">
                  <p>{author.name}</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="divider" />
              <SocialLink link={author.link} />
            </div>
          </div>
          {/* TODO: we don't have the author description at the moment */}
          <p className="author-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed consectetur adipiscing elit sed consectetur adipiscing.
          </p>
        </div>
      )}
    </S.Container>
  );
};

export default NextSteps;
