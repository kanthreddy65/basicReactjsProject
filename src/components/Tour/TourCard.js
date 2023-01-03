import React from "react";





class TourCard extends React.Component{
    // constructor(props) {
    //     super(props);
        
    // }
render() {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={this.props.tourImage} className="img-fluid" alt="" />
                    <div className="card-body">
                    <h4 className="card-title">{this.props.tourName}</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, molestiae.
                     Accusantium quo iusto totam voluptatum, dolorum incidunt reiciendis cum magnam?</p>
                     <button className="btn btn-dark"> Please Visit </button>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TourCard;