import React, {useEffect, useState}  from 'react'
import CardItemCom from './CardItemCom';
import './Dropdownshop.css';
import './comp.css'

function Comp() {
    const [cpu, setCpu] =  useState("No Cpu selected yet");
    const [cooler , setCooler] = useState("No Cooler selected yet");
    const [mot, setMot] =  useState("No motherboard selected yet");
    const [memory, setmemory] = useState("No memory selected yet");
    const [storage, setstorage] = useState("No storage selected yet");
    const [supply, setsupply] = useState("No supply selected yet");
    const [vcard, setvcard] = useState("No video card selected yet");
    const [monitor, setmonitor] = useState("No monitor selected yet");
    const [cases, setcases] = useState("No case selected yet");

    var cpus=[
      {name:'AMD Ryzen 9 5900X' , cores : '12' , cclock :'4.8 GHz' , TDP : '105' , intg :'none' , src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newegg.com%2Famd-ryzen-5-3600%2Fp%2FN82E16819113569&psig=AOvVaw29B9mm4S4tCxs4CnzEkpL2&ust=1611069408830000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCUq9bjpe4CFQAAAAAdAAAAABAD' },
      {name:'AMD Ryzen 5 5600X' , cores : '6' , cclock :'3.7 GHz' , TDP : '65' , intg :'none' , src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newegg.com%2Famd-ryzen-5-3600%2Fp%2FN82E16819113569&psig=AOvVaw29B9mm4S4tCxs4CnzEkpL2&ust=1611069408830000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCUq9bjpe4CFQAAAAAdAAAAABAD' },
      {name:'Intel Core i7 10700K' , cores : '8' , cclock :'3.8 GHz' , TDP : '95' , intg :'none' , src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newegg.com%2Famd-ryzen-5-3600%2Fp%2FN82E16819113569&psig=AOvVaw29B9mm4S4tCxs4CnzEkpL2&ust=1611069408830000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCUq9bjpe4CFQAAAAAdAAAAABAD' },
      {name:'AMD Ryzen 7 5800X' , cores : '8' , cclock :'3.8 GHz' , TDP : '105' , intg :'none' , src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newegg.com%2Famd-ryzen-5-3600%2Fp%2FN82E16819113569&psig=AOvVaw29B9mm4S4tCxs4CnzEkpL2&ust=1611069408830000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCUq9bjpe4CFQAAAAAdAAAAABAD' },
      {name:'Intel Core i9 10900K' , cores : '10' , cclock :'3.7 GHz' , TDP : '95' , intg :'none' , src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newegg.com%2Famd-ryzen-5-3600%2Fp%2FN82E16819113569&psig=AOvVaw29B9mm4S4tCxs4CnzEkpL2&ust=1611069408830000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCUq9bjpe4CFQAAAAAdAAAAABAD' },
      ];

    var cpuco=[
        {name:'Corsair H115i RGB Platinum' , type : 'liquid cooling' , noise :'50dBA' , weight: '830g' , speed :'2200RPM' },
        {name:'Noctua NH-D15' , type : 'fan and heatsink' , noise :'24.6dBA' , weight: '1.32Kg' , speed :'1500RPM' },
        {name:'EVGA CLC 240' , type : 'liquid cooling' , noise :'40dBA' , weight: '820g' , speed :'2400RPM' },
        {name:'Corsair H60' , type : 'liquid cooling' , noise :'28.3dBA' , weight: '600g' , speed :'1700RPM' },
        {name:'Cooler Master Hyper 212 EVO' , type : 'fan and heatsink' , noise :'36dBA' , weight: '590g' , speed :'2000RPM' },
        ];  
     
    var motherb= [
      {name:"Asus ROG Maximus XII Extreme", socket:"LGA 1200 ", size:"Extended ATX", network:"1x 10Gb Marvell ethernet, 1x Intel ethernet, Intel Wi-Fi 6 wireless"},
      {name:"MSI MPG Z490 Gaming Carbon WiFi", socket:"LGA 1200 ", size:"ATX", network:"1x 2.5Gb LAN, Intel Wi-Fi 6 wireless"},
      {name:"MSI MAG B460M Mortar WiFi", socket:"LGA 1200 ", size:"Micro ATX", network:"Realtek 2.5Gb LAN, Intel Wi-Fi 6 wireless"},
      {name:"ASRock B460 Steel Legend", socket:"LGA 1200 ", size:"ATX", network:"Realtek 2.5Gb LAN"},
      {name:"Gigabyte Z390 Aorus Ultra", socket:"LGA 1151 ", size:" ATX", network:" Ethernet, 1.73Gbps 802.11ac wireless"},
    ]  ;
    
    var memos =[
      {name:"TEAM XTREEM ARGB 16GB DDR4-3600MHz C14",speed:"DDR4-3600MHz", cas:"14",voltage:"1.45V",dimm:"2x 8GB"},
      {name:" Corsair Dominator Platinum RGB 32GB DDR4-3200MHz",speed:"DDR4-3200MHz", cas:"16",voltage:" 1.35V",dimm:"2x 16GB"},
      {name:".Skill Trident Z Neo 32GB DDR4-3600MHz ",speed:"DDR4-3600MHz", cas:"18",voltage:"1.35V",dimm:"2x 16GB"},
      {name:"G.Skill Trident Z Royal 16GB DDR4-4000MHz", speed:"DDR4-4000MHz",cas:"15",voltage:"1.5V",dimm:"2x 8GB"},
      {name:"G.Skill Ripjaws V 16GB DDR4-2400MHz", speed:"DR4-2400MHz",cas:"15",voltage:"1.2V",dimm:"2x 8GB"},
    ];

    var storags =[
      {name:"Addlink S70",capacit:"256GB, 512GB, 1TB, 2TB",interface:"M.2 PCIe 3.0 x4 ",read:"3,400 MB/s",write:"2,000 MB/s "},
      {name:"WD Black SN750 1TB",capacit:"1TB",interface:"M.2 PCIe 3.0 x4",read:"3,470 MB/s",write:"3,000 MB/s"},
      {name:"Samsung 970 EVO Plus 500GB",capacit:"500GB",interface:"M.2 PCIe 3.0 x4",read:"3,500 MB/s",write:"3,200 MB/s"},
      {name:"WD Black SN850 1TB NVMe SSD",capacit:"1TB",interface:"PCIe Gen4 x4",read:"7,000 MB/s",write:"5,300 MB/s"},
      {name:"Crucial MX500 1TB",capacit:"1TB",interface:" SATA 6Gbps",read:"560 MB/s",write:"510 MB/s"},
    ];

    var suppl =[
      {name:" Corsair RM850x",capac:"850 W",eff:"80 Plus Gold",modul:"Full"},
      {name:"Cooler Master MasterWatt 750W",capac:"750 W ",eff:"80 Plus Bronze",modul:"Semi"},
      {name:"FSP Dagger 500W",capac:"500 W",eff:"80 Plus Gold",modul:"Full "},
      {name:"Gamdias Astrape P1-750G",capac:"750 W",eff:"80 Plus Gold",modul:"Full"},
      {name:"NZXT E850",capac:"850 W",eff:"80 Plus Gold",modul:"Full"},
    ];

    var vid =[
      {name:"Nvidia GeForce RTX 3080",cdu:"8,704",bc:"1,440 MHz",boc:"1,710 MHz",tflop:"29.76"},
      {name:"AMD Radeon RX 6800 XT",cdu:"4,608",bc:"1,825 MHz",boc:"2,250 MHz",tflop:"20.74"},
      {name:"Nvidia GeForce RTX 3060 Ti",cdu:"4,864",bc:"1,410 MHz",boc:"1,665 MHz",tflop:"16.20"},
      {name:"Nvidia GeForce RTX 3070",cdu:"5,888",bc:"1,500 MHz",boc:"1,725 MHz",tflop:"20.37"},
      {name:"AMD Radeon RX 6900 XT",cdu:"5,120",bc:"1,825 MHz ",boc:"2,250 MHz",tflop:"23.04"},
    ];

    var moni = [
      {name:"LG 27GN950-B",siz:"27-inch",resol:"3840x2160",resp:"1 ms",ref:"144 Hz",weight:"16.9 lbs"},
      {name:"Gigabyte G27Q",siz:"27-inch",resol:"2560x1440",resp:"1 ms",ref:"144 Hz ",weight:"20.9 lbs"},
      {name:"Pixio PX277 Prime",siz:"27-inch",resol:"2560x1440",resp:"1 ms",ref:"165 Hz",weight:"16.3 lbs"},
      {name:"Acer Predator X38 ",siz:"37.5-inch",resol:"3840x1600",resp:"1 ms",ref:"144 Hz",weight:"21 lbs"},
      {name:"ROG STRIX XG17AHPE Portable Monitor",siz:"17.3-inch",resol:"1920x1080",resp:"3 ms",ref:"240 Hz",weight:"2.3 lbs"},
    ];

    var casz =[
      {name:"Cooler Master Cosmos C700P",form:"Full-tower",dim:"25.2 x 12 x 25.6 inches",weig:"48.9 lb",port:"1x Audio/Mic, 1x USB 3.1 Gen 2 Type-C, 4x USB 3.0",drive:"2x 2.5-inch, 8x 3.5-inch"},
      {name:"Corsair Carbide 275R ",form:"Mid-tower",dim:"18.1 x 8.3 x 17.9 inches",weig:"22.4lb",port:"1x Audio/Mic, 2x USB 3.0",drive:"3x 2.5-inch, 2x 3.5-inch"},
      {name:"Phanteks Evolv X",form:"Mid-tower",dim:"20.5 x 9.5 x 20.1 inches",weig:"33lb",port:"2x USB 3.0, 1x USB 3.1 Gen 2 Type-C, 1x headphone, 1x microphone",drive:"6x 2.5-inch, 4x 3.5-inch"},
      {name:"NZXT H210i ",form:"Mini-ITX tower",dim:"8.3 x 13.7 x 14.6 inches",weig:"13.2 lb",port:"",drive:"4x 2.5-inch, 1x 3.5-inch"},
      {name:"Cooler Master Silencio S600",form:"Mid-tower",dim:"18.8 x 8.2 x 18.5 inches",weig:"21.4lb",port:"2x USB 3.2 Gen 1, 1x 3.5mm Headset Jack (Audio+Mic), 1x SD card reader",drive:""},
    ];

    function DropdownItem(props){
      const [selfOpen, setselfOpen] = useState(true); 
      return(
          <>
          
          <div className="menu-item">
             
              <h5>{props.name}</h5>
              <div className="description">
                  <label className="label-class">{props.l1}</label>
                  <p className="p-label">{props.p1}</p>

                  <label className="label-class">{props.l2}</label>
                  <p className="p-label">{props.p2}</p>

                  <label className="label-class">{props.l3}</label>
                  <p className="p-label">{props.p3}</p>

                  <label className="label-class">{props.l4}</label>
                  <p className="p-label">{props.p4}</p>

                  <label className="label-class">{props.l5}</label>
                  <p className="p-label">{props.p5}</p>

                  <label className="label-class">{props.l6}</label>
                  <p className="p-label">{props.p6}</p>
              </div>
              {selfOpen && props.children}
          </div>
          </>
      );
  } 

    function Dropdownshop(props) {
      const [selfOpen, setselfOpen] = useState(true); 
        return (
          <>
         {selfOpen &&
         <div className="dropdown">
         <button className="close-button" onClick={() => setselfOpen(!selfOpen)}>
         <span><i class="fas fa-window-close"></i></span>
         </button>
       {selfOpen && props.children}
     </div>
          
         }
          </>
      )
  }

    return (
      <>
        <div className='cardis'>
      <h1>
          Choose the components
      </h1>
      <div className='cardis__container'>
        <div className='cardis__wrapper'>
          <ul className='cardis__items'>
            <CardItemCom
              src='images/cpu.png'
              text='CPU'>
                <Dropdownshop> 
                    <DropdownItem name={cpus[0].name} l1="TDP" p1={cpus[0].TDP} l2="cores" p2={cpus[0].cores} l3="Base clock" p3={cpus[0].cclock} l4="Integrated" p4={cpus[0].intg} >
                    <button className="choose" onClick={()=>setCpu(cpus[0].name)}>Choose</button>
                    </DropdownItem>

                    <DropdownItem name={cpus[1].name} l1="TDP" p1={cpus[1].TDP} l2="cores" p2={cpus[1].cores} l3="Base clock" p3={cpus[1].cclock} l4="Integrated" p4={cpus[1].intg} >
                    <button className="choose" onClick={()=>setCpu(cpus[1].name)}>Choose</button>
                    </DropdownItem>

                    <DropdownItem name={cpus[2].name} l1="TDP" p1={cpus[2].TDP} l2="cores" p2={cpus[2].cores} l3="Base clock" p3={cpus[2].cclock} l4="Integrated" p4={cpus[2].intg} >
                    <button className="choose" onClick={()=>setCpu(cpus[2].name)}>Choose</button>
                    </DropdownItem> 

                    <DropdownItem name={cpus[3].name} l1="TDP" p1={cpus[3].TDP} l2="cores" p2={cpus[3].cores} l3="Base clock" p3={cpus[3].cclock} l4="Integrated" p4={cpus[3].intg} >
                    <button className="choose" onClick={()=>setCpu(cpus[3].name)}>Choose</button>
                    </DropdownItem>

                    <DropdownItem name={cpus[4].name} l1="TDP" p1={cpus[4].TDP} l2="cores" p2={cpus[4].cores} l3="Base clock" p3={cpus[4].cclock} l4="Integrated" p4={cpus[4].intg} >
                    <button className="choose" onClick={()=>setCpu(cpus[4].name)}>Choose</button>
                    </DropdownItem>
                </Dropdownshop>   
            </CardItemCom>
            
            <CardItemCom
             src='images/fan.png'
              text='CPU Cooler '>
              

              <Dropdownshop >
                <DropdownItem name={cpuco[0].name} l1="type" p1={cpuco[0].type} l2="noise" p2={cpuco[0].noise} l3="Weight" p3={cpuco[0].weight} l4="Speed" p4={cpuco[0].speed} >
                <button className="choose" onClick={()=>setCooler(cpuco[0].name)}>Choose</button>
                </DropdownItem>  
                
                <DropdownItem name={cpuco[1].name} l1="type" p1={cpuco[1].type} l2="noise" p2={cpuco[1].noise} l3="Weight" p3={cpuco[1].weight} l4="Speed" p4={cpuco[1].speed} >
                <button className="choose" onClick={()=>setCooler(cpuco[1].name)}>Choose</button>
                </DropdownItem>

                <DropdownItem name={cpuco[2].name} l1="type" p1={cpuco[2].type} l2="noise" p2={cpuco[2].noise} l3="Weight" p3={cpuco[2].weight} l4="Speed" p4={cpuco[2].speed} >
                <button className="choose" onClick={()=>setCooler(cpuco[2].name)}>Choose</button>
                </DropdownItem>

                <DropdownItem name={cpuco[3].name} l1="type" p1={cpuco[3].type} l2="noise" p2={cpuco[3].noise} l3="Weight" p3={cpuco[3].weight} l4="Speed" p4={cpuco[3].speed} >
                <button className="choose" onClick={()=>setCooler(cpuco[3].name)}>Choose</button>
                </DropdownItem>

                <DropdownItem name={cpuco[4].name} l1="type" p1={cpuco[4].type} l2="noise" p2={cpuco[4].noise} l3="Weight" p3={cpuco[4].weight} l4="Speed" p4={cpuco[4].speed} >
                <button className="choose" onClick={()=>setCooler(cpuco[4].name)}>Choose</button>
                </DropdownItem>
              </Dropdownshop>

              </CardItemCom>

            <CardItemCom
              src='images/motherboard.png'
              text='Motherboard'
            >
              <Dropdownshop>
                <DropdownItem name={motherb[0].name} l1="socket" p1={motherb[0].socket} l2="size" p2={motherb[0].size} l3="network" p3={motherb[0].network} >
                  <button className="choose" onClick={()=>setMot(motherb[0].name)}>Choose</button>
                </DropdownItem>  

                <DropdownItem name={motherb[1].name} l1="socket" p1={motherb[1].socket} l2="size" p2={motherb[1].size} l3="network" p3={motherb[1].network} >
                  <button className="choose" onClick={()=>setMot(motherb[1].name)}>Choose</button>
                </DropdownItem> 

                <DropdownItem name={motherb[2].name} l1="socket" p1={motherb[2].socket} l2="size" p2={motherb[2].size} l3="network" p3={motherb[2].network} >
                  <button className="choose" onClick={()=>setMot(motherb[2].name)}>Choose</button>
                </DropdownItem> 

                <DropdownItem name={motherb[3].name} l1="socket" p1={motherb[3].socket} l2="size" p2={motherb[3].size} l3="network" p3={motherb[3].network} >
                  <button className="choose" onClick={()=>setMot(motherb[3].name)}>Choose</button>
                </DropdownItem>

                <DropdownItem name={motherb[4].name} l1="socket" p1={motherb[4].socket} l2="size" p2={motherb[4].size} l3="network" p3={motherb[4].network} >
                  <button className="choose" onClick={()=>setMot(motherb[4].name)}>Choose</button>
                </DropdownItem>   
              </Dropdownshop>  
              
            </CardItemCom>  
          </ul>
          <ul className='cards__items'>

            
            <CardItemCom
              src='images/memory.png'
              
              text='Memory '
            >
              <Dropdownshop>
                <DropdownItem name={memos[0].name} l1="speed" p1={memos[0].speed} l2="voltage" p2={memos[0].voltage} l3="cas" p3={memos[0].cas} l4="dimmensions" p4={memos[0].dimm} >
                <button className="choose" onClick={()=>setmemory(memos[0].name)}>Choose</button> 
                </DropdownItem>  

                <DropdownItem name={memos[1].name} l1="speed" p1={memos[1].speed} l2="voltage" p2={memos[1].voltage} l3="cas" p3={memos[1].cas} l4="dimmensions" p4={memos[1].dimm} >
                <button className="choose" onClick={()=>setmemory(memos[1].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={memos[2].name} l1="speed" p1={memos[2].speed} l2="voltage" p2={memos[2].voltage} l3="cas" p3={memos[2].cas} l4="dimmensions" p4={memos[2].dimm} >
                <button className="choose" onClick={()=>setmemory(memos[2].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={memos[3].name} l1="speed" p1={memos[3].speed} l2="voltage" p2={memos[3].voltage} l3="cas" p3={memos[3].cas} l4="dimmensions" p4={memos[3].dimm} >
                <button className="choose" onClick={()=>setmemory(memos[3].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={memos[4].name} l1="speed" p1={memos[4].speed} l2="voltage" p2={memos[4].voltage} l3="cas" p3={memos[4].cas} l4="dimmensions" p4={memos[4].dimm} >
                <button className="choose" onClick={()=>setmemory(memos[4].name)}>Choose</button> 
                </DropdownItem>


              </Dropdownshop> 
            </CardItemCom>  

            <CardItemCom
              src='images/storage.png'
              
              text='Storage'
            >
              <Dropdownshop >
                <DropdownItem name={storags[0].name}l1="capacity" p1={storags[0].capacit} l2="interface" p2={storags[0].interface} l3="read" p3={storags[0].read} l4="write" p4={storags[0].write}>
                  <button className="choose" onClick={()=>setstorage(storags[0].name)}>Choose</button> 
                </DropdownItem>  
                
                <DropdownItem name={storags[1].name}l1="capacity" p1={storags[1].capacit} l2="interface" p2={storags[1].interface} l3="read" p3={storags[1].read} l4="write" p4={storags[1].write}>
                  <button className="choose" onClick={()=>setstorage(storags[1].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={storags[2].name}l1="capacity" p1={storags[2].capacit} l2="interface" p2={storags[2].interface} l3="read" p3={storags[2].read} l4="write" p4={storags[2].write}>
                  <button className="choose" onClick={()=>setstorage(storags[2].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={storags[3].name}l1="capacity" p1={storags[3].capacit} l2="interface" p2={storags[3].interface} l3="read" p3={storags[3].read} l4="write" p4={storags[3].write}>
                  <button className="choose" onClick={()=>setstorage(storags[3].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={storags[4].name}l1="capacity" p1={storags[4].capacit} l2="interface" p2={storags[4].interface} l3="read" p3={storags[4].read} l4="write" p4={storags[4].write}>
                  <button className="choose" onClick={()=>setstorage(storags[4].name)}>Choose</button> 
                </DropdownItem>
              </Dropdownshop>
            </CardItemCom>  
            
            <CardItemCom
              src='images/supply.png'
              
              text='Supply'
            >
              <Dropdownshop> 
                <DropdownItem name={suppl[0].name} l1="capacity" p1={suppl[0].capac} l2="effeciency" p2={suppl[0].eff} l3="module" p3={suppl[0].modul} >
                <button className="choose" onClick={()=>setsupply(suppl[0].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={suppl[1].name} l1="capacity" p1={suppl[1].capac} l2="effeciency" p2={suppl[1].eff} l3="module" p3={suppl[1].modul} >
                <button className="choose" onClick={()=>setsupply(suppl[1].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={suppl[2].name} l1="capacity" p1={suppl[2].capac} l2="effeciency" p2={suppl[2].eff} l3="module" p3={suppl[2].modul} >
                <button className="choose" onClick={()=>setsupply(suppl[2].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={suppl[3].name} l1="capacity" p1={suppl[3].capac} l2="effeciency" p2={suppl[3].eff} l3="module" p3={suppl[3].modul} >
                <button className="choose" onClick={()=>setsupply(suppl[3].name)}>Choose</button> 
                </DropdownItem>

                <DropdownItem name={suppl[4].name} l1="capacity" p1={suppl[4].capac} l2="effeciency" p2={suppl[4].eff} l3="module" p3={suppl[4].modul} >
                <button className="choose" onClick={()=>setsupply(suppl[4].name)}>Choose</button> 
                </DropdownItem>
              </Dropdownshop>
            </CardItemCom>  
          </ul>
          <ul className='cards__items'>
          <CardItemCom
              src='images/vd.png'
              
              text='Video Card'
            >
              <Dropdownshop>
                <DropdownItem name={vid[0].name} l1="cdu" p1={vid[0].cdu} l2="bc" p2={vid[0].bc} l3="boc" p3={vid[0].boc} l4="tflop" p4={vid[0].tflop} >
                   <button className="choose" onClick={()=>setvcard(vid[0].name)}>Choose</button> 
                </DropdownItem>  
              

              <DropdownItem name={vid[1].name} l1="cdu" p1={vid[1].cdu} l2="bc" p2={vid[1].bc} l3="boc" p3={vid[1].boc} l4="tflop" p4={vid[1].tflop} >
                   <button className="choose" onClick={()=>setvcard(vid[1].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={vid[2].name} l1="cdu" p1={vid[2].cdu} l2="bc" p2={vid[2].bc} l3="boc" p3={vid[2].boc} l4="tflop" p4={vid[2].tflop} >
                   <button className="choose" onClick={()=>setvcard(vid[2].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={vid[3].name} l1="cdu" p1={vid[3].cdu} l2="bc" p2={vid[3].bc} l3="boc" p3={vid[3].boc} l4="tflop" p4={vid[3].tflop} >
                   <button className="choose" onClick={()=>setvcard(vid[3].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={vid[4].name} l1="cdu" p1={vid[4].cdu} l2="bc" p2={vid[4].bc} l3="boc" p3={vid[4].boc} l4="tflop" p4={vid[4].tflop} >
                   <button className="choose" onClick={()=>setvcard(vid[4].name)}>Choose</button> 
                </DropdownItem>
                </Dropdownshop>  
            </CardItemCom>  
            
            <CardItemCom
              src='images/monitor.png'
              
              text='Monitor'
            >
              <Dropdownshop >
                <DropdownItem name={moni[0].name} l1="size" p1={moni[0].siz} l2="resolution" p2={moni[0].resol} l3="response time" p3={moni[0].resp} l4="reference" p4={moni[0].ref} l5="weight" p5={moni[0].weight}>
                  <button className="choose" onClick={()=>setmonitor(moni[0].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={moni[1].name} l1="size" p1={moni[1].siz} l2="resolution" p2={moni[1].resol} l3="response time" p3={moni[1].resp} l4="reference" p4={moni[1].ref} l5="weight" p5={moni[1].weight}>
                  <button className="choose" onClick={()=>setmonitor(moni[1].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={moni[2].name} l1="size" p1={moni[2].siz} l2="resolution" p2={moni[2].resol} l3="response time" p3={moni[2].resp} l4="reference" p4={moni[2].ref} l5="weight" p5={moni[2].weight}>
                  <button className="choose" onClick={()=>setmonitor(moni[2].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={moni[3].name} l1="size" p1={moni[3].siz} l2="resolution" p2={moni[3].resol} l3="response time" p3={moni[3].resp} l4="reference" p4={moni[3].ref} l5="weight" p5={moni[3].weight}>
                  <button className="choose" onClick={()=>setmonitor(moni[3].name)}>Choose</button> 
                </DropdownItem> 

                <DropdownItem name={moni[4].name} l1="size" p1={moni[4].siz} l2="resolution" p2={moni[4].resol} l3="response time" p3={moni[4].resp} l4="reference" p4={moni[4].ref} l5="weight" p5={moni[4].weight}>
                  <button className="choose" onClick={()=>setmonitor(moni[4].name)}>Choose</button> 
                </DropdownItem>  
              </Dropdownshop>
            </CardItemCom>  

            <CardItemCom
              src='images/desktop.png'
              
              text='Case'
          >
            <Dropdownshop>
              <DropdownItem  name={casz[0].name} l1="form" p1={casz[0].form} l2="dimmention" p2={casz[0].dim} l3="port" p3={casz[0].port} l4="drive" p4={casz[0].drive} l5="weight" p5={casz[0].weig}>
                <button className="choose" onClick={()=>setcases(casz[0].name)}>Choose</button>
              </DropdownItem>  

              <DropdownItem  name={casz[1].name} l1="form" p1={casz[1].form} l2="dimmention" p2={casz[1].dim} l3="port" p3={casz[1].port} l4="drive" p4={casz[1].drive} l5="weight" p5={casz[1].weig}>
                <button className="choose" onClick={()=>setcases(casz[1].name)}>Choose</button>
              </DropdownItem> 

              <DropdownItem  name={casz[2].name} l1="form" p1={casz[2].form} l2="dimmention" p2={casz[2].dim} l3="port" p3={casz[2].port} l4="drive" p4={casz[2].drive} l5="weight" p5={casz[2].weig}>
                <button className="choose" onClick={()=>setcases(casz[2].name)}>Choose</button>
              </DropdownItem> 

              <DropdownItem  name={casz[3].name} l1="form" p1={casz[3].form} l2="dimmention" p2={casz[3].dim} l3="port" p3={casz[3].port} l4="drive" p4={casz[3].drive} l5="weight" p5={casz[3].weig}>
                <button className="choose" onClick={()=>setcases(casz[3].name)}>Choose</button>
              </DropdownItem> 

              <DropdownItem  name={casz[4].name} l1="form" p1={casz[4].form} l2="dimmention" p2={casz[4].dim} l3="port" p3={casz[4].port} l4="drive" p4={casz[4].drive} l5="weight" p5={casz[4].weig}>
                <button className="choose" onClick={()=>setcases(casz[4].name)}>Choose</button>
              </DropdownItem> 
            </Dropdownshop>
            </CardItemCom>  
          </ul>

        </div>
      </div>
    </div>

    <h1 className='Progress__h1'>Your build in progress</h1>
        <div className='Progress__container'>
            <div className='Progress__wrapper' >

                <h4 className='Progress__h4'>Your CPU</h4>
                <p className='Progress__p'>{cpu}</p>

                <h4 className='Progress__h4'>Your CPU Cooler</h4>
                <p className='Progress__p'>{cooler}</p>

                <h4 className='Progress__h4'>Your Motherboard</h4>
                <p className='Progress__p'>{mot}</p>

                <h4 className='Progress__h4'>Your Memory</h4>
                <p className='Progress__p'>{memory}</p>
                
                <h4 className='Progress__h4'>Your Storage</h4>
                <p className='Progress__p'>{storage}</p>

                <h4 className='Progress__h4'>Your Supply</h4>
                <p className='Progress__p'>{supply}</p>

                <h4 className='Progress__h4'>Your Video Card</h4>
                <p className='Progress__p'>{vcard}</p>

                <h4 className='Progress__h4'>Your Monitor</h4>
                <p className='Progress__p'>{monitor}</p>

                <h4 className='Progress__h4'>Your Case</h4>
                <p className='Progress__p'>{cases}</p>

                <div className="space"></div>
                </div>
                <div>
                <button className="button-purchase">Purchase</button>
                </div>
        </div>
        

      <div className="diviser"></div>





    </>
    )
}

export default Comp
