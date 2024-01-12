import React from "react"
import clsx from "clsx"

const HeaderCard = ({ show, children, customRef }) => {
  return (
    <div ref={customRef} className={clsx("header-card", show && "show")}>
      {children}
    </div>
  )
}

export default HeaderCard