import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface BioProps {
  name: string;
  profile_pic: string;
}

const Bio = ({name, profile_pic}) => {
  const image = getImage(profile_pic)
  return (
    <div className="bio">
      <GatsbyImage
        className="bio-avatar"
        image={image}
        alt="Profile picture"
      />
      {name && (
        <p>
          Written by <strong>{name}</strong> 
        </p>
      )}
    </div>
  )
}

export default Bio
