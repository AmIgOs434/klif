import React from "react";
import { Greeting } from "./Greeting1";
import { Gallery } from "./js/Carousel";
import useState from 'react-usestateref'
import { getKomplexpredlinfodesc } from "./https/deviceAPI";
export class LoginControl extends React.Component {

    render() {
      let isLoggedIn = null;
      let carousel;
     const items1 = [
    <div class='carousel_'>
        <div class='carousel_cont'>
          <div class='carousel_width'>
          <img class='carousel_img' src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
          </div>
          <div class='carousel_width color_2'>
           <div class='carousel_title'>
         <strong class='color'>Smas-лифтинг от 3 500₽ | </strong>   Омоложение и подтянутая кожа без операций
           </div>
           <div class='carousel_text color_2'>
           <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
           </div>
           <div class='carousel_text color_2'>
           <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
           </div>
           <div  class='carousel_buttom bgcolor_new color_bg'>
            Записаться 
           </div>
          </div>
        </div>
        </div>,
      ];

      const get3 = async() => {
        // const Komplexpred = await getKomplexpredlinfodesc()
        // let items =[]
        // Komplexpred.map(e=>
        // items.push(
        //     <div class='carousel_'>
        //     <div class='carousel_cont'>
        //         <div class='carousel_width'>
        //         <img class='carousel_img' src={e.img} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
        //         </div>
        //         <div class='carousel_width color_2'>
        //         <div class='carousel_title'>
        //     <strong class='color'>Smas-лифтинг от 3 500₽ | </strong>   {e.name}
        //         </div>
        //         <div class='carousel_text color_2'>
        //         <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
        //         </div>
        //         <div class='carousel_text color_2'>
        //         <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
        //         </div>
        //         <div  class='carousel_buttom bgcolor_new color_bg'>
        //         Записаться 
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        
        // )
        // )
        carousel = <Gallery items1={items1} />;
      }
        const get2 =() => {
      if (isLoggedIn!=null) {
        carousel = <Gallery items1={items1} />;
      } else {
        get3()
        isLoggedIn='normal'
        get2()
      }
    }  
    get2()
      return (
   
          {carousel}
      
      );
    }
  }
  
