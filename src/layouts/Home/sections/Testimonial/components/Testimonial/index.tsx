import * as React from "react"
import Card from "../Card/index";
import { contentTestimonials } from "../Content/index";

import { Container, CardList } from "./style"

const Testimonial = () => {
    return (
      <Container>
        <CardList>
          { contentTestimonials.map((item,i)=> ( <Card item={item} key={i}/>))
          }
        </CardList>
      </Container>
    );
  };
  
  export default Testimonial;

