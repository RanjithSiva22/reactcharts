import React,{ useState,useEffect } from 'react';

import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';

// import { PieChart } from 'react-minimal-pie-chart';



  export default function Charts(props) {
      console.log(props);
    const [head, setHead] = useState([]);
    const [rows, setRows] = useState([]);
    const [pdata, setpdata]= useState([0,0,0])
  
      const data = {
        labels: [
          'CSE',
          'ECE',
          'IT'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: pdata,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]};
    const getValues=(idata)=>{
        let cs=0,it=0,ec=0;
        console.log(idata);
        const ab=idata.map(i=>{
            if(i.course=="CSE")cs++;
            if(i.course=="ECE")ec++;
            if(i.course=="IT")it++;
            return [];
        })
        setpdata(new Array(cs,ec,it))
    }
    // console.log();
    useEffect(()=>{
        if(props.field.length!=0){
            setHead(props.field);
            setRows(props.items);
            getValues(props.items)

        }
    });

    // console.log(rows);
   
    return (
      <div style={{width:"400px",height:"400px"}}>
        <Pie
            data={data}
        />

      </div>
    );
    }

