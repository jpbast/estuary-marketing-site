import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import LinkProduct from "./Product"
import LinkResources from "./Resources"

const HeaderNavbar = () => {
  return (
    <div className="global-header-links">
      <LinkProduct />
      <Link className="global-header-link" to="/pricing">Pricing</Link>
      <Link className="global-header-link" to="/integrations">Connectors</Link>
      <LinkResources />
      <OutboundLink className="global-header-link" href="https://docs.estuary.dev">Docs</OutboundLink>
    </div>
  )
}

export default HeaderNavbar