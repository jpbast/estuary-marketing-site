/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
    path: ".env",
})

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    accessToken: process.env.STRAPI_TOKEN,
    collectionTypes: ["blog-post", "tag", "author"],
    singleTypes: [],
    // remoteFileHeaders: {
    //     /**
    //      * Customized request headers
    //      * For http request with a image or other files need authorization
    //      * For expamle: Fetch a CDN file which has a security config when gatsby building needs
    //      */
    //     Referer: "https://your-site-domain/",
    //     // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
    // },
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Estuary`,
        description: `Estuary`,
        siteUrl: `https://estuary.dev`,
        social: {
            twitter: "estuary twitter",
        },
    },
    // graphqlTypegen: true,
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: `blog_images`,
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-transformer-rehype`,
            options: {
                // Condition for selecting an existing GrapghQL node (optional)
                // If not set, the transformer operates on file nodes.
                filter: node =>
                    node.internal.type === `STRAPI_BLOG_POST_BODY_TEXTNODE`,
                // Only needed when using filter (optional, default: node.html)
                // Source location of the html to be transformed
                source: node => node.Body,
                // Additional fields of the sourced node can be added here (optional)
                // These fields are then available on the htmlNode on `htmlNode.context`
                contextFields: [],
                // Fragment mode (optional, default: true)
                fragment: true,
                // Space mode (optional, default: `html`)
                space: `html`,
                // EmitParseErrors mode (optional, default: false)
                emitParseErrors: true,
                // Verbose mode (optional, default: false)
                verbose: true,
                // Plugins configs (optional but most likely you need one)
                plugins: [
                    {
                        resolve: `@draftbox-co/gatsby-rehype-inline-images`,
                        // all options are optional and can be omitted
                        options: {
                            // all images larger are scaled down to maxWidth (default: maxWidth = imageWidth)
                            // maxWidth: 2000,
                            withWebp: true,
                            // disable, if you need to save memory
                            useImageCache: true,
                            quality: 100,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-less`,
        {
            resolve: "gatsby-plugin-local-search",
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: "posts",

                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: "lunr",

                // Provide options to the engine. This is optional and only recommended
                // for advanced users.
                //
                // Note: Only the flexsearch engine supports options.
                // engineOptions: "default",

                // GraphQL query used to fetch all data for the search index. This is
                // required.
                query: `
                {
                    allStrapiBlogPost{
                        nodes {
                            id
                            title: Title
                            slug: Slug
                            publishedAt(formatString: "MMMM D, YYYY")
                            tags: tags {
                                Name
                                Slug
                                Type
                            }
                            authors {
                                name: Name
                                picture: Picture {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(layout: CONSTRAINED, width: 50)
                                        }
                                    }
                                }
                                link: Link
                            }
                            hero: Hero {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            layout: CONSTRAINED
                                            placeholder: BLURRED
                                            width: 400
                                            aspectRatio: 1.7
                                            formats: [AUTO, WEBP, AVIF]
                                        )
                                        # Further below in this doc you can learn how to use these response images
                                    }
                                }
                            }
                        }
                    }
                }
              `,

                // Field used as the reference value for each document.
                // Default: 'id'.
                ref: "id",

                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: ["title", "searchable_tags"],

                // List of keys to store and make available in your UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: ["id", "title", "slug", "publishedAt", "tags", "authors", "hero"],

                // Function used to map the result from the GraphQL query. This should
                // return an array of items to index in the form of flat objects
                // containing properties to index. The objects must contain the `ref`
                // field above (default: 'id'). This is required.
                normalizer: ({ data }) => {
                    const allNodes = data.allStrapiBlogPost.nodes;
                    const mappedNodes = allNodes.map(node=>({...node, searchable_tags: node.tags.map(t=>t.Name).join(" ")}));
                    debugger;
                    return mappedNodes;
                }
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // {
        //   resolve: `gatsby-plugin-feed`,
        //   options: {
        //     query: `
        //       {
        //         site {
        //           siteMetadata {
        //             title
        //             description
        //             siteUrl
        //             site_url: siteUrl
        //           }
        //         }
        //       }
        //     `,
        //     feeds: [
        //       {
        //         serialize: ({ query: { site, allMarkdownRemark } }) => {
        //           return allMarkdownRemark.nodes.map(node => {
        //             return Object.assign({}, node.frontmatter, {
        //               description: node.excerpt,
        //               date: node.frontmatter.date,
        //               url: site.siteMetadata.siteUrl + node.fields.slug,
        //               guid: site.siteMetadata.siteUrl + node.fields.slug,
        //               custom_elements: [{ "content:encoded": node.html }],
        //             })
        //           })
        //         },
        //         query: `{
        //           allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        //             nodes {
        //               excerpt
        //               html
        //               fields {
        //                 slug
        //               }
        //               frontmatter {
        //                 title
        //                 date
        //               }
        //             }
        //           }
        //         }`,
        //         output: "/rss.xml",
        //         title: "Gatsby Starter Blog RSS Feed",
        //       },
        //     ],
        //   },
        // },
    ],
}
