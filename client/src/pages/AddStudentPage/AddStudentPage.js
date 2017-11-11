import React, { Component } from "react";
import { Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import AddStudent from "../../components/AddStudent";
import Footer from "../../components/Footer";
import "./AddStudentPage.css";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'

class AddStudentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tutor: [],
      redirectTo: ""
    };
    //bind your api function here (see register and login components for an example)
    this._tutorStudentProfileUpdate = this._tutorStudentProfileUpdate.bind(this)
    
  }


  componentDidMount() {
    const tutorSession = JSON.parse(localStorage.getItem("tutor"))
    if (tutorSession) {
      const query = tutorSession.id;
      API.getTutor(query)
        .then(res => {
          this.setState({
            tutor: res.data,
            loggedIn: true
          })
        })
    }
    else{
      window.location = "/";
    }
  }

  _tutorStudentProfileUpdate(profile) {
    // API CALL HERE/
    const tutorId = this.state.tutor._id;
//    alert(id);
//    alert(studentProfile.firstName);

    API.saveStudent({tutorId,profile}).then((res, err) => {
      if (res.data.error) {
        console.log(res.data.error)
      }
      console.log(res.data.error)
      this.setState({
        tutor: res.data,
        redirectTo: "/Tutors"
      });
    })
    //RES AND REDIRECT HAPPENS HERE
  
  }

  //insert a props function here for API to update student data, then pass this function into your AddStudent Component

  render(){    
    if (!!this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <Nav />
            <Container>
              <Row>
                <Col s={12}>
                  <AddStudent _tutorStudentProfileUpdate={this._tutorStudentProfileUpdate}  tutor={this.state.tutor}/>
                </Col>
              </Row>
            </Container>
            <Footer />
        </div>
      )
    }
  }
} // end AddStudent class

export default AddStudentPage;

// window.location.href, grab the id, 
// query the tutor db for a matching student, and 
// set the state of the page with that data, pass that data into placeholders
