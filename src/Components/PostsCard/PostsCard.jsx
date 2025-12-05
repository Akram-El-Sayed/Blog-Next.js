"use client";
import Link from 'next/link';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import 'bootstrap/dist/css/bootstrap.min.css';

export  function PostsCard({post}) {
  return (
    <Card style={{ width: '24rem' }} className='col-12 col-md-4 col-sm-6 col-lg-3 m-auto '>
      <Card.Body>
        <Card.Title>{post.title.split(" ").slice(0,6).join(" ")}</Card.Title>
        <Card.Text>
          {post.body.length > 80 ? post.body.slice(0, 80) + "..." : post.body}
        </Card.Text>
        <Button variant="outline-dark" as={Link} href={`/posts/${post.id}`}>Show Details</Button>
      </Card.Body>
    </Card>
  );
}

