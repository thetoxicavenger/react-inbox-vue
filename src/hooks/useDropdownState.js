import { useState } from 'react'

function useDropdownState() {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return {
        open, toggle
    }
}

export default useDropdownState