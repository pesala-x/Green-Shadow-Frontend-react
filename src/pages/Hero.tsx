import 'Hero.css'
export const Hero = () => {
    return (
        <>
            <div className={"content"}>
                <img src={"src/assets/Staylinked.png"} alt={"img"}/>
                <h1 className={'text-neutral-100 text-3xl'}>Welcome to <span
                    className={'text-lime-500'}>Green Shadow</span></h1>
                <p className={'text-slate-200 text-xs'}>Station Road, Matale ,SriLanka</p>
                <button className={'explore'}>Explore
                    <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>

                <p className={'text-slate-200 text-xs'}>&copy; 2024 Your Website. All Rights Reserved.</p>
            </div>

            <div className={"bg-image"}>
                <img className={''} src={"src/assets/farmer.png"} alt={"img"}/>

            </div>

        </>
    );
};