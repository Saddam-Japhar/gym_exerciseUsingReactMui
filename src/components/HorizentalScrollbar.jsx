import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyPart from "./BodyPart"

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    const handleClick = () => {
      console.log("test", scrollNext());
      try {
        scrollNext()
      } catch (error) {
        console.log("printing error",error)
      }
    }
    return (
      <Typography onClick={handleClick} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizentalScrollbar = ({data, bodyPart, setBodyPart})=> {
    console.log("printing data",data)
    
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {data.map(item=> {
          return(
            <Box key={item.id|| item}
            itemID={item.id|| item}
            title={item.id|| item}
            m="0 40px"
            >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box  >)
        })}
        </ScrollMenu>    
    )
}

export default HorizentalScrollbar