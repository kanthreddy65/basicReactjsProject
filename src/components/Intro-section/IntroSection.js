import React from "react";



class IntroSection extends React.Component{
    // constructor(props) {
    //     super(props);
        
    // }
    render() {
        return (
            <React.Fragment>
                <section className="bg-dark text-white p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <p className="h3"> Ultimate Destinations Here</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, et,
                                 sapiente quas temporibus libero quasi, ipsam magnam sit
                                 dolore sequi omnis animi eveniet! Vel porro quidem saepe, molestiae quas nihil!</p>
                                 <button className="btn btn-light">Explore Here</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default IntroSection;