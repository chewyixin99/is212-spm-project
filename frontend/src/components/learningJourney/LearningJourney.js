import React, { useState, useEffect } from 'react'
import {
  Link,
} from 'react-router-dom'

import {
  Box,
  Paper,
  Stack,
  CardMedia,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import axios from 'axios'

import { ENDPOINT } from '../../constants'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function LearningJourneyPage() {

  const [learningJourneyList, setlearningJourneyList] = useState([])

  const getLJData = async (id) => {
    const response = await axios.get(`${ENDPOINT}/learning_journeys/${id}`)
    const data = response.data.data
    setlearningJourneyList(data)
  }


  useEffect(() => {
    getLJData(1)
  }, [])

  return (
    <Box sx={{ width: '50%', margin: 'auto' }}>
      <Typography
        variant="h3"
        noWrap
        component="a"
        sx={{
          mr: 2,
          my: 3,
          display: { xs: 'none', md: 'flex' },
          letterSpacing: '.3rem',
          textDecoration: 'none',
          fontSize: '2rem',
        }}
      >
        My Learning Journey
      </Typography>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        component={Link}
        to="new"
      >
        <AddIcon />
      </IconButton>

      <Stack spacing={2}>
        {learningJourneyList?.map((item) => (
          <Item
            key={item?.learning_journey_id}
            component={Link}
            to={`${item?.learning_journey_id}`}
            sx={{ textDecoration: 'none' }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={10}>
                <Typography variant="h5" component="div">
                  {item.learning_journey_name}
                </Typography>
                <Typography variant="body1" component="div">
                  {item.role_id}
                </Typography>
                {/* <Typography variant="body1" component="div">
                  {item.status}
                </Typography> */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '1rem',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ width: '80%', mr: 1 }}>
                    {item.progress === 100 ? (
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        color="success"
                      />
                    ) : (
                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                      />
                    )}
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">
                      {`${item.progress}%`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  object-fit
                  image={item.bannerImg}
                />
              </Grid>
            </Grid>
          </Item>
        ))}
      </Stack>
    </Box>
  )
}

export default LearningJourneyPage
