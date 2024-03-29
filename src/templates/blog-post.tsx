import * as React from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';
import Seo from '../components/seo';
import logoUrl from '../images/combination-mark__multi-blue.png';
import BlogPostPage, { BlogPostPageProps } from '../components/BlogPost/Page';

dayjs.extend(reltime);

const BlogPostTemplate: React.FC<BlogPostPageProps> = (props) => {
  return <BlogPostPage {...props} />;
};

export const Head = ({
  data: {
    post,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  const mappedAuthors = post.authors.map((author) => ({
    name: author.name,
    url: author.link,
    image: author.picture && {
      '@type': 'ImageObject',
      url: `${siteUrl}/${author.picture.localFile.childImageSharp.fixed.src}`,
    },
  }));

  const postTags = post.tags.filter((tag) => tag.type === 'tag').map((t) => t.name);
  return (
    <>
      <Seo
        title={post.title}
        description={post.description ?? ''}
        url={`${siteUrl}/${post.slug}`}
        image={post.hero && `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/${post.slug}`,
          },
          headline: post.title,
          description: post.description ?? '',
          image: post.hero && `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`,
          author: post.authors.length > 1 ? mappedAuthors : mappedAuthors[0],
          keywords: postTags,
          publisher: {
            '@type': 'Organization',
            name: 'Estuary',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}${logoUrl}`,
            },
          },
          datePublished: post.machineReadablePublishDate,
        })}
      </script>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    post: strapiBlogPost(id: { eq: $id }) {
      title: Title
      publishedAt(formatString: "MMMM D, YYYY")
      machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
      description: Description
      slug: Slug
      body: Body {
        data {
          Body
          childHtmlRehype {
            html
            tableOfContents
          }
        }
      }
      authors {
        name: Name
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
        link: Link
      }
      hero: Hero {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              # aspectRatio: 2
              formats: [AUTO, WEBP, AVIF]
            )
            meta_img: fixed(width: 500) {
              src
            }
            # Further below in this doc you can learn how to use these response images
          }
        }
      }
      tags: tags {
        name: Name
        type: Type
      }
    }
  }
`;
