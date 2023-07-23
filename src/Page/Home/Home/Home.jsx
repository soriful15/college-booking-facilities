import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/UseTitle';
import CollageSection from '../CollageCard/CollageSection';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
          <CollageSection></CollageSection>
        </div>
    );
};

export default Home;