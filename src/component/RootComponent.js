import React from "react"
import Header from "./spa/header/header"
import Content from "./spa/contentcontainer/content";
import Footer from "./spa/footer/footer";


class RootComponent extends React.Component{

    

    render(){
        return (
            <div>
              <h2>Root Component</h2>
              <Header></Header>
              <Content></Content>
              <Footer></Footer>
            </div>
        )
    }

}


export default RootComponent