import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import CourseData from './../../CourseData';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import './styles.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Carousel from 'react-elastic-carousel';
// import Modal from './../Modal';

function dev(Data,category) {
    if(Data.Category == category){
        return(
            <div>
            <div class="card modal-trigger" data-target={`${Data.Name}`} style={{height:"400px",width:"350px"}}>
                <div class="card-image">
                    <img src={`./../../images/${Data.Image}.jpeg`} alt="" style={{height:"200px"}} />
                    <a class="halfway-fab btn-floating pink pulse">
                        <div class="small">{Data.Rating}   <i class="material-icons">star</i></div>
                    </a>
                </div>
                <div class="card-content grey">
                    {Data.Name}
                </div>
                <div class="card-action white">
                    {/* <p class="grey-text" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', margin:"0"}}>&#8377;{Data.Original}</p>
                    <p style={{marginTop:"0"}}>&#8377;{Data.Price}</p> */}
                    <p style={{marginTop:"0",fontWeight:"bold"}} class="red-text">{Data.Discount}Discount</p>
                    <a class="modal-trigger waves-effect waves-light" href={`#${Data.Name}`} style={{marginRight:"0",fontWeight:"bold"}}>View More</a>
                </div>
            </div>
            <div id={`${Data.Name}`} class="modal">
                <div class="modal-content">
                <h4>{Data.Name}</h4>
                <p>{Data.Courseprovider}</p>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="half-rating-read" defaultValue={Data.Rating} precision={0.1} readOnly />
                    <p class="enrol grey-text">({Data.Enrollment})</p>
                </Box>
                <h5>About the Course</h5>
                {Data.Description}
                </div>
                <div class="modal-footer row center">

                <div class="col s6 left-align"style={{marginLeft:"25px"}} >
                    <p style={{marginBottom:"0"}}>Original Price : &#8377;{Data.Original}</p>
                    <a class="modal-close waves-effect waves-green btn-flat green white-text" style={{display: "inline-block",height:"auto",textAlign:"center"}} href="#register">Buy now for  &#8377;{Data.Price}</a>
                </div>

                <div class="col s6 right-align" style={{marginRight:"25px"}}>
                    <p style={{marginBottom:"0"}}>Free Trial classes available</p>
                    <a class="modal-close waves-effect waves-green btn-flat green white-text" style={{display: "inline-block",height:"auto",textAlign:"center"}} href="#register">Enroll for free Trial class</a>
                </div>
        
                </div>
            </div>
            </div>
        );
    }
}

// function handleClick(Data) {
//     <Modal data={Data} />
// }



class Grid extends Component{

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {noWrap:true, dist:0,indicators:true});
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    

    render() {
        const breakpoints = [
            {width: 500, itemsToShow: 1},
            {width: 768, itemsToShow: 2},
            {width: 1200, itemsToShow: 3},
        ]
        return(
        <div>
            <h2 class="left">Development</h2>
            <Carousel breakPoints={breakpoints}>
            {CourseData.map((Data, index) => {
                return(
                    dev(Data,"Developement")
                );
            })}
            </Carousel>
            <h2 class="left">Design</h2>
            <Carousel breakPoints={breakpoints}>
            {CourseData.map((Data, index) => {
                return(
                    dev(Data,"Design")
                );
            })}
            </Carousel>
            <h2 class="left">Marketing</h2>
            <Carousel breakPoints={breakpoints}>
            {CourseData.map((Data, index) => {
                return(
                    dev(Data,"Marketing")
                );
            })}
            </Carousel>
            <h2 class="left">Business</h2>
            <Carousel breakPoints={breakpoints}>
            {CourseData.map((Data, index) => {
                return(
                    dev(Data,"Business")
                );
            })}
            </Carousel>
            <h2 class="left">Music</h2>
            <Carousel breakPoints={breakpoints}>
            {CourseData.map((Data, index) => {
                return(
                    dev(Data,"Music")
                );
            })}
            </Carousel>
        </div>
    )
}}

export default Grid
