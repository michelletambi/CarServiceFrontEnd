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
import {AiFillCar} from "react-icons/ai";
import { useContext, useEffect } from "react";
import { CustomerInfo } from "../Helper/Context";

const ProductContainer = () => {


    const {customerName, setCustomerName, id, setId} = useContext(CustomerInfo);
 
    const handleButton1 = () => {
        document.getElementById("basketOne").innerHTML = "This product has been added to your basket";
    }
    const handleButton2 = () => {
        document.getElementById("basketTwo").innerHTML = "This product has been added to your basket";
    }
    const handleButton3 = () => {
        document.getElementById("basketThree").innerHTML = "This product has been added to your basket";
    }
    const handleButton4 = () => {
        document.getElementById("basketFour").innerHTML = "This product has been added to your basket";
    }
    const handleButton5 = () => {
        document.getElementById("basketFive").innerHTML = "This product has been added to your basket";
    }
    const handleButton6 = () => {
        document.getElementById("basketSix").innerHTML = "This product has been added to your basket";
    }
    const handleButton7 = () => {
        document.getElementById("basketSeven").innerHTML = "This product has been added to your basket";
    }
    const handleButton8 = () => {
        document.getElementById("basketEight").innerHTML = "This product has been added to your basket";
    }

    return (
        <>
            <NavBar />
            <h1 id="title">
                Carz4FREE: Our Products
            </h1>

            <h3 id="headingCenter"> Here are some of our most popular products!</h3>
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
                        Top Speed: 202mph
                    </Typography>
                    <Typography id="accordionBody">
                        Price: £149,995 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 8000rpm
                    </Typography>
                    </div>
                    <button className="addToBasket" id="basketOne" onClick = {handleButton1}>Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Mercedes-Benz S-Class</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://www.topgear.com/sites/default/files/cars-car/image/2021/05/210302sclassjl_0084.jpg" height="150px" width="250px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Mercedes Benz S class
                    </Typography>
                    <Typography id="accordionBody">
                        Engine: W16
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Automatic
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 325km/h
                    </Typography>
                    <Typography id="accordionBody">
                        Price: 19,995 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 8000rpm
                    </Typography>
                    </div>
                    <button className="addToBasket" id="basketTwo" onClick = {handleButton2}>Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Volkswagen Tiguan</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://imgs.search.brave.com/600HMdWpXvT2cziR9it-Y4zIaJTElPdJfxS8UxD0NRg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/eW5MamxpSWJiQXRU/YXdhMXB5R1pRSGFF/OCZwaWQ9QXBp" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                    Volkswagen Tiguan
                    </Typography>
                    <Typography id="accordionBody">
                        Engine: 2.0L
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Manual
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 210km/h
                    </Typography>
                    <Typography id="accordionBody">
                        Price: 15,925 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 6000rpm
                    </Typography>
                    </div>
                    <p id = "pBasket4"></p>
                    <button className="addToBasket" id="basketThree" onClick = {handleButton3}>Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Toyota Corolla</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://imgs.search.brave.com/uH-xA2Kl02l9R3d_165xz4O_TB5-hjrdWWSCNOyVe1c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5kcml2aW5nZWxl/Y3RyaWMuY29tL2lt/YWdlL3ByaXZhdGUv/cy0tMWhYb3U4anEt/LS92MTYxMjI2NTQy/Ny9kcml2aW5nZWxl/Y3RyaWMvMjAyMS0w/Mi9Ub3lvdGEtQ29y/b2xsYS0wMDEuanBn" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Lamborghini Toyota Corolla
                    </Typography>
                    <Typography id="accordionBody">
                        Engine: 1.8 Petrol/ 1.3 kWh
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Automatic
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 125km/h
                    </Typography>
                    <Typography id="accordionBody">
                        Price: £11,000 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 4000rpm
                    </Typography>
                    </div>
                    <p id = "pBasket5"></p>
                    <button className="addToBasket" id="basketFour" onClick = {handleButton4}>Add to basket</button>
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
                        Engine: 1.6i Petrol
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Manual
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 116mph
                    </Typography>
                    <Typography id="accordionBody">
                        Price: 17,995 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 130 bhp
                    </Typography>
                    </div>
                    <p id = "pBasket2">This item </p>
                    <button className="addToBasket" id="basketFive" onClick = {handleButton5}>Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Volkswagen Golf 2019</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://cdn.euroncap.com/media/56959/volkswagen-golf.png" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Volkswagen Golf 2019
                    </Typography>
                    <Typography id="accordionBody">
                        Engine: 1.4L Petrol
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Automatic
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 155mph
                    </Typography>
                    <Typography id="accordionBody">
                        Price: 25,245 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 5000rpm
                    </Typography>
                    </div>
                    <button className="addToBasket" id="basketSix" onClick = {handleButton6}>Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Ford Puma 2019</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://parkers-images.bauersecure.com/pagefiles/307918/ford-puma.jpg" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Ford Puma 2019
                    </Typography>
                    <Typography id="accordionBody">
                        Fuel Capacity: 1.0L 3-cyclinder
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Manual
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 124mph
                    </Typography>
                    <Typography id="accordionBody">
                        Price: £24,405 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 152bhp
                    </Typography>
                    </div>
                    <p id = "pBasket3"></p>
                    <button className="addToBasket" id="basketSeven" onClick = {handleButton7}>Add to basket</button>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><AiFillCar size="35px"/></Typography>
                    <Typography id="accordionHeader">Land Rover Discovery</Typography>
                </AccordionSummary>
                <AccordionDetails id="accordion-details">
                    <div id="image-accordion-position">
                <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Discovery/8514/1646805311941/front-left-side-47.jpg?tr=w-270" height="200px" width="300px" alt ="me"/>
                    </div>
                    <div id="text-accordion-position">
                    <Typography id="accordionBody">
                        Land Rover Discovery Landmark Edition 2017
                    </Typography>
                    <Typography id="accordionBody">
                        Fuel Capacity: 77L
                    </Typography>
                    <Typography id="accordionBody">
                        Type: Manual
                    </Typography>
                    <Typography id="accordionBody">
                        Top Speed: 121mph
                    </Typography>
                    <Typography id="accordionBody">
                        Price: £55,535 or FREE with us
                    </Typography>
                    <Typography id="accordionBody">
                        Power: 236bhp
                    </Typography>
                    </div>
                    <button className="addToBasket" id="basketEight" onClick = {handleButton8}>Add to basket</button>
                </AccordionDetails>
            </Accordion>



            
            <CarList/>
            <Footer/>
        </>
    );
}


export default ProductContainer;