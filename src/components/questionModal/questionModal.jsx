import "./questionModal.css";
import { useContext, useState } from "react";
import { useRef } from "react";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { deepOrange} from '@mui/material/colors';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import postService from "../../service/postService";
import { PiTextAaBold } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { UserContext } from "../../contexts/user-context";

const validationAddQuestion = yup.object({
    question:yup.string().trim().required(),
});

const validationAddPost = yup.object({
    post:yup.string().trim().required(),
});

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function QuestionModal({handleClose,getFeeds}){
    const inputFileRef = useRef();
    const [file, setFile] = useState();
    const [uploadedFileURL, setUploadedFileURL] = useState(null);
    const [value, setValue] = useState(0);
    const {userDetail} = useContext(UserContext);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const qformik = useFormik({
        initialValues: {
            question: '',  
        },
        validationSchema: validationAddQuestion,
        onSubmit: (values) => {
           addQuestion(values)
        },
    })
    const pformik = useFormik({
        initialValues: {
            post: '',
           
        },
        validationSchema: validationAddPost,
        onSubmit: (values) => {
            addPost(values)
        },
    })
    
    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
        setUploadedFileURL(URL.createObjectURL(event.target.files[0]))
    };

    const addPost = (values)=>{
        var formData = new FormData();
        formData.append('title',values.post)
        formData.append('images',file)
        postService.addPost(formData).then((res)=>{
            handleClose()
            getFeeds()
        })   
    };
    const addQuestion = (values)=>{
        var formData = new FormData();
        formData.append('title',values.question);  
        postService.addPost(formData).then((res)=>{
            handleClose()
            getFeeds()
        })     
    };

    const triggerFileUpload = ()=>{
        inputFileRef.current.click();
    }
    const closeImg = ()=>{
        // setFile();
         setUploadedFileURL(null);
    }
    return(
        <Box className="question-modal">
             <IconButton onClick={handleClose} sx={{m:0.5}}>
                <CloseRoundedIcon />
            </IconButton>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} className="Add-create-tab-box">
                        <Tab label="Add Question" {...a11yProps(0)} />
                        <Tab label="Create Post" {...a11yProps(1)} />
                    </Tabs>
                    </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box className="addQuestion-container">
                        <Box className="instruction-Component">
                            <Typography component="div">
                                <Typography variant="h6">Tips on getting good answers quickly</Typography>
                                <ul>
                                    <li>Make sure your question has not been asked already</li>
                                    <li>Keep your question short and to the point</li>
                                    <li>Double-check grammar and spelling</li>
                                </ul>
                            </Typography>
                            </Box>
                        <Box className="post-option-box">
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                        <Button variant="outlined" className="try-quora-btn" startIcon={< PeopleOutlineIcon />}>P<span>ublic</span></Button>
                        </Box>
                        <Box className="post-questionContainer">
                            <Input placeholder='Start your question with "What", "How", "Why", etc.' fullWidth
                                name="question"

                                value={qformik.values.question}
                                onChange={qformik.handleChange}
                                onBlur={qformik.handleBlur}
                                error={qformik.touched.question && Boolean(qformik.errors.question)}
                                helperText={qformik.touched.question && qformik.errors.question}
                            />
                        </Box>
                        <Box className="add-cancle-btn-container">
                            <Button variant="text" className="btn-cancle" onClick={handleClose}>C<span>ancle</span>
                            </Button>
                            <Button 
                                variant="contained" 
                                sx={{borderRadius:50,backgroundColor:"#96B4FF"}}
                                type="button"
                                onClick={qformik.handleSubmit}
                            >
                                A<span>ddQuestion</span>
                            </Button>
                            </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box className="create-box-container">
                        <Box className="createpost-profile-box">
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                        <Box>
                                <h4 className="create-post-pName">{userDetail?.name}</h4>
                                <Button variant="outlined" className="try-quora-btn">C<span>hoose credential</span></Button>
                            </Box>
                        </Box>
                        <Box className="create-post-img-container">
                            <TextField
                                id="outlined-multiline-static" 
                                multiline
                                fullWidth
                                rows={5}
                                placeholder="say something..."
                                name="post"
                                value={pformik.values.post}
                                onChange={pformik.handleChange}
                                onBlur={pformik.handleBlur}
                                error={pformik.touched.post && Boolean(pformik.errors.post)}
                                helperText={pformik.touched.post && pformik.errors.post}
                            />
                            <Box className='create-post-img-select'>
                                {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content"className="select-img"/>}
                                {uploadedFileURL &&   <IconButton onClick={closeImg} sx={{m:0.5}}className="create-post-img-close-icon"><CloseRoundedIcon fontSize="10"/></IconButton>}
                            </Box>
                        </Box>
                        <Box className="add-post-btn-container">
                            <Box>
                                <Button variant="text" className="translate-lang file-lang" >
                                    <PiTextAaBold fontSize={30} />
                                </Button>
                                <Button variant="text" className="file-btn file-lang"  >
                                    <GrGallery fontSize={30} onClick={triggerFileUpload}/>
                                    <input hidden accept="image/*" ref={inputFileRef} type="file" onChange={handleFileUpload} />
                                </Button>
                            </Box>
                            <Button 
                                variant="contained" 
                                sx={{borderRadius:50,backgroundColor:"#96B4FF"}}
                                type="button"
                                onClick={pformik.handleSubmit}
                            >
                                P<span>ost</span>
                            </Button>
                        </Box>
                    </Box>
                    </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default QuestionModal;