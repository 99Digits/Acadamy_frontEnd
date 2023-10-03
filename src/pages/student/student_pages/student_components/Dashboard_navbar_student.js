
import { AppBar, Box, Button, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Dashboard_navbar_student() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  const nav=useNavigate()
   
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  const Logout=()=>{
    toast.warning("LogOut Succcessfully")
    setTimeout(() => {
      nav('/')
    }, 1000);
  }
  
  return (
    <div>
   
   <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
        
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{backgroundColor:'white'}}
      >
        <i class="fa-solid fa-bars fa-beat-fade"></i>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
  <Link to="/student_view" onClick={handleClose}>
    <MenuItem>
      view Profile <i className="fa-solid fa-eye"></i>
    </MenuItem>
  </Link>
  <Link to="/my_profile" onClick={handleClose}>
  <MenuItem onClick={handleClose}>My account &nbsp; <i class="fa-solid fa-user"></i></MenuItem>


  </Link>
 
  <Link to="/student_videos" onClick={handleClick}>
  <MenuItem onClick={handleClose}>Batch &nbsp; <i class="fa-solid fa-play fa-beat-fade"></i></MenuItem>

  </Link>
  <Link to="/quiz_app" onClick={handleClick}>
  <MenuItem onClick={handleClose}>Exam &nbsp; <i class="fa-solid fa-book"></i></MenuItem>

  </Link>

  <Link to="/student_attendance" onClick={handleClick}>
  <MenuItem onClick={handleClose}>Attendance sheet &nbsp; <i class="fa-solid fa-pen-to-square"></i></MenuItem>

     </Link>

     <Link to="/course" onClick={handleClick}>

     <MenuItem onClick={handleClose}>Courses &nbsp;<i class="fa-solid fa-book-open"></i> </MenuItem>  

     </Link>
     <Link to="/notifications" onClick={handleClick}>
     <MenuItem onClick={handleClose}>Notifications &nbsp;<i class="fa-regular fa-bell"></i> </MenuItem>


     </Link>

        <MenuItem onClick={handleClose}><p onClick={Logout}>Logout &nbsp; <i class="fa-solid fa-right-from-bracket"></i></p></MenuItem>
      </Menu>
         
          {auth && (
            <div>
              
           
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    <ToastContainer position='top-center'/>

    </div>
    
  )
}

export default Dashboard_navbar_student