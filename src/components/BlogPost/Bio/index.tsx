import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { OutboundLink } from '../../OutboundLink';

export interface BioAuthor {
  name: string;
  link: string;
  picture: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
}

export interface BioProps {
  authors: BioAuthor[];
}

export const getInitials = (name: string) => {
  if (!name) {
    return '';
  }
  const firstLetter = name[0].toUpperCase();
  const lastName = name.split(' ')?.[1];
  if (lastName) {
    return `${firstLetter}${lastName[0].toUpperCase()}`;
  }
  return `${firstLetter}${name[1].toUpperCase()}`;
};

const Bio = ({ authors }: BioProps) => {
  const rendered = (authors ?? []).map(({ picture, name, link }) => {
    const image = picture && getImage(picture.localFile.childImageSharp.gatsbyImageData);
    let rendered_name = name && <strong>By {name}</strong>;

    let rendered_img = image ? (
      <GatsbyImage className="bio-avatar" image={image} alt="Profile picture" loading="eager" />
    ) : (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '100%',
          border: '1px solid grey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 14,
          color: 'grey',
        }}
      >
        {getInitials(name)}
      </div>
    );

    let combined = (
      <li>
        {rendered_img}
        {rendered_name}
      </li>
    );

    if (link) {
      combined = (
        <OutboundLink href={link} style={{ display: 'flex', alignItems: 'center' }}>
          {combined}
        </OutboundLink>
      );
    }

    return <React.Fragment key={name}>{combined}</React.Fragment>;
  });
  if (rendered.length < 1) {
    return null;
  }
  return (
    <div className="bio">
      <ul>{rendered}</ul>
    </div>
  );
};

export default Bio;
