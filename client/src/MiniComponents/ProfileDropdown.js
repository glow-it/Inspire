import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import MemberOnlyStory from './MemberOnlyStory'

function ProfileDropdown({target}) {
  return (
    <Menu >
    <MenuButton >
      {target}
    </MenuButton>
    <MenuList mr='14' px='4' pr='16' py='6'  shadow='lg' rounded='xl'>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        <span className='flex items-center justify-center mr-2' ><ion-icon name="person-outline"></ion-icon></span> Profile
      </MenuItem>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        <span className='flex items-center justify-center mr-2' ><ion-icon name="bookmarks-outline"></ion-icon></span> Lists
      </MenuItem>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        <span className='flex items-center justify-center mr-2' ><ion-icon name="newspaper-outline"></ion-icon></span> Stories
      </MenuItem>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        <span className='flex items-center justify-center mr-2' ><ion-icon name="stats-chart-outline"></ion-icon></span> Stats
      </MenuItem>

      <MenuDivider my='4' />

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        Settings
      </MenuItem>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        Refine recommentations
      </MenuItem>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        Manage publications
      </MenuItem>

      <MenuDivider my='4' />

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        <span className='mr-3' >Become a member</span> <MemberOnlyStory />
      </MenuItem>

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        Write and earn
      </MenuItem>

      <MenuDivider my='4' />

      <MenuItem my='2' color='slategray' py='2' rounded='xl' px='4' >
        Signout
      </MenuItem>

      <MenuItem _hover={false} fontSize='sm' my='2' color='slategray' py='2' rounded='xl' px='4' >
      arshadpyaseen@gmail.com
      </MenuItem>

    </MenuList>
  </Menu>
  )
}

export default ProfileDropdown