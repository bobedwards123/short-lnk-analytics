import React from 'react';
import rd3 from 'react-d3';
var Treemap = rd3.Treemap;
import moment from 'moment';




export default class Analytics extends React.Component {
constructor(props){
    super(props);
    this.state = {
        barData: [
           
            {label: 'A', value: 5},
            {label: 'B', value: 6}
        ],
        links: []
        
    }
}


componentDidMount(){
    console.log(this.props.linkData)
    

}


// method to populate data with relevant data from database

render(){
  
    
    return(
        <div className="item">
        <p>Show Analytics</p>
        
        <div className="item__chart">
        <Treemap
            data={this.state.barData}
            width={450}
            height={250}
            textColor="#484848"
            fontSize="10px"
            title="Treemap"
            />
       
        </div>
        <div className="item__chart">
          
        </div>
        </div>
    )
}  
}
