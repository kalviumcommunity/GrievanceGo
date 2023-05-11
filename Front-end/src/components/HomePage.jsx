import bg from '../assets/bg.png'
import Navbar from './navbar_homepage'
import Home_section from './Hero_section'

function Home() {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw',
            }}
        >
            <Navbar />
            <Home_section />
        </div>
    )
}
export default Home
