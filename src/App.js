import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./App.css";
import NavbarHeader from "./components/NavbarHeader";
import NewsFeed from "./components/NewsFeed";
import SideBar from "./components/SideBar/SideBar";
import UploadBar from './components/UploadBar/UploadBar'
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <NavbarHeader/>
      <Container className="mt-3">
        <Row>
          <Col md={8} className="p-0 mt-3">
            <UploadBar/>
            <NewsFeed/>
          </Col>
          <Col md={4}>
              <SideBar/>
          </Col>
        </Row>
      </Container>
    </AuthProvider>
  );
}

export default App;
