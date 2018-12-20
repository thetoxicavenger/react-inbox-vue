import React from 'react'
import { Row, Col, Input } from 'reactstrap'
import { FaStar, FaRegStar } from 'react-icons/fa'
import Label from './Label'

function Message({ message }) {
    const checkbox = <><Input type="checkbox" />{' '}
        &nbsp;</>
    const star = message.starred ? <FaStar /> : <FaRegStar />
    const labels = message.labels.length ? message.labels.map(label => <Label key={label} text={label} />) : null
    return (
        <Row style={{ paddingLeft: '32px' }}>
            <Col>
                {checkbox}
                {star}
                {labels}

            </Col>
        </Row>
    )
}

export default Message