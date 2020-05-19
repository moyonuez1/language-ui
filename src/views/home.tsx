import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import CategoryTable from "../components/category-table"

const Home: React.FC = () => {
    return(
        <div>
            <Header></Header>            

            <div className="container">
                <Subheader 
                    title="Bienvenido Ing. Uayeb"                     
                />
                
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;