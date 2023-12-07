import { Slider, styled } from "@mui/material"

const PricingSlider = styled(Slider)({
    color: "#5272EB",
    width: "100%",
    marginTop: 50,
    padding: "18px 0 !important",
    borderRadius: 3,
    boxSizing: "border-box",

    "& .MuiSlider-thumb": {
        height: 40,
        width: 40,
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
        height: 16,
    },
    '& .MuiSlider-rail': {
        color: '#D9D9D9',
        opacity: 1,
        height: 16,
        width: '101%',
        borderRadius: 3,
        left: 0,
    },
    '& .MuiSlider-mark': {
        color: '#D9D9D9',
        backgroundColor: '#D9D9D9 !important',
        height: '15px',
        width: '3px',
        top: '6%',
    },
    '& .MuiSlider-markLabel': {
        top: "-24px",
        fontSize: 13,
        fontWeight: 500,
        color: "#3F3F46",
        fontFamily: "Inter, sans-serif"

    }
})

export default PricingSlider
