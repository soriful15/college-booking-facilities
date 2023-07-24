import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/UseTitle';
import CollageSection from '../CollageCard/CollageSection';
import CustomerSay from '../../CustomerSay/CustomerSay';
import ContacUs from '../ContacUs/ContacUs';
import Purpose from '../Purpose/Purpose';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
          <CollageSection></CollageSection>
          <Purpose></Purpose>
          <CustomerSay></CustomerSay>
          <ContacUs></ContacUs>

        </div>
    );
};

export default Home;