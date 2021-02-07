import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderBar from './headerBar'

const NavBar = () => {
  return (
      <Fragment>
    <HeaderBar />
    <div className='navigation'>
      <div className='nav-wrapper'>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            Home
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/color-changer'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            SwitchColor
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/rgb-slider'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            Rgb Slider
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/add-subtract'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            Add Subtract
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/countByTwos'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            countByTwos
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/randomHeading'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            randomHeading
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/fizzbuzz'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            fizzbuzz
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/binarytotext'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            binarytotext
          </NavLink>
        </div>
        <div className='nav-link-wrapper'>
          <NavLink
            to='/calculator'
            activeClassName='nav-link-active'
            className='nav-link'
          >
            Math Calculator
          </NavLink>
        </div>
      </div>
    </div>
      </Fragment>
  )
}
export default NavBar
