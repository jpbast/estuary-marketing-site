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
        <div className="global-footer-left">
          <Link className="global-footer-logo-link" to="/">
            <StaticImage
              src="../images/estuary-icon.png" alt="estuary logo"
              width={27}
              height={35}
              style={{
                margin: "34px 7px"
              }}
              layout="fixed"
            />
            <h1 className="global-footer-title">Estuary</h1>
          </Link>
          <p className="global-footer-subtext">
            Managed streaming data pipelines, streaming SQL transformations and
            turnkey connectivity to clouds, databases, and apps.
          </p>
          <div>
            <p className="global-footer-subtext-title">Don't miss a thing</p>
            <p className="global-footer-subtext">Subscribe now to get the latest news and updates.</p>
          </div>
        </div>
        <div className="global-footer-copyright">
          <div className="global-footer-divider"></div>
          © {new Date().getFullYear()} All Rights Reserved - 
          {` `}
          <a className="global-footer-copyright-link" href="https://www.estuary.dev/">esturary.dev</a>
        </div>

      </footer>
    </div>
  )
}

export default Layout
