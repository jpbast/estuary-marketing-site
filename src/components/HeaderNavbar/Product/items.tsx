import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const products = [
  {
    name: "Estuary Flow",
    to: "#",
    description: "Build fully managed real-time data pipelines in minutes.",
    Image: () => <StaticImage src="../../../images/header-book.png" width={20} height={20} alt="book" />
  },
  {
    name: "Open-Source Connectors",
    to: "#",
    description: "Open source CDC connectors for speed and scale.",
    Image: () => <StaticImage src="../../../images/header-graphic.png" width={20} height={20} alt="graphic" />
  },
  {
    name: "Gazette",
    to: "#",
    description: "For the streaming enthusiast, Our open-source pub-sub streaming framework that powers Estuary.",
    Image: () => <StaticImage src="../../../images/header-surface.png" width={20} height={20} alt="surface" />
  },
]

export const compare = [
  {
    name: "Estuary vs. Fivetran",
    to: "#",
  },
  {
    name: "Estuary vs. Confluent",
    to: "#",
  },
  {
    name: "Estuary vs. Airbyte",
    to: "#",
  },
  {
    name: "Estuary vs. Debezium",
    to: "#",
  },
]
