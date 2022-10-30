//three links, navbar style
//top of page
//references: https://www.youtube.com/watch?v=w7ejDZ8SWv8 , https://mdbootstrap.com/docs/react/extended/login-form/ , https://www.npmjs.com/package/mdb-react-ui-kit

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NavBar extends React.Component {
    render() {
        return (
        <div>
          <nav className="navbar navbar-light bg-light">
  <div className="navbar-brand" href="/NavBar.js">
    Navbar
  </div>
<Container fluid='true'>
  <Row>
    <Col sm={4}><a className="nav-link" href="../home.html"> Home </a></Col>
    <Col sm={4}><a className="nav-link" href="../feature1.html">Features 1</a></Col>
    <Col sm={4}><a className="nav-link" href="../feature2.html">Features 2</a></Col>
  </Row>
</Container>
  

</nav>
        </div>
      );
    }
  }

export default NavBar
