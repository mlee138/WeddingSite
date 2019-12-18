import React from 'react';
import './stylesheets/Details.css'

function Details() {
    return(
        <div id="details">
            <section>
                <h2>Where/When</h2>
                <div className="row-container">
                    <div>
                        <h3>Ceremony</h3>
                        <blockquote>The Ceremony will take place in Mindy's Uncle's backyard at 6:30pm because we poor af and his backyard is way cheaper.</blockquote>
                    </div>
                    <div>
                        <h3>Reception</h3>
                        <blockquote>The Reception will take place after the ceremony at Matt Lee's backyard at around 7:45 because we will still be poor even after the ceremony.</blockquote>
                    </div>
                </div>
                

            </section>
            <hr/>
            <section>
                <h2>Wedding Party</h2>
                <div className="row-container">
                    <div className="list">
                        <h3>Bridesmaids</h3>
                        <ul>
                            <li>Sam Shek</li>
                            <li>Jessica Zhao</li>
                            <li>Karen Chen</li>
                            <li>Chu Liu</li>
                            <li>Whitney Sun</li>
                        </ul>
                    </div>
                    <div className="list">
                        <h3>Bridesmaids</h3>
                        <ul>
                            <li>Sebastian Hubert</li>
                            <li>Andy Bow</li>
                            <li>Alex Carpio</li>
                            <li>Adam Guarino</li>
                            <li>Darren Yu</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Details;