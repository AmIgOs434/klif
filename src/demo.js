
import '../src/assets/css/style.css'
import React,{Component, useEffect} from 'react';
import useState from 'react-usestateref'
import $ from 'jquery'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../src/qwq.scss'
import Gallery, { Carousel22 } from './ButtonGroups.js'
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import LEXUS_ES from '../src/photo/LEXUS ES.jpg'
import LEXUS_LS from '../src/photo/LEXUS LS.jpg'
import LEXUS_LX_570 from '../src/photo/LEXUS LX 570.jpeg'
import Lexus_RX_350 from '../src/photo/Lexus RX 350.jpg'


import Toyota_Alphard from '../src/photo/Toyota Alphard 2024.jpg'

import camry_toyota from '../src/photo/camry toyota.jpg'


import Tesla_plaid from '../src/photo/Tesla plaid.jpg'
import Tesla_model_X from '../src/photo/Tesla model X.jpg'



import Volkswagen_Jetta from '../src/photo/Volkswagen Jetta.jpg'
import Volkswagen_tiguan_2024 from '../src/photo/Volkswagen tiguan 2024.jpg'
import Volkswagen_Id from '../src/photo/Volkswagen Id.jpg'



import Cadillac_Escalade_2024 from '../src/photo/Cadillac Escalade 2024.jpeg'


import Hendai_elantra from '../src/photo/Hendai elantra.jpg'
import Hendai_Tucson from '../src/photo/Hendai Tucson.jpg'

import Chevrolet_Monza from '../src/photo/Chevrolet Monza.jpeg'

import Zeekr_X from '../src/photo/Zeekr X.jpg'

import Voyah_dream from '../src/photo/Voyah dream.jpg'

import Suzuki_Jamni from '../src/photo/Suzuki Jamni.jpeg'


import camry_toyota1 from '../src/photo/car/camry toyota.jpg'
import Toyota_Sequoia from '../src/photo/car/Toyota Sequoia.jpg'
import Dodge_RAM from '../src/photo/car/Dodge RAM.jpg'
import Ford_raptor from '../src/photo/car/Ford raptor.jpg'
import Geely_Monjaro from '../src/photo/car/Geely Monjaro.jpg'
import Geely_Coolray from '../src/photo/car/Geely Coolray.jpg'
import Hongqi_H5 from '../src/photo/car/Hongqi H5.jpg'
import Hongqi_HS5 from '../src/photo/car/Hongqi HS5.jpg'
import Lixiang_L7 from '../src/photo/car/Lixiang L7.jpg'
import Lixiang_L8 from '../src/photo/car/Lixiang L8.jpg'
import Lixiang_L9 from '../src/photo/car/Lixiang L9.jpg'
import Voyah_Dream from '../src/photo/car/Voyah Dream.jpg'
import Voyah_Free from '../src/photo/car/Voyah Free.jpg'
// import Zeekr_X from '../src/photo/Zeekr X.jpg'
import Zeekr_001 from '../src/photo/car/Zeekr 001.jpg'



import Mercedes_Benz_S500_W223 from '../src/photo/car/Mercedes Benz S500 W223.jpg'
import BMW_M3_M4_competition from '../src/photo/car/BMW M3 M4 competition.jpg'
import Porsche_911_turbo_S from '../src/photo/car/Porsche 911 turbo S.jpg'
import BMW_M8_Competition from '../src/photo/car/BMW M8 Competition.jpg'
import BMW_M5_competition from '../src/photo/car/BMW M5 competition.jpg'
// import Chevrolet_Monza from '../src/photo/car/Chevrolet Monza.jpg'
import Voyah_Dream_PHEV from '../src/photo/car/Voyah Dream 1.5 PHEV.jpg'
import Geely_Coolray_S from '../src/photo/car/Geely Coolray S.jpg'
// import Geely_Monjaro! from '../src/photo/car/Geely Monjaro!.jpg'
import PORSCHE_CAYENNE_COUPE from '../src/photo/car/PORSCHE CAYENNE COUPE.jpg'

import Mercedes_Benz_G63_AMG_2023 from '../src/photo/car/Mercedes Benz G63 AMG 2023.jpg'




import  { EventObject } from 'react-alice-carousel';


