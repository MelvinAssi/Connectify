import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/Button/Button.js";
import { UserContext } from "../../contexts/userContext.js";
import { useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage(){
    const{currentUser,logOut} = useContext(UserContext);
    const navigate = useNavigate();


    const logout = async() => {
        try{
            console.log("log out")
            await logOut();
            navigate("/");
        }catch{

        }
      };

    if (!currentUser) {
        return (
            <>
                <Header />
                
                <div style={{ height: "180px", backgroundColor: "green" }}></div>
                <main style={{ display: "flex" ,alignItems: "center",justifyContent: "center"}}>
                    <p>Vous devez être connecté pour accéder à cette page.</p>
                </main>
                
                <Footer />
            </>
        );
    }

    return (
        <>       
            <Header></Header>
            <div style={{ height: "180px", backgroundColor: " #20835d" }}></div>
            <main style={{ display: "flex" ,alignItems: "center",justifyContent: "center"}}>
                <p>ProfilePage {currentUser.email} </p>
                <Button text="Log out" onClick={() => logout()}  />
            </main>

            <Footer></Footer>        
        </>
    );
}
export default ProfilePage;