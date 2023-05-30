import bg from '../assets/bg.png'
import NavbarHomepage from './NavbarHomepage'
import Herosection from './HeroSection'

function Home() {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat-x',
                height: '100vh',
                width: '100%',
            }}
        >
            <NavbarHomepage />
            <Herosection />
        </div>
    )
}

export default Home
