import React from 'react';
import * as S from './styles';
import { StaticImage } from 'gatsby-plugin-image';
import BlogLink from '../BlogLink';

const BuildPipelineCard: React.FC = () => {
  return (
    <S.Container>
      <StaticImage
        className="img"
        quality={90}
        placeholder="none"
        alt=""
        src="../../../images/blog-post-header.png"
        layout="fullWidth"
      />
      <p>
        START STREAMING YOUR DATA <span>FOR FREE</span>
      </p>
      <BlogLink href="https://dashboard.estuary.dev/register">Build pipeline</BlogLink>
    </S.Container>
  );
};

export default BuildPipelineCard;
