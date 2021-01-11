import React from 'react';
import './styles.css';

class About extends React.Component{

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, {});
        });
    }

    render() {
    return (
        <div>
            <h3 id="about" class="section scrollspy">About</h3>
            <div class="text">
                By connecting students all over the world to the best instructors, Edu Nation is helping individuals reach their goals and pursue their dreams.
                We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.
            </div>
        </div>
    )
}}

export default About
