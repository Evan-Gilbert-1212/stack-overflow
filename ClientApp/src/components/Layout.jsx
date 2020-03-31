import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'

export function Layout(props) {
  return (
    <div>
      <NavMenu />
      <div className="main-page">
        <div className="leftBar">wefwedf</div>
        <div className="rightbar">
          {/* map look the questions to a jsx */}
          <Container>{props.children}</Container>
          <Container>{props.children}</Container>
          <Container>{props.children}</Container>
          {/* end of the loop section */}
        </div>
        <div className="far-right">fsdaasdfasdfasdfsdf</div>
      </div>
    </div>
  )
}
