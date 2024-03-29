import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Bio from '../Bio';
import EastIcon from '@mui/icons-material/East';

type Image = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

type Article = {
  id: string;
  slug: string;
  updatedAt: string;
  title: string;
  tags?: {
    name: string;
    slug: string;
    type: string;
    isTab: boolean;
  }[];
  hero: Image;
  authors: {
    name: string;
    picture: Image;
    link: string;
  }[];
};

const ArticleCard = ({ hero, title, tags, updatedAt, authors, slug }: Article) => {
  const tagsParsed =
    tags?.length > 0
      ? tags
          .filter((tag) => tag.type === 'tag')
          .map((t) => t.name)
          .join(', ')
      : null;

  return (
    <Link to={`/${slug}`}>
      <S.ArticleCardContainer>
        <GatsbyImage
          className="thumbnail"
          alt=""
          image={hero.localFile.childImageSharp.gatsbyImageData}
          loading="eager"
        />
        <div className="tags-row">
          {tagsParsed && <p>{tagsParsed}</p>}
          <div>
            <p>{updatedAt}</p>
          </div>
        </div>
        <h3>{title}</h3>
        <Bio authors={authors} />
        <div>
          <div>Article</div>
          <EastIcon fontSize="medium" />
        </div>
      </S.ArticleCardContainer>
    </Link>
  );
};

const PopularArticles: React.FC = () => {
  const { articles } = useStaticQuery<{ articles: { nodes: Article[] } }>(graphql`
    query GetPopularArticles {
      articles: allStrapiBlogPost(
        sort: { publishedAt: DESC }
        filter: { tags: { elemMatch: { Name: { eq: "popular" } } } }
      ) {
        nodes {
          updatedAt(formatString: "MMMM D, YYYY")
          slug: Slug
          id
          hero: Hero {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 400
                  placeholder: BLURRED
                  aspectRatio: 1.7
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          title: Title
          tags {
            name: Name
            slug: Slug
            type: Type
            isTab: IsTab
          }
          authors {
            name: Name
            link: Link
            picture: Picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 100)
                  fixed(width: 60) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (!articles || !articles?.nodes?.length) return null;

  return (
    <S.Container>
      <h3>POPULAR ARTICLES</h3>
      <div>
        {articles.nodes.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </S.Container>
  );
};

export default PopularArticles;
