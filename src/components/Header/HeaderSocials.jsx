import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeremiah-clancy-236637228/"><AiOutlineLinkedin/></a>
      <a target="_blank" rel="noreferrer" href="https://github.com/jclanc7507"><AiFillGithub/></a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jeremiahbclancy/"><AiOutlineInstagram/></a>
    </div>

  )
}

export default HeaderSocials