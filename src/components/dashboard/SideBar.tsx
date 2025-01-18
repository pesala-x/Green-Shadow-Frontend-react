import {Link} from "react-router-dom";

export const SideBar = () => {
    return (
        <>
            <div id='side-bar'
                 className='h-[100vh] w-60 fixed z-10 top-0 left-0 bg-white overflow-hidden pt-5 flex flex-col  rounded-r-lg drop-shadow-xl'>
                <div>{/*sidebar header img */}
                    <img src='/logo/greens-logo.png' alt='logo' className='w-auto'/>
                </div>
                {/*sidebar Links */}
                <div className='mt-5 justify-center items-center'>
                    <ul className=''>
                        <li>
                            <Link className={'nav-btn'} to='/'>Dashboard</Link>
                        </li>
                        <li>
                            <Link className={'nav-btn'} to='/staff'>Staff</Link>
                        </li>
                        <li>
                            <Link className={'nav-btn'} to='/field'>Field</Link>
                        </li>
                        <li>
                            <Link className={'nav-btn'} to='/crops'>Crops</Link>
                        </li>
                        <li>
                            <Link className={'nav-btn'} to='/vehicle'>Vehicle</Link>
                        </li>
                        <li>
                            <Link className={'nav-btn'} to='/equipment'>Equipment</Link>
                        </li>
                        <li>
                            <Link className={'nav-btn'} to='/cropDetails'>Crop Details</Link>
                        </li>
                    </ul>
                </div>
                <div className='mt-20'>
                    <Link className={'nav-btn'} to='/logout'>Logout</Link>
                </div>
            </div>
        </>
    );
};