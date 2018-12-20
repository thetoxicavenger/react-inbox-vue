import React from 'react'
import { Button } from 'reactstrap'
import { FaRegTrashAlt } from 'react-icons/fa'

function ToggleSelectAll(props) {
    return (
        <Button>
            <FaRegTrashAlt />
        </Button>
    )
}

export default ToggleSelectAll