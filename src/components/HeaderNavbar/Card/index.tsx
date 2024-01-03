import React from "react"
import clsx from "clsx"

const HeaderCard = ({ show, children }) => {
  return (
    <div className={clsx("header-card", show && "show")}>
      {children}
    </div>
  )
}

export default HeaderCard