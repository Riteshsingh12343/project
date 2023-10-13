import React from 'react'
// material ui css
import { Box, Typography, styled } from '@mui/material';

//components for image
// import img from '../assets/vedio.mp4';

//bacgroud image css
const Image = styled(Box)`
    width: 100%;
    background: url(https://wallpapercave.com/uwp/uwp3973034.webp) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color:#e1dedec5;
    //background: #e1dedec5;
`;

const Banner = () => {
  return (
    <Box>
        <Image>
        <Heading>Sahitya</Heading>
        <SubHeading>Know About Freedom Fighter</SubHeading>
        </Image>


    </Box>
  )
}

export default Banner;
