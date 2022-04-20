import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import cities from '../src/data.json'
import AppContext from '../src/context/state'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import Badge from '@mui/material/Badge'
import BookmarksList from './BookmarksList'

const allTours = cities.tours

const ToursLink = styled('a')(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function SearchAppBar({ onToggleDrawer }) {
  const appCtx = React.useContext(AppContext)

  function handleSearchChange(e) {
    const filterValue = e.target.value.toLowerCase()

    appCtx.filterCities(filterValue)

    // if (!filterValue || filterValue === '') return appCtx.filterCities(allTours)

    // const filteredTours = allTours.filter(tour =>
    //   tour.name.toLowerCase().includes(filterValue)
    // )

    // if (!filteredTours || filteredTours.length === 0)
    //   return appCtx.filterCities([])

    // appCtx.filterCities(filteredTours)
  }

  function closeBookmarks() {}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton
            onClick={onToggleDrawer}
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Link href='/' passHref>
              <ToursLink>TOURS</ToursLink>
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
            />
          </Search>
          <IconButton
            onClick={closeBookmarks}
            size='large'
            edge='start'
            color='inherit'
            aria-label='bookmarks'
            sx={{
              position: 'relative',
              ml: 2,
              '&:hover': {
                '& .bookmarksList': {
                  visibility: 'visible',
                  opacity: 1,
                },
              },
              // '&:focus': {
              //   '& .bookmarksList': {
              //     visibility: 'visible',
              //     opacity: 1,
              //   },
              // },
              // tabIndex: 1,
            }}
          >
            <Badge badgeContent={appCtx.bookmarks.length} color='error'>
              <BookmarksIcon />
            </Badge>
            <Box
              className='bookmarksList'
              sx={{
                position: 'absolute',
                top: 55,
                right: 100,
                width: '400%',
                maxWidth: 900,
                zIndex: 'appBar',
                color: 'primary.main',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.5s 0.2s',
                '&:hover': {
                  visibility: 'visible',
                  opacity: 1,
                },
              }}
            >
              <BookmarksList />
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
