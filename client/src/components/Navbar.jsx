import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Pern Stack</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/task/new")}
            >
              New task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
