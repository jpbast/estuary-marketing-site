import * as React from "react"

import { CardContainer, Description, ProfilePIc, Name, Designation } from "./styled"

const Card = ({ item }) => {
    const { review, profilepic, name, designation } = item;
  
    return (
      <CardContainer>
        <ProfilePIc src={profilepic} alt="profile-pic" />
        <Name>{name}</Name>
        <Designation>{designation}</Designation>
        <Description>{review}</Description>
      </CardContainer>
    );
  };
  
  export default Card;