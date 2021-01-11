import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Parallax from './../../images/parallax.jpg';
import Parallax2 from './../../images/parallax2.jpg';

class Register extends Component{

    componentDidMount() {
        const M = window.M;
        var elems = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(elems, {});
        document.addEventListener('DOMContentLoaded', function() {
            var el = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(el, {});
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, {});
        });
    }

    render(){
        return(
            <div class="con section scrollspy" id="register">
            <div class="row">
            <div class="parallax-container">
             <div class="parallax"><img src={Parallax} /></div>
                <div class="col s12" style={{padding:"0"}}>
                <ul class="tabs" >
                    <li class="tab col s6 indigo darken-4"><a class="white-text" href="#test1">SIGN IN</a></li>
                    <li class="tab col s6 indigo darken-4"><a class="active white-text" href="#test2">Sign Up</a></li>
                </ul>
                </div>
                <div id="test1" class="col s12">
                {/* <div class="parallax-container"> */}
                    <div class="container">
                    
                    {/* <div class="parallax"><img src={Parallax} /></div> */}
                        <div class="mar1">
                        <Card>
                        <CardContent>
                        <h2 class="tex">Sign In</h2>
                        <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>          
                        
                        </Grid> 
                        <div class="bt">
                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            SIGN IN
                        </Button>
                        </div>
                        </CardContent>
                        </Card>
                        </div>
                    {/* </div> */}
                    </div>
                </div>
                <div id="test2" class="col s12">
                    {/* <div class="parallax-container"> */}
                    <div class="container">
                    
                    {/* <div class="parallax"><img src={Parallax2} /></div> */}
                        <div class="mar2">
                        <Card>
                        <CardContent>
                        <h2 class="tex">Sign Up</h2>
                        <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="standard-required"
                                label="First Name"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="standard-required"
                                label="Last Name"
                            />
                        </Grid> 

                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>          
                        
                        </Grid> 
                        <div class="bt">
                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            SIGN UP
                        </Button>
                        </div>
                        </CardContent>
                        </Card>
                        </div>
                    {/* </div> */}
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Register