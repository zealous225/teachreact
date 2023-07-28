
import Bannersection from '@/component/Banner/bannersection'
import classes from'./index.module.css'
import Layout from '@/component/layout/layout'
function home(){
  return(
    <div className={classes.section}>
       <Bannersection/>
       <Layout/>
       
    </div>
  )
}
export default home

