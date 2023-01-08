import React from 'react'
import {Box, Button, Stack, Typography} from "@mui/material"

import HeroBannerImage from "../assets/images/banner.png"
import { Block } from '@mui/icons-material'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'},ml:{small:'50px'}}} position="relative" p='20px' >
       <Typography color='#FF2625' fontWeight="600" fontSize='26px'>
        Fitness Club
       </Typography>
       <Typography  fontWeight={700} sx={{fontSize:{lg:'44px',sm:'40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
       </Typography>
       <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
       </Typography>
       <Button variant='contained' color="error" href="#exercises" sx={{backgroundColor:"#ff2625", padding:'10px'}}>
        Eplore Exercises
       </Button>
       <Typography fontWeight={600} color='#f2625' sx={{opacity:0.1, display:{lg:'block',xs:'none'}}} fontSize='200px'>
       Exercises
       </Typography>
       <img src={HeroBannerImage} alt="Banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner