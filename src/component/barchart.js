import React,{ useState,useEffect } from 'react';

import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

// import { PieChart } from 'react-minimal-pie-chart';


  export default function BarCharts(props) {
const [bdata,setbdata]=useState([0,0,0,0]);

     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly report',
          },
        },
        maintainAspectRatio: false,

      };
      
      const labels = ['March', 'April', 'May', 'June'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: bdata,
            backgroundColor: 'rgba(1, 17, 252, 0.7)',
          }
        ],
      };

      const getValues=(idata)=>{
        let mar=0,ap=0,ma=0,ju=0;
        console.log(idata);
        const ab=idata.map(i=>{
            if(i.Joined=="March")mar++;
            if(i.Joined=="April")ap++;
            if(i.Joined=="May")ma++;
            if(i.Joined=="June")ju++;

            return [];
        })
        console.log(new Array(mar,ap,ma,ju));
        setbdata(new Array(mar,ap,ma,ju))
    }

    useEffect(()=>{
        if(props.field.length!=0){
 
            getValues(props.items)

        }
    });
    return(
        <div style={{height:"600px",width:"800px"}}>
             <Bar  options={options} data={data} />
        </div>

    );

    }