import './app.css';
//Install and import the library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import App1 from './ButtonGroups';
import axios from 'axios';
import { Carousel23 } from './ButtonGroups1';
function App() {



  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },

  };
  

  //The carousel items 
  const items1 = [
    <li class='car_padding'>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src={camry_toyota} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota Camry (китайская версия)</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

       

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">  бензин/дизель</span>
          </li>

    

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text"> автомат/механика</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        
           <div class='price'> 
            </div> 
        

     

          <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

        </div>

      </div>

    </div>
  </li>,
                 <li class='car_padding'>
                 <div class="featured-car-card">
   
                   <figure class="card-banner">
                     <img src={Toyota_Alphard} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                       class="w-100"/>
                   </figure>
   
                   <div class="card-content">
   
                     <div class="card-title-wrapper">
                       <h3 class="h3 card-title">
                         <a href="#">Toyota Alphard</a>
                       </h3>
   
                       <data class="year" value="2023">2023</data>
                     </div>
   
                     <ul class="card-list">
   
                    
   
                       <li class="card-list-item">
                         <ion-icon name="flash-outline"></ion-icon>
   
                         <span class="card-item-text">  бензин/дизель</span>
                       </li>
   
                   
   
                       <li class="card-list-item">
                         <ion-icon name="hardware-chip-outline"></ion-icon>
   
                         <span class="card-item-text"> автомат/механика</span>
                       </li>
   
                     </ul>
   
                     <div class="card-price-wrapper">
   
                     
                        <div class='price'> 
                         </div> 
                     
   
                  
   
                       <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
   
                     </div>
   
                   </div>
   
                 </div>
               </li>,
            
                 <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Toyota_Sequoia} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota Sequoia</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

               

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

               

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
              
          
  ];
  const items2 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Tesla_plaid} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Tesla plaid </a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                
                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                 
                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
                <li class='car_padding'>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={Tesla_model_X} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Tesla model X</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
            
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text">  бензин/дизель</span>
                      </li>
  
  
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>,   
         
        

  ];
  const items3 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Volkswagen_Jetta} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Volkswagen Jetta</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                  
                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

               

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
                <li class='car_padding'>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={Volkswagen_tiguan_2024} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Volkswagen tiguan 2024</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
                  
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text">  бензин/дизель</span>
                      </li>
  
  
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>, 
                 <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Volkswagen_Id} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Volkswagen Id</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

          
                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,  



        

  ];
  const items4 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={LEXUS_ES} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">LEXUS ES</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

               
                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                 

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
                <li class='car_padding'>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={LEXUS_LS} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">LEXUS LS</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
                   
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text"> бензин/дизель</span>
                      </li>
  
                
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>,   
                  <li class='car_padding'>
                  <div class="featured-car-card">
    
                    <figure class="card-banner">
                      <img src={LEXUS_LX_570} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                        class="w-100"/>
                    </figure>
    
                    <div class="card-content">
    
                      <div class="card-title-wrapper">
                        <h3 class="h3 card-title">
                          <a href="#">LEXUS LX 570</a>
                        </h3>
    
                        <data class="year" value="2024">2024</data>
                      </div>
    
                      <ul class="card-list">
    
                    
    
                        <li class="card-list-item">
                          <ion-icon name="flash-outline"></ion-icon>
    
                          <span class="card-item-text"> бензин/дизель</span>
                        </li>
    
                       
    
                        <li class="card-list-item">
                          <ion-icon name="hardware-chip-outline"></ion-icon>
    
                          <span class="card-item-text"> автомат/механика</span>
                        </li>
    
                      </ul>
    
                      <div class="card-price-wrapper">
    
                      
                         <div class='price'> 
                          </div> 
                      
    
                   
    
                        <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
    
                      </div>
    
                    </div>
    
                  </div>
                </li>,   
                    <li class='car_padding'>
                    <div class="featured-car-card">
      
                      <figure class="card-banner">
                        <img src={Lexus_RX_350} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                          class="w-100"/>
                      </figure>
      
                      <div class="card-content">
      
                        <div class="card-title-wrapper">
                          <h3 class="h3 card-title">
                            <a href="#">Lexus RX 350</a>
                          </h3>
      
                          <data class="year" value="2024">2024</data>
                        </div>
      
                        <ul class="card-list">
      
                       
      
                          <li class="card-list-item">
                            <ion-icon name="flash-outline"></ion-icon>
      
                            <span class="card-item-text"> бензин/дизель</span>
                          </li>
      
                     
                          <li class="card-list-item">
                            <ion-icon name="hardware-chip-outline"></ion-icon>
      
                            <span class="card-item-text"> автомат/механика</span>
                          </li>
      
                        </ul>
      
                        <div class="card-price-wrapper">
      
                        
                           <div class='price'> 
                            </div> 
                        
      
                     
      
                          <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
      
                        </div>
      
                      </div>
      
                    </div>
                  </li>,   
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];

  const items5 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Cadillac_Escalade_2024} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Cadillac Escalade 2024</a>
                    </h3>

                    <data class="year" value="2023">2024</data>
                  </div>

                  <ul class="card-list">

               

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

               

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
          
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];
  const items6 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Chevrolet_Monza} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Chevrolet Monza</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">


                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                 

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
         
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];

  const items7 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Hendai_elantra} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Hendai elantra</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                   
                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>


                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
                <li class='car_padding'>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={Hendai_Tucson} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Hendai Tucson</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
                  
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text"> бензин/дизель</span>
                      </li>
  
                  
  
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>,   
             
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];
  const items8 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Zeekr_X} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Zeekr X</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
            
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];
  const items9 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Voyah_dream} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Voyah dream</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                   

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

             

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
            
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];
  const items10 = [
    <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Suzuki_Jamni} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Suzuki Jamni</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

             

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>,
            
            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOYA Hilux </a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">5 Человек</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,  
            //   <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="https://avatars.mds.yandex.net/i?id=92735a887da9c8cf711fc8813aedfe285202e214-10350639-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">TOYOTA Fortuner</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>, 

            //    <li class='car_padding'>
            //   <div class="featured-car-card">

            //     <figure class="card-banner">
            //       <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
            //         class="w-100"/>
            //     </figure>

            //     <div class="card-content">

            //       <div class="card-title-wrapper">
            //         <h3 class="h3 card-title">
            //           <a href="#">BMW RX-5</a>
            //         </h3>

            //         <data class="year" value="2023">2023</data>
            //       </div>

            //       <ul class="card-list">

            //         <li class="card-list-item">
            //           <ion-icon name="people-outline"></ion-icon>

            //           <span class="card-item-text">4 Человека</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="flash-outline"></ion-icon>

            //           <span class="card-item-text">  бензин/дизель</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="speedometer-outline"></ion-icon>

            //           <span class="card-item-text">6.1km / 1-литр</span>
            //         </li>

            //         <li class="card-list-item">
            //           <ion-icon name="hardware-chip-outline"></ion-icon>

            //           <span class="card-item-text"> автомат/механика</span>
            //         </li>

            //       </ul>

            //       <div class="card-price-wrapper">

                  
            //          <div class='price'> 
            //           </div> 
                  

               

            //         <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

            //       </div>

            //     </div>

            //   </div>
            // </li>,   

       

  ];

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  const [device,setdevice] = useState()



  const [name,setname] = useState('Не указано')
  const [price,setprice] = useState('Не указано')
  const [brend,setbrend] = useState('Не указано')
  const [phone,setphone,setphoneRef] = useState('none')
  const [mess,setmess] = useState('none')
  const [zayavka,setzayavka] = useState('none')
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
$(function () {
            $('[data-phone-pattern]').on('input blur focus', (e) => {
              setphone(e.target.value)
       
                var el = e.target,
                    clearVal = $(el).data('phoneClear'),
                    pattern = $(el).data('phonePattern'),
                    matrix_def = "+7(___) ___-__-__",
                    matrix = pattern ? pattern : matrix_def,
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = $(el).val().replace(/\D/g, "");
                if (clearVal !== 'false' && e.type === 'blur') {
                    if (val.length < matrix.match(/([\_\d])/g).length) {
                        $(el).val('');
                        return;
                    }
                }
                if (def.length >= val.length) val = def;
                $(el).val(matrix.replace(/./g, function (a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
                }));
            });
        });
 document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
  useEffect(()=>{

    // $("button").click(function(){
    // $("#example").scrollLeft(100);
    // });
  

    $('#one_3').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#featured-car').offset().top);
    });



    $('#one_3').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#featured-car').offset().top);
    });

    $('#one_3').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#featured-car').offset().top);
    });
    $('#one_3_').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#featured-car').offset().top);
    });
    $('#one_4').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#one_4_').offset().top);
    });
    $('#one_5').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#one_5_').offset().top);
    });
    $('#one_6').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#one_6_').offset().top);
    });
    $('#one_7').on('click', function() {
      $([
        document.documentElement, document.body
      ]).scrollTop($('#FQU').offset().top);
    });
    $('#one_1').on('click', function() {
      $(window).scrollTop(0);
    });
    $('#one_2').on('click', function() {
      $(window).scrollTop(0);
    });

    
    $(".mersedes").addClass("posithion");
    $(".cherry").addClass("posithion");
    $(".bmw").addClass("posithion");
    $(".Cadillac").addClass("posithion");
    $(".Chevrolet").addClass("posithion");
    $(".Hendai").addClass("posithion");
    $(".Zeekr").addClass("posithion");
    $(".Voyah").addClass("posithion");
    $(".Suzuki").addClass("posithion");

    $(".on3").addClass("color_none");
    $(".on2").addClass("color_none");
    $(".on4").addClass("color_none");
    $(".on5").addClass("color_none");
    $(".on6").addClass("color_none");
    $(".on7").addClass("color_none");
    $(".on8").addClass("color_none");
    $(".on9").addClass("color_none");
    $(".on10").addClass("color_none");
    $(document).ready(function(){
      $('.accordion-list > li2 > .answer').hide();
        
      $('.accordion-list > li2').click(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer").slideUp();
        } else {
          $(".accordion-list > li2.active .answer").slideUp();
          $(".accordion-list > li2.active").removeClass("active");
          $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
      });
      
    });
  
  },[])
 
  const click = e => {
    $(".mersedes").addClass("posithion");
    $(".toyota").addClass("posithion");
    $(".cherry").addClass("posithion");
    $(".bmw").addClass("posithion");

    $(".Cadillac").addClass("posithion");
    $(".Chevrolet").addClass("posithion");
    $(".Hendai").addClass("posithion");
    $(".Zeekr").addClass("posithion");
    $(".Voyah").addClass("posithion");
    $(".Suzuki").addClass("posithion");

    $(".on2").addClass("color_none");
    $(".on1").addClass("color_none");
    $(".on3").addClass("color_none");
    $(".on4").addClass("color_none");

    $(".on5").addClass("color_none");
    $(".on6").addClass("color_none");
    $(".on7").addClass("color_none");
    $(".on8").addClass("color_none");
    $(".on9").addClass("color_none");
    $(".on10").addClass("color_none");

    const link = e.target.getAttribute('link')
    // $(`.${link}`).removeClass('display_none')
    $(`.${link}`).removeClass('posithion')
    
    const link1 = e.target.getAttribute('link1')

    $(`.${link1}`).removeClass('color_none')
  }
  const togg = ()=> {
    $(".togg_menu").toggleClass("togg_menu_active");
  }

  const click_1 = ()=> {
    $(".overlay").toggleClass("active2");
    $(".navbar").toggleClass("active1");
    $(".nav-toggle-btn").toggleClass("active1");
  }
  const getMessage = async(msg) => {

    await axios.post(`https://api.telegram.org/bot6828167169:AAFiprxkSxicsCi7JOntkr1UNX_KFYWNEeA/sendMessage?chat_id=-1002049438256&parse_mode=html&text=${msg}`)
    
    }
  const order = async()=> {
    console.log(setphoneRef.current.length)
    console.log(setphoneRef.current)

    if(zayavka!='yes'){

    
    if(setphoneRef.current==='none'){
      
      setmess('Введите пожалуйста ваш номер')
      $('.text_01_').addClass('dis_content')
    }else{

      if(setphoneRef.current.length<11){
        setmess('Номер должен состоять из 11 цифр')
        $('.text_01_').addClass('dis_content')
      }else{
        $('.text_01_').removeClass('dis_content')
        const message = 
        `Новый заказ!  ✅%0AБренд/Модель: ${brend}%0AБюджет: ${price}%0AФИО: ${name}%0AТелефон: ${setphoneRef.current} `
        getMessage(message)
        setzayavka('yes')
        $(".f_s_16").addClass("display_none");
        $(".btn_23").addClass("display_cont");
      }

    }



  }
  }
  


    

  return (
    <div className="App">
           <div class='togg_menu'></div>
 


           

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"> </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>


      <h1 class="modal-title fs-9 ta_center" id="exampleModalLabel">Car </h1>
      <h1 class="modal-title fs-5 ta_center" id="exampleModalLabel"> ОБРАТНАЯ СВЯЗЬ </h1>
      <div class='text_01'>Подскажите номер телефона и наш менеджер свяжется с вами в течении часа </div>
    <div class='container_1'>

    <input id="phone" placeholder='+7' type="text" name="" data-phone-pattern = "+7 (___) ___-__-__" class='input_1 demo-3' onChange={ e => setphone(e.target.value)} />
    <div class='text_01 text_01_'>{mess}</div>
    <div type="submit" class="btn btn_2 f_s_16" onClick={order}>Уточнить наличие</div>
    <div type="submit" class="btn btn_2 btn_23" onClick={order}>Заявка создана</div>
    <div class='text_01'>Нажимая на кнопку, Вы подтверждаете согласие на обработку персональных данных. </div>
    </div>
    
    </div>
  </div>
</div>
  <header class="header"  data-header>
    <div class="container">

      <div class="overlay" data-overlay></div>

      <a href="#" class="logo_">
      Laati-Car
      </a>

      {/* <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li>
            <a href="#featured-car" class="navbar-link" data-nav-link>Explore cars</a>
          </li>

          <li>
            <a href="#" class="navbar-link" data-nav-link>About us</a>
          </li>

          <li>
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>

        </ul>
      </nav> */}
      <div class="offcanvas offcanvas-end" data-bs-scroll="true"  tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

  <ul class="navbar-list">

<li  id='one_1' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <button class="navbar-link" >Подобрать машину</button>
</li>

<li>
  <a  id='one_3_' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"class="navbar-link" data-nav-link>Каталог</a>
</li>
<li>
  <a id='one_4' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"class="navbar-link" data-nav-link>Популярный выбор</a>
</li>
{/* <li>
  <a id='one_5' class="navbar-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" data-nav-link>Санкционные</a>
</li> */}
<li>
  <a id='one_6' class="navbar-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" data-nav-link>Этапы оформления</a>
</li>

<li>
  <a id='one_7' class="navbar-link"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" data-nav-link>Вопросы и ответы</a>
</li>

</ul>
</div>
      <div class="header-actions">

        <div class="header-contact">
          <a href="tel:88002345678" class="contact-link">8 996 785 40 60</a>

        <span class="contact-time">Без выходных : 9:00 - 22:00 </span>
        </div>
        
        <a href='#FQU' class="btn btn_21 z_ind_2000" >
        <svg width={'30px'} class='d_act' viewBox="3 3 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <span id="aria-label-txt">FQU</span>
        </a>


        <a href="#" class="btn z_ind_2000 bgcoo" aria-labelledby="aria-label-txt">
          <ion-icon class='d_act' name="car-outline"></ion-icon>
          <span id="aria-label-txt">Каталог</span>
        </a>


        
        <a class="bgcoo_ btn user-btn  z_ind_2000" id='one_2' aria-label="Profile">
          <ion-icon name="person-outline"></ion-icon>
        </a>

        <button class="nav-toggle-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
        </button>

      </div>

    </div>
  </header>





  <main>
    <article>

    
    <section class="section blog pd_0 "id="home">
        <div class="" >
        <h2 class="h2 section-title mr-10_ marr" >Каталог</h2>
       
<div class='d-fle mb_10_ padding'>
<h2 class="h2 section-title mr-10 on1 " onClick={click} link='toyota'  link1='on1'>Lexus</h2>
<h2 class="h2 section-title mr-10 on2 "onClick={click} link='bmw' link1='on2'>Toyota</h2>
          <h2 class="h2 section-title mr-10 on3"onClick={click} link='mersedes' link1='on3'>Tesla</h2>

          <h2 class="h2 section-title mr-10 on4"onClick={click}  link='cherry' link1='on4'>Volkswagen</h2>
          <h2 class="h2 section-title mr-10 on5 " onClick={click} link='Cadillac'  link1='on5'>Cadillac</h2>
<h2 class="h2 section-title mr-10 on6 "onClick={click} link='Chevrolet' link1='on6'>Chevrolet</h2>
          <h2 class="h2 section-title mr-10 on7"onClick={click} link='Hendai' link1='on7'>Hendai</h2>

          <h2 class="h2 section-title mr-10 on8"onClick={click}  link='Zeekr' link1='on8'>Zeekr</h2>

          <h2 class="h2 section-title mr-10 on9"onClick={click} link='Voyah' link1='on9'>Voyah</h2>

          <h2 class="h2 section-title mr-10 on10"onClick={click}  link='Suzuki' link1='on10'>Suzuki</h2>
</div>
          

          {/* <ul class="blog-list has-scrollbar bmw" link='bmw' >

          <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  <div class='price'> 
                      </div> 

      

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  <div class='price'> 
                      </div> 

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  <div class='price'> 
                      </div> 

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge">Company</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">New rules for handling our cars</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2022</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

          </ul>
          <ul class="blog-list has-scrollbar mersedes" link='mersedes'>

<li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">MERSEDES </a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 Человека</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">  бензин/дизель</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-литр</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text"> автомат/механика</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 


          <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Уточнить наличие</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 Человека</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-литр</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text"> автомат/механика</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 
      

          <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-литр</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Auto автомат/механикаmatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 

       

          <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Уточнить наличие</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 


          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="blog-card">

      <figure class="card-banner">

        <a href="#">
          <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
            class="w-100"/>
        </a>

        <a href="#" class="btn card-badge">Company</a>

      </figure>

      <div class="card-content">

        <h3 class="h3 card-title">
          <a href="#">New rules for handling our cars</a>
        </h3>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2022-01-14">January 14, 2022</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="114">114</data>
          </div>

        </div>

      </div>

    </div>
  </li>

</ul>
<ul class="blog-list has-scrollbar toyota" link='toyota'>

<li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 


          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 


          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 


          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 

          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="blog-card">

      <figure class="card-banner">

        <a href="#">
          <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
            class="w-100"/>
        </a>

        <a href="#" class="btn card-badge">Company</a>

      </figure>

      <div class="card-content">

        <h3 class="h3 card-title">
          <a href="#">New rules for handling our cars</a>
        </h3>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2022-01-14">January 14, 2022</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="114">114</data>
          </div>

        </div>

      </div>

    </div>
  </li>

</ul>
<ul class="blog-list has-scrollbar cherry" link='cherry'>

<li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">CHERRY</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        <div class='price'> 
                      </div> 


          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

          <p class="card-price">
            <strong> </strong> / month
          </p>

         

          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

          <p class="card-price">
            <strong> </strong> / month
          </p>


          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">Toyota RAV4</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 People</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">Hybrid</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-litre</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text">Automatic</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

          <p class="card-price">
            <strong> </strong> / month
          </p>

       

          <button class="btn">Rent now</button>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="blog-card">

      <figure class="card-banner">

        <a href="#">
          <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
            class="w-100"/>
        </a>

        <a href="#" class="btn card-badge">Company</a>

      </figure>

      <div class="card-content">

        <h3 class="h3 card-title">
          <a href="#">New rules for handling our cars</a>
        </h3>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2022-01-14">January 14, 2022</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="114">114</data>
          </div>

        </div>

      </div>

    </div>
  </li>

</ul> */}

{/* <div class='bmw' link='bmw'>
<Carousel responsive={responsive}  >
      
    
   
     
      <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>
       
            <li class='car_padding' id='iiii'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

</Carousel>;
</div>
<div class='mersedes' link='mersedes'>
<Carousel responsive={responsive}  >
      
    
   
     
      <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class='car_padding'>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">BMW RX-5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 Человека</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>
       


</Carousel>;
</div> */}
      

      <div class='bmw marr' link='bmw'>
   <Carousel22 items1={items1} />
   </div>

   <div class='mersedes marr' link='mersedes'>
   <Carousel22 items1={items2} />
   </div>

   <div class='cherry marr' link='cherry'>
   <Carousel22 items1={items3} />
   </div>

   <div class='toyota marr' link='toyota'>
   <Carousel22 items1={items4} />
   </div>

   <div class='Cadillac marr' link='Cadillac'>
   <Carousel23 items1={items5} />
   </div>

   <div class='Chevrolet marr' link='Chevrolet'>
   <Carousel23 items1={items6} />
   </div>

   <div class='Hendai marr' link='Hendai'>
   <Carousel22 items1={items7} />
   </div>

   <div class='Zeekr marr' link='Zeekr'>
   <Carousel23 items1={items8} />
   </div>

   <div class='Voyah marr' link='Voyah'>
   <Carousel23 items1={items9} />
   </div>

   <div class='Suzuki marr' link='Suzuki'>
   <Carousel23 items1={items10} />
   </div>
      {/* <div class='bmw' link='bmw'>
<AliceCarousel 
disableDotsControls
       slideToIndex ={3}
        items={items1}
        responsive={responsive}
      />

</div>

<div class='mersedes' link='mersedes'>
<AliceCarousel  
disableDotsControls
       slideToIndex ={3}
        items={items2}
        responsive={responsive}
        infinite={true}
        keyboardNavigation={true}
        controlsStrategy="responsive"
        renderPrevButton={() => {
          return <p className="p-4 absolute left-0 top-0">Previous Item</p>
        }}
        renderNextButton={() => {
          return <p className="p-4 absolute right-0 top-0">Next Item</p>
        }}
      />

</div>

<div class='cherry' link='cherry'>
<AliceCarousel 
disableDotsControls
       slideToIndex ={3}
        items={items3}
        responsive={responsive}
      />

</div>

<div class='toyota' link='toyota'>
<AliceCarousel 
disableDotsControls
       slideToIndex ={3}
        items={items4}
        responsive={responsive}
      />

</div> */}

</div>
    
   
      </section>
      <section class="section hero_1 pb_10" id="featured-car">
        <div class="container">

          <div class="hero-content">
            <h2 class="h1 hero-title">ЗАКАЖИТЕ МАШИНУ ИЗ ЗАРУБЕЖА У НАС ПО ДОСТУПНОЙ ЦЕНЕ</h2>

            <p class="hero-text">
            Заказывая у нас свою первую машину мы позволяем сэкономить клиенту от 200 тыс. до 1.5 млн. рублей.<br/> Если вы хотите приобрести авто, которого нет на сайте, позвоните нам, мы найдем любую марку автомобиля под ваш запрос, по лучшей цене!
            </p>
          </div>

          {/* <div class="hero-banner"></div> */}

          <form action="" class="hero-form">

            <div class="input-wrapper">
              <label for="input-1" class="input-label mt-5_">Бренд , модель</label>

              <input type="text" name="car-model" id="input-1" class="input-field"
                placeholder="Какую марку или модель машины вы хотите?"  onChange={ e => setbrend(e.target.value)}/>
            </div>

            <div class="input-wrapper">
              <label for="input-2" class="input-label mt-5_">Бюджет</label>

              <input type="text" name="monthly-pay" id="input-2" class="input-field" onChange={ e => setprice(e.target.value)}placeholder="На какой бюджет вы рассчитываете?"/>
            </div>

            <div class="input-wrapper">
              <label for="input-3" class="input-label mt-5_">Ваше имя</label>

              <input type="text" name="year" id="input-3" class="input-field"onChange={ e => setname(e.target.value)} placeholder="Как мы можем к вам обращаться ?"/>
            </div>


<div type="submit" class="btn bgcoo" onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal">Уточнить наличие</div>
        

<a href='#featured-car' type="submit" class="btn btn_1">Каталог</a>
     
        
          </form>

        </div>




<div class='container'>

<div class="accordion accordion-flush" id="accordionFlushExample1">
<div class="accordion-item accordion-item_3">




<div class='d-flex_'>
<div class='preim mr-20 color_0_'>
  <div class='preim_title color_0'>
    {`130 +`}
  </div>
  <div class='preim_desk '>
    Машин на любой вкус и цвет
  </div>
</div>

<div class='preim color_0_ mr-20'>
  <div class='preim_title color_0'>
    5 лет 
  </div>

  <p class="card-text preim_desk">
  Занимаемся экспортом машин 

                </p>
</div>



<div class='preim mr-20 color_0_'>
  <div class='preim_title color_0'>
    От 3 дней
  </div>
  <div class='preim_desk '>
    Бесплатная доставка по России
  </div>
</div>

<div class='preim color_0_'>
  <div class='preim_title color_0'>
    До 1.5 млн. 
  </div>

  <p class="card-text preim_desk">
  Выгода при покупке в нашем автосалоне
                </p>
</div>


</div>
{/* <div class="get-start-card get-start-card_1 fs_22" >
<h3  class="accordion-button collapsed card-title fs_22" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne6">Наши машины</h3>
  <div id="flush-collapseOne6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample6">
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
  </div>
</div> */}

<div class="get-start-card get-start-card_1 fs_22 info_10" >
<h3  class="accordion-button collapsed card-title fs_22 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">История компании</h3>
    <div id="flush-collapseOne1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
      <div class="accordion-body">Наша компания уникальна тем, что начала работу до событий в стране, а именно до СВО, но мы занимались в основном б/у авто из Китая <br/> <br/>
      После того, как автомобильный рынок пошатнулся в России, имея приобретённый опыт мы начали работать полноценно! Одновременно мы работаем на качество, чтобы клиент был рад и всегда мог надеется на нас! </div>
    </div>
</div>

<div class="get-start-card get-start-card_1 fs_22 info_10" >
<h3  class="accordion-button collapsed card-title fs_22 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne11" aria-expanded="false" aria-controls="flush-collapseOne11">Рынок автомобилей сейчас</h3>
   <div id="flush-collapseOne11" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
      <div class="accordion-body"> В мире насчитывается около десятки тысяч автопроизводителей и если вы хотите приобрести автомобиль, который не размещён на нашем сайте, то мы с удовольствием привезем, Растаможим и оформим автомобиль.  </div>
    </div>
</div>



</div>
</div>
</div>
      </section>
  
    

  
      {/* <section class="section blog" id="cherry">
        <div class="container">

          <h2 class="h2 section-title" >CHERRY</h2>

          <ul class="blog-list has-scrollbar">

          <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>

                   

                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>

                 

                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge">Company</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">New rules for handling our cars</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2022</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <div class='container'>

<div class="accordion accordion-flush" id="accordionFlushExample3">
<div class="accordion-item accordion-item_3">
<div class="get-start-card">

<div class="card-icon icon-3">
<ion-icon name="person-outline"></ion-icon>
</div>

<h3 class="card-title">О компании</h3>

  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne1">
     Как происходит регистрация и доставка автомобиля ? 
    </button>
  </h2>
  <div id="flush-collapseOne3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample3">
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
  </div>
</div>

</div>
</div>
</div>
      <section class="section blog" id="toyota">
        <div class="container">

          <h2 class="h2 section-title" >TOYOTA</h2>

          <ul class="blog-list has-scrollbar">

          <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge">Company</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">New rules for handling our cars</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2022</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <div class='container'>

<div class="accordion accordion-flush" id="accordionFlushExample4">
<div class="accordion-item accordion-item_3">
<div class="get-start-card">

<div class="card-icon icon-3">
<ion-icon name="person-outline"></ion-icon>
</div>

<h3 class="card-title">О компании</h3>

  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne1">
     Как происходит регистрация и доставка автомобиля ? 
    </button>
  </h2>
  <div id="flush-collapseOne4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample4">
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
  </div>
</div>

</div>
</div>
</div>
      <section class="section blog" >
        <div class="container">

          <h2 class="h2 section-title" >MERSEDES</h2>

          <ul class="blog-list has-scrollbar" >

          <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>

                

                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>

                 

                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="./assets/images/car-1.jpg" alt="Toyota RAV4 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Toyota RAV4</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong> </strong> / month
                    </p>


                    <button class="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src="./assets/images/blog-5.jpg" alt="New rules for handling our cars" loading="lazy"
                      class="w-100"/>
                  </a>

                  <a href="#" class="btn card-badge">Company</a>

                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">
                    <a href="#">New rules for handling our cars</a>
                  </h3>

                  <div class="card-meta">

                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-01-14">January 14, 2022</time>
                    </div>

                    <div class="comments">
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

                      <data value="114">114</data>
                    </div>

                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section> */}

      <section class="section featured-car pb_0 pt_62" id='one_4_' >
      <div class="container" >

<div class="title-wrapper">
  <h2 class="h2 section-title" id="featured-car">Популярный выбор</h2>

  <a href="#home" class="featured-car-link">
    <span>Подобрать модель</span>

    <ion-icon name="arrow-forward-outline"></ion-icon>
  </a>
</div>

<ul class="featured-car-list">
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Mercedes_Benz_G63_AMG_2023} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Mercedes Benz G63 AMG 2023</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>

