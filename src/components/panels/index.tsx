import { Grid } from '@mui/material'
import React from 'react'
import LeftPanel from './leftPanel'
import RightPanel from './rightPanel'

const Panel = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={4}>
        <LeftPanel />
      </Grid>
      <Grid item lg={8} md={8}>
        <RightPanel />
      </Grid>
    </Grid>
  )
}

export default Panel
