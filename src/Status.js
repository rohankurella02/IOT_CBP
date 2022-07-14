import React, { useEffect } from 'react'
import { mqtt, client } from './config'




function Status() {

    const [status, setStatus] = React.useState('')
    //console.log(client)
    // client.on('connect', () => {
    //     console.log('connected')
    //     //client.subscribe('/status')
    // }
    // )
    client.subscribe('/led')

    useEffect(() => {
        client.on('message', function (topic, message) {
            // message is Buffer
            console.log("Hi")
            //console.log(message)
            console.log(message.toString())
            setStatus(message.toString())
        })
    }, [])

  return (
    <div>{status}</div>
  )
}

export default Status