<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={PORSCHE_CAYENNE_COUPE} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Porsche Cayenne Coupe</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Geely_Coolray_S} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Geely Coolray S</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Voyah_Dream_PHEV} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Voyah Dream PHEV</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={BMW_M5_competition} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">BMW M5 competition</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={BMW_M8_Competition} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">BMW M8 Competition</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Porsche_911_turbo_S} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Porsche 911 turbo S</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={BMW_M3_M4_competition} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">BMW M3 - M4 competition</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Mercedes_Benz_S500_W223} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Mercedes Benz S500 W223</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
<li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={camry_toyota1} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Toyota Camry</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                  
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                    
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
</li>
             <li class=''>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={Toyota_Sequoia} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Toyota Sequoia</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
               
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text">  бензин/дизель</span>
                      </li>
  
              
  
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>
              <li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Geely_Monjaro} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Geely Monjaro</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
                 
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
              
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
             </li>
                  <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Zeekr_X} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Zeekr X</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

             

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>


                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>
              
            <li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Zeekr_001} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Zeekr 001</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
              
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
                 
 
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
             </li>
  <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Lixiang_L9} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Lixiang L9</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

         

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

          

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>
              
   
             <li class=''>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={Lixiang_L8} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Lixiang L8</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
               
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text">  бензин/дизель</span>
                      </li>
  
               
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>

  <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Lixiang_L7} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Lixiang L7</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

              

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

             

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li> 
         
  

  <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Voyah_Dream} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Voyah Dream</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

             

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

             

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>
              
            <li class=''>
               <div class="featured-car-card">
 
                 <figure class="card-banner">
                   <img src={Voyah_Free} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                     class="w-100"/>
                 </figure>
 
                 <div class="card-content">
 
                   <div class="card-title-wrapper">
                     <h3 class="h3 card-title">
                       <a href="#">Voyah Free</a>
                     </h3>
 
                     <data class="year" value="2023">2023</data>
                   </div>
 
                   <ul class="card-list">
 
 
                     <li class="card-list-item">
                       <ion-icon name="flash-outline"></ion-icon>
 
                       <span class="card-item-text">  бензин/дизель</span>
                     </li>
 
            
                     <li class="card-list-item">
                       <ion-icon name="hardware-chip-outline"></ion-icon>
 
                       <span class="card-item-text"> автомат/механика</span>
                     </li>
 
                   </ul>
 
                   <div class="card-price-wrapper">
 
                   
                      <div class='price'> 
                       </div> 
                   
 
                
 
                     <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
 
                   </div>
 
                 </div>
 
               </div>
             </li>
             <li class=''>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src={Hongqi_H5} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Hongqi H5</a>
                      </h3>
  
                      <data class="year" value="2023">2023</data>
                    </div>
  
                    <ul class="card-list">
  
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text">  бензин/дизель</span>
                      </li>
  
              
  
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>

  <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Hongqi_HS5} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Hongqi HS5</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

              
                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

              
                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li> 
       


  <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Ford_raptor} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Ford raptor</a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

           

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>


                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li> 
            <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={Dodge_RAM} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Dodge RAM</a>
                    </h3>

                    <data class="year" value="2024">2024</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

             

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li> 
</ul>

