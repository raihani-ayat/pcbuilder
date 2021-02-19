import React , {useState} from 'react';
import './Custom.css';
import './Slider.css';
import CustomImage from './CustomImage';
import im from '../pics/im.png';

function Custom() {
    const [result, setresult] = useState(false);
    const [groupIntel, setgroupIntel] =useState(false);
    const [groupAMD, setgroupAMD] =useState(false);
    const [groupGE, setgroupGE] =useState(false);
    const [groupMSI, setgroupMSI] =useState(false);
    const [groupcheap, setgroupcheap] =useState(false);
    const [groupmedium, setgroupmedium] =useState(false);
    const [groupexpensive, setgroupexpensive] =useState(false);
    var resultArray =[

        {name:"Intel Archer EZB101",os:"Windows 10 home",proc:"Intel Core i3 -10100 CPU",vid:"GeForce GTX 1660 Ti -6GB",mem:"8GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime Z490-P MB",storg:"500GB WD M.2 NVMe SSD", price:"1029"},
        {name:"Intel Pegasus EZB101",os:"Windows 10 home",proc:"Intel Core i5 -10600KF CPU",vid:"GeForce GTX 1660 Ti -6GB",mem:"16GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime Z490-P MB ",mot:"Asus Prime Z490-P MB",storg:"500GB WD M.2 NVMe SSD", price:"1209"},
        {name:"AMD Crusader EZB102",os:"Windows 10 home",proc:"AMD Ryzen 7 3700X CPU",vid:"GeForce GTX 1660 Ti -6GB",mem:"16GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime B550-PLUS MB",storg:"500GB WD M.2 NVMe SSD", price:"1230"},

        {name:"Intel Berzerker EZB101",os:"Windows 10 home",proc:"Intel Core i7 -10700K CPU",vid:"GeForce GTX 1660 Ti -6GB",mem:"16GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime Z490-P MB",storg:"500GB WD M.2 NVMe SSD", price:"1409"},
        {name:"AMD Gladiator EZB102",os:"Windows 10 home",proc:"AMD Ryzen 7 3700X CPU",vid:"MSI GeForce RTX 3070 -8GB",mem:"16GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime B550-PLUS MB",storg:"500GB WD M.2 NVMe SSD", price:"1799"},

        {name:"Intel Cerberus EZB101",os:"Windows 10 home",proc:"Intel Core i7 -10700K CPU",vid:"MSI GeForce RTX 3070 -8GB",mem:"16GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime Z490-P MB",storg:"500GB WD M.2 NVMe SSD", price:"1849"},
        {name:"AMD Crusader EZB103",os:"Windows 10 home",proc:"AMD Ryzen 9 3900X CPU",vid:"MSI GeForce RTX 3070 -8GB",mem:"16GB DDR4-3200MHz XPG RGB RAM",mot:"Asus Prime B550-PLUS MB",storg:"1TB WD M.2 NVMe SSD", price:"1979"},
        {name:"Intel Sentinel EZB101",os:"Windows 10 home",proc:"Intel Core i9 -10900K CPU",vid:"MSI GeForce RTX 3070 -8GB",mem:"Corsair Vengeance RGB PRO 32GB 3600 MHz",mot:"Asus Prime Z490-P MB",storg:"1TB WD M.2 NVMe SSD", price:"2199"},

    ];

    function Slide(props) {
        return(
        <>
        <h2 className="theh2">{props.name}</h2>
        <CustomImage src={props.src}></CustomImage>
        <div className="result-container">
            <div className="left-part">
             
                <label>Operating System</label>
                <p>Windows 10 Home</p>

                <label>Processor</label>
                <p>{props.cpu}</p>

                <label>Video Card</label>
                <p>{props.vid}</p>
            </div>
            <div className="right-part">
                <label>Memory</label>
                <p>{props.mem}</p>  

                <label>Motherboard</label>
                <p>{props.mot}</p>

                <label>Storage</label>
                <p>{props.ssd}</p> 

            </div>
        </div>

        <h3 className="price-class"> $ {props.price}</h3>
        <button className="customize-btn">Purchase</button>

        </>
        )
    }

    function Slider() {
       let  sliderArray=[
        <Slide src={im} name={resultArray[0].name} price={resultArray[0].price} cpu={resultArray[0].proc} vid={resultArray[0].vid} mem={resultArray[0].mem} mot={resultArray[0].mot} ssd={resultArray[0].storg}/>,
        <Slide src={im} name={resultArray[1].name} price={resultArray[1].price} cpu={resultArray[1].proc} vid={resultArray[1].vid} mem={resultArray[1].mem} mot={resultArray[1].mot} ssd={resultArray[1].storg}/>,
        <Slide src={im} name={resultArray[2].name} price={resultArray[2].price} cpu={resultArray[2].proc} vid={resultArray[2].vid} mem={resultArray[2].mem} mot={resultArray[2].mot} ssd={resultArray[2].storg}/>,
        <Slide src={im} name={resultArray[3].name} price={resultArray[3].price} cpu={resultArray[3].proc} vid={resultArray[3].vid} mem={resultArray[3].mem} mot={resultArray[3].mot} ssd={resultArray[3].storg}/>,
        <Slide src={im} name={resultArray[4].name} price={resultArray[4].price} cpu={resultArray[4].proc} vid={resultArray[4].vid} mem={resultArray[4].mem} mot={resultArray[4].mot} ssd={resultArray[4].storg}/>,
        <Slide src={im} name={resultArray[5].name} price={resultArray[5].price} cpu={resultArray[5].proc} vid={resultArray[5].vid} mem={resultArray[5].mem} mot={resultArray[5].mot} ssd={resultArray[5].storg}/>,
        <Slide src={im} name={resultArray[6].name} price={resultArray[6].price} cpu={resultArray[6].proc} vid={resultArray[6].vid} mem={resultArray[6].mem} mot={resultArray[6].mot} ssd={resultArray[6].storg}/>,
        <Slide src={im} name={resultArray[7].name} price={resultArray[7].price} cpu={resultArray[7].proc} vid={resultArray[7].vid} mem={resultArray[7].mem} mot={resultArray[7].mot} ssd={resultArray[7].storg}/>
       ];
        if(groupGE){
             sliderArray =[
                <Slide src={im} name={resultArray[0].name} price={resultArray[0].price} cpu={resultArray[0].proc} vid={resultArray[0].vid} mem={resultArray[0].mem} mot={resultArray[0].mot} ssd={resultArray[0].storg}/>,
                <Slide src={im} name={resultArray[1].name} price={resultArray[1].price} cpu={resultArray[1].proc} vid={resultArray[1].vid} mem={resultArray[1].mem} mot={resultArray[1].mot} ssd={resultArray[1].storg}/>,
                <Slide src={im} name={resultArray[2].name} price={resultArray[2].price} cpu={resultArray[2].proc} vid={resultArray[2].vid} mem={resultArray[2].mem} mot={resultArray[2].mot} ssd={resultArray[2].storg}/>,
                <Slide src={im} name={resultArray[3].name} price={resultArray[3].price} cpu={resultArray[3].proc} vid={resultArray[3].vid} mem={resultArray[3].mem} mot={resultArray[3].mot} ssd={resultArray[3].storg}/>,
             ];
        }

        if (groupMSI) {
            sliderArray =[
                <Slide src={im} name={resultArray[4].name} price={resultArray[4].price} cpu={resultArray[4].proc} vid={resultArray[4].vid} mem={resultArray[4].mem} mot={resultArray[4].mot} ssd={resultArray[4].storg}/>,
                <Slide src={im} name={resultArray[5].name} price={resultArray[5].price} cpu={resultArray[5].proc} vid={resultArray[5].vid} mem={resultArray[5].mem} mot={resultArray[5].mot} ssd={resultArray[5].storg}/>,
                <Slide src={im} name={resultArray[6].name} price={resultArray[6].price} cpu={resultArray[6].proc} vid={resultArray[6].vid} mem={resultArray[6].mem} mot={resultArray[6].mot} ssd={resultArray[6].storg}/>,
                <Slide src={im} name={resultArray[7].name} price={resultArray[7].price} cpu={resultArray[7].proc} vid={resultArray[7].vid} mem={resultArray[7].mem} mot={resultArray[7].mot} ssd={resultArray[7].storg}/>
       
            ];
        }

        if(groupAMD){
            sliderArray =[
                <Slide src={im} name={resultArray[2].name} price={resultArray[2].price} cpu={resultArray[2].proc} vid={resultArray[2].vid} mem={resultArray[2].mem} mot={resultArray[2].mot} ssd={resultArray[2].storg}/>,
                <Slide src={im} name={resultArray[4].name} price={resultArray[4].price} cpu={resultArray[4].proc} vid={resultArray[4].vid} mem={resultArray[4].mem} mot={resultArray[4].mot} ssd={resultArray[4].storg}/>,
                <Slide src={im} name={resultArray[6].name} price={resultArray[6].price} cpu={resultArray[6].proc} vid={resultArray[6].vid} mem={resultArray[6].mem} mot={resultArray[6].mot} ssd={resultArray[6].storg}/>,
            ];

        }

        if (groupIntel) {
            sliderArray =[
                <Slide src={im} name={resultArray[0].name} price={resultArray[0].price} cpu={resultArray[0].proc} vid={resultArray[0].vid} mem={resultArray[0].mem} mot={resultArray[0].mot} ssd={resultArray[0].storg}/>,
                <Slide src={im} name={resultArray[1].name} price={resultArray[1].price} cpu={resultArray[1].proc} vid={resultArray[1].vid} mem={resultArray[1].mem} mot={resultArray[1].mot} ssd={resultArray[1].storg}/>,
                <Slide src={im} name={resultArray[3].name} price={resultArray[3].price} cpu={resultArray[3].proc} vid={resultArray[3].vid} mem={resultArray[3].mem} mot={resultArray[3].mot} ssd={resultArray[3].storg}/>,
                <Slide src={im} name={resultArray[4].name} price={resultArray[4].price} cpu={resultArray[4].proc} vid={resultArray[4].vid} mem={resultArray[4].mem} mot={resultArray[4].mot} ssd={resultArray[4].storg}/>,
                <Slide src={im} name={resultArray[5].name} price={resultArray[5].price} cpu={resultArray[5].proc} vid={resultArray[5].vid} mem={resultArray[5].mem} mot={resultArray[5].mot} ssd={resultArray[5].storg}/>,
                <Slide src={im} name={resultArray[7].name} price={resultArray[7].price} cpu={resultArray[7].proc} vid={resultArray[7].vid} mem={resultArray[7].mem} mot={resultArray[7].mot} ssd={resultArray[7].storg}/>
       
            ];
        }

        if (groupcheap) {
            sliderArray =[
                <Slide src={im} name={resultArray[0].name} price={resultArray[0].price} cpu={resultArray[0].proc} vid={resultArray[0].vid} mem={resultArray[0].mem} mot={resultArray[0].mot} ssd={resultArray[0].storg}/>,
        <Slide src={im} name={resultArray[1].name} price={resultArray[1].price} cpu={resultArray[1].proc} vid={resultArray[1].vid} mem={resultArray[1].mem} mot={resultArray[1].mot} ssd={resultArray[1].storg}/>,
        <Slide src={im} name={resultArray[2].name} price={resultArray[2].price} cpu={resultArray[2].proc} vid={resultArray[2].vid} mem={resultArray[2].mem} mot={resultArray[2].mot} ssd={resultArray[2].storg}/>,
            ];
            
        }

        if(groupmedium){
            sliderArray =[
                <Slide src={im} name={resultArray[3].name} price={resultArray[3].price} cpu={resultArray[3].proc} vid={resultArray[3].vid} mem={resultArray[3].mem} mot={resultArray[3].mot} ssd={resultArray[3].storg}/>,
                <Slide src={im} name={resultArray[4].name} price={resultArray[4].price} cpu={resultArray[4].proc} vid={resultArray[4].vid} mem={resultArray[4].mem} mot={resultArray[4].mot} ssd={resultArray[4].storg}/>,

            ];
        }

        if(groupexpensive){
            sliderArray=[
                <Slide src={im} name={resultArray[5].name} price={resultArray[5].price} cpu={resultArray[5].proc} vid={resultArray[5].vid} mem={resultArray[5].mem} mot={resultArray[5].mot} ssd={resultArray[5].storg}/>,
            <Slide src={im} name={resultArray[6].name} price={resultArray[6].price} cpu={resultArray[6].proc} vid={resultArray[6].vid} mem={resultArray[6].mem} mot={resultArray[6].mot} ssd={resultArray[6].storg}/>,
            <Slide src={im} name={resultArray[7].name} price={resultArray[7].price} cpu={resultArray[7].proc} vid={resultArray[7].vid} mem={resultArray[7].mem} mot={resultArray[7].mot} ssd={resultArray[7].storg}/>
            ];
        }

        else{
            sliderArray=[
                <Slide src={im} name={resultArray[0].name} price={resultArray[0].price} cpu={resultArray[0].proc} vid={resultArray[0].vid} mem={resultArray[0].mem} mot={resultArray[0].mot} ssd={resultArray[0].storg}/>,
                <Slide src={im} name={resultArray[1].name} price={resultArray[1].price} cpu={resultArray[1].proc} vid={resultArray[1].vid} mem={resultArray[1].mem} mot={resultArray[1].mot} ssd={resultArray[1].storg}/>,
                <Slide src={im} name={resultArray[2].name} price={resultArray[2].price} cpu={resultArray[2].proc} vid={resultArray[2].vid} mem={resultArray[2].mem} mot={resultArray[2].mot} ssd={resultArray[2].storg}/>,
                <Slide src={im} name={resultArray[3].name} price={resultArray[3].price} cpu={resultArray[3].proc} vid={resultArray[3].vid} mem={resultArray[3].mem} mot={resultArray[3].mot} ssd={resultArray[3].storg}/>,
                <Slide src={im} name={resultArray[4].name} price={resultArray[4].price} cpu={resultArray[4].proc} vid={resultArray[4].vid} mem={resultArray[4].mem} mot={resultArray[4].mot} ssd={resultArray[4].storg}/>,
                <Slide src={im} name={resultArray[5].name} price={resultArray[5].price} cpu={resultArray[5].proc} vid={resultArray[5].vid} mem={resultArray[5].mem} mot={resultArray[5].mot} ssd={resultArray[5].storg}/>,
                <Slide src={im} name={resultArray[6].name} price={resultArray[6].price} cpu={resultArray[6].proc} vid={resultArray[6].vid} mem={resultArray[6].mem} mot={resultArray[6].mot} ssd={resultArray[6].storg}/>,
                <Slide src={im} name={resultArray[7].name} price={resultArray[7].price} cpu={resultArray[7].proc} vid={resultArray[7].vid} mem={resultArray[7].mem} mot={resultArray[7].mot} ssd={resultArray[7].storg}/>
               ];

        }
        
        const [x, setx] = useState(0);
        const goLeft = () => {
          x===0 ? setx(-100 *( sliderArray.length -1)) : setx(x+100);
        };
        const goRight = () => {
            (x===-100*(sliderArray.length -1)) ? setx(0) : setx(x-100);
        };
        return (
            <>
                <h1>RESULTS</h1>
                <div className="slider">
                {
                    sliderArray.map((item,index) => {
                        return (
                            <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                                {item}
                            </div>
                        )
                    })
                } 
                <button className="goLeft" onClick={goLeft}>
                    <i class="fas fa-chevron-left"></i>
                    </button>
                <button className="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
                    </button>           
            </div>
    
           </> 
        )
    }

    const [games, setgames] = useState(true);
    const [platform, setplatform] = useState(false);
    const [budget, setbudget] = useState(false);

const goToPlatform = () => {
    setgames(false);
    setplatform(true);
    setbudget(false);
};

const goToBudget = () => {
    setplatform(false);
    setbudget(true);
    setgames(false);
}

const goToGames = () => {
    setgames(true);
    setplatform(false);
    setbudget(false);
}
    function LeftGames() {
        return(
            <div className="custom-left-container">
                        <div className="custom-left-wrapper">
                            <button className="button-like-after" onClick={goToGames}>
                            <h3>The games</h3>
                            <i class="fas fa-gamepad"></i>
                                
                            </button>
    
                            <button className="button-like" onClick={goToPlatform}>
                            <h3>Platform</h3>
                            <i class="fas fa-gamepad"></i>
                                
                            </button>
    
                            <button className="button-like" onClick={goToBudget}>
                            <h3>Budget</h3>
                            <i class="fas fa-gamepad"></i>
                                
                            </button>
                        </div>
                    </div>
        );}

        function LeftPlatform() {
            return(
                <div className="custom-left-container">
                            <div className="custom-left-wrapper">
                                <button className="button-like-after" onClick={goToGames}>
                                <h3>The games</h3>
                                <i class="fas fa-gamepad"></i>
                                    
                                </button>
        
                                <button className="button-like-after" onClick={goToPlatform}>
                                <h3>Platform</h3>
                                <i class="fas fa-gamepad"></i>
                                    
                                </button>
        
                                <button className="button-like" onClick={goToBudget}>
                                <h3>Budget</h3>
                                <i class="fas fa-gamepad"></i>
                                    
                                </button>
                            </div>
                        </div>
            );}
            function LeftBudget() {
                return(
                    <div className="custom-left-container">
                                <div className="custom-left-wrapper">
                                    <button className="button-like-after" onClick={goToGames}>
                                    <h3>The games</h3>
                                    <i class="fas fa-gamepad"></i>
                                        
                                    </button>
            
                                    <button className="button-like-after" onClick={goToPlatform}>
                                    <h3>Platform</h3>
                                    <i class="fas fa-gamepad"></i>
                                        
                                    </button>
            
                                    <button className="button-like-after" onClick={goToBudget}>
                                    <h3>Budget</h3>
                                    <i class="fas fa-gamepad"></i>
                                        
                                    </button>
                                </div>
                            </div>
                );}

    function Games() {
        return (
           <div className="custom-right-container">
                <div className="custom-right-wrapper">    
                   <ul className="game-items-row">
                   <div className="game-image-container">
                        <input type="checkbox" id="mycheckbox1" onInput={() =>setgroupGE(true)} />
                        <label for="mycheckbox1">
                           <img className="game-image" src="images/pubg.png"></img>
                           </label>
                           <input type="checkbox" id="mycheckbox2" onInput={() =>setgroupGE(true)}/>
                            <label for="mycheckbox2">
                           <img className="game-image" src="images/warcraft.png"></img>
                           </label>
                   </div>
               </ul>
               <ul className="game-items-row">
                   <div className="game-image-container">
                   <input type="checkbox" id="mycheckbox3" onInput={() =>setgroupGE(true)} />
                            <label for="mycheckbox3">
                           <img className="game-image" src="images/fort.png"></img>
                            </label>
                           <input type="checkbox" id="mycheckbox4" onInput={() =>setgroupMSI(true)}/>
                            <label for="mycheckbox4">
                           <img className="game-image" src="images/wit.png"></img>
                           </label>
                   </div>
               </ul>
               <ul className="game-items-row">
                   <div className="game-image-container">

                   <input type="checkbox" id="mycheckbox5"onInput={() =>setgroupMSI(true)} />
                            <label for="mycheckbox5">
                           <img className="game-image" src="images/lol.png"></img>

                           </label>

                           <input type="checkbox" id="mycheckbox6" onInput={() =>setgroupMSI(true)} />
                            <label for="mycheckbox6">
                           <img className="game-image" src="images/cod.png"></img>
                            </label>
                           
                   </div>
               </ul>
       
        
       
               <button className="next-button" onClick={goToPlatform}> Next</button>
               </div> 
           </div>     
               )
           };
       
           function Budget() {
            return (
                <div className="custom-right-container">
                     <div className="custom-right-wrapper">    
                     <input type="checkbox" id="mycheckbox7" onInput={() =>setgroupcheap(true)} />
                            <label for="mycheckbox7">
                                <img className="game-image" src="images/cheap.png"></img>
                            </label>
                            <input type="checkbox" id="mycheckbox8" onInput={() =>setgroupmedium(true)} />
                            <label for="mycheckbox8">
                                <img className="game-image" src="images/medium.png"></img>
                            </label>
                            <input type="checkbox" id="mycheckbox9" onInput={() =>setgroupexpensive(true)} />
                            <label for="mycheckbox9">
                                <img className="game-image" src="images/expensive.png"></img>
                            </label>   
                     <button className="next-button" onClick={() => setresult(true)}> Show results</button>
                    </div> 
                </div>
               
            );}
       
           function Platform() {
            return (
                <div className="custom-right-container">
                     <div className="custom-right-wrapper">    
                     <input type="checkbox" id="mycheckbox10" onInput={() =>setgroupIntel(true)} />
                            <label for="mycheckbox10">
                                <img className="platform-image" src="images/intel.png"></img>
                            </label>
                            <input type="checkbox" id="mycheckbox11" onInput={() =>setgroupAMD(true)} />
                            <label for="mycheckbox11">      
                                <img className="platform-image" src="images/amd.png"></img>
                            </label>            
                    <button className="next-button" onClick={goToBudget}> Next</button>
                    </div> 
                </div>
               
            );
               
           }
                return (
                <>
                <h1>OPTIONS</h1>
                <div className="custom-container">
                {games==true && platform==false && budget==false && <><LeftGames />
                <Games /></>}
                {platform==true && budget==false  && games==false && <>
                <LeftPlatform />
                <Platform /></>}
                {budget && games==false && platform==false &&  <> <LeftBudget />
                 <Budget /></>}
            </div>
          {result && <Slider/>}
            
            </>
                )              
    
}

export default Custom
