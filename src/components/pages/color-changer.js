import React, { Fragment, useState } from 'react'

const SwitchColor = () => {
  const [color, setColor] = useState('#C21313')
  const myDivStyles = {
    width: '300px',
    height: '300px',
    backgroundColor: color,
    textAlign: 'center',
    color: 'white',
    fontSize: '15px'
}
  

  const handleColorchanger = () => {
    const newColor = Math.random()
      .toString(16)
      .slice(2, 8)
      .toUpperCase();
    
      setColor('#'+ newColor)
  }


  return (
      <Fragment >
    <div className='color-changer'>
      <div style={myDivStyles} className='myDivStyles'>
        <h1>
        The color i am now is {color}
        </h1>
    </div>
        <button className='btn-changer' onClick={() => handleColorchanger()}>
          Change Me
        </button>
      </div>

      </Fragment>
  )
}
export default SwitchColor
