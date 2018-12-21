import React from 'react'

function MessagesToolbar({ toggleCompose, checkedCount, unreadCount, messagesCount, toggleAllChecked, setCheckedToRead, setCheckedToUnread, deleteMessages }) {
    let selectAllButtonClasses = "fa "
    const noneSelected = checkedCount === 0
    const someSelected = checkedCount > 0 && checkedCount < messagesCount
    const allSelected = checkedCount === messagesCount
    if (noneSelected) {
        selectAllButtonClasses += "fa-square-o"
    } else if (someSelected) {
        selectAllButtonClasses += "fa-minus-square-o"
    } else if (allSelected) {
        selectAllButtonClasses += "fa-check-square-o"
    }
    return (
        <>
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                        <span className="badge badge">{unreadCount}</span>
                        unread messages
                    </p>

                    <button className="btn btn-danger" onClick={toggleCompose}>
                        <i className="fa fa-plus"></i>
                    </button>

                    <button className="btn btn-default" onClick={() => {
                        if (noneSelected || someSelected) {
                            return toggleAllChecked(true)
                        }
                        return toggleAllChecked(false)
                    }}>
                        <i className={selectAllButtonClasses}></i>
                    </button>

                    <button
                        className="btn btn-default"
                        disabled={noneSelected}
                        onClick={setCheckedToRead}
                    >
                        Mark As Read
                    </button>

                    <button className="btn btn-default" disabled={noneSelected} onClick={setCheckedToUnread}>
                        Mark As Unread
                    </button>

                    <select className="form-control label-select" disabled={noneSelected}>
                        <option>Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <select className="form-control label-select" disabled={noneSelected}>
                        <option>Remove label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <button className="btn btn-default" disabled={noneSelected} onClick={deleteMessages}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MessagesToolbar