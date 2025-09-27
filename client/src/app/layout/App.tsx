import { Container } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
 
  return (

    <>
      <NavBar />
      <Container maxWidth="xl" sx={{mt: 8}}>
        <Outlet />
      </Container>
    </>

  )
}

export default App
