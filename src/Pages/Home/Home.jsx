import React from 'react';
import Banner from './Banner/Banner3';
import TutoringJobs from './TutoringJobs/TutoringJobs2';
import TutorSwiper from './TeachersSlider/TuitorSwiper2';
import SubjectSpecialist from './SubjectSpecialist/SubjectSpecialist2';
import PeopleLoveUs from './PeopleLoveUs/PeopleLoveUs3';
import PathSystem from './PathSystem/PathSystem2';
import PressSlider from './PressSlider/PressSlider';
import Footer from "./../../components/Footer/Footer";

const Home = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <TutoringJobs></TutoringJobs>
            <TutorSwiper/>
            <SubjectSpecialist/>
            <PeopleLoveUs/>
            <PathSystem/>
            <PressSlider/>
            <Footer/>
        </div>
    );
};

export default Home;