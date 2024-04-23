import "./Feedback.css";
import { useState} from 'react';
import {MockedFeedback} from '../mock/feedback.mock';
import {MockedForms} from '../mock/forms.mock'
import { Dropdown, Table, Modal } from "antd";
import {MoreOutlined} from '@ant-design/icons'
import Preview from "./FormPreview";
function Feedback() {
    const [selectedFormId, setSelectedFormId] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('');
    MockedFeedback.forEach(f => f.form = MockedForms.find(i=> {return i.id === f.formId}));
    // console.log(MockedFeedback)
    let modalTile = `${type} form`;
    let selectedForm = MockedForms.find(f => f.id === selectedFormId);
    const onClick = ({ key}) => {
        setType(key);
        setModalOpen(true);
        // console.log(key, selectedFormId);
    };
    function handleClick(r) {
        setSelectedFormId(r.formId);
    }
    const items = [
        {
            key: 'preview',
            label: 'preview'
        },
        {
            key: 'delete',
            label: 'delete'
        }
    ]
    const columns = [
        {title: 'actions', key: 'actions', dataIndex: 'id',
            render: (t, r) => {
                return (<>
                <Dropdown menu={{items, onClick}} onClick={()=>handleClick(r)} trigger={['click']}>
                    <MoreOutlined />
                </Dropdown>
                </>
            )}
        },
        {title: 'id', sorter: true, key: 'id', dataIndex: 'id'},
        {title: 'form', dataIndex: 'form', key: 'form', render: (form) => form.name},
        {title: 'user', sorter: true, key: 'user', dataIndex: 'createdBy'},
        {title: 'created', sorter: true, key: 'time', render: (created) => new Date(created).toDateString(),dataIndex: 'created'}
    ];
    return (
        <div>
            <br/>
            <h1>Feedback</h1>
            <p>List of Feedback submitted by customers.</p>
            <Table
                columns={columns}
                dataSource={MockedFeedback}
            />
            <Modal title={modalTile} open={modalOpen} onOk={()=>{setModalOpen(false)}} onCancel={()=>{setModalOpen(false)}}>
                <Preview form={selectedForm}/>
            </Modal>
        </div>

    )
}
export default Feedback;