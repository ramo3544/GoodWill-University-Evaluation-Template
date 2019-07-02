import React, { Component } from 'react';
import CourseContentquest from './CourseContentquest';
import ContentApplicationDevelopmentQ from './ContentApplicationDevelopmentQ';
import OverallCourseContent from './OverallCourseContent';
import TheoryContentQuestions from './TheoryContentQuestions';

class CourseContent extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-lg-9" style={{marginTop:'30px'}}>
                    <h2>Course Evaluation</h2>
                    <CourseContentquest/>
                    <ContentApplicationDevelopmentQ/>
                    <TheoryContentQuestions/>
                    <OverallCourseContent/>
                </div>
            </div>  
        );
    }
}

export default CourseContent;