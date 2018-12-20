import React from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import useDropdownState from '../hooks/useDropdownState'

function ApplyLabel(props) {
    const { open, toggle } = useDropdownState()
    return (
        <>
            <ButtonDropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret>Apply Label</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Labels</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </>
    )
}

export default ApplyLabel