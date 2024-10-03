import React from 'react';
import useMediaQuery from './useMediaQuery';


const Home = () => {

    const isMobile = useMediaQuery('(max-width: 768px)');

    return(
        <div className='container'>
            {isMobile ? (
                <div>
                    
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
};

export default Home;