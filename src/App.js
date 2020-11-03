import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => {
        const post = doc.data()
        post.id = doc.id
        return post
      }));
    });
  }, []);

  return (
    <>
      <Header />

      <Container className="mt-3">
        <Row>
          {/* Post */}
          <Col md={8} className="p-0 mt-3">
            {posts.map(post => (
              <Post
                key={post.id}
                username={post.username}
                imageUrl={post.imageUrl}
                caption={post.caption}
              />
            ))}
          </Col>
          <Col md={4} className="bg-light"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
