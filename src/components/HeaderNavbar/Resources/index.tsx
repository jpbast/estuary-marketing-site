import React, { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Chevron from "@mui/icons-material/ChevronRight"

import { read, listen, tour } from "./items"

import Card from "../Card"
import CardItem from "../CardItem"

const HeaderNavbarResources = () => {
  const [active, setActive] = useState(false)
  const wrapperRef = useRef(null);

  const onClick = (ev) => {
    ev.preventDefault()
    setActive((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !event.target.className?.includes?.('active')) {
        setActive(false)
      }
    }

    if (active) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
      <>
        <Link className={clsx("global-header-link", active && "active")} to="#" onClick={onClick}>
          Resources
          <Chevron className="menu-chevron" fontSize="small" />
        </Link>
        <Card customRef={wrapperRef} show={active}>
          <CardItem title="READ" onlyContent items={read} />
          <CardItem className="no-padding" title="LISTEN" onlyContent items={listen} />
          <CardItem className="hide-on-mobile" title="TOUR" items={tour} />
          <CardItem className="hide-on-mobile" title="WEBINAR">
            <StaticImage className="container-image" src="../../../images/snapshot 1.png" width={270} height={170} alt="book" />
            <OutboundLink
              target="_blank"
              href="https://dashboard.estuary.dev/register"
              className="cta-button"
            >
              Watch Estuary 101
            </OutboundLink>
          </CardItem>
        </Card>
      </>
  )
}

export default HeaderNavbarResources