import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TbZoomMoney } from "react-icons/tb";
import {VscWorkspaceTrusted} from "react-icons/vsc";
import {BsFillHandThumbsUpFill} from "react-icons/bs";

function HomeComponents() {


    return(
        <div>
            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><TbZoomMoney size="35px"/></Typography>
                    <Typography id="accordionHeader">Free Cars</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id="accordionBody">
                        No haggling, no fees, just vibes. 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><VscWorkspaceTrusted size="30px"/></Typography>
                    <Typography id="accordionHeader"> 13% Secure</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id="accordionBody">
                        We know how much security matters to our customers. That's why, with our new encrypted, 
                        ID-based secuity system, we can now boast a 13% security rating of "Extremely Dangerous".
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion id="accordionContent">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography id="accordionIcon"><BsFillHandThumbsUpFill size="35px"/></Typography>
                    <Typography id="accordionHeader">WE do the work</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography id="accordionBody">
                        Every car has been cherry-picked, vetted, and inspected first hand by our team 
                        of engineers to make sure our cars don't break down after a quarter-mile. You can
                        BUY with confidence.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
      );
}

export default HomeComponents;