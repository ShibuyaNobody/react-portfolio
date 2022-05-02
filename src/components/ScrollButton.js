import React, {useState} from 'react';
import { BsArrowUp } from "react-icons/bs";
import { Button } from './Styles.js';
import '../App.css'
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <BsArrowUp className='scrollTop' onClick={scrollToTop} 
     style={{display: visible ? 'flex' : 'none', height: '200px'}} />
    </Button>
  );
}
  
export default ScrollButton;