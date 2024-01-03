import React from "react"
import { Link } from "gatsby"

const ItemLink = ({ name, description, Image, to }) => {
  return (
    <Link to={to}>
      <div className="card-item">
        {Image && <div className="icon"><Image /></div>}
        <div>
          <p className="title">{name}</p>
          {description && <p className="description">{description}</p>}
        </div>
      </div>
    </Link>
  )
}

const HeaderCardItem = ({ title, items }) => {
  return (
    <div>
      <p className="card-title">{title}</p>
      <div className="content">
        {items.map((item, index) => <ItemLink key={index} {...item} />)}
      </div>
    </div>
  )
}

export default HeaderCardItem