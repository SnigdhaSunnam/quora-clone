import { Box,Container } from "@mui/material"
import AnswerCard from "../../components/answercard/answercard"
import Grid from '@mui/material/Unstable_Grid2';
import './answer.css'
function Answer(){
    return(
        <Container className="Answer-container-wrapper">
            <Grid container spacing={2} className="Answer-container">
                <Grid xs={2.5} className="">
                    <Box >
                        <Box><b>Questions</b></Box>
                        <Box className="question-side">Questions for you</Box>
                        <Box className="question-side">Answer requests</Box>
                        <Box className="question-side">Draft</Box>
                    </Box>
                </Grid>
                <Grid xs={6} className="">
                    <AnswerCard/>
                </Grid>
                <Grid xs={3.5}>
                    Advertisement
                </Grid>
            </Grid>
            
            
        </Container>
    )
}

export default Answer