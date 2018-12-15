import React, { Component } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import '../style/App.css';

class App extends Component {
  state = {

   courses: [
      {name: 'Html'},
      {name: 'php'},
      {name: 'SQL'},
    ],
    current: ''
      
    
  }
  

  handelChanges = (e) => {
    this.setState({
      current:e.target.value
    })
  }
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current});
    this.setState({courses, current: ''})
  }

  deleteCoures = (index) => {
    let courese = this.state.courses;
    courese.splice(index,1)
    this.setState({courese})
  }

  editCourse = (index, value) => {
    let courses = this.state.courses
    let course = courses[index]
    course['name'] = value;
    this.setState({
      courses
    })
  }
 
  render() {
    const {courses} = this.state;
    const coursesList = courses.map((course, index) =>{

      return  <CourseList details={course} key={index} index={index} delete={this.deleteCoures} edit={this.editCourse}/>
    })

    return (
      <div className="Appclass">
           <h4>Add Courses</h4>

          < CourseForm changes={this.handelChanges} add={this.addCourse} current={this.state.current} /> 

          <ul>{coursesList}</ul>
      
      </div>
    );
  }
}

export default App;
