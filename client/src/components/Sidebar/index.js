import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import authClient from '../../lib/Auth'

import {
  OrderedListOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Sider } = Layout

const getActiveMenu = () => {
  return window.location.pathname.replace('/', '') || 'home'
}

class Sidebar extends React.Component {
  state = {
    collapsed: false,
    activeMenu: getActiveMenu(),
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pagePath !== nextProps.pagePath) {
      this.setState({ activeMenu: nextProps.pagePath.replace('/', '') || 'home' })
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  getMenuItem() {
    if (authClient.isAuthenticated()) {
      return (
        <Menu.Item key="licenses">
          <Link to='/licenses'>
            <OrderedListOutlined />
            <span>Lisences</span>
          </Link>
        </Menu.Item>
      )
    }
  }

  render() {
    return (
      <Sider
        className="App-sidebar"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        breakpoint="md"
      >
        <div className="logo" />
        <Menu theme="dark" selectedKeys={[this.state.activeMenu]} mode="inline">
          <Menu.Item key="home">
            <Link to='/'>
              <HomeOutlined />
              <span>Home</span>
            </Link>
          </Menu.Item>

          {this.getMenuItem()}

          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar