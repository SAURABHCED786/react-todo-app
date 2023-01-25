import { ContactsOutlined, HeartOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Label } from '@shopify/polaris'
import { Button, Input } from 'antd'
import React from 'react'
import { useState } from 'react'
import { validEmail } from './regex'
const SetRecords = (props) => {
  const { record, setRecord, addDetails, setAddDetails, editDetails, setEditDetails } = props
  const [desableBtn, setDesableBtn] = useState(true)

  // Add handleChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const new_value = (name === "email") ? value.toLowerCase().replace("#", "@") : value
    const validage = (name === "age") ? value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1') : value

    if (record.id !== "" && record.name !== '' && record.age !== ""
      && record.work !== "" && record.email !== "") {
      setDesableBtn(false)
      if (validEmail.exec(new_value)) {
        setDesableBtn(false)
      } else {
        setDesableBtn(true)
      }
    } else {
      setDesableBtn(true)
    }

    setRecord((prev) => {
      return {
        ...prev, [name]: name === "email" ? new_value : name === "age" ? validage : value
      }
    })
  }

  // Record Add
  const addRecord = () => {
    const temp = [...addDetails];
    temp.push(record);
    if (record.id !== "" && record.name !== '' && record.age !== "" && record.work !== "" && record.email !== "") {
      setAddDetails(temp);
      const temp2 = {
        id: record.id + 1,
        name: "",
        age: "",
        work: "",
        email: ""
      }
      setRecord(temp2);
    } else {
      setDesableBtn(true)
      alert("Enter all fields")
    }

  }

  // Edit Handle Change
  const handleChangeEdit = (e) => {
    // console.log(e, "eeeeeeeeeee");
    const name = e.target.name;
    const value = e.target.value;
    const new_value = (name === "email") ? value.toLowerCase().replace("#", "@") : value
    const validage = (name === "age") ? value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1') : value

    // if () {
    if (editDetails.id !== "" && editDetails.name !== "" && editDetails.age !== ""
      && editDetails.work !== "" && editDetails.email !== "" && validEmail.exec(new_value)) {
      setDesableBtn(false)
    } else {
      setDesableBtn(true)
    }
    // }
    setEditDetails((prev) => {
      return {
        ...prev, [name]: name === "email" ? new_value : name === "age" ? validage : value
      }
    })
  }


  // Edit Record
  const editRecord = () => {
    const temp = [...addDetails];
    // const newdata = temp.filter(tmp => tmp.id === editDetails.id)

    console.log(temp, "newTemp");
    if (editDetails.id !== "" && editDetails.name !== "" && editDetails.age !== "" && editDetails.work !== "" && editDetails.email !== "") {
      temp.forEach((newVal) => {
        if (newVal.id === editDetails.id) {
          newVal["name"] = editDetails.name
          newVal["age"] = editDetails.age
          newVal["work"] = editDetails.work
          newVal["email"] = editDetails.email
        }
      })
      setAddDetails(temp);
    } else {
      setDesableBtn(true)
      alert("Enter all fields")
      return
    }

    setEditDetails(false)
  }
  return (
    <div>
      {editDetails ? (
        <>
          <Card title="Edit Your Details" sectioned>
            <form>
              <div style={{ textAlign: "left", margin: "6px 0px 5px 3px" }}>
                <Label>Enter Your Name</Label>
              </div>
              <Input size="large" name='name' placeholder="Enter Name" onChange={handleChangeEdit}
                value={editDetails.name} prefix={<UserOutlined />} />
              <div style={{ textAlign: "left", margin: "6px 0px 5px 3px" }}>
                <Label>Enter Your Age</Label>
              </div>
              <Input size="large" name='age' placeholder="Enter Age" onChange={handleChangeEdit}
                value={editDetails.age} prefix={<HeartOutlined />} />
              <div style={{ textAlign: "left", margin: "6px 0px 5px 3px" }}>
                <Label>Enter Your Work</Label>
              </div>
              <Input size="large" name='work' placeholder="Work or School "
                onChange={handleChangeEdit} value={editDetails.work} prefix={<ShopOutlined />} />
              <div style={{ textAlign: "left", margin: "6px 0px 5px 3px " }}>
                <Label>Enter Your Email</Label>
              </div>
              <Input type='email' size="large" name='email' placeholder="Enter Email" onChange={handleChangeEdit}
                value={editDetails.email} prefix={<ContactsOutlined />} />
              <div className='setBtnSubmit'>
                <Button disabled={desableBtn} onClick={() => editRecord()} type="primary">
                  Save Records
                </Button>
              </div>
            </form >
          </Card >
        </>
      ) : (
        <Card title="Enter Your Details" sectioned>
          <form>
            <div style={{ textAlign: "left", margin: "6px 0px 5px 3px" }}>
              <Label>Enter Your Name</Label>
            </div>
            <Input size="large" name='name' placeholder="Enter Name" onChange={handleChange}
              value={record.name} prefix={<UserOutlined />} />
            <div style={{ textAlign: "left", margin: "6px 0px 5px 3px" }}>
              <Label>Enter Your Age</Label>
            </div>
            <Input size="large" name='age' placeholder="Enter Age" onChange={handleChange}
              value={record.age} prefix={<HeartOutlined />} />
            <div style={{ textAlign: "left", margin: "6px 0px 5px 3px" }}>
              <Label>Enter Your Work</Label>
            </div>
            <Input size="large" name='work' placeholder="Work or School "
              onChange={handleChange} value={record.work} prefix={<ShopOutlined />} />
            <div style={{ textAlign: "left", margin: "6px 0px 5px 3px " }}>
              <Label>Enter Your Email</Label>
            </div>
            <Input type='email' size="large" name='email' placeholder="Enter Email" onChange={handleChange}
              value={record.email} prefix={<ContactsOutlined />} />
            <div className='setBtnSubmit'>
              <Button disabled={desableBtn} onClick={() => addRecord()} type="primary">
                Save Records
              </Button>
            </div>
          </form >
        </Card >
      )}
    </div >
  )
}

export default SetRecords
