import React from 'react';
import camPhoto from '../../assets/images/1.jpg'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='Picture of Cameron' src={camPhoto}/>
            </div> 
            <h1 id='about'>About Me</h1>
            <p className='text-background' id='aboutText'>
            <h5>Hi! I am a full stack web developer focused in front end design based out of Chicago, IL. Currently I am enrolled in the Northwestern full stack bootcamp.
            </h5>
            </p>
        </section>
    )
};

export default About;