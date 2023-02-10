import { Box, Divider, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { updateProfilePic } from "../actions/userActions";
import axios from "axios";
import { Badge, Menu, MenuItem, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Commonmenu from "./Commonmenu";
import { CameraAlt } from "@mui/icons-material";
import Cropper from "react-easy-crop";

const User = () => {
  const inputRef = React.useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open3 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [image, setImage] = React.useState(null);


  
  const userstate = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userstate;
  console.log(userstate);
  const dispatch = useDispatch();
  const handleupload = () => {
    const formData = new FormData();
    formData.append("profile", image);
    formData.append("_id", currentUser._id);
    console.log(formData);

    dispatch(updateProfilePic(formData));

    setOpen2(!open);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  
  const handleClose2 = (value) => {
    setOpen2(false);
  };
  const trigger = () => {
    inputRef.current.click();
  };

  const img = btoa(
    String.fromCharCode(...new Uint8Array(currentUser.image.data.data))
  );

  return (
    <>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative">
              <div>
                <Typography
                  component="img"
                  sx={{
                    margin: "auto",
                    borderColor: "transparent",
                    color: "transparent",
                    "&:hover": {
                      borderColor: "transparent",
                      backgroundColor: "transparent",
                    },
                  }}
                />
                <div className="object-cover w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <Box>
                        <Button
                          id="basic-button"
                          aria-controls={open3 ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open3 ? "true" : undefined}
                          onClick={handleClick} sx={{backgroundColor:"whitesmoke",borderRadius:6}}
                        >
                          <CameraAlt sx={{ color: "#000000" }} />
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open3}
                          onClose={handleClose3}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose3}>
                            View profile photo
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              setOpen(!open);
                              handleClickOpen2();
                            }}
                          >
                            Change profile photo
                          </MenuItem>
                          <MenuItem onClick={handleClose3}>Remove pic</MenuItem>
                        </Menu>
                      </Box>
                    }
                  >
                   {image ? ( <Avatar
                    alt="Travis Howard"
                    src={image}
                    sx={{ width: 250, height: 250 }}
                  />): ( <Avatar
                    alt="Travis Howard"
                    src={`data:images/jpeg;base64,${img}`}
                    sx={{ width: 250, height: 250 }}
                  />)}
                  </Badge>
                </div>

                <Dialog onClose={handleClose2} open={open2}>
                 
                    <div className="p-5 h-[100vh] w-[100%]" style={{display:"block"}}>
                      
<Divider/>
                      <div className="" style={{display:"flex",alignItems:"center",justifyContent:"space-around",margin:"auto",alignContent:"center"}}>
                        <input
                          aria-label="change"
                          name="image"
                          id="inputtag"
                          type="file"
                          accept="image/*"
                          onChange={(event) => {
                            
                              setImage(event.target.files[0])
                            }
                          }
                          style={{ display: "none" }}
                          formEncType="multipart/form-data"
                          ref={inputRef}
                        />

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            trigger();
                          }}
                          sx={{ m: 2 }}
                        >
                          select image
                        </Button>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                         setImage(null)
                        }}
                        sx={{ m: 2 }}
                      >
                      Clear
                      </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            handleupload();
                            setOpen2(!open2);
                          }}
                          sx={{ m: 2 }}
                        >
                          Upload
                        </Button>
                      </div>
                    </div>
                  
                </Dialog>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <div>
              <h1 className="text-4xl font-medium text-gray-700">
                {currentUser.name}{" "}
                <span className="font-light text-gray-500">27</span>
              </h1>
              <p className="font-light text-gray-600 mt-3">
                {currentUser.email}
              </p>
            </div>

            <p className="mt-8 text-gray-500">
              {currentUser.department} Department
            </p>
            <p className="mt-2 text-gray-500">
              Christ the King International School
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
