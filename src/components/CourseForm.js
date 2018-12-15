import React from 'react';


const CourseForm = (props) => {
    return(
        <section>
           <form onSubmit={props.add}>
                <input type="text" placeholder="Add Course ..." onChange={props.changes} value={props.current} />   
                <input type="submit" value="Add"  />   
            </form> 
        </section>
    )
}

export default CourseForm;