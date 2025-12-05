"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import React from 'react'

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
      <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2"><span><PiGitlabLogoSimpleBold />
</span> Blogy</Navbar.Brand>
      <Navbar.Toggle aria-controls="blog-navbar-nav"/>
      <Navbar.Collapse id="blog-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link as={Link} href="/">Home</Nav.Link>
        <Nav.Link as={Link} href="/posts">Posts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
     </Navbar>
  )
}
