import { Container, styled } from '@mui/material'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField , Button, TextareaAutosize } from '@mui/material';
import Swal from 'sweetalert2'


const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "#adc3ef"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#adc3ef"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#adc3ef"
    },
    "&:hover fieldset": {
      borderColor: "#adc3ef",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "#adc3ef"
    }
  }
});

const Contact = () => {
  const form = useRef();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_YOUR_SERVICE_ID, 
      process.env.REACT_APP_YOUR_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_YOUR_PUBLIC_KEY
    ).then((result) => {
      console.log(result.text);
      Swal.fire({
        icon:'success',
        title:'Message sent sucessfully 🎉'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon:'error',
        title:"Something went wrong 🙃",
        text:error.text,
      })
    });
    e.target.reset();
  };

  return (
    <Container id='contact' align='center' sx={{ overflow: 'auto' }}>
      <h5 className="text__light__top">Let's Talk</h5>
      <h2>Send Me a Message!</h2>
      <Box style={{
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        margin:"40px",
        marginBottom:"150px"
      }}>
        <form onSubmit={onHandleSubmit} ref={form}>
          <div>
            <StyledTextField
              sx={{
                width:"400px",
                height:"5rem",
                lineHeight: "1.6em",
              }}
              type="text"
              label="Name"
              required
              name="user_name"
            />
          </div>
          <div>
            <StyledTextField 
              sx={{
                marginBottom:"5px",
                width: 400, 
                height:100,
              }}
              type="email"
              label="Email"
              name="user_email"
              required
            />
          </div>
          <div >
            <TextareaAutosize
              type="text"
              label="Message"
              required
              name="user_message"
              variant="outlined"
              placeholder='Write your message here...'
              style={{ width: 400 , height:100, borderColor:"#909090", borderWidth:1.3, 
              marginBottom:"5px", color:"black"}}
            />
          </div>
          <div align='center'>
            <Button type='submit' sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#adc3ef',
              color: '#002647',
              marginTop: '20px'
            }} className='slight__hover'>
              SUBMIT MESSAGE
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  )
}

export default Contact