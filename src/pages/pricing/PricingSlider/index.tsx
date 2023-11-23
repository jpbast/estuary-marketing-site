import { Slider, styled } from "@mui/material"

const PricingSlider = styled(Slider)({
    color: "#5272EB",
    width: "87%",
    margin: "auto",
    borderRadius: "3px",
    marginLeft: "25px",
    marginTop: "50px",
    "& .MuiSlider-thumb": {
        height: 36,
        width: 36,
        backgroundColor: "#5272EB",
        border: "6px solid white",
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
        },
        "&:before": {
            display: "none",
        },
    },
    '& .MuiSlider-track': {
        height: 28,
    },
    '& .MuiSlider-rail': {
        color: '#D9D9D9',
        opacity: 1,
        height: 28,
        width: '100.5%'
    },
    '& .MuiSlider-mark': {
        color: '#D9D9D9',
        backgroundColor: '#D9D9D9 !important',
        height: '15px',
        width: '3px',
        top: '-20%',
        "@media(max-width: 1250px)": {
            top: "6%"
        }
    },
    '& .MuiSlider-markLabel': {
        top: "-32px"
    }
})

export default PricingSlider
