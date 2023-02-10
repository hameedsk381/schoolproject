import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";

export default function Message({ name, message, role, caption }) {
  return (
    <Box
      sx={{
        width: "100%",
        px:3,pt:3,py:1,
        backgroundColor: "ivory",
        borderRadius: "15px",
      }}
    >
      <Typography
        level="h2"
        fontSize="md"
        sx={{
          mb: 0.5,
          fontWeight: "bold",
          color: "#1769aa",
          fontSize: { xs: "15px", md: "25px" },
          textAlign: "center",mt:2
        }}
      >
        Message from the {role}
      </Typography>
      <Typography
        level="body2"
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 1,
          fontSize: { xs: "20px", md: "25px" },
        }}
      >
        {name}
      </Typography>

      <Stack direction="row" sx={{ display: { xs: "none", md: "flex" } }}>
        

        <Box sx={{height:{md:"70vh"}, display: "block", p: 1 }}>
        <Avatar
          src={require("../assets/principal.JPG")}
          loading="lazy"
          alt=""
          sx={{
            width: { xs: 100, md: 180 },
            height: { xs: 100, md: 180 },
            margin: "auto",
          }}
        />
          <Typography
            fontSize="lg"
            fontWeight="lg"
            sx={{
              textAlign: "center",
              fontFamily: "Cinzel",
              py: 1,my:2,
              fontSize: { xs: "10px", md: "25px" },
              color: "#1769aa",
            }}
          >
            {caption}
          </Typography>
          <Typography
            fontSize="lg"
            fontWeight="lg"
            sx={{
              textAlign: "justify",alignContent:"center",
              fontFamily: "sans-serif",
              fontSize: { xs: "10px", md: "medium" },
              pb: 3,my:3,
              color: "#1769aa",
            }}
          >
            {message}
            <br />
           
          </Typography>
          <Button
      variant="outlined"
      size="medium"
      color="primary"
      aria-label="Explore Bahamas Islands"
      sx={{
        fontWeight: 200,
        margin: "auto",
        p: 0.5,ml:15,
        
        
        fontSize: "13px",
      }}
    >
      Read more
    </Button>
        </Box>
        
      </Stack>
      
      <Stack direction="row" sx={{ display: { xs: "block", md: "none" } }}>
       

        <Box sx={{height:{md:"70vh"}, display: "block", px:3,py:1 }}>
        <Avatar
        src={require("../assets/principal.JPG")}
        loading="lazy"
        alt=""
        sx={{
          width: { xs: 100, md: 180 },
          height: { xs: 100, md: 180 },
          margin: "auto",
        }}
      />
          <Typography
            fontSize="lg"
            fontWeight="lg"
            sx={{
              textAlign: "center",
              fontFamily: "Cinzel",
              py: 2,
              fontSize: { xs: "10px", md: "15px" },
              color: "#1769aa",
            }}
          >
            {caption}
          </Typography>
          <Typography
            fontSize="lg"
            fontWeight="lg"
            sx={{
              textAlign: "justify",
              fontFamily: "sans-serif",
              fontSize: { xs: "10px", md: "medium" },
              pb: 3,
              color: "#1769aa",
            }}
          >
            {message}
            <br />
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{
                fontWeight: 200,
                margin: "auto",
                p: 0.5,
                color: "#1769aa",
                my: 2,ml:6,
                fontSize: "13px",
              }}
            >
              Read more
            </Button>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
