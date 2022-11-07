import { Button, Typography, useMediaQuery } from "@mui/material";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";
  import BannerBackground from "../public/images/shop.png";

export default function Banner(){
    return(
        
        <BannerContainer >
        <BannerImage src={BannerBackground} />
        <BannerContent>
          <Typography variant="h6">Big sale!</Typography>
          <BannerTitle variant="h2">
            New Come
          </BannerTitle>
  
          <BannerDescription variant="subtitle1">
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
            tempor incididunt ut labore et dolore magna
          </BannerDescription>
  
          <BannerShopButton color="primary">Shop Now</BannerShopButton>
        </BannerContent>
      </BannerContainer>
    )
}