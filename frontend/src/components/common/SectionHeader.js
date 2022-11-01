import React from 'react'
import propTypes from 'prop-types'

import { Box, Typography } from '@mui/material'
import { useOutletContext } from 'react-router-dom'

import { ROLES } from '../../constants'

const SectionHeader = ({ header, subHeader, sectionButtonComponent }) => {
  const { role } = useOutletContext()

  const renderHeader = () => (
    <Typography variant="h4" gutterBottom>
      {header}
    </Typography>
  )

  const renderSubHeader = () => (
    <Typography variant="body" gutterBottom>
      {subHeader}
    </Typography>
  )

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        my: 2,
      }}
    >
      <Box>
        {header && renderHeader()}
        {subHeader && renderSubHeader()}
      </Box>
      {role === ROLES.STAFF ? (
        <Typography />
      ) : (
        <Box>{sectionButtonComponent}</Box>
      )}
    </Box>
  )
}

SectionHeader.propTypes = {
  header: propTypes.string,
  subHeader: propTypes.string,
  sectionButtonComponent: propTypes.node,
}

export default SectionHeader
