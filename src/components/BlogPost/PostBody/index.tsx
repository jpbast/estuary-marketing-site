import React from 'react';
import { useMediaQuery } from '@mui/material';
import * as S from './styles';
import BlogLink from '../BlogLink';
import BuildPipelineCard from '../BuildPipeline';
import { ProcessedPost } from '../../BlogPostProcessor';
import ShareArticle from '../ShareArticle';
import TableOfContent, { TableOfContentItem } from '../TableOfContent';
import { StaticImage } from 'gatsby-plugin-image';

type PostBodyProps = {
  body: string;
  tableOfContents: TableOfContentItem[];
};

const PostBody: React.FC<PostBodyProps> = ({ body, tableOfContents }) => {
  const isMobileMedium = useMediaQuery('(max-width: 1128px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <S.PostSectionContainer>
        <S.StickyContent offsetTop={140}>
          {!isMobile && <ShareArticle />}
          <TableOfContent items={tableOfContents} />
        </S.StickyContent>
        <ProcessedPost body={body} />
        {!isMobileMedium && (
          <S.StickyContent offsetTop={140}>
            <S.BuildPipelineSticky>
              <StaticImage
                quality={90}
                placeholder="none"
                alt=""
                src="../../../images/build-pipeline.png"
                layout="fullWidth"
                width={70}
                height={100}
              />
              <p>
                Start streaming your data <span>for free</span>
              </p>
              <BlogLink href="https://dashboard.estuary.dev/register">Build pipeline</BlogLink>
            </S.BuildPipelineSticky>
          </S.StickyContent>
        )}
      </S.PostSectionContainer>

      <S.PipelineContainer>
        <BuildPipelineCard />
      </S.PipelineContainer>
    </>
  );
};

export default PostBody;
