import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Bio from '../../bio';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import * as S from './styles';
import ShareArticle from '../ShareArticle';
import { Author } from '../../../typings/author';
import { BlogPost } from '../Page';

type BlogPostHeaderProps = {
  title: string;
  publishedAt: string;
  authors: Author[];
  description: string;
  hero?: BlogPost['hero'];
  isMobile: boolean;
  tags: {
    name: string;
    type: string;
  }[];
};

const Header = ({ title, authors, publishedAt, hero, description, isMobile, tags }: BlogPostHeaderProps) => {
  return (
    <S.Container>
      <StaticImage
        className="img"
        quality={100}
        placeholder="none"
        alt=""
        src="../../../images/blog-post-header.png"
        layout="fullWidth"
      />
      <div className="header-content-wrapper">
        <div className="header-info">
          <div className="published-at-row">
            {tags && tags.length > 0 && (
              <div className="tags-container">
                {tags.map((tag) => (
                  <div className="tag" key={tag.name}>
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="blog-post-date">
              <CalendarTodayOutlinedIcon fontSize="inherit" />
              <span>{publishedAt}</span>
            </div>
          </div>
          <h1>{title}</h1>
          <p className="post-description">{description}</p>
          <Bio authors={authors} />
        </div>
        {hero && (
          <div className="hero-image">
            <GatsbyImage alt={title} image={hero.localFile.childImageSharp.gatsbyImageData} loading="eager" />
          </div>
        )}
        {isMobile && <ShareArticle />}
      </div>
    </S.Container>
  );
};

export default Header;
