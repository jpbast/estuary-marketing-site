import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styles';
import BlogLink from '../BlogLink';
import CheckIcon from '@mui/icons-material/Check';
import { useMediaQuery } from '@mui/material';

const Title = () => (
  <h3>
    Streaming Pipelines. <br />
    Simple to deploy. <br />
    Simply Priced.
  </h3>
);

const Items = () => (
  <div className="items">
    <ul>
      <li>
        <p>
          <CheckIcon /> $1/GB of data moved + $.14/connector/hour;
        </p>
      </li>
      <li>
        <p>
          <CheckIcon /> 50% less than competing ETL/ELT solutions;
        </p>
      </li>
      <li>
        <p>
          <CheckIcon /> {'<'}100ms latency on streaming sinks/sources.
        </p>
      </li>
    </ul>
  </div>
);

const Links = () => (
  <div className="links">
    <BlogLink href="https://dashboard.estuary.dev/register">Build pipeline</BlogLink>
    <BlogLink variant="ghost" href="https://estuary.dev/pricing/">
      More on our Pricing
    </BlogLink>
  </div>
);

const BuildPipelineHuge: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1180px)');

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
      {isMobile ? (
        <div className="mobile">
          <Title />
          <Items />
          <Links />
        </div>
      ) : (
        <>
          <div className="first-section">
            <Title />
            <Links />
          </div>
          <Items />
        </>
      )}
    </S.Container>
  );
};

export default BuildPipelineHuge;
