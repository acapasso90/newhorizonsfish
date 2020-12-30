import React, {useState} from "react";
import Blathers from "./Blathers.png";

export default function BugInfoShown(props){
  const unavailable = {
    opacity: "40%",
    textDecoration: "line-through",
  };
  const available = {opacity: "100%",
  textDecoration: "none",
  fontWeight: "bold",
  minHeight: "40px",
  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "#702B2B",
  backgroundColor: "#da8f4d",
  borderRadius: "2px",
  color: "#440f0f",
  }
const bold = {fontSize: "24px",
fontWeight: "bold"}
const [janStyle, setJanStyle] = useState(unavailable);
const [febStyle, setFebStyle] = useState(unavailable);
const [marStyle, setMarStyle] = useState(unavailable);
const [aprStyle, setAprStyle] = useState(unavailable);
const [mayStyle, setMayStyle] = useState(unavailable);
const [junStyle, setJunStyle] = useState(unavailable);
const [julStyle, setJulStyle] = useState(unavailable);
const [augStyle, setAugStyle] = useState(unavailable);
const [sepStyle, setSepStyle] = useState(unavailable);
const [octStyle, setOctStyle] = useState(unavailable);
const [novStyle, setNovStyle] = useState(unavailable);
const [decStyle, setDecStyle] = useState(unavailable);
const english = "name-USen";
 const flick = "price-flick";
  const phrase = "catch-phrase";
 const blathersPhrase = "museum-phrase";
    const northernArray = "month-array-northern";
  const southernArray = "month-array-southern"; 
    const timeArray = "time-array";
    const blathersStyle = {maxWidth: "200px",
    marginTop: "120px",}
    const infoShownStyle = {
      lineHeight: "normal",
      opacity: "100%",
      backgroundColor: "#F5EBC1",
      zIndex: 2,
      textTransform: "capitalize",
      border: "4px",
      borderColor: "#7a3737",
      paddingRight: "50px",
      borderStyle: "solid",
      position: "absolute",      
      top: "-255px",
      left: "-6px",
    };
    const infoHiddenStyle = {
      lineHeight: "0px",
      width: "0px",
      height: "0px",
      opacity: "0%",
      position: "absolute",
    };
      const [style, SetStyle] = useState(infoHiddenStyle);
      const [id, SetId] = useState("inactive");
      let worldLocation = props.location;
      let availability = null;
      let monthAvailable = null;
      let timeAvailable = null;
      let timeDisplayed = props.data.availability.time;
      if (timeDisplayed.length < 1){timeDisplayed = "All Day";}
      if (worldLocation === "Northern") {
        availability = props.data.availability[northernArray];} else {
        availability = props.data.availability[southernArray];}
      let findLocation = props.data.availability.location;
      let rarity = props.data.availability.rarity;
      let realisticImage = props.data.image_uri;
    let bugName = props.data.name[english];
       let image = props.data.icon_uri;
        let priceNormal = props.data.price;
       let  priceflick = props.data[flick];
      let  catchphrase = props.data[phrase];
      let blathers = props.data[blathersPhrase];
        let allDay = props.data.availability.isAllDay;
        if (allDay === true) {
          timeAvailable = true;
        }
        let allYear = props.data.availability.isAllYear;
        if (allYear === true) {monthAvailable = true;    }
   let time = props.data.availability[timeArray];
   let currentTime = new Date();
   let javamonth = currentTime.getMonth();
   let month = ++(javamonth);
   let inputMonth = props.month;
let inputHour = props.hour;
if (inputMonth != null){month = inputMonth}
 let hours = currentTime.getHours();
 if (inputHour != null){hours = inputHour}
if (time.includes(hours)) { timeAvailable = true;}
 if (availability.includes(month)) {monthAvailable = true;}
 
 
 function ShowMonths(){if (allYear === true) {setJanStyle(available), setFebStyle(available), setMarStyle(available), setJunStyle(available), setJulStyle(available)
  setAugStyle(available); setSepStyle(available), setOctStyle(available), setNovStyle(available), setDecStyle(available);} 
  else { if(availability.includes(1)){setJanStyle(available);}
    if(availability.includes(2)){setFebStyle(available);}
    if(availability.includes(3)){setMarStyle(available);}
   if(availability.includes(4)){setAprStyle(available);}
   if(availability.includes(5)){setMayStyle(available);}
   if(availability.includes(6)){setJunStyle(available);}
   if(availability.includes(7)){setJulStyle(available);}
   if(availability.includes(8)){setAugStyle(available);}
   if(availability.includes(9)){setSepStyle(available);}
   if(availability.includes(10)){setOctStyle(available);}
   if(availability.includes(11)){setNovStyle(available);}
   if(availability.includes(12)){setDecStyle(available);}}
      }  


function DisplayBugInfo(){
let active = document.getElementById('active');
if(active){SetStyle(infoHiddenStyle);
  SetId("inactive");}
else {SetStyle(infoShownStyle);
    SetId("active");
    ShowMonths()
}}   

if (monthAvailable === true && timeAvailable === true)
{return(
  <div className="BugInfo">
  <div className="bugImage" onClick={DisplayBugInfo}> 
  <img src={image} alt="bug icon" className="fishPicture"  />        </div>
  <div className="left">
  <div className="bugInfoHidden" style={style} id={id} >
  <div className="hrow">
    <div className="column">
 
<div className="Months">
    <div className="months">
    <h4 className="monthsHeader"> Months Available</h4>
    <div className="months1">
    <p className="Jan"  style={janStyle}>January</p>
      <p className="Feb" style={febStyle} >February</p>
      <p className="Mar"  style={marStyle}>March</p>
      <p className="Apr"  style={aprStyle}>April</p>
      <p className="May"  style={mayStyle} >May</p>
      <p className="Jun"  style={junStyle}>June</p>
      </div>
      <div className="months2">
      <p className="Jul" style={julStyle}>July</p>
      <p className="Aug" style={augStyle} >August</p>
      <p className="Sep" style={sepStyle}>September</p>
      <p className="Oct" style={octStyle}>October</p>
      <p className="Nov" style={novStyle}>November</p>
      <p className="Dec"style={decStyle} >December</p>
      </div>
  </div>
  </div>
</div>
<div className="hrow">
      <div className="column">
<ul>
<li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
<li><div className="polaroidBug"></div></li>
<li className="bugName">{bugName}</li>
<li className="quote">&quot;{catchphrase}&quot;</li>
</ul>   </div>
<div className="right">
<div className="columnRight">
<ul>
<li className="location"><span style={bold}>Location</span> <br />{findLocation}</li>
    <li className="rarity"> <span style={bold}>Rarity </span> <br /> {rarity}</li>
    <li className="price"><span style={bold}>Price</span> <br /> {priceNormal} bells</li>
    <li className="flickPrice"><span style={bold}>Flick Price:</span> <br /> {priceflick} bells</li>
    <li className="timeFound"><span style={bold}>Time Found </span><br /> {timeDisplayed} </li>
</ul>
</div>
</div>
</div>
    <div className="column">
    <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} />
    <div className="quoteTriangle"></div>
    <div className="blathersInfo" >&quot;{blathers}&quot;</div>
    <div className="exitButton"><button onClick={DisplayBugInfo}>Go Back</button></div>
    </div>
    </div>
  </div>
</div>
</div>
)
}
    else {return(
      <div className="BugInfo">
      <div className="bugImage" onClick={DisplayBugInfo}> 
      <img src={image} alt="bug icon" className="fishPicture2"  />        </div>
      <div className="left">
      <div className="bugInfoHidden" style={style} id={id} >
      <div className="hrow">
        <div className="column">

    
<div className="Months">
    <div className="months">
    <h4 className="monthsHeader"> Months Available</h4>
    <div className="months1">
    <p className="Jan"  style={janStyle}>January</p>
      <p className="Feb" style={febStyle} >February</p>
      <p className="Mar"  style={marStyle}>March</p>
      <p className="Apr"  style={aprStyle}>April</p>
      <p className="May"  style={mayStyle} >May</p>
      <p className="Jun"  style={junStyle}>June</p>
      </div>
      <div className="months2">
      <p className="Jul" style={julStyle}>July</p>
      <p className="Aug" style={augStyle} >August</p>
      <p className="Sep" style={sepStyle}>September</p>
      <p className="Oct" style={octStyle}>October</p>
      <p className="Nov" style={novStyle}>November</p>
      <p className="Dec"style={decStyle} >December</p>
      </div>
  </div>
  </div>
    </div>
    <div className="hrow">
          <div className="column">
    <ul>
    <li> <img src={realisticImage} alt="bug realistic" className="fishRealistic" /></li>
    <li><div className="polaroidBug"></div></li>
    <li className="bugName">{bugName}</li>
    <li className="quote">&quot;{catchphrase}&quot;</li>
    </ul>   </div>
    <div className="right">
    <div className="columnRight">
    <ul>
    <li className="location"><span style={bold}>Location</span> <br />{findLocation}</li>
    <li className="rarity"> <span style={bold}>Rarity </span> <br /> {rarity}</li>
    <li className="price"><span style={bold}>Price</span> <br /> {priceNormal} bells</li>
    <li className="flickPrice"><span style={bold}>Flick Price:</span> <br /> {priceflick} bells</li>
    <li className="timeFound"><span style={bold}>Time Found </span><br /> {timeDisplayed} </li>
    </ul>
    </div>
    </div>
    </div>
        <div className="column">
        <img src={Blathers} alt="Blathers" className="Blathers" style={blathersStyle} />
        <div className="quoteTriangle"></div>
        <div className="blathersInfo" >&quot;{blathers}&quot;</div>
        <div className="exitButton"><button onClick={DisplayBugInfo}>Go Back</button></div>
        </div>
        </div>
      </div>
    </div>
    </div>
    )
    }}