</div>

{/* 
<section class="section featured-car pb_0" id='one_5_' >

        <div class="container" >

          <div class="title-wrapper pt_65">
            <h2 class="h2 section-title " id="featured-car">Санкционные</h2>

            <a href="#" class="featured-car-link">
              <span >Подобрать модель</span>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          </div>

          <ul class="featured-car-list">

          <li class=''>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src="https://avatars.mds.yandex.net/i?id=a39d5b6b95cdae4ff519dfd46a10de301f33cd8c-9858428-images-thumbs&n=13" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">TOYOYA Hilux </a>
                    </h3>

                    <data class="year" value="2023">2023</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">5 Человек</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">  бензин/дизель</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">6.1km / 1-литр</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text"> автомат/механика</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                  
                     <div class='price'> 
                      </div> 
                  

               

                    <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

                  </div>

                </div>

              </div>
            </li>

            <li class=''>
    <div class="featured-car-card">

      <figure class="card-banner">
        <img src="https://foto.carexpert.ru/img/foto1680/bmw/bmwix052.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
          class="w-100"/>
      </figure>

      <div class="card-content">

        <div class="card-title-wrapper">
          <h3 class="h3 card-title">
            <a href="#">BMW iX M60.</a>
          </h3>

          <data class="year" value="2023">2023</data>
        </div>

        <ul class="card-list">

          <li class="card-list-item">
            <ion-icon name="people-outline"></ion-icon>

            <span class="card-item-text">4 Человека</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="flash-outline"></ion-icon>

            <span class="card-item-text">  бензин/дизель</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="speedometer-outline"></ion-icon>

            <span class="card-item-text">6.1km / 1-литр</span>
          </li>

          <li class="card-list-item">
            <ion-icon name="hardware-chip-outline"></ion-icon>

            <span class="card-item-text"> автомат/механика</span>
          </li>

        </ul>

        <div class="card-price-wrapper">

        
           <div class='price'> 
            </div> 
        

     

          <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>

        </div>

      </div>

    </div>
  </li>

  <li class=''>
                <div class="featured-car-card">
  
                  <figure class="card-banner">
                    <img src="https://autogoda.ru/premiya/2022/3817598.jpg" alt="BMW RX-5 2023" loading="lazy" width="440" height="300"
                      class="w-100"/>
                  </figure>
  
                  <div class="card-content">
  
                    <div class="card-title-wrapper">
                      <h3 class="h3 card-title">
                        <a href="#">Land Cruiser Prado</a>
                      </h3>
  
                      <data class="year" value="2023">2022</data>
                    </div>
  
                    <ul class="card-list">
  
                      <li class="card-list-item">
                        <ion-icon name="people-outline"></ion-icon>
  
                        <span class="card-item-text">8 Человек</span>
                      </li>
  
                      <li class="card-list-item">
                        <ion-icon name="flash-outline"></ion-icon>
  
                        <span class="card-item-text"> бензин/дизель</span>
                      </li>
  
                      <li class="card-list-item">
                        <ion-icon name="speedometer-outline"></ion-icon>
  
                        <span class="card-item-text">6.1km / 1-литр</span>
                      </li>
  
                      <li class="card-list-item">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
  
                        <span class="card-item-text"> автомат/механика</span>
                      </li>
  
                    </ul>
  
                    <div class="card-price-wrapper">
  
                    
                       <div class='price'> 
                        </div> 
                    
  
                 
  
                      <button onClick={()=>togg()} data-bs-toggle="modal" data-bs-target="#exampleModal"class="btn">Уточнить наличие</button>
  
                    </div>
  
                  </div>
  
                </div>
              </li>


          </ul>

        </div>
        </section> */}


      </section>
      <h2 class="h2 section-title container mb_20 pt_65" id="one_6_">Этапы покупки</h2>

           <li class='container'>
              <div class="get-start-card">

                <div class="ssvg">
                <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number10</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM17.757 22.536h-2.469v-9.305c-0.901 0.841-1.964 1.463-3.188 1.867v-2.234c0.644-0.211 1.344-0.612 2.099-1.202s1.273-1.278 1.555-2.064h2.003v12.938z"></path> </g></svg>
                </div>

                <h3 class="card-title">Шаг 1</h3>

                <p class="card-text">
                В первую очередь Вы должны убедиться, что компании Laati можно довериться и после чего начать процесс покупки авто! 
                </p>

              </div>
            </li>
            <li class='container'>
              <div class="get-start-card">

              <div class="ssvg">
              <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number11</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM20.342 20.426v2.297h-8.656c0.093-0.867 0.374-1.688 0.843-2.465 0.468-0.776 1.393-1.807 2.774-3.090 1.111-1.037 1.793-1.74 2.045-2.109 0.34-0.51 0.51-1.014 0.51-1.512 0-0.551-0.147-0.975-0.441-1.271s-0.7-0.444-1.219-0.444c-0.512 0-0.92 0.156-1.223 0.467s-0.478 0.827-0.523 1.549l-2.469-0.247c0.146-1.359 0.605-2.335 1.378-2.928s1.739-0.888 2.898-0.888c1.27 0 2.268 0.343 2.994 1.028s1.089 1.538 1.089 2.557c0 0.58-0.104 1.132-0.312 1.656s-0.537 1.074-0.988 1.647c-0.299 0.38-0.839 0.929-1.621 1.644-0.781 0.714-1.276 1.188-1.484 1.422s-0.376 0.463-0.505 0.686h4.91z"></path> </g></svg>
                </div>

                <h3 class="card-title">Шаг 2</h3>

                <p class="card-text">
                После того, как Вы выбрали авто, происходит полная или частичная оплата авто на ИП, в зависимости с какой Страны был приобретен автомобиль. 
                </p>

              </div>
            </li>
            <li class='container'>
              <div class="get-start-card">

              <div class="ssvg">
              <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number12</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.995 21.357c-0.826 0.797-1.854 1.194-3.086 1.194-1.166 0-2.133-0.335-2.9-1.005-0.769-0.67-1.214-1.545-1.337-2.627l2.391-0.289c0.076 0.607 0.281 1.071 0.616 1.393 0.333 0.321 0.738 0.482 1.213 0.482 0.51 0 0.939-0.194 1.289-0.582 0.348-0.387 0.522-0.909 0.522-1.566 0-0.621-0.167-1.115-0.501-1.479-0.335-0.364-0.742-0.545-1.223-0.545-0.317 0-0.695 0.062-1.136 0.184l0.272-1.997c0.668 0.018 1.178-0.127 1.529-0.434s0.526-0.715 0.526-1.224c0-0.433-0.128-0.777-0.385-1.035-0.258-0.257-0.599-0.386-1.025-0.386-0.421 0-0.779 0.146-1.077 0.438s-0.479 0.72-0.544 1.281l-2.281-0.386c0.158-0.782 0.397-1.407 0.717-1.875s0.765-0.835 1.336-1.103 1.212-0.401 1.921-0.401c1.213 0 2.186 0.387 2.918 1.161 0.604 0.633 0.905 1.348 0.905 2.145 0 1.131-0.619 2.034-1.858 2.708 0.739 0.158 1.33 0.513 1.772 1.063 0.443 0.551 0.664 1.215 0.664 1.994 0.001 1.132-0.412 2.095-1.238 2.891z"></path> </g></svg>
                </div>
                <h3 class="card-title">Шаг 3</h3>

                <p class="card-text">
                После приобретения авто высылается полный пакет документов авто для оформления. Автомобиль будет доставлен  в любую точку страны по вашему по желанию или будет возможность получить автомобиль в Москве.
                </p>

              </div>
            </li>

            <li class='container'>
              <div class="get-start-card">

                <div class="ssvg">
                <svg viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm28,152a8,8,0,0,1-16,0V152H100a7.99995,7.99995,0,0,1-7.54395-10.66211l23.998-68A7.99987,7.99987,0,1,1,131.542,78.66211L111.30664,136H140V112a8,8,0,0,1,16,0Z"></path> </g></svg>
                </div>

                <h3 class="card-title">Шаг 4</h3>

                <p class="card-text">
                  Вы наслаждаетесь комфортом и удобством купленного автомобиля.
                </p>

              </div>
            </li>
    
            <div class='container pt-20'id="FQU">
            <h2 class="h2 section-title container mt_40" >Вопросы и ответы</h2>
