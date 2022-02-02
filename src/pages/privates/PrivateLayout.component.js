import React from "react";
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../../context/authContext";
import { logOut } from "../../providers/Login.api"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const MainContainer = styled.div`
width: 80%;
font-family: Montserrat, sans-serif;
display: inline-block;
vertical-align: top;
overflow-y: scroll;
height:100vh;
`

const MenuOption = styled.a`
font-size: 40px;
color: #fff;
text-decoration: none;
padding: 20px;
text-align: center;
`

const Menu = styled.nav`
width: 20%;
display: inline-flex;
justify-content: space-around;
flex-direction: column;
height: 100vh;
background: #422C73;
vertical-align: middle;
`
const DIV = styled.div`
    width: 100%;
`

const PrivateLayout = ({ children }) => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const DoLogOut = () => {
        logOut().then(
            (resp) => {
                navigate("/login");
            }
        ).catch((error) => {
        })
    }

    return (
        !isAuthenticated ? <Navigate to="/login" />
            :
            <>
                <DIV>
                <Menu>
                    <MenuOption onClick={() => navigate("/notes")}>Notas</MenuOption>
                    <MenuOption onClick={() => navigate("/")}>Archivadas</MenuOption>
                    <MenuOption onClick={DoLogOut}>Cerrar Sesión</MenuOption>
                </Menu>

                <MainContainer>
                        <Outlet />
                </MainContainer>
                </DIV>

                {/*<button type="button" onClick={DoLogOut}>Logout</button>
            <br/>*/}
            </>
    );
};
export default PrivateLayout;