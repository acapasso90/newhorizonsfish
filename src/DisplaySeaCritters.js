import React, {useState, useEffect}  from "react";
import axios from "axios";
import SeaCrittersInfoShown from "./SeaCrittersInfoShown.js";
import Loader from 'react-loader-spinner'


export default function DisplaySeaCritters(){
    const [SeaCrittersInfo, setSeaCrittersInfo] = useState({ready:false});
    const [hemisphere, setHemisphere] = useState("Northern");
    const [loaded, setLoaded] = useState(false);
    const cancelTokenSource = axios.CancelToken.source();
    const [hour, setHour] = useState("");
    const [month, setMonth] = useState("");
    let monthNames =  ["null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];
    let hourNames =  ["Midnight-1AM", "1AM-2AM", "2AM-3AM", "3AM-4AM", "4AM-5AM", "5AM-6AM", "6AM-7AM", "7AM-8AM", "8AM-9AM", "9AM-10AM", "10AM-11AM", "11AM-Noon", "Noon-1PM",
    "1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM", "8PM-9PM", "9PM-10PM", "10PM-11PM", "11PM-Midnight"];
    let formattedHours = hourNames[hour];
    let formattedMonths = monthNames[month];

function showSeaCritters(response){
    setSeaCrittersInfo(response.data)
setLoaded(true);
}

useEffect(() => {
    let mounted = true;
    if (mounted) {axios.get("https://acnhapi.com/v1a/sea/", {
        cancelToken: cancelTokenSource.token
      }).then(showSeaCritters);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, []);


  function setJanuary(){setMonth(1);}
  function setFebruary(){setMonth(2);}
  function setMarch(){setMonth(3);}
  function setApril(){setMonth(4);}
  function setMay(){setMonth(5);}
  function setJune(){setMonth(6);}
  function setJuly(){setMonth(7);}
  function setAugust(){setMonth(8);}
  function setSeptember(){setMonth(9);}
  function setOctober(){setMonth(10);}
  function setNovember(){setMonth(11);}
  function setDecember(){setMonth(12);}

  function set0(){setHour(0);}
  function set1(){setHour(1);}
  function set2(){setHour(2);}
  function set3(){setHour(3);}
  function set4(){setHour(4);}
  function set5(){setHour(5);}
  function set6(){setHour(6);}
  function set7(){setHour(7);}
  function set8(){setHour(8);}
  function set9(){setHour(9);}
  function set10(){setHour(10);}
  function set11(){setHour(11);}
  function set12(){setHour(12);}
  function set13(){setHour(13);}
  function set14(){setHour(14);}
  function set15(){setHour(15);}
  function set16(){setHour(16);}
  function set17(){setHour(17);}
  function set18(){setHour(18);}
  function set19(){setHour(19);}
  function set20(){setHour(20);}
  function set21(){setHour(21);}
  function set22(){setHour(22);}
  function set23(){setHour(23);}         


function setNorthernHemisphere(){ setHemisphere("Northern")}
function setSouthernHemisphere(){ setHemisphere("Southern")}

if (loaded){return(
    <div className="getSeaCrittersInfo">
  <div className="CurrentHemisphere"><h2>Current Hemisphere: {hemisphere} </h2></div>
        <div className="buttons">
            <div className="hrow">
                <div className="currentMonth">Selected Month: {formattedMonths} </div>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select a Month
   </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#" onClick={setJanuary} >January</a>
    <a className="dropdown-item" href="#" onClick={setFebruary}>February</a>
    <a className="dropdown-item" href="#" onClick={setMarch}>March</a>
    <a className="dropdown-item" href="#" onClick={setApril}>April</a>
    <a className="dropdown-item" href="#" onClick={setMay}>May</a>
    <a className="dropdown-item" href="#" onClick={setJune}>June</a>
    <a className="dropdown-item" href="#" onClick={setJuly}>July</a>
    <a className="dropdown-item" href="#" onClick={setAugust}>August</a>
    <a className="dropdown-item" href="#" onClick={setSeptember}>September</a>
    <a className="dropdown-item" href="#" onClick={setOctober}>October</a>
    <a className="dropdown-item" href="#" onClick={setNovember}>November</a>
    <a className="dropdown-item" href="#" onClick={setDecember}>December</a>
  </div>
</div>
<div className="currentTime">Selected Time: {formattedHours} </div>
            <div className="dropdown2">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select an hour
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#" onClick={set0} >MIDNIGHT to 1AM</a>
    <a className="dropdown-item" href="#" onClick={set1}>1AM to 2AM</a>
    <a className="dropdown-item" href="#" onClick={set2}>2AM to 3AM</a>
    <a className="dropdown-item" href="#" onClick={set3}>3AM to 4AM</a>
    <a className="dropdown-item" href="#" onClick={set4}>4AM to 5AM</a>
    <a className="dropdown-item" href="#" onClick={set5}>5AM to 6AM</a>
    <a className="dropdown-item" href="#" onClick={set6}>6AM to 7AM</a>
    <a className="dropdown-item" href="#" onClick={set7}>7AM to 8AM</a>
    <a className="dropdown-item" href="#" onClick={set8}>8AM to 9AM</a>
    <a className="dropdown-item" href="#" onClick={set9}>9AM to 10AM</a>
    <a className="dropdown-item" href="#" onClick={set10}>10AM to 11AM</a>
    <a className="dropdown-item" href="#" onClick={set11}>11AM to NOON</a>
    <a className="dropdown-item" href="#" onClick={set12} >NOON to 1PM</a>
    <a className="dropdown-item" href="#" onClick={set13}>1PM to 2PM</a>
    <a className="dropdown-item" href="#" onClick={set14}>2PM to 3PM</a>
    <a className="dropdown-item" href="#" onClick={set15}>3PM to 4PM</a>
    <a className="dropdown-item" href="#" onClick={set16}>4PM to 5PM</a>
    <a className="dropdown-item" href="#" onClick={set17}>5PM to 6PM</a>
    <a className="dropdown-item" href="#" onClick={set18}>6PM to 7PM</a>
    <a className="dropdown-item" href="#" onClick={set19}>7PM to 8PM</a>
    <a className="dropdown-item" href="#" onClick={set20}>8PM to 9PM</a>
    <a className="dropdown-item" href="#" onClick={set21}>9PM to 10PM</a>
    <a className="dropdown-item" href="#" onClick={set22}>10PM to 11PM</a>
    <a className="dropdown-item" href="#" onClick={set23}>11PM to MIDNIGHT</a>
  </div>
</div>
            <button  onClick={setNorthernHemisphere} className="Northern">Northern</button>
            <button onClick={setSouthernHemisphere} className="Southern">Southern</button>
            </div>
        </div>
        <div className="currentlyAvailable"><h2>Sea Creatures currently available:</h2></div>
        <div className="horizontalRow">
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[0]}  month={month} hour={hour} location={hemisphere}/> 
        <SeaCrittersInfoShown data={SeaCrittersInfo[1]}  month={month} hour={hour} location={hemisphere} /> 
        <SeaCrittersInfoShown data={SeaCrittersInfo[2]}  month={month} hour={hour} location={hemisphere} />
        <SeaCrittersInfoShown data={SeaCrittersInfo[3]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[4]}  month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[5]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[6]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[7]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[8]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[9]}  month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[10]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[11]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[12]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[13]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[14]}  month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[15]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[16]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[17]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[18]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[19]}  month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[20]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[21]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[22]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[23]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[24]}  month={month} hour={hour} location={hemisphere} />
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[25]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[26]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[27]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[28]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[29]}  month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[30]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[31]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[32]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[33]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[34]}  month={month} hour={hour} location={hemisphere}/>
            </div>
            <div className="column">
        <SeaCrittersInfoShown data={SeaCrittersInfo[35]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[36]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[37]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[38]}  month={month} hour={hour} location={hemisphere}/>
        <SeaCrittersInfoShown data={SeaCrittersInfo[39]}  month={month} hour={hour} location={hemisphere}/>
            </div>
        </div>
     </div>
    )
}
else{
    return (  
        <div className="loadingFish">
        <h1>Loading Current Sea Creatures</h1>
        <Loader
            type="Puff"
            color="#08203a"
            height={250}
            width={250}
            timeout={6000}
         />
         </div>)}}