<div class="accordion accordion-flush" id="accordionFlushExample2">
<div class="accordion-item accordion-item_3">
<div class="get-start-card ">

<div class="ssgv">
<svg id="Layer_1"  width={'40px'}viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m63.9 31.2c-.1-.5-.4-1-.7-1.4l-5.2-5.2c-.2-.2-.4-.3-.6-.5-.4-.2-.8-.3-1.3-.3h-3.2v9.7h11.1v-1.8c0-.2 0-.4-.1-.5zm-13.2 3.4v-11.9-7.6c0-1.5-1.2-2.7-2.7-2.7h-33.1c-1.5 0-2.7 1.2-2.7 2.7v24.5h38.5zm-27.9 10c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4c0-1.8-1.5-3.4-3.4-3.4zm32.8 0c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4c.1-1.8-1.5-3.4-3.4-3.4zm-2.7-8.9v5c0 .6-.5 1.1-1.1 1.1h-39.5v4.4c0 .8.6 1.4 1.4 1.4h3.6c.2-2.8 2.6-5.1 5.5-5.1s5.3 2.3 5.5 5.1h21.8c.2-2.8 2.6-5.1 5.5-5.1s5.3 2.3 5.5 5.1h1.4c.8 0 1.4-.6 1.4-1.4v-10.5zm3.5 3.3h-1.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h1.5c.6 0 1.1.5 1.1 1.1-.1.6-.5 1.1-1.1 1.1z" /></g></g><g><path d="m9.1 17.4h-4.9c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h4.9c.6 0 1.1.5 1.1 1.1 0 .7-.5 1.1-1.1 1.1z" /></g><g><path d="m9.1 22.5h-8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h8.1c.6 0 1.1.5 1.1 1.1-.1.7-.6 1.1-1.2 1.1z" /></g><g><path d="m9.1 27.6h-4.9c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h4.9c.6 0 1.1.5 1.1 1.1 0 .7-.5 1.1-1.1 1.1z"/></g><g><path d="m9.1 32.7h-8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h8.1c.6 0 1.1.5 1.1 1.1s-.6 1.1-1.2 1.1z" /></g><g><path d="m9.1 37.8h-4.9c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h4.9c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1z" /></g></g></svg>
</div>

