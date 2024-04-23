import "./Feedback.css";
import React from "react";
import { useState} from 'react';
import {MockedForms} from '../mock/forms.mock'
import { Dropdown, Table, Modal } from "antd";
import {MoreOutlined} from '@ant-design/icons'
import Preview from "./FormPreview";
function Froms() {
    const [selectedFormId, setSelectedFormId] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('');
    // console.log(MockedFeedback)
    let modalTile = `${type} form`;
    let selectedForm = MockedForms.find(f => f.id === selectedFormId);
    const onClick = ({ key}) => {
        setType(key);
        setModalOpen(true);
        // console.log(key, selectedFormId);
    };
    function handleClick(r) {
        setSelectedFormId(r.id);
    }
    const items = [
        {
            key: 'preview',
            label: 'preview'
        },
        {
            key: 'edit',
            label: 'edit'
        },
        {
            key: 'delete',
            label: 'delete'
        }
    ]
    const columns = [
        {title: 'actions', key: 'actions',
            render: (t, r) => {
                return (<>
                <Dropdown menu={{items, onClick}} onClick={()=>handleClick(r)} trigger={['click']}>
                    <MoreOutlined />
                </Dropdown>
                </>
            )}
        },
        {title: 'id', sorter: true, key: 'id', dataIndex: 'id'},
        {title: 'name', dataIndex: 'name', key: 'name'},
        {title: 'text', sorter: true, key: 'text', dataIndex: 'text'},
        {title: 'created', sorter: true, key: 'time', render: (created) => new Date(created).toDateString(),dataIndex: 'created'}
    ];
    return (
        <div>
            <br/>
            <h1>Feedback Form</h1>
            <p>List of Feedback Forms.</p>
            <Table
                columns={columns}
                dataSource={MockedForms}
            />
            <Modal title={modalTile} open={modalOpen} onOk={()=>{setModalOpen(false)}} onCancel={()=>{setModalOpen(false)}}>
                <Preview form={selectedForm}/>
            </Modal>
        </div>

    )
}
export default Froms;