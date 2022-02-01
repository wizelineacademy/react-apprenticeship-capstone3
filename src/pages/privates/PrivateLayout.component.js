import React from "react";
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../../context/authContext";
import { logOut } from "../../providers/Login.api"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const MainContainer = styled.div`
min-height: 100vh;
font-family: Montserrat, sans-serif;
`

const SecundaryContainer = styled.section`
position: absolute;
    top: 0;
    transition: all ease-in .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
`

const MenuOption = styled.a`
font-size: 40px;
color: #fff;
text-decoration: none;
padding: 20px;
text-align: center;
`

const Menu = styled.nav`
position: fixed;
left: 0;
z-index: 50;
display: flex;
justify-content: space-around;
flex-direction: column;
height: 100vh;
background: #422C73;
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
        false ? <Navigate to="/login" />
            :
            <>

                <Menu>
                    <MenuOption onClick={() => navigate("/notes")}>Notas</MenuOption>
                    <MenuOption onClick={() => navigate("/")}>Archivadas</MenuOption>
                    <MenuOption onClick={DoLogOut}>Cerrar Sesión</MenuOption>
                </Menu>

                <MainContainer>
                    <SecundaryContainer>
                        <Outlet />
                    </SecundaryContainer>
                </MainContainer>

                {/*<button type="button" onClick={DoLogOut}>Logout</button>
            <br/>*/}
            </>
    );
};
export default PrivateLayout;