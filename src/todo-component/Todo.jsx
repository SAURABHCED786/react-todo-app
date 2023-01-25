import { Col, Row } from 'antd'
import React from 'react'
import { useState } from 'react'
import SetRecords from './SetRecords'
import ShowAllRecords from './ShowAllRecords'
import ShowCurrentRec from './ShowCurrentRec'

const Todo = () => {
  const [addDetails, setAddDetails] = useState([]);
  const [editDetails, setEditDetails] = useState(false)
  const [deleteDetails, setDeleteDetails] = useState()
  const [record, setRecord] = useState({
    id: 1,
    name: "",
    age: "",
    work: "",
    email: ""
  })

  return (
    <>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
            <SetRecords
              setRecord={setRecord}
              record={record}
              setAddDetails={setAddDetails}
              addDetails={addDetails}
              editDetails={editDetails}
              setEditDetails={setEditDetails}
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} >
            <ShowCurrentRec addDetails={addDetails} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify={"center"} align={"middle"}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
            <ShowAllRecords
              addDetails={addDetails}
              setAddDetails={setAddDetails}
              setEditDetails={setEditDetails}
              setDeleteDetails={setDeleteDetails}
              deleteDetails={deleteDetails} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Todo
