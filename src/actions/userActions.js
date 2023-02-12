import axios from "axios";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post(`http://localhost:5000/api/users/register`, user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: "USER_REGISTER_ERROR", payload: error });
  }
};
export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    try {
      const res = await axios.post(`http://localhost:5000/api/users/login`, user);
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });  
      console.log(res.data);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      window.location.href = "/"
    } catch(err){
        dispatch({ type: "USER_LOGIN_ERROR", payload: err });
    }
}
export const getAllUsers =()=>async(dispatch)=>{
    dispatch({ type: "GET_ALL_USERS_REQUEST" });
    try {
      const res = await axios.get(`http://localhost:5000/api/users/getusers`);
      dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: res.data });
      console.log(res.data);
     
    } catch(err){
        dispatch({ type: "GET_ALL_USERS_ERROR", payload: err.response.data.message });
    }
}


export const logoutUser =()=>(dispatch)=>{
    localStorage.removeItem("currentUser")
    window.location.href='/login'
    window.localStorage.clear()
}
export const deleteUser = (userid) => async (dispatch) => {
    dispatch({ type: "USER_DELETE_REQUEST" ,payload:userid});
    try {
      const res = await axios.delete(`/api/users/delete`,userid);
      dispatch({ type: "USER_DELETE_SUCCESS", payload: res.data });
      console.log(res.data);
    } catch(err){
        dispatch({ type: "USER_DELETE_ERROR", payload: err.message });
    }
}
export const updateProfilePic = (formData) => async(dispatch)=>{
  dispatch({ type: "USER_UPDATE_PROFILE_PIC_REQUEST" });
  try {
    const res = await axios.post(`http://localhost:5000/api/users/uploadprofilepic`, formData);
    dispatch({ type: "USER_UPDATE_PROFILE_PIC_SUCCESS", payload: res.data})
    console.log(res.data);
    } catch(err){
      dispatch({ type: "USER_UPDATE_PROFILE_PIC_ERROR", payload: err.message });
    }
}
