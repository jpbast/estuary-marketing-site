import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import LinkProduct from "./Product"

const HeaderNavbar = () => {
  return (
    <div className="global-header-links">
      <LinkProduct />
      <Link className="global-header-link" to="/pricing">Pricing</Link>
      <Link className="global-header-link" to="/integrations">Connectors</Link>
      <Link className="global-header-link" to="#">Resources</Link>
      <OutboundLink className="global-header-link" href="https://docs.estuary.dev">Docs</OutboundLink>
    </div>
  )
}

export default HeaderNavbar