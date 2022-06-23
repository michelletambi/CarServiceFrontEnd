import React from "react";
import '../components/Products.css'
import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import Footer from "../components/Footer";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TbZoomMoney } from "react-icons/tb";
import {VscWorkspaceTrusted} from "react-icons/vsc";
import {BsFillHandThumbsUpFill} from "react-icons/bs";


const ProductContainer = () => {
    // count keep track of the button clicks
    // let count = 0;
    const count = 0;



    return (
        <>
            <NavBar />
            <h1 id="title">
                Carz4FREE: Our Products
            </h1>
            <p className="products"> cars </p>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Lamborghini Huracan Tecnica</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-lamborghini-huracan-evo-rwd-2020-rt-hero-front.jpg?itok=Y6vt80vl" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Lamborghini Huracan Tecnica
                    </Typography>
                    <Typography id="accordionBody">
                        Engine: V10
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Manual
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 325km/h
                    </Typography>
                    <Typography id="accordionBody">
                        Price: 17,995 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 8000rpm
                    </Typography>
                    </div>
                    <button id="addToBasket">Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Ford Escort Cabriolet</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://historics.azureedge.net/cache/5/0/3/0/c/c/5030cc630aee67a901b2a1b8370cff63976a9462.jpg" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        The Ford Escort Cabriolet 1990
                    </Typography>
                    <Typography id="accordionBody">
                        Engine: 1.8i Petrol
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Manual
                    </Typography>
                    <Typography id="accordionBody">
                        Price: 17,995 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 130 bhp
                    </Typography>
                    </div>
                    <button id="addToBasket">Add to basket</button>
                </AccordionDetails>
            </Accordion>

                <div>
                    <table width="99%">
                        <tr>
                            <td>
                                <img src="https://imgs.search.brave.com/Sm5Ap7IdfWGLqGu0PJGcAqmvcvKM22dChBjc8euKP4Q/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXV0b2RldGVjdGl2/ZS5jb20vdXBsb2Fk/cy9waG90b3MvdG95/b3RhL2Nvcm9sbGEv/MjAxNi84OTczNTMu/anBn" height="500px" alt ="me"/>
                                
                                <button id = "carButton" onClick = {() => {handleButtonClick(count)}}>Add to basket</button>

                                <img src="https://historics.azureedge.net/cache/5/0/3/0/c/c/5030cc630aee67a901b2a1b8370cff63976a9462.jpg" height="500px" alt ="me"/>

                                <button class = "btn" >Add to basket</button>
                            
                                
                                 <img src="https://imgs.search.brave.com/igFBQ7-CYt38AkjdtQsleKxTL6aIg7YRlQCxGNIX_Mg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/akVBUmhtd1RhRDF1/ZGd2NjFubWNRSGFI/YSZwaWQ9QXBp" height="500px" alt ="me"/>   

                                 <button type = "button">Add to basket</button>                             
                            </td>
                        </tr>
                    </table>
                </div> 
            <p> Here are some of our most popular products!</p>
            <CarList/>
            <Footer/>
        </>
    );
}
export default ProductContainer;