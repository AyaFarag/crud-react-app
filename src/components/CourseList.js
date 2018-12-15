import React, { Component }from 'react';


class CourseList extends Component{

    state ={
        isEdit : false
    }

    renderCourse = () => {
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={ () => {this.toggleState()}}>edit</button>
                <button onClick={() => {this.props.delete(this.props.index)}}>delete</button>
            </li>
        )
    }

    toggleState = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit : !isEdit
        })

       
    }

    updateCourses = (e) =>{
        e.preventDefault();
        this.props.edit(this.props.index, this.input.value)
        this.toggleState();
    }


    renderUpdateForm = () => {
        return(
        <form onSubmit={this.updateCourses}>
            <input type="text" defaultValue={this.props.details.name} ref={ (v) => { this.input = v}}/>
            <input type="submit" value="Update Course" />
        </form>
        )
    }


    render(){
        let {isEdit} = this.state
        return(
        <React.Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse()}

        </React.Fragment>

        )
    }
}


export default CourseList;