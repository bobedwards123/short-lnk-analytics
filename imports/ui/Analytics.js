import React from 'react';
import rd3 from 'react-d3-basic';
var LineChart = rd3.LineChart;
var Treemap = rd3.Treemap;
import moment from 'moment';




export default class Analytics extends React.Component {
constructor(props){
    super(props);
    this.state = {
        data: []
    }
}




// method to populate data with relevant data from database

render(){
    var chartData = 
    [
        {"name":"Darron Weissnat IV","BMI":20.72,"age":39,"birthday":moment("2005-01-03T00:00:00.000Z").format('dddd'),"city":"East Russel","married":false,"index":0}
        ,
        {"name":"Pablo Ondricka","BMI":19.32,"age":38,"birthday":moment("1974-05-13T00:00:00.000Z").format('dddd'),"city":"Lake Edytheville","married":false,"index":1}
        ,
        {"name":"Mr. Stella Kiehn Jr.","BMI":16.8,"age":34,"birthday":moment("2003-07-25T00:00:00.000Z").format('dddd'),"city":"Lake Veronicaburgh","married":false,"index":2}
    ]

  
   


   
    console.log(chartData)

    var chartSeries = [
        {
          field: 'birthday',
          name: 'bday',
          color: '#ff7f0e',
          style: {
            "stroke-width": 3,
            "stroke-opacity": .2,
            "fill-opacity": .2
          }
        },
        {
            field: 'age',
            name: 'Age',
            color: 'black',
            style: {
              "stroke-width": 3,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          },
          {
            field: 'birthday',
            name: 'birthday',
            color: 'black',
            style: {
              "stroke-width": 3,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
      ],
      x = function(d) {
        return d.index;
      }


    return(
        <div className="item">
        <p>Show Analytics</p>
        
        <div className="item__chart">
     

      

        
        </div>
        <div className="item__chart">
            <LineChart
                width= {700}
                height= {300}
                data= {chartData}
                chartSeries= {chartSeries}
                x= {x}
                />
        </div>
        </div>
    )
}  
}
