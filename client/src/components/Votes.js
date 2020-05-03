import React, { Component } from 'react';
import {Button} from "reactstrap";



class Votes extends Component {

    constructor(props) {
        super(props);
    }

    handleButtonClick(event){
        this.props.addVote();
    }

    render(){

        return(
            <div>
                <Button onClick={(event) => this.handleButtonClick(event)} type="submit" className="btn" data-testid="votes-button">
                    <h4>Vote</h4>
                </Button>
            </div>
        );

    }

} 

export default Votes;