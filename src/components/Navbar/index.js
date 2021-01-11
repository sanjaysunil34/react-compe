import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Logo from './../../images/Logo.png';

class Navbar extends Component{

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div >
                <nav>
                    <div class="nav-wrapper">
                    <a class="brand-logo center" style={{fontWeight:"bold"}}>Edu Nation</a>
                    <a href="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#register">Sign Up</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#register">Sign Up</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar

