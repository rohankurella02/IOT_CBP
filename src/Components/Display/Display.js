import React from 'react'
import './Display.css'
import Powerbutton from '../Powerbutton/Powerbutton'
import { useState, useEffect } from 'react'
import { mqtt, client } from '../../config'

function Display() {

    const [isToggledOn, setIsToggledOn] = useState(false)
    const [isToggledOn2, setIsToggledOn2] = useState(false)

    //client.subscribe('/led')

     let handleToggleButton = () => {
        setIsToggledOn(!isToggledOn)
        if(isToggledOn){
            client.publish('/status', 'off')
        }
        else{
            client.publish('/status', 'on')
        }

    }
    let handleToggleButton2 = () => {
        setIsToggledOn2(!isToggledOn2)

    }
    client.on("close", function () {
        client._reconnect();
    });

  return (
    <div className='display'>
        <div className="box">
            <div className="boxTitle">SWITCH 1</div>
              <Powerbutton isToggledOn={isToggledOn}
                  onToggleButton={handleToggleButton} />
        </div>
        <div className="box">
              <div className="boxTitle">SWITCH 2</div>
              <Powerbutton isToggledOn={isToggledOn2}
                  onToggleButton={handleToggleButton2} />
        </div>
        <div className="box">
              <div className="boxTitle">SWITCH 3</div>
              <Powerbutton/>
        </div>
        <div className="box">
              <div className="boxTitle">SWITCH 4</div>
              <Powerbutton  />
        </div>
    </div>
  )
}

export default Display