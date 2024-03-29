import React, { PropsWithChildren } from 'react';
import * as S from './styles';

type BlogLink = {
  variant?: 'default' | 'ghost';
  href: string;
};

const BlogLink: React.FC<PropsWithChildren<BlogLink>> = ({ variant, href, children }) => {
  return (
    <S.ButtonContainer variant={variant} href={href}>
      {children}
    </S.ButtonContainer>
  );
};

export default BlogLink;
