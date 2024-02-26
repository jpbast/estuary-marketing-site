import styled from "styled-components"

export const Container = styled.div`
    .slick-list{
        height: 80px;
    }

    .gatsby-image-wrapper{
        height: 46px !important;
        display: flex !important;
        align-items: center;
        justify-content: space-between;
 
     }

    .rfm-marquee, .rfm-initial-child-container{
        display: flex;
        align-items: end;
        gap: 120px;

        @media (max-width: 810px){
             gap: 50px;
         }
     }

    .rfm-initial-child-container{
        padding-right: 60px;
    }
 
    .custom-slider{
        display: flex !important;
        align-items: center;
        justify-content: space-between;
 
        img,svg{
            width: 100%;
            max-width: 120px;
            height: 40px;
            opacity: 1;
            visibility: visible;
            object-fit: contain !important;
        }
        .slick-slide{
            width: 130px !important;
        }
} 
`