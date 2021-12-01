import React,{ useState,useEffect } from 'react';
import * as XLSX from "xlsx";
import Charts from '../component/chart';
import BarCharts from '../component/barchart';
import {Link} from 'react-router-dom';
function Home() {
    const [items, setItems] = useState([]);
    const [field, setField] = useState([]);
  
    const readExcel = (file) => {
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
  
          const wb = XLSX.read(bufferArray, { type: "buffer" });
  
          const wsname = wb.SheetNames[0];
          console.log(wsname)
  
          const ws = wb.Sheets[wsname];
            console.log(ws)
          const data = XLSX.utils.sheet_to_json(ws);
  
          resolve(data);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
  
      promise.then((d) => {
        setItems(d);
        console.log(d)
        if(d.length!=0){
            setField(Object.keys(d[0]));
        }
        alert("File upload success");
      });
    };
 
    return (
      <div style={{backgroundColor:""}}>
          {/* <Link to="/view">view</Link> */}

        <div class="container" style={{textAlign:"center",marginTop:"15px",backgroundColor:"rgb(180, 180, 180)"}}>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        </div>

        {(items.length!=0)?
         <div>
              <div class="container" style={{marginTop:"80px"}}>
              <div class="row">
                <div class="col">
                  <h3>No. of students enrolled in each course</h3>
                <Charts field={field} items={items}/>
                 
                </div>
                <div class="col">
                <h3>No. of students joined in each month</h3>

                <BarCharts field={field} items={items}/>
                
                </div>
              </div>
            </div>
        
              <div style={{marginTop:"30px"}}>
                <h3 style={{textAlign:"center",color:"green"}}>Data on sheet</h3>
              <table class="table container">
                <thead>
                      <tr>
                          {field.map((d) => (
                          <>
                          <th scope="col">{d}</th>
                          </>
                          ))}
                      </tr>

              
                </thead>
                <tbody>
                  {items.map((d) => {
                    const x=Object.values(d);
                    return <tr>
                          {x.map(i=>(
                              
                              <td>{i}</td>
                          ))}
                          </tr>

                  })}
                </tbody>
              </table>
              </div>
         </div>
        :
        <>
        <div>
        <h3 style={{textAlign:"center",marginTop:"40px",color:"blue"}}>Upload data to visualize in charts , graphs</h3>
        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/05/featured-data-visualization.png" style={{marginLeft:"19%"}}></img>
          </div></>
        }
        


      </div>
    );
  }


export default Home;