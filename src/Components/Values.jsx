import * as React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import values from "../assets/values.svg";

export default function Values() {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
      <Grid
        container
        
       sx={{mt:3,p:{xs:1,md:3}}}
      >
        {[
          { title: "Determination", image: { values } },
          { title: "Dedication", image: { values } },
          { title: "vision", image: { values } },
          { title: "Focus", image: { values } },
        ].map((name, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={180}
            sx={{display:"block",alignItems:"center"}}
          >
            <img src={values} alt={name.title} className="img-fluid object-center m-auto w-[40%] md:w-[70%] bg-white rounded-lg p-4"/>
            <Typography  sx={{color:"#fafafa",textAlign:"center",my:{xs:0,md:2}}}>
              {name.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
