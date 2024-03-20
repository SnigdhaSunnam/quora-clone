import Navbar from "../components/navbar/navbar";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./layout.css"


function Layout() {
    return (
        <>
            <Container sx={{ flexGrow: 1 }} className="layout-container">
                <Navbar />
                <Outlet />
            </Container>
        </>
    )

}

export default Layout;