import React from 'react'
import setSelectAllButtonClass from '../util/setSelectAllButtonClass'

function MessagesToolbar({ toggleCompose, checkedCount, unreadCount, messagesCount, toggleAllChecked, deleteMessages, selectedLabelToAdd, setSelectedLabelToAdd, selectedLabelToRemove, setSelectedLabelToRemove, setRead }) {

    /* computed properties */
    const noneSelected = checkedCount === 0
    const someSelected = checkedCount > 0 && checkedCount < messagesCount
    const allSelected = checkedCount === messagesCount

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
                        <i className={setSelectAllButtonClass(noneSelected, someSelected, allSelected)}></i>
                    </button>

                    <button
                        className="btn btn-default"
                        disabled={noneSelected}
                        onClick={() => setRead(true)}
                    >
                        Mark As Read
                    </button>

                    <button
                        className="btn btn-default"
                        disabled={noneSelected}
                        onClick={() => setRead(false)}
                    >
                        Mark As Unread
                    </button>

                    <select
                        className="form-control label-select"
                        disabled={noneSelected}
                        value={selectedLabelToAdd}
                        onChange={e => setSelectedLabelToAdd(e.target.value)}
                    >
                        <option value="placeholder">Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>

                    <select
                        className="form-control label-select"
                        disabled={noneSelected}
                        value={selectedLabelToRemove}
                        onChange={e => setSelectedLabelToRemove(e.target.value)}
                    >
                        <option value="placeholder">Remove label</option>
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