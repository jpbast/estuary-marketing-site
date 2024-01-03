import React, { useState } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

import Chevron from "@mui/icons-material/ChevronRight"

import { products, compare } from "./items"

import Card from "../Card"
import CardItem from "../CardItem"

const HeaderNavbarProduct = () => {
  const [active, setActive] = useState(true)

  const onClick = (ev) => {
    ev.preventDefault()
    setActive((prev) => !prev)
  }

  return (
      <>
        <Link className={clsx("global-header-link", active && "active")} to="#" onClick={onClick}>
          Product
          <Chevron className="menu-chevron" fontSize="small" />
        </Link>
        <Card show={active}>
          <CardItem title="PRODUCT" items={products} />
          <CardItem title="COMPARE" items={compare} />
        </Card>
      </>
  )
}

export default HeaderNavbarProduct