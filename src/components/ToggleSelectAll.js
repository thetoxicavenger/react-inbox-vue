import React from 'react'
import { Button } from 'reactstrap'
import { FaRegMinusSquare } from 'react-icons/fa'

function ToggleSelectAll(props) {
    return (
        <Button>
            <FaRegMinusSquare />
        </Button>
    )
}

export default ToggleSelectAll