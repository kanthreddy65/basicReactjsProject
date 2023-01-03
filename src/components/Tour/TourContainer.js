import React from "react";
import TourCard from "./TourCard";

import card1 from '../../assets/img/card-1.jpg';
import card2 from '../../assets/img/card-2.jpg';
import card3 from '../../assets/img/card-3.jpg';
import card4 from '../../assets/img/card-4.jpg';




class TourContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            tours : ["Hampi 1","Hampi 2","Hampi 3","Hampi 4"]
        }
        
    }
    render() {
        return (
            <React.Fragment>
               <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                          <TourCard tourImage={card1} tourName={this.state.tours[0]}/>
                        </div>
                          <div className="col-md-3">
                          <TourCard tourImage={card2} tourName={this.state.tours[2]}/>
                        </div>
                        <div className="col-md-3">
                          <TourCard tourImage={card3} tourName={this.state.tours[3]}/>
                        </div>
                          <div className="col-md-3">
                          <TourCard tourImage={card4} tourName={this.state.tours[4]}/>
                        </div>
                    </div>
                </div>
               </section>
            </React.Fragment>
        );
    }
}

export default TourContainer;