<h3 class=" mb">Доставка</h3>

  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne111" aria-expanded="false" aria-controls="flush-collapseOne111">
    Процесс доставки  
    </button>
  </h2>
  <div id="flush-collapseOne111" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample111">
    <div class="accordion-body">У нас одна из самых быстрых доставок в Росии , мы доставляем по России от 3-х дней</div>
  </div>





  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1112" aria-expanded="false" aria-controls="flush-collapseOne1112">
     Доставите к дому? 
    </button>
  </h2>
  <div id="flush-collapseOne1112" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample111">
    <div class="accordion-body">Конечно! Автомобиль будет доставлен в любую точку страны по вашему по желанию. </div>
  </div>


  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne11143" aria-expanded="false" aria-controls="flush-collapseOne11143">
    Как уточнить дату доставки?
    </button>
  </h2>
  <div id="flush-collapseOne11143" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample11143">
    <div class="accordion-body">Если хотите узнать на каком этапе доставка, вы можете обратиться по телефону или по соц.сетям</div>
  </div>

</div>


<div class="get-start-card ">

<div class="ssgb">
<svg width={'40px'}viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_payment_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_payment_24_filled" fill="#212121" fill-rule="nonzero"> <path d="M21.9883291,10.9947074 L21.9888849,16.275793 C21.9888849,17.7383249 20.8471803,18.9341973 19.4064072,19.0207742 L19.2388849,19.025793 L4.76104885,19.025793 C3.29851702,19.025793 2.10264457,17.8840884 2.01606765,16.4433154 L2.01104885,16.275793 L2.01032912,10.9947074 L21.9883291,10.9947074 Z M18.2529045,14.5 L15.7529045,14.5 L15.6511339,14.5068466 C15.2850584,14.556509 15.0029045,14.8703042 15.0029045,15.25 C15.0029045,15.6296958 15.2850584,15.943491 15.6511339,15.9931534 L15.7529045,16 L18.2529045,16 L18.3546751,15.9931534 C18.7207506,15.943491 19.0029045,15.6296958 19.0029045,15.25 C19.0029045,14.8703042 18.7207506,14.556509 18.3546751,14.5068466 L18.2529045,14.5 Z M19.2388849,5.0207074 C20.7014167,5.0207074 21.8972891,6.162412 21.9838661,7.60318507 L21.9888849,7.7707074 L21.9883291,9.4947074 L2.01032912,9.4947074 L2.01104885,7.7707074 C2.01104885,6.30817556 3.15275345,5.11230312 4.59352652,5.02572619 L4.76104885,5.0207074 L19.2388849,5.0207074 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
</div>

