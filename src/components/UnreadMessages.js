import React from 'react'
import { Badge } from 'reactstrap'

function UnreadMessages() {
    return (
        <label>Unread <Badge color="secondary">0</Badge></label>
    )
}

export default UnreadMessages