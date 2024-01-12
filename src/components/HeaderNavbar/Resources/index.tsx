import React, { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { isDesktop } from "react-device-detect"

import Chevron from "@mui/icons-material/ChevronRight"

import { read, listen, tour } from "./items"

import Card from "../Card"
import CardItem from "../CardItem"

const HeaderNavbarResources = ({ active, setActive }) => {
  const wrapperRef = useRef(null);

  const onClick = (ev) => {
    ev.preventDefault()
    if (!isDesktop) setActive((prev) => prev === 'resources' ? '' : 'resources')
  }

  const onMouseEnter = (ev) => {
    ev.preventDefault()
    if (isDesktop) setActive('resources')
  }

  const onMouseLeave = (ev) => {
    ev.preventDefault()
    if (isDesktop) setActive('')
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !event.target.className?.includes?.('active')) {
        setActive('')
      }
    }

    if (active) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
      <>
        <Link className={clsx("global-header-link", active && "active")} to="#" onClick={onClick} onMouseEnter={onMouseEnter}>
          Resources
          <Chevron className="menu-chevron" fontSize="small" />
        </Link>
        <Card customRef={wrapperRef} show={active} onMouseLeave={onMouseLeave}>
          <CardItem title="READ" onlyContent items={read} />
          <CardItem className="no-padding" title="LISTEN" onlyContent items={listen} />
          <CardItem className="hide-on-mobile" title="TOUR" items={tour} />
          <CardItem className="hide-on-mobile" title="WEBINAR">
            <StaticImage className="container-image" src="../../../images/snapshot 1.png" width={270} height={170} alt="book" />
            <OutboundLink
              target="_blank"
              href="https://try.estuary.dev/webinar-estuary101-ondemand"
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