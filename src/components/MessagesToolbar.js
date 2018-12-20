import React from 'react'
import ToggleSelectAll from './ToggleSelectAll'
import MarkAsRead from './MarkAsRead'
import MarkAsUnread from './MarkAsUnread'
import ApplyLabel from './ApplyLabel'
import RemoveLabel from './RemoveLabel'
import Archive from './Archive'
import { Row, Col, ButtonGroup } from 'reactstrap'
import UnreadMessages from './UnreadMessages'

function MessagesToolbar() {
    return (
        <Row>
            <Col>
                <ButtonGroup>
                    <ToggleSelectAll />
                    <MarkAsRead />
                    <MarkAsUnread />
                    <ApplyLabel />
                    <RemoveLabel />
                    <Archive />
                </ButtonGroup>
                <UnreadMessages />
            </Col>
        </Row>
    )
}

export default MessagesToolbar