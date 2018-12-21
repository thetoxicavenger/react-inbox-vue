const setSelectAllButtonClass = (noneSelected, someSelected, allSelected) => {
    let selectAllButtonClasses = "fa "
    if (noneSelected) {
        selectAllButtonClasses += "fa-square-o"
    } else if (someSelected) {
        selectAllButtonClasses += "fa-minus-square-o"
    } else if (allSelected) {
        selectAllButtonClasses += "fa-check-square-o"
    }
    return selectAllButtonClasses
}

export default setSelectAllButtonClass