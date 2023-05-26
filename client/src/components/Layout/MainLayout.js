import {Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import './mainLayout.css'
import Footer from './Footer';
import FooterSmall from './FooterSmall';

const MainLayout=()=>{
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return(
        <>
            <div className='site'>
                <div className='header'>
                {/* {isHomePage ? '' : <Header />} */}
<Header/>
                {/* <Header/> */}
                </div>
                <div className='main'>
                    <div className="content"></div>
                    <Outlet/>
                </div>
                    <div className="content"></div>
                    {isHomePage ? <Footer /> : <FooterSmall />}
            </div>
        </>
    )
}

export default MainLayout;