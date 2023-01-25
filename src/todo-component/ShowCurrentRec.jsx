import { Card, Text } from '@shopify/polaris'
import { List } from 'antd'
import React from 'react'

const ShowCurrentRec = ({ addDetails }) => {
  let lastDetails = addDetails.slice(-1);
  return (
    <div>
      <Card title="Current Record" sectioned>
        <Card.Section title={<div style={{ textAlign: "left" }}>Current Reports</div>} subdued>
          <List
            header={<div>This is Your New Record</div>}
            bordered
          >
            {lastDetails.map(details => {
              return (
                <div key={details.id} style={{ textAlign: "left", marginTop: "-14px" }}>
                  <List.Item>
                    <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                      ID
                    </Text>
                    <div style={{ Right: "45px" }}>
                      <Text as="p" alignment="end">
                        {details.id}
                      </Text>
                    </div>
                  </List.Item>
                  <List.Item>
                    <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                      Name
                    </Text>
                    <div style={{ marginRight: "45px" }}>
                      <Text as="p" alignment="end">
                        {details.name}
                      </Text>
                    </div>
                  </List.Item>
                  <List.Item>
                    <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                      Age
                    </Text>
                    <div style={{ marginRight: "45px" }}>
                      <Text as="p" alignment="end">
                        {details.age}
                      </Text>
                    </div>
                  </List.Item>
                  <List.Item>
                    <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                      Your Work
                    </Text>
                    <div style={{ marginRight: "45px" }}>
                      <Text as="p" alignment="end">
                        {details.work}
                      </Text>
                    </div>
                  </List.Item>
                  <List.Item>
                    <Text fontWeight="semibold" variant="bodyLg" as="p" alignment="start">
                      Email
                    </Text>
                    <div style={{ marginRight: "45px" }}>
                      <Text as="p" alignment="end">
                        {details.email}
                      </Text>
                    </div>
                  </List.Item>
                </div>
              )
            })}
          </List>
        </Card.Section>
      </Card>
    </div>
  )
}

export default ShowCurrentRec
