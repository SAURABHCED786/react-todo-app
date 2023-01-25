import React, { useCallback, useState } from 'react'
import {
  Card,
  Stack,
  Collapsible,
  Text,
} from '@shopify/polaris';
import { List, Button } from 'antd';
import Link from 'antd/es/typography/Link';
import { useEffect } from 'react';
const ShowAllRecords = (props) => {
  const { addDetails, setEditDetails, setDeleteDetails, deleteDetails, setAddDetails } = props
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  useEffect(() => {
    const newdata = addDetails.filter(tmp => tmp.id !== deleteDetails.id)
    setAddDetails(newdata)
  }, [deleteDetails])

  return (
    <div>
      <div style={{ height: '200px', marginTop: "15px" }}>
        <Card title="Your All Record" sectioned>
          <Stack vertical>
            <Button
              onClick={handleToggle}
              aria-expanded={open}
              aria-controls="basic-collapsible"
            >
              {open ? "Close" : "Open"}
            </Button>
            <Collapsible
              open={open}
              id="basic-collapsible"
              transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
              expandOnPrint
            >
              <Card.Section title={<div style={{ textAlign: "left" }}>All Reports</div>} subdued>
                <List
                  header={<div>All Record Represented</div>}
                  bordered
                >
                  {addDetails.map((allData, index) => {
                    return (
                      <div key={allData.id} style={{
                        textAlign: "left", marginTop: "-5px", marginBottom: "10px",
                        borderBottom: index < addDetails.length - 1 ? "1px solid black" : "none"
                      }}>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            Edit
                          </Text>
                          <div style={{ marginRight: "30px" }}>
                            <Link href="#EditDetails" >
                              <Button onClick={() => setEditDetails(allData)}>Edit</Button>
                            </Link>
                          </div>
                        </List.Item>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            ID
                          </Text>
                          <div style={{ marginRight: "45px" }}>
                            <Text as="p" alignment="end">
                              {allData.id}
                            </Text>
                          </div>
                        </List.Item>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            Name
                          </Text>
                          <div style={{ marginRight: "45px" }}>
                            <Text as="p" alignment="end">
                              {allData.name}
                            </Text>
                          </div>
                        </List.Item>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            Age
                          </Text>
                          <div style={{ marginRight: "45px" }}>
                            <Text as="p" alignment="end">
                              {allData.age}
                            </Text>
                          </div>
                        </List.Item>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            Your Work
                          </Text>
                          <div style={{ marginRight: "45px" }}>
                            <Text as="p" alignment="end">
                              {allData.work}
                            </Text>
                          </div>
                        </List.Item>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            Email
                          </Text>
                          <div style={{ marginRight: "45px" }}>
                            <Text as="p" alignment="end">
                              {allData.email}
                            </Text>
                          </div>
                        </List.Item>
                        <List.Item>
                          <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                            Delete Record
                          </Text>
                          <div style={{ marginRight: "30px" }}>
                            <Button danger onClick={() => setDeleteDetails(allData)}>Delete</Button>
                          </div>
                        </List.Item>
                      </div>
                    )
                  })}
                </List>
              </Card.Section>
            </Collapsible>
          </Stack>
        </Card>
      </div>
    </div>
  )
}

export default ShowAllRecords
