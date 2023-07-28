import Bannerbtn from './bannerbtn'
import Bannerhead from './bannerhead'
import Bannerimage from './bannerimage'
import Bannerpara from './bannerpara'
import classes from './bannersection.module.css'


function Bannersection(){
    return(
        <div className={classes.section}>
         <div className={classes.sectionOne}>
            <Bannerhead/>
            <Bannerpara/>
            <Bannerbtn/>

        </div>

        <div className={classes.sectionTwo}>
        <Bannerimage/>

        </div>

        </div>

    )
}
export default Bannersection