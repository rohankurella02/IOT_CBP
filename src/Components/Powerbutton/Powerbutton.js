import React from 'react'
import './Powerbutton.scss'

function Powerbutton({ isToggledOn, onToggleButton }) {
  return (
      <div>
          <button className={"power_button " + (isToggledOn ? 'is-active' : '')}
              onClick={onToggleButton}>
              <div className="power_button__icon">
                  <span className="power_button__icon__arrow"></span>
              </div>
          </button>
          <p className={"power_status " + (isToggledOn ? 'is-active' : '')}>{isToggledOn ? 'On' : 'Off'}</p>
      </div>
  )
}

export default Powerbutton