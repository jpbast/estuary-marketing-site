import { styled } from 'styled-components';

export const Container = styled.article`
  width: 100%;
  padding-bottom: 5rem;

  * {
    font-family: 'Inter', sans-serif !important;
  }

  .tags-wrap {
    margin: 0 0 24px 0;

    @media (max-width: 767px) {
      margin: 0 0 16px 0;
    }
  }

  .blog-tag {
    padding: 4px 12px;
    border-radius: 36px;
    background: #d7dce5;
    box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
    color: #47506d;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-right: 10px;
  }

  .blog-post-content {
  }

  .post-sidebar {
    max-width: 422px;
    width: 100%;
    padding-right: 40px;

    @media (max-width: 991px) {
      max-width: 322px;
    }

    @media (max-width: 767px) {
      max-width: 100%;
      padding-right: 0;
      position: relative !important;
    }
  }

  .post-content {
    max-width: calc(100% - 422px);
    width: 100%;

    @media (max-width: 991px) {
      max-width: calc(100% - 322px);
    }

    @media (max-width: 767px) {
      max-width: 100%;
    }

    .page-toc {
      display: none;
    }

    .table {
      margin-left: 0;
      margin-right: 0;
    }

    p,
    td {
      color: #47506d;
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;

      @media (max-width: 767px) {
        font-size: 14px;
        line-height: 22px;
      }

      span,
      a {
        color: #47506d !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 18px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        line-height: 30px !important;

        @media (max-width: 767px) {
          font-size: 14px !important;
          line-height: 22px !important;
        }
      }
    }

    ul,
    ol {
      li span,
      li a,
      li {
        color: #47506d !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 18px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        line-height: 30px !important;

        @media (max-width: 767px) {
          font-size: 14px !important;
          line-height: 22px !important;
        }
      }

      br {
        display: none;
      }
    }

    ul,
    ol {
      li {
        a {
          text-decoration: underline;
        }
      }
    }

    hr {
      margin: 35px 0px;
    }
  }

  .blog-post-nav {
    a {
      color: #47506d !important;
      font-family: 'Inter', sans-serif !important;
      font-size: 16px !important;
      font-style: normal !important;
      font-weight: 500 !important;
      line-height: 22px !important;
    }

    @media (max-width: 767px) {
      margin-top: 10px;
      border-top: 1px solid #eef0f3;
      padding-top: 24px;
    }

    div {
      @media (max-width: 991px) {
        display: none;
      }
    }

    a {
      @media (max-width: 991px) {
        max-width: 50%;
        width: 100%;
        text-overflow: unset;
        white-space: inherit;
        text-align: left;
      }

      @media (max-width: 767px) {
        max-width: 100%;
      }

      &:last-child {
        @media (max-width: 991px) {
          text-align: right;
        }

        @media (max-width: 767px) {
          margin-top: 28px;
        }
      }
    }
  }

  .table-of-contents {
    background: #f9fafc;
    counter-reset: toc-counter;
    padding: 16px;

    h3 {
      margin: 0 0 8px;
      color: #04192b;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }

    ul {
      margin: 0;

      li {
        margin-bottom: 8px;
        list-style: none;

        &:not(.sub-item) {
          counter-increment: list-number;

          a {
            font-weight: 600;
          }

          &:before {
            content: counter(list-number);
            width: 24px;
            height: 24px;
            color: #47506d;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            border-radius: 100%;
            background: #fff;
            margin-right: 8px;
            display: inline-block;
          }
        }

        a {
          color: #47506d;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;

          &:hover {
            text-decoration: underline;
          }
        }

        &.sub-item {
          list-style: disc;
          margin-left: 50px;
          font-weight: 400;
          line-height: 18px;

          span {
            display: none;
          }
        }
      }
    }
  }

  .popular-articles {
    margin-top: 24px;
    border-top: 1px solid #eef0f3;
    padding-top: 20px;

    @media (max-width: 767px) {
      display: none;
    }

    &.mobile-only {
      @media (max-width: 767px) {
        display: block;
      }
    }

    h3 {
      color: #04192b;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      margin-top: 0;
      margin-bottom: 8px;
    }

    ul {
      list-style: none;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        padding: 4px 0;
        margin-bottom: 8px;

        .popular-articles-image {
          width: 48px;
          height: 48px;
        }

        a {
          color: #47506d;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          margin-left: 10px;
          width: calc(100% - 58px);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .sidebar-cta {
    padding: 61px 41px;
    margin-top: 28px;
    border-radius: 6px;
    background: #04192b url('./images/pattern-sidebar-cta.svg') no-repeat bottom left / contain;
    text-align: center;

    @media (max-width: 767px) {
      display: none;
    }

    &.mobile-only {
      @media (max-width: 767px) {
        display: block;
      }
    }

    h3 {
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 36px;
      margin-bottom: 16px;
      margin-top: 0;
    }

    a {
      background: #5072eb;
      border-radius: 6px;
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
      max-width: 195px;
      padding: 14px 30px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 32px 64px;

  & > * {
    max-width: var(--max-width-blog-page);
    margin: auto;
  }

  @media (max-width: 1284px) {
    padding: 32px 20px !important;
  }
`;

export const PopularArticles = styled.div``;
