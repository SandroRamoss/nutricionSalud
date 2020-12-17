import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const MAINCOLOR = '#6C4040'
const NAVBARHEIGHT = '60px'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBARHEIGHT};
  background: #fdf3f3;
  box-shadow: 0 4px 25px -22px black;
  z-index: 2;

  .header-content {
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .menu {
    height: ${NAVBARHEIGHT};
  }

  .menu nav {
    height: 100%;
  }

  .menu nav ul {
    height: 100%;
    display: flex;
    list-style: none;
  }

  .menu nav ul li {
    height: 100%;
    margin: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #icon-menu {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    top: calc((${NAVBARHEIGHT} - 50px) / 2);
    padding: 10px;
    font-size: 20px;
    background: #eeeeeefa;
    border-radius: 100%;
    color: #787878;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
  }

  #icon-menu:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1220px) {
    .header-content {
      max-width: 1000px;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 800px) {
    .menu {
      width: 0px;
      height: 100vh;
      position: fixed;
      top: ${NAVBARHEIGHT};
      left: 0;
      background: #fff;
      overflow: hidden;
      transform: translateX(-350px);
      box-shadow: 10px 0 20px -25px black;
      transition: all 300ms cubic-bezier(1, 0, 0, 1);
    }

    .show-lateral {
      width: 300px;
      transform: translateX(0px);
    }

    .menu nav ul {
      flex-direction: column;
    }

    .menu nav ul li {
      max-width: 200px;
      height: 50px;
      justify-content: flex-start;
    }

    #icon-menu {
      display: flex;
    }
  }
`

const MenuLink = styled(NavLink)`
  & {
    color: #777777;
    font-size: 18px;
    transition: color 300ms;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &.text-menu-selected,
  &:hover {
    color: ${MAINCOLOR};
  }

  &.text-menu-selected:before {
    content: '';
    width: 100%;
    height: 4px;
    background: ${MAINCOLOR};
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 800px) {
    & {
      margin-top: 40px;
      color: #858585;
    }

    &.text-menu-selected:before {
      width: 0;
    }
  }
`

const CustomFontIcon = styled(FontAwesomeIcon)`
  display: none;

  @media screen and (max-width: 800px) {
    width: 20px;
    display: inline-block;
    margin-right: 10px;
  }
`

const BrandLink = styled(NavLink)`
  display: flex;
  align-items: center;

  h1 {
    color: black;
    font-weight: 300;
    font-size: 25px;
  }
`

export default function NavBar({ title, lista, isOpen, setOpen }) {
  function handleClick() {
    setOpen(!isOpen)
  }

  return (
    <Header>
      <div className="header-content">
        <BrandLink to="/">
          <h1>{title}</h1>
        </BrandLink>

        <div className={`menu${isOpen ? ' show-lateral' : ''}`}>
          <nav>
            <ul>
              {lista.map(({ path, icon, name }) => (
                <li key={shortid.generate()}>
                  <MenuLink
                    activeClassName="text-menu-selected"
                    onClick={handleClick}
                    exact
                    to={path}
                  >
                    <CustomFontIcon icon={icon} />
                    {name}
                  </MenuLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div
        id="icon-menu"
        onClick={handleClick}
        onKeyPress={(event) => {
          if (event.key === 'Enter') handleClick()
        }}
        role="button"
        tabIndex="-1"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
    </Header>
  )
}

NavBar.propTypes = {
  title: PropTypes.string,
  lista: PropTypes.array,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
}
