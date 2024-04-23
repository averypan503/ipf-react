import logo from './logo.svg';
import { useState } from 'react';
import { Menu, Button, Row, Col } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons'
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useRoutes } from 'react-router-dom';
import routes from './routes';
import Feedback from './components/Feedback';
import Forms from './components/Forms';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  // const items = (<Menu><Menu.Item>Slack</Menu.Item></Menu>);
  const { SubMenu } = Menu;
  const route = useRoutes(routes);
  function getItem(label, key) {
    return {
      key,
      label
    };
  }
  const items = [
    getItem(<Link to="/feedback">Feedback</Link>, '1'),
    getItem(<Link to="/forms">Forms</Link>, '2'),
    getItem(<Link to="/trigger-rule">Trigger Rule</Link>, '3'),
    getItem(<Link to="/notification-rule">Notification Rule</Link>, '4'),
    getItem(<Link to="/audit-event">Audit Event</Link>, '5'),
    getItem(<Link to="/dashboard">Dashboard</Link>, '6'),
  ];
  return (
    // <Router>
    <div className="App">
      <header>
        <div className="logo">Feedback Service(IPF)</div>
      <Menu theme="dark" mode="horizontal">
        <SubMenu title={<span>Support <CaretDownOutlined /></span>}>
            <Menu.Item key='1'>
              <NavLink to="/feedback">Feedback</NavLink>
            </Menu.Item>
            <Menu.Item key='2'>
            <NavLink to="/forms">forms</NavLink>
            </Menu.Item>
        </SubMenu>
        <SubMenu title={<span>Bob Green <CaretDownOutlined /></span>}>
            <Menu.Item key='1'>
              Profile
            </Menu.Item>
            <Menu.Item key='2'>
              LogOut
            </Menu.Item>
        </SubMenu>
      </Menu>
      </header>
      <div>
        <Row  className='main-container'>
          <Col span={5}>
          <div className="sideMenu" >
          <Button onClick={()=>setCollapsed(!collapsed)}>{collapsed? '展开' : '收起'}</Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed = {collapsed}
          items={items}
        ></Menu>
        </div>
          </Col>
          <Col span={19}>
          <div className='content'>
          {route}
          </div>
          </Col>
        </Row>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    // </Router>
  );
}

export default App;
