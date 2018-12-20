import React, { useState, useEffect } from 'react'
import Message from './Message'

function MessagesList() {
    const [messages, setMessages] = useState([])
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        if (!mounted) {
            fetch("http://localhost:8082/api/messages")
                .then(res => res.json())
                .then(json => {
                    setMessages(json.map(item => {
                        return {
                            ...item,
                            selected: false
                        }
                    }))
                    setMounted(true)
                })
                .catch(e => console.error(e))
        }
    })
    const messagesList = messages.length ? messages.map(message => <Message key={message.id} message={message} />) : null
    return (
        <>
            {messagesList}
        </>
    )
}

export default MessagesList