import * as React from "react"
import Header from "./header"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  //@ts-ignore

  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>
      <footer className="global-footer">
        <div>
          <Link className="global-header-logo-link" to="/">
            <StaticImage
              src="../images/estuary-icon.png" alt="estuary logo"
              width={27}
              height={35}
              style={{
                margin: "34px 7px"
              }}
              layout="fixed"
            />
            <h1 className="global-header-title">Estuary</h1>
          </Link>
          <p className="global-footer-subtext">
            Managed streaming data pipelines, streaming SQL transformations and 
            turnkey connectivity to clouds, databases, and apps.
          </p>
        </div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
