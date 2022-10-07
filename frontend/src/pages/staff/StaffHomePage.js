import React from 'react'
import {
  Link,
  // useOutletContext
} from 'react-router-dom'

import { styled } from '@mui/material/styles'
import {
  Box,
  Paper,
  Stack,
  Button,
  Grid,
  LinearProgress,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material'
import { DUMMYLJDATA } from '../../constants'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

// const handleCloseNavMenu = () => {
//   console.log('hi')
// }

function StaffHomePage() {
  // const outletContext = useOutletContext()
  const learningJourneyList = DUMMYLJDATA

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
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      />
      <Box sx={{ marginBottom: '10vh', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Learning Journey
        </Typography>
        <Stack spacing={2}>
          {learningJourneyList.length > 0 ? (
            learningJourneyList.slice(0, 2).map((item) => (
              <Item
                key={item.id}
                component={Link}
                to={`learning-journey/${item.id}`}
                sx={{ textDecoration: 'none' }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={10}>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" component="div">
                      {item.role}
                    </Typography>
                    <Typography variant="body1" component="div">
                      {item.status}
                    </Typography>
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
            ))
          ) : (
            <Typography variant="h5" component="div" gutterBottom>
              No learning journey created.
            </Typography>
          )}

          {/* <Item component={Link} to={`/${obj.role}/roles`}>Roles</Item> */}
        </Stack>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ height: '10vh' }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" component={Link} to="learning-journey/">
              View All
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginBottom: '10vh' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Roles
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                object-fit
                image="https://img.freepik.com/free-vector/leader-concept-illustration_114360-7479.jpg?w=1380&t=st=1664901820~exp=1664902420~hmac=36a6129e33bf3e8a37625e49c7507f847a208c4427859bee106c84efcf8eac3b"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HR Manager
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Human Resource Manager will lead and direct the routine
                  functions of the Human Resources (HR) department including
                  hiring and interviewing staff, administering pay, benefits,
                  and leave, and enforcing company policies and practices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                object-fit
                image="https://img.freepik.com/free-vector/leader-concept-illustration_114360-7479.jpg?w=1380&t=st=1664901820~exp=1664902420~hmac=36a6129e33bf3e8a37625e49c7507f847a208c4427859bee106c84efcf8eac3b"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HR Manager
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Human Resource Manager will lead and direct the routine
                  functions of the Human Resources (HR) department including
                  hiring and interviewing staff, administering pay, benefits,
                  and leave, and enforcing company policies and practices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                object-fit
                image="https://img.freepik.com/free-vector/leader-concept-illustration_114360-7479.jpg?w=1380&t=st=1664901820~exp=1664902420~hmac=36a6129e33bf3e8a37625e49c7507f847a208c4427859bee106c84efcf8eac3b"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HR Manager
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Human Resource Manager will lead and direct the routine
                  functions of the Human Resources (HR) department including
                  hiring and interviewing staff, administering pay, benefits,
                  and leave, and enforcing company policies and practices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                object-fit
                image="https://img.freepik.com/free-vector/leader-concept-illustration_114360-7479.jpg?w=1380&t=st=1664901820~exp=1664902420~hmac=36a6129e33bf3e8a37625e49c7507f847a208c4427859bee106c84efcf8eac3b"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HR Manager
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Human Resource Manager will lead and direct the routine
                  functions of the Human Resources (HR) department including
                  hiring and interviewing staff, administering pay, benefits,
                  and leave, and enforcing company policies and practices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default StaffHomePage