<h3 class=" mb">Оплата</h3>

  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne221" aria-expanded="false" aria-controls="flush-collapseOne221">
     Как происходит оплата? 
    </button>
  </h2>
  <div id="flush-collapseOne221" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample221">
    <div class="accordion-body">После того, как Вы выбрали авто, происходит полная или частичная оплата авто на ИП, в зависимости с какой Страны был приобретен автомобиль.  </div>
  </div>


  <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2212" aria-expanded="false" aria-controls="flush-collapseOne2212">
     Какие есть варианты оплаты? 
    </button>
  </h2>
  <div id="flush-collapseOne2212" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample221">
    <div class="accordion-body">Мы работаем с наиболее безопасным способом оплаты для вас. После заключения договора вы можете частично или полностью оплатить авто ИП.</div>
  </div>





</div>



</div>
</div>
</div>
      {/* <section class="section get-start">
        <div class="container">

          <h2 class="h2 section-title">Get started with 4 simple steps</h2>

          <ul class="get-start-list">

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-1">
                  <ion-icon name="person-add-outline"></ion-icon>
                </div>

                <h3 class="card-title">Create a profile</h3>

                <p class="card-text">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure.
                </p>

                <a href="#" class="card-link">Get started</a>

              </div>
            </li>

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-2">
                  <ion-icon name="car-outline"></ion-icon>
                </div>

                <h3 class="card-title">Tell us what car you want</h3>

                <p class="card-text">
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                </p>

              </div>
            </li>

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-3">
                  <ion-icon name="person-outline"></ion-icon>
                </div>

                <h3 class="card-title">Match with seller</h3>

                <p class="card-text">
                  It to make a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic
                </p>

              </div>
            </li>

            <li>
              <div class="get-start-card">

                <div class="card-icon icon-4">
                  <ion-icon name="card-outline"></ion-icon>
                </div>

                <h3 class="card-title">Make a deal</h3>

                <p class="card-text">
                  There are many variations of passages of Lorem available, but the majority have suffered alteration
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section> */}








    </article>
  </main>


  
{/* <div class='container'>
<h2 class="h2 section-title mb-20">Вопросы и ответы</h2>
  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item accordion-item_3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Как происходит регистрация и доставка автомобиля ? 
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item accordion-item_2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Как происходит оплата ? 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div> 
   <div class="accordion-item accordion-item_2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Можно ли выбрать другую компектацию ?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

</div> */}
  <footer class="footer">
    <div class="container">

      <div class="footer-top">

        <div class="footer-brand">
          <a href="#" class="logo_">
          Laati-Car
          </a>

          <p class="footer-text">
             Наша компания подбирает самые надёжные автомобили для импорта в Россию и СНГ. Спасибо за то, что вы с нами!
          </p>
        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Компания</p>
          </li>

          <li>
            <a href="#onas" class="footer-link">О нас</a>
          </li>

          <li>
            <a href="#" class="footer-link">История компании</a>
          </li>

          <li>
            <a href="#" class="footer-link">Контакты</a>
          </li>

 

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Поддержка</p>
          </li>

          <li>
            <a href="#" class="footer-link">Вопросы и ответы</a>
          </li>

          <li>
            <a href="#" class="footer-link">Этапы покупки</a>
          </li>

          <li>
            <a href="#" class="footer-link">Узнать о наличии</a>
          </li>



        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Каталог </p>
          </li>

          <li>
            <a href="#featured-car" class="footer-link">TOYOTA</a>
          </li>

          <li>
            <a href="#featured-car" class="footer-link">VOLKSWAGEN</a>
          </li>

          <li>
            <a href="#featured-car" class="footer-link">CADILLAC</a>
          </li>


          <li>
            <a href="#featured-car" class="footer-link">CHEVROLET</a>
          </li>

          <li>
            <a href="#featured-car" class="footer-link">HENDAI</a>
          </li>

          <li>
            <a href="#featured-car" class="footer-link">ZEEKR</a>
          </li>

          <li>
            <a href="#featured-car" class="footer-link">VOYAH</a>
          </li>
          <li>
            <a href="#featured-car" class="footer-link">SUZUKI</a>
          </li>
        </ul>

      </div>

      <div class="footer-bottom">

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-skype"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>

        </ul>

        <p class="copyright">
          &copy; 2023 <a href="#">Компания</a>. Все права защищены
        </p>

      </div>

    </div>
  </footer>

    </div>
  );
}

export default App;
<div class='video_text '>
         <div class='d_flex_1'>
      Подарите себе {" "}
      <div class='color_new_3 ml_5'>
      <ReactTyped strings={[" любовь и заботу"," красоту и нежность"]} typeSpeed={100} loop />
      </div>
   </div>
        
      <div >
      а мы Вам в этом поможем!
      </div>
      </div>