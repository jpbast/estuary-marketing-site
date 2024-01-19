import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { isDesktop } from "react-device-detect"

const ItemLink = ({ name, description, Image, to }) => {
  const LinkElement: any = to[0] === '/' ? Link : OutboundLink
  const linkProps = to[0] === '/' ? { to } : { href: to }

  return (
    <LinkElement {...linkProps}>
      <div className="card-item">
        {Image && <div className="icon"><Image /></div>}
        <div>
          <p className="title">{name}</p>
          {description && <p className="description">{description}</p>}
        </div>
      </div>
    </LinkElement>
  )
}

const HeaderCardItem = ({ title, items = [], children, onlyContent, ...props }: any) => {
  return (
    <div {...props}>
      {(!onlyContent || isDesktop) && <p className="card-title">{title}</p>}
      <div className="content">
        {items.map((item, index) => <ItemLink key={index} {...item} />)}
        {children}
      </div>
    </div>
  )
}

export default HeaderCardItem