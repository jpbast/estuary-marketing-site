import React from 'react';
import Layout from '../../layout';
import Header from '../Header';
import * as S from './styles';
import { TableOfContentItem } from '../TableOfContent';
import { useMediaQuery } from '@mui/material';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PopularArticles from '../PopularArticles';
import BuildPipelineHuge from '../BuildPipelineHuge';
import NextSteps from '../NextSteps';
import { Author } from '../../../typings/author';
import PostBody from '../PostBody';

export type BlogPost = {
  title: string;
  publishedAt: string;
  machineReadablePublishDate: string;
  description: string;
  slug: string;
  body: {
    data: {
      childHtmlRehype: {
        html: string;
        tableOfContents: TableOfContentItem[];
      };
    };
  };
  authors: Author[];
  hero: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  tags: {
    name: string;
    type: string;
  }[];
};

export type BlogPostPageProps = {
  data: {
    post: BlogPost;
  };
};

const BlogPostPage: React.FC<BlogPostPageProps> = ({ data: { post } }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const postTags = post.tags.filter((tag) => tag.type === 'tag');

  return (
    <Layout headerTheme="light">
      <S.Container itemScope itemType="http://schema.org/Article">
        <Header
          title={post.title}
          hero={post.hero}
          authors={post.authors}
          publishedAt={post.publishedAt}
          description={post.description}
          isMobile={isMobile}
          tags={postTags}
        />
        <S.Section style={{ paddingTop: 64 }}>
          <PostBody
            body={post.body.data.childHtmlRehype.html}
            tableOfContents={post.body.data.childHtmlRehype.tableOfContents}
          />
        </S.Section>
        <S.Section style={{ backgroundColor: '#F9FAFC' }}>
          {/* Render just one author for now */}
          <NextSteps author={post.authors[0] as Author} />
        </S.Section>
        <S.Section style={{ paddingTop: 96 }}>
          <PopularArticles />
        </S.Section>
        <S.Section style={{ paddingTop: 96 }}>
          <BuildPipelineHuge />
        </S.Section>
      </S.Container>
    </Layout>
  );
};

export default BlogPostPage;
