import Footer from "./footer"
import MainNavigation from "./mainnavigation"

const {Fragement} = require("react");

function Layout(props){
    return(
        <Fragement>
        <MainNavigation/>
        <main>
        {props.chidren}
        </main>


        <Footer/>
        </Fragement>

    )
}

export default Layout