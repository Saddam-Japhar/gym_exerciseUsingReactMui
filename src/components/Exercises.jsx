import { Typography, Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, bodyPart, setExercises}) => {
  return (
    <Box  id='exercises'
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'
    >
    <Typography variant="h3">
     Showing Results
    </Typography>
    <Stack direction='row' sx={{gap:{lg:"110px", xs:'50px'}}} flexWrap="wrap" justifyContent='center'>
    {
      exercises.map((exercise, index)=>(
       <ExerciseCard key={index} exercise={exercise}/>
      ))
    }
    </Stack>
    <Stack mt="100px" alignItems='center'>
    {
      exercises.length>9 && (
        <Pagination />
      )
    }
    </Stack>
    </Box>
  )
}

export default Exercises