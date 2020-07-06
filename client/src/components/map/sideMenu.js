import React from 'react';
import './sideMenu.css';

import Chart from "chart.js";
import classes from "./LineGraph.module.css";

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { height: graphHeight } = myChartRef.canvas;

        Chart.defaults.global.legend.display = false;

        let gradientLine = myChartRef
            .createLinearGradient(0, 0, 0, graphHeight);
        gradientLine.addColorStop(0, "#5082fa");
        gradientLine.addColorStop(1, "#5082fa");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [0, 67, 0],
                        fill: false,
                        borderColor: "#98B9AB"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <div className="side-menu-container">


                <div className="filter-section">

                    <div className="day-section">
                        <p className="day-p">12</p>
                    </div>
                    <div className="month-time-container">
                        <div className="month-section">
                            <p className="month-p">Dec. 2017</p>
                        </div>
                        <div className="time-section">
                            <p className="time-p">18:00 - 19:00</p>
                        </div>

                    </div>
                </div>





                <div className="my-trip-container">
                    See My Trip List
                </div>

                <div className="medium-values-container">
                    <div className="values-box">
                        <p className="value-color">93</p>
                        <p className="small-description">Medium Speed</p>
                    </div>

                    <div className="values-box">
                        <p className="value-color">93</p>
                        <p className="small-description">Distance</p>
                    </div>

                    <div className="values-box">
                        <p className="value-color">123 g/L</p>
                        <p className="small-description">Fuel Consuption</p>
                    </div>
                </div>



                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>

            </div>
        );
    }
}

export default SideMenu;