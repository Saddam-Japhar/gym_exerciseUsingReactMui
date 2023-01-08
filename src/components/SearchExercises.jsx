import { Button, TextField, Typography, Box, Stack } from '@mui/material'
import React, {useState, useEffect} from 'react'
import HorizentalScrollbar from './HorizentalScrollbar'
import { fetchData, exerciseOptions } from '../utils/fetchData'


const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      console.log({bodyPartsData})
      setBodyParts(['All',...bodyPartsData])
      // setBodyParts(['All', 'chest', 'abs','legs','shoulders', "upperShoulder","abdomen","tricep"])
    }
    fetchExercisesData()
  },[])
  const handleSearch = async()=> {
    if(search){
      console.log({exerciseOptions})
     const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
     const searchExercises = exerciseData.filter(exercise => 
         exercise.name.toLocaleLowerCase().includes(search) || exercise.target.toLocaleLowerCase().includes(search)
         || exercise.equipment.toLocaleLowerCase().includes(search) || exercise.bodyPart.toLocaleLowerCase().includes(search)
      )
     console.log("exerciseData",exerciseData)
     setSearch('');
     setExercises(searchExercises);

    }
  }
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px" >
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign='center' >
        Awesome Exercises You<br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{ input:{fontWeight:'700', border:'none', borderRadius:'4px'
      }, width:{lg:'800px',xs:'350px'}, backgroundColor:"#fff", borderRadius:"40px"
    }}
      height="76px"
      value={search}
      onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}
      placeholder="Search Exercises"
      type="text"
        />
        <Button className='search-btn' sx={{
          bgcolor:"#ff2625",
          color:"#fff",
          width:{lg:"170px",xs:'80px'},
          fontSize:{lg:'20px',xs:'14px'},
          height:'56px',
          position:'absolute',
          right:"0"
        }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', widht:'100%',p:'20px'}}>
        <HorizentalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises