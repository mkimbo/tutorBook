import React, { Component } from "react";
import API from "../../utils/API.js";
import { Card, CardTitle, Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";

class Tutors extends Component {

state = {
  teacherName:"",
  teacherPic:"",
  contract:"",
  totalStudents:"",
  studentName:"",
  studentAge:"",
  lastTaught:"",
  studentLocation:"",
  studentShortDescription:""
};

componentDidMount(){
  this.loadStudents();
};

loadStudents = () => {
  API.getStudents()
    .then(res =>
      this.setState({ studentName: res.data })
    )
    .catch(err => console.log(err));
};

  render(){
    return(
      <div>
      <Nav />
        <Container>
          <Row>
            <Col s={12}>
              <Row>
                <Col s={6}>
                  <Card className="medium"
                    header={<CardTitle image="../../../Images/background.jpg">Tutor Name Goes Here</CardTitle>}
                    >
                    Info about the teacher
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr/>

          <Row>
            <Col s={3}>
              <Card className="small"
                  header={<CardTitle reveal image={"../../../Images/background.jpg"} waves="light"/>}
                  title="Student Name"
                  reveal={<p>studentShortDescription, lastTaught, and studentAge will be displayed here</p>}
                >
                  <p><a href="#">Link to the students page goes here</a></p>
              </Card>
            </Col>
            <Col s={3}>
              <Card className="small"
                  header={<CardTitle reveal image={"../../../Images/background.jpg"} waves="light"/>}
                  title="Student Name"
                  reveal={<p>studentShortDescription, lastTaught, and studentAge will be displayed here</p>}
                >
                  <p><a href="#">Link to the students page goes here</a></p>
              </Card>
            </Col>
            <Col s={3}>
              <Card className="small"
                  header={<CardTitle reveal image={"../../../Images/background.jpg"} waves="light"/>}
                  title="Student Name"
                  reveal={<p>studentShortDescription, lastTaught, and studentAge will be displayed here</p>}
                >
                  <p><a href="#">Link to the students page goes here</a></p>
              </Card>
            </Col>
            <Col s={3}>
              <Card className="small"
                  header={<CardTitle reveal image={"../../../Images/background.jpg"} waves="light"/>}
                  title="Student Name"
                  reveal={<p>studentShortDescription, lastTaught, and studentAge will be displayed here</p>}
                >
                  <p><a href="#">Link to the students page goes here</a></p>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    );
  };
}; // end class

export default Tutors;