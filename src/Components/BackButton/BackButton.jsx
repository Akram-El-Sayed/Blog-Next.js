"use client";
import React from 'react'
import Link from "next/link";
import Button  from "react-bootstrap/Button";


export default function BackButton() {
  return (
     <Button variant="outline-danger" as={Link} href="/posts">Back To Posts</Button>
  )
}
