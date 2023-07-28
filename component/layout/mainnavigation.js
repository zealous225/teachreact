const { default: Link } = require("next/link");

function MainNavigation(){
    return(
        <div>
            <ul>
                <li><Link href='/'>home</Link></li>
                <li><Link href='/about'>home</Link></li>
                <li><Link href='/contact'>home</Link></li>
                <li><Link href='/admin/adminDashboard'>home</Link></li>
                <li><Link href='/users'>home</Link></li>
                <li><Link href='/users/users-login'>home</Link></li>
            </ul>
        </div>
    )
}
export default MainNavigation