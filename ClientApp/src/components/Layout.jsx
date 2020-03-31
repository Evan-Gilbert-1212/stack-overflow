import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'

export function Layout(props) {
  return (
    <div>
      <NavMenu />
      <div className="main-page">
        <div className="leftBar">Left Side</div>
        <div className="rightbar">
          <Container>{props.children}</Container>
        </div>
        <div className="far-right" style={{}}>
          fsdaasdfasdfasdfsdf
        </div>
      </div>
    </div>
  )
}
