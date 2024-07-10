import { useRef, useState ,useEffect} from 'react'
import './App.css'
import pop from "./assets/lvl SFX.wav"
import Q from "./assets/Dsc_Oh.mp3"
import W from "./assets/Cev_H2.mp3"
import E from "./assets/Heater-1.mp3"
import A from "./assets/Heater-2.mp3"
import S from "./assets/Heater-3.mp3"
import D from "./assets/Heater-4_1.mp3"
import Z from "./assets/Heater-6.mp3"
import X from "./assets/Kick_n_Hat.mp3"
import C from "./assets/RP4_KICK_1.mp3"
function App() {
  const[display,setDisplay]=useState('')
  function key(e){
    
     play(e.key)
   }
  useEffect(()=>{
    window.addEventListener('keyup',key)
  
   

  },[])
  function play(p){
    let audio=document.getElementById(p)
    switch(p){
      case 'Q':audio.play();setDisplay(p);break;
      case 'W':audio.play();setDisplay(p);break;
      case 'E':audio.play();setDisplay(p);break;
      case 'A':audio.play();setDisplay(p);break;
      case 'S':audio.play();setDisplay(p);break;
      case 'D':audio.play();setDisplay(p);break;
      case 'Z':audio.play();setDisplay(p);break;
      case 'X':audio.play();setDisplay(p);break;
      case 'C':audio.play();setDisplay(p);break;
    }

  }
  return (
    <div id='container'>
    <div id='drum-machine'>
      <div id='display'>{display}</div>
      <div id='drums'>
        <button id='QQ' className='drum-pad' onClick={()=>play("Q")}><audio className='clip' id='Q' src={Q}/>Q</button>
        <button id='WW' className='drum-pad' onClick={()=>play("W")}><audio className='clip' id='W' src={W}/>W</button>
        <button id='EE' className='drum-pad' onClick={()=>play("E")}><audio className='clip' id='E' src={E}/>E</button>
        <button id='AA' className='drum-pad' onClick={()=>play("A")}><audio className='clip' id='A' src={A}/>A</button>
        <button id='SS' className='drum-pad' onClick={()=>play("S")}><audio className='clip' id='S' src={S}/>S</button>
        <button id='DD' className='drum-pad' onClick={()=>play("D")}><audio className='clip' id='D' src={D}/>D</button>
        <button id='ZZ' className='drum-pad' onClick={()=>play("Z")}><audio className='clip' id='Z' src={Z}/>Z</button>
        <button id='XX' className='drum-pad' onClick={()=>play("X")}><audio className='clip' id='X' src={X}/>X</button>
        <button id='CC' className='drum-pad' onClick={()=>play("C")}><audio className='clip' id='C' src={C}/>C</button>
      </div>

    </div>

    </div>
  )
}

export default App


