import React from 'react'

const Tab = ({isActive, handleClick, label}) => {
  return (
    <div>
      <li className={isActive ? "is-active" : ""}
          onClick={() => handleClick()}>
          <a>{label}</a>
      </li>
    </div>
  )
}

export default Tab
