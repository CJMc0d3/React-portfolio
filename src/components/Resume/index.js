import React from 'react';

const Resume = () => {

    return (
        <section className='my-5 text-background'  class='card skillzz'>

            <h1 data-testid='h2tag'>Skills</h1>
            <div>
                
                <ul class='card skills-card'>
                    <li>HTML 5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li> 
                    <li>jQuery</li>
                    <li>Web API's</li>
                    <li>Handlebars</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>O.O.P.</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>M.V.C.</li>
                    <li>MongoDB & Mongoose</li>
                    <li>P.W.A.</li>
                    <li id='bottom'>React</li>
                    <fade/>
                </ul>
            </div>
        </section>
    )
}

export default Resume;