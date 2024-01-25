
import './App.css';
import useState from 'react-usestateref'
import "react-alice-carousel/lib/alice-carousel.css";
import $ from 'jquery'
import video from './content/video.mp4'
import { Carousel22 } from './js/ButtonGroups';
import { useEffect } from 'react';
import { Gallery } from './js/Carousel';
import { Gallery1 } from './js/Carousel1';
import ReactTyped from "react-typed";
import { getActii, getActii2, getGlav_text, getKategorii, getKomplexpredlinfodesc, getKomplexpredlinfodesc1, getKontacts, getKontacts_phone, getO_sebe, getO_sebe_info, getOtzivi_info, getSertificats_info, getUslugi, getUslugi_price, getVizit, putActii_img, putKategorii, putO_sebe, putOtzivi, putUslugi2, putUslugi3, putVizit, putVizit1, putvideo, putvideo1 } from './https/deviceAPI';
import { LoginControl } from './Greeting';
import { Carous, Carous1 } from './Carous';
import { Kategorii1 } from './js/Kategorii';
import { Uslugi12 } from './js/Uslugi';
import { Price } from './js/Price';
import { Kompl } from './js/Kompl';
import { Actii1 } from './js/Actii';
import { O_sebe23 } from './js/O_sebe';
import { Otzivi12 } from './js/Otzivi';
import { Sert12 } from './js/Sert12';
function App() {
  // const [video,setvideo,setvideoRef] = useState('https://vod.fl.freecaster.net/vod/kenzo/o5zgqb5ZHd_720p.mp4')
  
  const functi3 = async() => {
  
    const formData = new FormData()
   
    formData.append('description',setvizit_descRef.current)
console.log(setvizit_imgRef.current)
  if(setvizit_imgRef.current==0){
     const fff = await putVizit1(formData)
   }else{
      formData.append('img',setvizit_imgRef.current)
     const fff = await putVizit(formData)
   }
 function67()
   get()
    }

  const selectFile = e => {
    setVideo_(e.target.files[0])
}
const selectFile1 = e => {
  setO_sebe_photo(e.target.files[0])
}
const selectFile2 = e => {
  setimg(e.target.files[0])
}
const selectFile3 = e => {
  setimg_vi_(e.target.files[0])
}
const selectFile4 = e => {
  setvizit_img(e.target.files[0])
}
const function613 = async() => {
  const formData = new FormData()
    
  formData.append('img',setO_sebe_photoRef.current)
const fff = await putO_sebe(formData)
}

const put__usl = async() => {
  const formData = new FormData()
    console.log(setiduslugiRef.current)
 
  formData.append('name', setUslugi_titleRef.current )
  formData.append('description',setUslugi_textRef.current)
  formData.append('id',setiduslugiRef.current)

  if(setimgRef.current==setimg1Ref.current){
    const fff = await putUslugi3(formData)
  }else{
    formData.append('img',setimgRef.current)
    const fff = await putUslugi2(formData)
  }
get()
}

const function61 = async() => {
  
  $(`.class0`).toggleClass('input_active')
  $(`.class01`).toggleClass('input_1_active')
  $(`.context_`).toggleClass('input_active')
  
}
  $(document).ready(function(){

    
    $(window).scroll(function(){
      if($(window).scrollTop()>130){
        $('.top2').addClass('move-left')
      }else{
        $('.top2').removeClass('move-left')
      }
    });
  });

  const function22 = async() => {

    const formData = new FormData()
    
    formData.append('text1', setVideo_text1Ref.current)
    formData.append('text2', setVideo_text2Ref.current)
    if(setVideo_Ref.current==0){
      const kat = await putvideo1(formData)
    }else{
      formData.append('video', setVideo_Ref.current)
      const kat = await putvideo(formData)
    }


get()
}
const function5 = async() => {
  
  $(`.d_n`).toggleClass('input_active')
  $(`.mission__text`).toggleClass('mt-334')
  $(`.text08`).toggleClass('input_active')
  $(`.text07`).toggleClass('input_active')
  $(`.text06`).toggleClass('input_1_active')
  
}
const function4 = async() => {
  $(`.text05 `).toggleClass('input_active')
  $(`.text03`).toggleClass('input_active')
  $(`.text02`).toggleClass('input_1_active')
  
}
const function6 = async() => {
  
  $(`.class0`).toggleClass('input_active')
  $(`.class01`).toggleClass('input_1_active')
  
}
//   $(".fill1").click(function(){
//     $('.but_2').removeClass('but_active')
//     $('.fill1').removeClass('fill_active1')
//     $('.fill1').removeClass('but_active')
//   console.log($(this).closest('.but_2').addClass('but_active')) ;
//   $(this).addClass('fill_active1') ;
   
//     console.log('dfsfsdfds')
// });
  useEffect(() => {
 
    $(document).ready(function() {
      $("#btnSubmit").click(function(){
          alert("button");
      }); 
  });


  $(document).on('click','.svg_v',function(){
    $(`.tex_area`).removeClass('input_active')
    $(`.class6`).removeClass('input_active')
    $(`.class9`).removeClass('input_active')
    $(`.class8`).removeClass('input_1_active')
    $(`.carousel_title_1`).removeClass('input_1_active')
});
    
    get()
    var header = $('.nav'),
      scrollPrev = 0;
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
  
    if ( scrolled > 100 ) {
      header.addClass('trans')
      $('.logo').addClass('logo1')
    } else {
      header.removeClass('trans')
      $('.logo').removeClass('logo1')
    }
    // if ( scrolled > 10 && scrolled > scrollPrev ) {
    // 	header.addClass('out');
    // } else {
    // 	header.removeClass('out');
    // }
    scrollPrev = scrolled;
  });
  
  }, []);
  const items3 = [
    <div class="vemotau-vokusipol"><div class="testimonial"><img src="http://zornet.ru/_fr/83/7890600.jpg" alt=""/><div class="gecedanam">Антон Попов</div><div class="apogered-gselected"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><p>Здесь первое описание. Продолжение.</p></div></div>,
    <div class="vemotau-vokusipol"><div class="testimonial"><img src="http://zornet.ru/_fr/83/2047084.jpg" alt=""/><div class="gecedanam">Дмитрий Атрохов</div><div class="apogered-gselected"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div><p>Второй отзыв. Его продолжение.</p></div></div>,
<div class="vemotau-vokusipol"><div class="testimonial"><img src="http://zornet.ru/_fr/83/5640570.jpg" alt=""/><div class="gecedanam">Каспер Волков</div><div class="apogered-gselected"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><p>Здесь первое описание. Продолжение.</p></div></div>,
      ]


  
  const items2 = [
<img src='https://static3.tildacdn.com/tild3033-3462-4563-a562-653061303064/rr32_1.png'/> ,
<img src='https://static3.tildacdn.com/tild6535-3539-4165-b466-656338663630/--1.png'/> ,
<img src='https://static3.tildacdn.com/tild3465-3135-4831-b834-653264346334/--2.png'/> ,
<img src='https://static3.tildacdn.com/tild3033-3462-4563-a562-653061303064/rr32_1.png'/> ,
  ]

  const [otziv,setotziv,setotzivRef] = useState()
  
  const [Video_text1,setVideo_text1,setVideo_text1Ref] = useState()
  const [Video_text2,setVideo_text2,setVideo_text2Ref] = useState()
  const [Video_,setVideo_,setVideo_Ref] = useState(0)
  const [img_vi,setimg_vi_,setimg_vi_Ref] = useState(0)

  const [Video_text,setVideo_text,setVideo_textRef] = useState()
  const [Kategorii,setKategorii,setKategoriiRef] = useState()
  const [O_sebe,setO_sebe,setO_sebeRef] = useState()
  const [O_sebe1,setO_sebe1,setO_sebe1Ref] = useState()

  const [O_sebe_photo,setO_sebe_photo,setO_sebe_photoRef] = useState()

  const [O_sebe2,setO_sebe2,setO_sebe2Ref] = useState()
  const [O_sebe3,setO_sebe3,setO_sebe3Ref] = useState()
  const [O_sebe4,setO_sebe4,setO_sebe4Ref] = useState()


  const [Uslugi,setUslugi,setUslugiRef] = useState()

  const [Uslugi_title,setUslugi_title,setUslugi_titleRef] = useState()

  const [vizit_desc,setvizit_desc,setvizit_descRef] = useState()
  const [vizit_img,setvizit_img,setvizit_imgRef] = useState(0)

  const [Uslugi_text,setUslugi_text,setUslugi_textRef] = useState()
  const [img,setimg,setimgRef] = useState(0)
  const [img1,setimg1,setimg1Ref] = useState(0)

  const [Uslugi1,setUslugi1,setUslugi1Ref] = useState()
  const [iduslugi,setiduslugi,setiduslugiRef] = useState()
  

  const [Actii,setActii,setActiiRef] = useState()
  const [Actii2,setActii2,setActii2Ref] = useState()
  const [Otzivi,setOtzivi,setOtziviRef] = useState()
  const [Vizit,setVizit,setVizitRef] = useState()
  const [Sertificats,setSertificats,setSertificatsRef] = useState()

  const [Kontacts,setKontacts,setKontactsRef] = useState()
  const [Kontacts_phone,setKontacts_phone,setKontacts_phoneRef] = useState()

  const [items1,setitems1,setitems1Ref] = useState(2)
  const [items5,setitems2,setitems2Ref] = useState(2)
  const [items6,setitems3,setitems3Ref] = useState(2)
  // {setVideo_textRef?.current[0]?.text1}
  // const items1 = [
  //   <div class='carousel_'>
  //       <div class='carousel_cont'>
  //         <div class='carousel_width'>
  //         <img class='carousel_img' src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
  //         </div>
  //         <div class='carousel_width color_2'>
  //          <div class='carousel_title'>
  //        <strong class='color'>Smas-лифтинг от 3 500₽ | </strong>   Омоложение и подтянутая кожа без операций
  //          </div>
  //          <div class='carousel_text color_2'>
  //          <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
  //          </div>
  //          <div class='carousel_text color_2'>
  //          <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
  //          </div>
  //          <div  class='carousel_buttom bgcolor_new color_bg'>
  //           Записаться 
  //          </div>
  //         </div>
  //       </div>
  //       </div>,
      
  //   <div class='carousel_'>
  //       <div class='carousel_cont'>
  //         <div class='carousel_width'>
  //         <img class='carousel_img'  src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
  //         </div>
  //         <div class='carousel_width'>
  //          <div class='carousel_title'>
  //          Smas-лифтинг от 3 500₽ | Омоложение и подтянутая кожа без операций
  //          </div>
  //          <div class='carousel_text'>
  //          Авторский комплекс включает в себя большой спектр различных процедур. Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
  //          </div>
  //          <div class='bgcolor_new carousel_buttom'>
  //           Записаться 
  //          </div>
  //         </div>
  //       </div>
  //       </div>,
     
  //   <div class='carousel_'>
  //       <div class='carousel_cont'>
  //         <div class='carousel_width'>
  //         <img class='carousel_img'  src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
  //         </div>
  //         <div class='carousel_width'>
  //          <div class='carousel_title'>
  //          Smas-лифтинг от 3 500₽ | Омоложение и подтянутая кожа без операций
  //          </div>
  //          <div class='carousel_text'>
  //          Авторский комплекс включает в себя большой спектр различных процедур. Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
  //          </div>
  //          <div class='bgcolor_new carousel_buttom'>
  //           Записаться 
  //          </div>
  //         </div>
  //       </div>
  //       </div>,
  //     ];
  
  const save_photo = async() => {
    const formData = new FormData()
    if(setimg_vi_Ref!=0){
      formData.append('img', setimg_vi_Ref.current)

      const fdfs=  await putActii_img(formData)
      get()
    }

  }

  const fun = async() => {
    $('.wi').toggleClass('click')
  }
 
  const function62 = async() => {
  
    $(`.class3`).toggleClass('input_active')
    $(`.class2`).toggleClass('input_1_active')
    
  }
  const function63 = async() => {
  
    $(`.class3`).removeClass('input_active')
    $(`.class2`).removeClass('input_1_active')
    
  }

  const function64 = async() => {
    
    $(`.cla0`).toggleClass('input_active')
    $(`.tex_area`).toggleClass('input_active')
    $(`.class6`).toggleClass('input_active')
    $(`.class9`).toggleClass('input_active')
    $(`.class8`).toggleClass('input_1_active')
    $(`.carousel_title_1`).toggleClass('input_1_active')
    
  }
  const function65 = async() => {
    
    $(`.bububu`).toggleClass('input_active')
    $(`.mar_lf1`).toggleClass('input_active')
    $(`.class11`).toggleClass('input_active')
    $(`.class1212`).toggleClass('input_active')
     
  }

  const function66 = async() => {
    $(`.class13`).toggleClass('input_active')
    $(`.class14`).toggleClass('input_active')
    $(`.class15`).toggleClass('input_active')
    $(`.class15_`).toggleClass('input_active')
    $(`.class16`).toggleClass('input_1_active')
    $(`.testimonial`).toggleClass('dsdf')
 
  }
  const function67 = async() => {
    $(`.class17`).toggleClass('input_active')
    $(`.class17_`).toggleClass('input_active')
    $(`.class17__`).toggleClass('input_active')
    $(`.class18`).toggleClass('input_1_active')
  }
  const function68 = async() => {
    
    $(`.class22`).toggleClass('input_active')
    $(`.class20`).toggleClass('input_active')
    $(`.class21`).toggleClass('input_1_active')
  }
  const get = async() => {


  
const Video_text = await getGlav_text()
const Kategorii = await getKategorii()

const o_sebe1 = await getO_sebe()
const o_sebe = await getO_sebe_info()
const uslugi = await getUslugi()
const actii = await getActii()
const actii2 = await getActii2()
const otzivi = await getOtzivi_info()
const vizit = await getVizit()
const kontakts = await getKontacts()
const kontakts_phone = await getKontacts_phone()


actii2.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
Kategorii.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
uslugi.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
vizit.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
kontakts.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
kontakts_phone.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
o_sebe.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
o_sebe1.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

console.log($(document.getElementsByClassName('but_2')[0]).addClass('but_active'))   
console.log($(document.getElementsByClassName('fill1')[0]).addClass('fill_active1'))  
console.log(uslugi)
$(`.img_${uslugi[0].id}`).addClass('img_svg_active')    
setUslugi_title(uslugi[0].name)
setUslugi_text(uslugi[0].description)

setimg(uslugi[0].img)
setimg1(uslugi[0].img)

console.log(uslugi[0])
setVideo_text(Video_text[0])

setVideo_text1(Video_text[0].text1)
setVideo_text2(Video_text[0].text2)

setKategorii(Kategorii)
setO_sebe1(o_sebe1[0])
setO_sebe(o_sebe)
setUslugi(uslugi)
setActii(actii[0])
setActii2(actii2)
setVizit(vizit[0])
setKontacts_phone(kontakts_phone)
setKontacts(kontakts[0])

console.log(uslugi)
get3()
get2()
get4()
  }
  const get3 = async() => {
    const Komplexpred = await getKomplexpredlinfodesc()
    // const ceo =await getKomplexpredlinfodesc1()
    // console.log(ceo)
    let items =[]
    Komplexpred.map(e=>
    items.push(

      <Kompl e={e} get={get}/> 

    
    )
    )
    setitems1(items)
  }


  const get2 = async() => {
    const Komplexpred = await getOtzivi_info()
    Komplexpred.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    let items1 =[]
    var counter = 1;
// function foo()
// {
//     if (counter < 5){
//         counter++
//         window.setTimeout(foo, 1000);
//     }
// }

// foo()
    let items =[]
    Komplexpred.map(e=>
    items.push(
    
      <Otzivi12 e={e} get={get}/>
   

    
    )
    )
  
    

    setitems2(items)
  }
  const get4 = async() => {
    const Komplexpred = await getSertificats_info()
    Komplexpred.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    let items =[]
    Komplexpred.map(e=>
    items.push(
     <Sert12 e={e} get={get}/>

    )
    )
    setitems3(items)
  }
  const function1 = async(e,i) => {
    function63()
    //   if($(e.target.children[0]?.firstChild.classList)?.length===1){
        setUslugi_title(i.name)
        setUslugi_text(i.description)

        const dd = await getUslugi_price(i.id)
        setUslugi1(dd)
        setiduslugi(i.id)
    //     $('.but_2').removeClass('but_active')
    //     $('.fill1').removeClass('fill_active1')
    //     $('.fill1').removeClass('but_active')
    //     $(e.target).addClass('but_active')
    //     $(e.target.children[0].firstChild).addClass('fill_active1') 
    
    // }but_2 
    const ddg = `.img_${i.id}`
    console.log(dd)
    $(e.target).closest('.but_2').addClass('but_active')
    $('.but_active').removeClass('but_active')

    $('.fill1').removeClass('but_active')
    $('.img_svg_active').removeClass('img_svg_active')
    $(`.img_${i.id}`).addClass('img_svg_active')
 
    $('.img_svg').removeClass('but_active')
    // $(e.target).closest('.img_svg').addClass('img_svg_active')
    $(e.target).closest('.but_2').addClass('but_active')
    $(e.target).addClass('but_active')
    // if($(e.target.children[0]?.firstChild.classList)?.length===0){
    //   setUslugi_title(i.name)
    //   setUslugi_text(i.description)
    //   $('.but_2').removeClass('but_active')
    //   $('.fill1').removeClass('fill_active1')
    //   $('.fill1').removeClass('but_active')
    //   const dd = await getUslugi_price(i.id)
    //   $(e.target).closest('.but_2').addClass('but_active')
    //   $(e.target).addClass('fill_active1')
    //   $(e.target).closest('.fill1').addClass('fill_active1')
    // }
   
      // if($(e.target.children[0].firstChild.classList).length===0){
        // $('.but_2').removeClass('but_active')
        // $('.fill1').removeClass('fill_active1')
        // $('.fill1').removeClass('but_active')
      //   console.log(console.log($(this).closest('.but_2')))
      //   $($(this).closest('.but_2')).addClass('but_active')
      //   // $(e.target.parentElement.firstChild).addClass('fill_active1') 
        
      // }
          
      $('.img_svg').removeClass('but_active')

   
    
  }
  // const funct = async() => {
  //   $('.but_2').removeClass('but_active')
  //   $('.fill1').removeClass('fill_active1')
  //   $(e.target).addClass('but_active')
  // }


 
  return (
    <div className="App">
       <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

  <div class="offcanvas-body">
 
  </div>
</div>
        <div class='nav'> 
        <div class='width_33 widt'>
        <div class='nav_content'>
    
          <div class="social-links"><a class='icon ' href="#"><i class="fab fa-vk"></i></a><a class='icon' href="#"><i class="fab fa-google"></i></a><a class='icon' href="#"><i class="fab fa-instagram"></i></a><a class='icon' href="#"><i class="fab fa-telegram"></i></a></div>
         
       
        </div>
        </div>

<div class='width_33 h_100' >


  
<svg xmlns="http://www.w3.org/2000/svg" class='logo' viewBox="0 0 525 403">
<path d="M264.664 59.75c-1.201 77.613-.896 122.25.836 122.25 1.321 0 1.5-9.833 1.5-82.5 0-45.375-.377-82.5-.837-82.5-.461 0-1.135 19.237-1.499 42.75M373.5 91.026c-40.605 3.748-67.439 26.827-67.488 58.042-.018 11.413 3.631 22.04 10.098 29.404l3.097 3.528h33.277l-4.992-2.642c-18.252-9.659-25.993-20.528-25.897-36.358.133-21.873 15.196-39.035 41.405-47.171 11.365-3.529 36.178-3.248 46.871.53 16.118 5.695 27.912 15.009 35.559 28.086 2.109 3.605 4.224 6.555 4.702 6.555.477 0 .868-6.879.868-15.286v-15.286l-10.141-2.82c-22.492-6.253-46.016-8.552-67.359-6.582M57 96c0 .55 1.237 1.007 2.75 1.016 4.642.028 10.375 4.032 12.863 8.984 3.679 7.322 4.514 14.897 5.104 46.25l.559 29.75H97V96.77l33.75.529c55.627.873 81.743 8.483 85.638 24.951 1.597 6.753 2.612 1.992 2.612-12.25V95h-81c-53.333 0-81 .342-81 1M12.921 201.25c-.044.137-.157 5.538-.25 12L12.5 225h8.75c5.167 0 8.75-.41 8.75-1 0-.578-3.167-1-7.5-1H15v-9h5.941c3.268 0 6.219-.45 6.559-1 .388-.628-1.823-1-5.941-1H15v-9h7c4 0 7-.429 7-1 0-.833-15.819-1.57-16.079-.75M47 213v12h8c4.667 0 8-.417 8-1 0-.564-2.833-1-6.5-1H50v-11c0-9.111-.258-11-1.5-11-1.25 0-1.5 2-1.5 12m32 0c0 9.645.276 12 1.406 12 1.124 0 1.431-2.412 1.525-12 .101-10.14-.117-12-1.406-12-1.282 0-1.525 1.912-1.525 12m22 0c0 8.933.319 12 1.25 12 .918 0 1.203-2.315 1.074-8.715-.097-4.794.053-9.086.333-9.539.28-.453 3.922 3.469 8.094 8.715 4.172 5.247 7.96 9.539 8.417 9.539.458 0 .832-5.4.832-12 0-14.417-1.798-16.352-2.214-2.383l-.286 9.617-7.5-9.593c-4.125-5.275-8.062-9.603-8.75-9.616-.932-.019-1.25 3.029-1.25 11.975m45.08-7.75c-1.016 2.338-3.45 7.738-5.407 12-2.432 5.296-3.141 7.75-2.237 7.75.727 0 1.881-1.35 2.564-3 1.233-2.977 1.611-3.25 4.5-3.25 10.576 0 11.224.168 12.5 3.25 1.126 2.719 2.985 4.109 3.01 2.25.029-2.22-10.577-23.25-11.726-23.25-.745 0-2.187 1.912-3.204 4.25m52.666-3c-4.977 3.802-2.688 8.901 5.192 11.562 6.156 2.079 8.157 4.235 6.44 6.938-1.196 1.882-9.217 2.418-12.628.844-1.112-.513-1.75-.395-1.75.324 0 3.576 12.023 4.15 15.436.737 4.636-4.636 1.953-8.222-8.686-11.614-7.565-2.413-4.182-8.625 4.255-7.815 4.844.466 6.634-.383 3.413-1.619-2.749-1.055-9.97-.657-11.672.643M231 210.364c0 11.444 2.072 14.636 9.5 14.636s9.5-3.192 9.5-14.636c0-5.576-.405-9.364-1-9.364-.591 0-1 3.604-1 8.811 0 10.284-1.622 13.189-7.365 13.189-5.836 0-7.635-3.138-7.635-13.314 0-5.124-.41-8.686-1-8.686-.595 0-1 3.788-1 9.364M270 213c0 7.333.389 12 1 12 .55 0 1-1.325 1-2.944 0-1.719 1.036-4.112 2.489-5.75l2.49-2.806 5.26 5.778c7.287 8.003 9.168 7.233 2.25-.922l-5.637-6.644 5.29-5.356c2.909-2.946 4.641-5.356 3.847-5.356-.793 0-4.715 3.251-8.715 7.225L272 215.45v-7.225c0-4.15-.426-7.225-1-7.225-.611 0-1 4.667-1 12m36 0c0 7.333.389 12 1 12 .55 0 1-2.475 1-5.5V214h16v5.5c0 3.025.45 5.5 1 5.5.611 0 1-4.667 1-12s-.389-12-1-12c-.55 0-1 2.494-1 5.542v5.542l-7.75-.292-7.75-.292v-5.252c0-3.535-.408-5.251-1.25-5.25-.93.002-1.25 3.07-1.25 12.002m45.065-7.75c-1.026 2.338-3.473 7.738-5.439 12-2.384 5.167-3.144 7.75-2.281 7.75.712 0 1.938-1.448 2.725-3.217 1.465-3.297 3.315-3.669 14.332-2.883.771.055 1.873 1.45 2.448 3.1.897 2.572 3.15 4.263 3.15 2.364 0-2.278-10.544-23.364-11.683-23.364-.763 0-2.227 1.912-3.252 4.25M382 213c0 9.868.26 12 1.464 12 1.162 0 1.523-1.958 1.75-9.508l.286-9.508 7.498 9.508c4.124 5.229 7.951 9.508 8.504 9.508.607 0 1.098-4.769 1.236-12 .189-9.911-.023-12-1.218-12-1.142 0-1.508 2.009-1.734 9.508l-.286 9.508-7.498-9.508c-4.124-5.229-8.062-9.508-8.75-9.508-.933 0-1.252 3.057-1.252 12m43.763-10.492c-10.744 6.055-5.34 22.502 7.388 22.488 10.27-.011 15.855-12.481 9.017-20.134-3.432-3.841-11.669-5.023-16.405-2.354m35.821 4.242c1.407 3.162 3.764 8.567 5.237 12.01 1.674 3.912 3.206 6.163 4.083 6 1.786-.331 12.379-23.76 10.742-23.76-.657 0-3.176 4.5-5.596 10-2.421 5.5-4.7 10-5.066 10-.365 0-2.608-4.5-4.984-10s-4.918-10-5.648-10c-.96 0-.619 1.59 1.232 5.75m38.737 6.014c-4.554 10.297-6.187 16.282-2.954 10.824 2.681-4.525 4.157-5.269 10.153-5.112 4.414.116 6.105.587 6.912 1.925 5.447 9.036 5.103 5.276-.705-7.703-3.332-7.447-5.771-11.675-6.727-11.663-.946.012-3.412 4.341-6.679 11.729m-74.532-6.866c-2.684 2.398-3.244 3.622-3.244 7.102 0 10.576 15.397 13.797 19.429 4.064 4.323-10.437-7.71-18.739-16.185-11.166m-279.209 3.381c-3.433 7.688-3.42 7.721 2.987 7.721 6.338 0 6.376-.18 1.884-9l-2.292-4.5-2.579 5.779m205 0c-3.433 7.688-3.42 7.721 2.987 7.721 6.338 0 6.376-.18 1.884-9l-2.292-4.5-2.579 5.779m152.42.416c-1.375 3.113-2.65 6.03-2.833 6.483-.184.452 2.441.822 5.833.822 3.392 0 6.017-.35 5.833-.779l-2.767-6.5c-2.981-7.007-2.983-7.007-6.066-.026M77.66 269.25c-1.014 37.818-4.151 47.137-16.579 49.236C48.889 320.546 62.776 321 138 321h81v-18.5c0-10.189-.401-18.5-.893-18.5-1.055 0-2.107 2.451-2.107 4.91 0 .961-1.382 3.833-3.071 6.383-10.393 15.691-42.63 23.676-95.679 23.698L97 319v-74H78.309l-.649 24.25M264 319.941c0 68.059.55 84.653 2.367 71.396 1.508-11.003.706-146.337-.867-146.337-1.32 0-1.5 8.993-1.5 74.941m178.768-72.688c12.204 12.991 10.497 38.37-3.633 54.023-31.575 34.975-92.948 22.257-125.587-26.026-2.696-3.988-5.272-7.25-5.725-7.25-.452 0-.817 6.863-.81 15.25l.013 15.25 7.237 4.698c10.045 6.522 23.459 13.212 32.572 16.247 57.525 19.158 119.773-13.03 116.896-60.445-.855-14.085-.777-14-12.881-14h-10.199l2.117 2.253" fill-rule="evenodd"/>
</svg>

        </div>


        <div class='width_33 wi'  >
        <svg onClick={fun} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" class="stroke icon2 icon icon-hamburger" width="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 18 16"><path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor"></path></svg>
          </div>

        </div>
      <div className="container_video">
        <div class='opacity'>   
   <div class=" container_2 text02">
  {setVideo_text1Ref.current}
    <br/>
  {setVideo_text2Ref.current}
   </div>
<div class='container_2'>
<input class='text05 text05_ file' onChange={selectFile} placeholder={'Иконка'} type="file" />
<input class='text03' defaultValue={setVideo_text1Ref.current} onChange={ e => setVideo_text1(e.target.value)}/>
    
    <input class='text03' defaultValue={setVideo_text2Ref.current} onChange={ e => setVideo_text2(e.target.value)}/>
    
</div>


      <div class="but_1 "><a href="/" class="ddott ml-5 ">Акции</a>  <a href="/" class="ddott ml-5 ">Предложения</a>
      
           <svg class='mar_lf' onClick={function4} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
           <svg onClick={function22} width='47px' class='pd_f' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
   
    </div>
 
    
      <video class='video2'  src={process.env.REACT_APP_API_URL + setVideo_textRef?.current?.video} loop  autoplay='true' muted='true'>
   </video>
  </div>
   </div>
   <section class="section features">
    <div class="container">
      <div class="features__body">
        <div class="row g-5">

        {setKategoriiRef?.current?.map(i =>
   <Kategorii1 i={i} get={get}/>
        )}
    
          {/* <div class="col-12 col-xl-6">
            <div class="features__item">
<div>
<svg  xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 108 102" class='fill'>
  <path d="M84.4453 0.375C81.2344 0.703125 77.3203 2.17969 74.8125 4.00781C73.9219 4.66406 73.6875 4.96875 73.6875 5.50781C73.6875 6.28125 74.3203 6.9375 75.0937 6.9375C75.3984 6.9375 76.2891 6.51562 77.0625 6.02344C80.1094 4.03125 83.0391 3.1875 86.8125 3.1875C93.0937 3.1875 98.4141 6.16406 101.883 11.6484C103.711 14.5078 104.625 17.7891 104.625 21.4688C104.625 30.4453 99.7031 41.1328 90.4922 52.125C88.7344 54.2109 87.9844 54.75 86.7656 54.75C85.6406 54.75 84.7734 54.1172 82.9219 51.9141C75.7031 43.3594 70.7812 34.0547 69.3516 26.2734C68.8359 23.6016 68.7891 19.7578 69.2109 17.4141C69.5156 15.7266 69.5156 15.5625 69.1172 15.1406C68.6016 14.5547 67.5469 14.5312 67.0547 15.0938C66.3984 15.8203 65.8828 19.6172 66.0469 22.4766C66.6328 32.2969 71.6719 43.1016 80.625 53.7422C83.2969 56.9062 84.375 57.5625 86.7891 57.5625C89.5078 57.5391 90.5391 56.7891 94.4297 51.9375C96.5625 49.2891 100.195 43.875 101.625 41.2734C106.875 31.5938 108.703 22.6875 106.805 15.7266C106.266 13.7344 104.812 10.6641 103.594 8.97656C102.398 7.28906 99.8672 4.78125 98.2266 3.67969C94.5 1.125 89.25 -0.117188 84.4453 0.375Z" />
  <path d="M69.6094 9.23444C68.9531 10.1954 68.8594 10.6876 69.2344 11.3907C69.5156 11.9063 70.5234 12.1876 71.0859 11.8594C71.6484 11.5548 72.5156 10.1954 72.5156 9.586C72.5156 8.92975 71.7891 8.34381 70.9453 8.34381C70.3828 8.34381 70.1016 8.53131 69.6094 9.23444Z" />
  <path d="M83.0156 9.82035C81.3281 10.4063 79.125 11.7891 78.3516 12.75C77.7891 13.4766 77.7891 14.25 78.3281 14.7422C79.0312 15.3985 79.9688 15.2344 81.0234 14.2969C81.5391 13.8282 82.5469 13.1719 83.2734 12.8204C84.3984 12.3047 84.8906 12.211 86.8125 12.211C88.7344 12.211 89.2266 12.3047 90.375 12.8438C92.2266 13.711 93.7031 15.1407 94.6172 16.9922C95.2969 18.3985 95.3672 18.7266 95.3672 20.7657C95.3672 22.6875 95.2734 23.1797 94.7344 24.3282C93.9375 26.0625 92.2266 27.75 90.4453 28.6407C89.1797 29.25 88.8047 29.3204 86.8125 29.3204C84.8438 29.2969 84.4219 29.2266 83.1797 28.6172C80.4375 27.3047 78.4922 24.586 78.2109 21.7735C78.0469 19.9688 77.6484 19.3594 76.6641 19.3594C75.5625 19.3594 75.3281 19.711 75.3281 21.3516C75.3281 25.7813 78.5391 30.0938 82.9453 31.6641C84.6797 32.2735 88.0547 32.3907 89.7656 31.8985C94.9453 30.3985 98.2969 26.0391 98.2969 20.7891C98.2969 15.5157 95.0391 11.1094 90.1172 9.65629C88.1719 9.09379 84.9609 9.1641 83.0156 9.82035Z" />
  <path d="M7.78125 18.3985C4.00781 19.3829 1.125 22.6641 0.539062 26.6954C0.234375 28.8047 0.257812 91.2657 0.585937 93.1875C1.28906 97.6407 4.64062 100.992 9.04687 101.625C11.1094 101.93 77.5547 101.906 79.6172 101.625C82.5938 101.18 85.2188 99.4453 86.7422 96.9141C88.2188 94.4532 88.2188 94.336 88.2188 78.7032C88.2188 69.3985 88.125 64.4063 87.9844 64.1016C87.7031 63.586 86.0391 63.4688 85.7109 63.961C85.6172 64.1016 85.4766 70.7813 85.4062 78.7735L85.2891 93.3047L84.7266 94.5469C84.0469 96.0703 82.0781 97.8985 80.5547 98.4844C79.6172 98.8125 78.3984 98.9063 73.4062 99L67.3594 99.0938V80.6016C67.3594 65.0157 67.3125 61.8985 67.0078 60.7735C66 56.9063 63.375 53.6719 59.8359 51.9844C58.7578 51.4688 57.2344 50.9297 56.4844 50.7891C55.6875 50.6485 51.9375 50.5313 47.7656 50.5313C43.1484 50.5313 40.1953 50.4375 39.7734 50.2735C38.8359 49.9219 38.0625 49.1485 37.5703 48.0704C37.1719 47.2032 37.125 46.336 37.125 36.6563V26.1797L36.6094 25.8282C35.9062 25.336 35.3438 25.3594 34.7812 25.9219C34.2891 26.4141 34.2891 26.6016 34.3594 37.4766C34.4297 48.3516 34.4297 48.5625 34.9453 49.5C35.7422 50.9766 36.4922 51.7735 37.875 52.5235L39.1172 53.2266L47.5547 53.3672C52.3828 53.4375 56.2969 53.6016 56.6953 53.7422C60.2812 54.9844 63.0469 57.7266 64.1016 61.1016C64.5234 62.4375 64.5469 63.5157 64.5469 80.7891V99.0703L36.8438 99L9.11719 98.9297L7.71094 98.2735C5.88281 97.4063 4.875 96.4453 4.05469 94.711L3.375 93.3047V60C3.375 22.6172 3.23437 25.5 5.15625 23.3672C5.76562 22.6875 6.77344 21.9141 7.52344 21.5391C8.71875 20.9766 9.16406 20.8829 11.7891 20.8125C14.9766 20.7188 15.5625 20.4844 15.5625 19.4297C15.5625 19.1485 15.3516 18.6797 15.0938 18.4219C14.6719 18 14.3203 17.9532 12 17.9766C10.2891 17.9766 8.8125 18.1172 7.78125 18.3985Z"/>
  <path d="M21.8906 18.4219C21.3984 18.9141 21.3984 19.0547 21.4688 36.8907L21.5391 54.8673L22.1953 56.7423C23.6953 61.0548 26.6719 64.0313 31.0313 65.5548C32.4609 66.0469 33.0234 66.0938 40.9219 66.211C48.8906 66.3516 49.3125 66.3751 49.9219 66.8438C50.8594 67.5235 51.4219 68.3673 51.6563 69.4219C51.7734 69.9141 51.8906 75.6563 51.8906 82.1719C51.8906 91.0782 51.9609 94.1016 52.1719 94.3126C52.3359 94.4766 52.8047 94.5938 53.2266 94.5938C54.7734 94.5938 54.7266 94.9219 54.6563 80.9766L54.5859 68.461L53.9297 67.1251C53.5547 66.3751 52.8516 65.4141 52.3125 64.9688C50.6016 63.4923 50.0625 63.4219 41.9531 63.4219C36.5859 63.4219 34.2422 63.3282 33.1172 63.0938C28.5938 62.1329 25.0547 58.3126 24.4688 53.7657C24.3516 52.8282 24.2344 45.0235 24.2344 36.3985V20.7657H41.3203C60.1172 20.7657 59.1563 20.836 59.1563 19.3594C59.1563 17.9063 59.9297 17.9532 40.2422 17.9532C22.5469 17.9532 22.3594 17.9532 21.8906 18.4219Z"/>
  <path d="M8.53125 75.6094C7.94531 76.1954 7.94531 76.8048 8.48438 77.461C8.88281 77.9532 9 77.9532 22.1484 78.0001L35.3906 78.0704L36.3516 78.7032C37.9922 79.7813 38.0625 80.1094 38.0625 87.2579C38.0625 94.4532 38.1094 94.6876 39.6563 94.5469C41.0859 94.4297 41.1328 94.1719 41.0625 86.8594C40.9922 80.6719 40.9453 80.3673 40.4297 79.1719C39.7031 77.5548 37.9453 75.961 36.3516 75.4923C35.3672 75.1876 33.0703 75.1407 22.0781 75.1407C9.30469 75.1407 9 75.1407 8.53125 75.6094Z" />
</svg>
</div>
           
          
              <div class="features__item-content">
                <div class="features__item-title aos-init aos-animate font color_new" data-aos="fade-left" data-aos-delay="0"> Удобная локация</div>
                <div class="features__item-text aos-init aos-animate color_new_2" data-aos="fade-left" data-aos-delay="100">Прием осуществляется в оборудованном кабинете в 3-х минутах от м. Китай-город</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="features__item">
<div>
<svg class='fill' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 57 50" ><path d="M16.3492 28.9979C17.9306 28.9979 19.4592 28.8957 20.9057 28.7056V12.8511C19.4593 12.6612 17.9306 12.559 16.3492 12.559C7.3199 12.559 0 15.8789 0 19.9742V21.5825C0 25.6777 7.3199 28.9979 16.3492 28.9979Z" /><path d="M16.3492 37.2755C17.9306 37.2755 19.4592 37.1733 20.9057 36.9835V32.3363C19.4589 32.5263 17.9311 32.6298 16.3492 32.6298C8.46754 32.6298 1.88908 30.1001 0.343854 26.7333C0.118828 27.2238 0 27.7315 0 28.2522V29.8603C0 33.9556 7.3199 37.2755 16.3492 37.2755Z" /><path d="M20.9057 40.9774V40.6162C19.4589 40.8062 17.9311 40.9097 16.3492 40.9097C8.46754 40.9097 1.88908 38.38 0.343854 35.0132C0.118828 35.5035 0 36.0112 0 36.5319V38.14C0 42.2355 7.3199 45.5554 16.3492 45.5554C18.1549 45.5554 19.8917 45.4223 21.5159 45.177C21.1133 44.3536 20.9057 43.4851 20.9057 42.5854V40.9774Z" /><path d="M39.9215 0C30.892 0 23.5723 3.31974 23.5723 7.41525V9.02338C23.5723 13.1187 30.892 16.4386 39.9215 16.4386C48.9508 16.4386 56.2707 13.1187 56.2707 9.02338V7.41525C56.2707 3.31974 48.9508 0 39.9215 0Z" /><path d="M39.9215 20.0722C32.0398 20.0722 25.4613 17.5426 23.916 14.1757C23.6911 14.666 23.5723 15.1737 23.5723 15.6944V17.3025C23.5723 21.398 30.892 24.7179 39.9215 24.7179C48.9508 24.7179 56.2707 21.398 56.2707 17.3025V15.6944C56.2707 15.1737 56.1519 14.666 55.9268 14.1757C54.3817 17.5426 47.8032 20.0722 39.9215 20.0722Z" /><path d="M39.9215 28.3504C32.0398 28.3504 25.4613 25.8208 23.916 22.4539C23.6911 22.9442 23.5723 23.4521 23.5723 23.9727V25.5809C23.5723 29.6764 30.892 32.9963 39.9215 32.9963C48.9508 32.9963 56.2707 29.6764 56.2707 25.5809V23.9727C56.2707 23.4521 56.1519 22.9442 55.9268 22.4539C54.3817 25.8208 47.8032 28.3504 39.9215 28.3504Z" /><path d="M39.9215 37.0754C32.0398 37.0754 25.4613 34.5456 23.916 31.1788C23.6911 31.6693 23.5723 32.177 23.5723 32.6976V34.3058C23.5723 38.4012 30.892 41.7211 39.9215 41.7211C48.9508 41.7211 56.2707 38.4012 56.2707 34.3058V32.6976C56.2707 32.177 56.1519 31.669 55.9268 31.1788C54.3817 34.5455 47.8032 37.0754 39.9215 37.0754Z" /><path d="M39.9215 45.3543C32.0398 45.3543 25.4613 42.8247 23.916 39.4579C23.6911 39.9484 23.5723 40.4563 23.5723 40.9765V42.5848C23.5723 46.6801 30.892 50 39.9215 50C48.9508 50 56.2707 46.6801 56.2707 42.5848V40.9765C56.2707 40.4558 56.1519 39.948 55.9268 39.4578C54.3817 42.8246 47.8032 45.3543 39.9215 45.3543Z"/></svg>
 
</div>
         
            <div class="features__item-content">
                <div class="features__item-title aos-init aos-animate font color_new" data-aos="fade-left" data-aos-delay="100"> Доступные цены</div>
                <div class="features__item-text aos-init aos-animate color_new_2" data-aos="fade-left" data-aos-delay="200">  Premium-процедуры по доступным ценам</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="features__item">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 103 119" class='fill'>
  <path d="M86.125 1.15627C83.5703 2.53909 76.8906 12.9453 75.2265 18.2188C73.5859 23.375 74.9453 28.7422 78.8125 32.2813C82.2812 35.4688 87.1328 36.711 91.5859 35.586C96.5078 34.3203 99.9765 31.1563 101.477 26.5625C102.062 24.7344 102.109 24.3594 101.992 22.0391C101.852 19.1328 101.43 17.6328 99.7187 14.1172C97.3984 9.33596 92.2422 1.97659 90.6719 1.22659C89.1953 0.52346 87.3906 0.500023 86.125 1.15627ZM89.0312 3.82815C89.2422 3.89846 90.25 5.11721 91.2812 6.52346C94.8672 11.375 97.2812 15.6172 98.4531 19.086C98.9687 20.6563 99.0625 21.2188 98.9687 23.0235C98.8515 25.7656 97.9844 27.711 96.039 29.6797C91.7969 33.875 85.3281 34.0156 80.9219 29.961C78.6953 27.9219 77.2422 24.3125 77.5937 21.7344C78.0859 17.9375 80.664 12.875 85.2344 6.68752C87.4375 3.71096 87.8594 3.38284 89.0312 3.82815Z" />
  <path d="M89.6172 19.1562L86.5 21.9687L85.7735 21.2656C83.9453 19.4844 81.8125 21.4062 83.4531 23.375C84.2031 24.2656 85.6328 25.0156 86.5235 25.0156C87.625 24.9922 88.3281 24.5234 91.1406 21.9922C95.1953 18.3828 95.5703 17.8203 94.5625 16.8125C93.6016 15.8516 92.9688 16.1328 89.6172 19.1562Z" />
  <path d="M3.06248 8.96097C1.93748 9.35941 0.976542 10.25 0.437479 11.4453C0.0390416 12.3594 0.0624791 13.6719 1.25779 54.2657C2.19529 86.0938 2.57029 96.4297 2.80467 97.3203C2.99217 97.9532 3.46092 98.8672 3.83592 99.336C4.65623 100.297 6.32029 101.188 7.37498 101.188C8.05467 101.188 8.0781 101.211 8.0781 102.289C8.0781 103.625 8.52342 106.555 9.32029 110.445C9.62498 111.992 9.99998 113.961 10.1406 114.828C10.2578 115.672 10.5625 116.656 10.7969 116.961C12.2265 118.883 15.3437 118.836 16.7969 116.891C17.0781 116.492 17.3594 115.461 17.5703 113.961C17.7578 112.672 18.1562 110.398 18.4844 108.922C18.9531 106.719 19.5625 102.523 19.5625 101.422C19.5625 101.305 19.8437 101.188 20.2187 101.188C21.1328 101.164 22.6094 100.414 23.4765 99.5235C25.0469 97.8594 24.8594 100.953 26.2422 54.7813C27.25 21.1016 27.4609 12.4766 27.2265 11.75C26.875 10.5547 25.539 9.26566 24.3437 8.89066C22.8906 8.46878 4.30467 8.51566 3.06248 8.96097ZM23.7812 12.0782C24.1328 12.3594 24.3437 12.8516 24.414 13.6016L24.5547 14.7032H13.8437H3.15623V13.6719C3.15623 12.8282 3.27342 12.5469 3.7656 12.1485C4.37498 11.6797 4.63279 11.6563 13.8203 11.6563C22.539 11.6563 23.289 11.6797 23.7812 12.0782ZM24.25 19.086C24.25 19.836 23.7344 37.5078 23.1015 58.3672C21.8594 99.7344 22.0234 96.875 20.5703 97.836C20.0078 98.211 19.2578 98.2578 13.7031 98.2578C6.7656 98.2578 6.48435 98.211 5.85154 96.6641C5.6406 96.1016 5.28904 86.4688 4.46873 58.6485C3.88279 38.1407 3.34373 20.5625 3.27342 19.5547L3.17967 17.75H13.7031H24.25V19.086ZM16.375 102.758C16.3047 103.648 15.8828 106.133 15.4375 108.336C15.0156 110.516 14.5703 112.93 14.5 113.656C14.1953 116.211 13.3047 115.953 12.9765 113.234C12.8359 112.227 12.4844 110.281 12.1797 108.922C11.5937 106.227 11.125 103.25 11.125 101.984V101.188H13.8203H16.539L16.375 102.758Z"/>
  <path d="M11.5937 46.7891C9.55465 47.4219 7.51558 49.2031 6.62496 51.1484C5.8984 52.7656 5.87496 55.7891 6.60152 57.4062C7.30465 58.9531 8.82808 60.5234 10.3984 61.2734C11.5468 61.8359 11.9921 61.9297 13.8203 61.9297C15.789 61.9297 16.0234 61.8828 17.4296 61.1094C20.2656 59.5859 21.5781 57.1484 21.3906 53.75C21.3203 52.2031 21.1562 51.6172 20.6171 50.5859C19.2109 48.0312 16.7031 46.5547 13.75 46.6016C12.8828 46.6016 11.9218 46.6953 11.5937 46.7891ZM15.7656 50.0703C17.4531 50.9375 18.3906 52.4609 18.3906 54.3594C18.3671 58.3438 13.7265 60.4062 10.7265 57.7578C9.10933 56.3281 8.64058 54.3594 9.48433 52.4844C10.6093 50 13.4687 48.8984 15.7656 50.0703Z" />
  <path d="M42.0859 30.8281C39.6719 32.0469 39.6016 35.1172 41.9453 36.7344C43.4219 37.7422 43.7031 38.5625 43.7031 41.6094C43.7031 44.1406 43.7031 44.1875 43.1406 44.3281C42.8125 44.3984 42.25 44.75 41.8281 45.0781C40.4688 46.25 40.3984 46.5312 40.2578 53.0469L40.1172 59.0234L39.2266 59.4687C37.9844 60.1015 36.9766 61.4609 36.6719 62.8437C36.4844 63.6875 36.4375 71.6797 36.4844 89.2578L36.5547 114.477L37.2578 115.625C37.7969 116.492 38.2891 116.937 39.2266 117.406L40.5156 118.062H55C70.8203 118.062 70.4453 118.086 71.8984 116.703C72.2734 116.352 72.7656 115.672 73.0234 115.203C73.4688 114.336 73.4688 113.562 73.4219 88.2031L73.3516 62.0937L72.6484 61.0859C72.2734 60.5469 71.5 59.8672 70.9609 59.5625L69.9766 59.0469L69.8359 53.2344C69.6953 47.8672 69.6484 47.3047 69.1797 46.3437C68.5938 45.125 67.4688 44.2812 66.1562 44.0937L65.2656 43.9297V42.5C65.2656 40.8359 64.7969 38.7969 64.0703 37.414C62.9922 35.2812 60.5781 33.3125 58.2344 32.6562C57.1328 32.3515 44.1484 30.4062 43.2109 30.4062C43.0234 30.4062 42.5312 30.5937 42.0859 30.8281ZM50.7344 34.5312C57.8828 35.4922 58.6562 35.75 60.2969 37.5547C61.6094 38.9844 62.2188 40.5781 62.2188 42.6172V44H54.5078H46.7969L46.7031 40.8828C46.6328 38.2812 46.5391 37.6484 46.1172 36.8515C45.5547 35.7969 44.6641 34.8125 43.8203 34.25C43.1406 33.8047 43.2578 33.4062 44.0078 33.5703C44.2891 33.6172 47.3125 34.0625 50.7344 34.5312ZM66.25 47.4453C66.7422 48.0078 67.1172 57.875 66.6719 58.414C66.4141 58.7187 64.7969 58.7656 55.0938 58.7656C46.6094 58.7656 43.7266 58.6953 43.5156 58.4844C43.3281 58.2969 43.2344 57.0781 43.2578 54.4531C43.2578 49.8828 43.4922 47.5625 43.9609 47.2578C44.1484 47.1406 49 47.0469 55.0938 47.0469C65.1016 47.0469 65.9219 47.0703 66.25 47.4453ZM65.9219 83.7734C65.8516 108.219 65.9453 106.602 64.2812 107.797L63.5078 108.336H55.1406C47.0547 108.336 46.7734 108.312 46.1406 107.844C45.7891 107.586 45.2734 107.07 45.0156 106.719C44.5234 106.086 44.5234 105.875 44.4531 83.9375L44.4063 61.8125H55.1875H65.9688L65.9219 83.7734ZM41.3594 83.914C41.3594 102.641 41.4062 105.969 41.7109 106.977C42.1562 108.453 43.5859 110.117 45.0625 110.844C46.1641 111.383 46.2109 111.383 55.1875 111.383C64.0469 111.383 64.2344 111.383 65.1719 110.867C66.7422 110.023 67.5391 109.227 68.2422 107.797L68.8984 106.461L69.0156 84.1953L69.1328 61.9297L69.7891 62.5625L70.4219 63.1953V88.4609C70.3984 107.961 70.3516 113.82 70.1172 114.102C69.4375 114.992 69.1797 115.016 54.9062 115.016C39.7422 115.016 40.3281 115.062 39.7422 113.68C39.5547 113.187 39.4844 106.531 39.5312 88.1328L39.6016 63.2656L40.1641 62.6562C41.4062 61.3203 41.3594 60.3359 41.3594 83.914Z" />
  <path d="M46.9844 72.4063C46.2812 72.7579 45.7422 73.2735 45.4141 73.8829C44.8984 74.7735 44.875 75.0782 44.875 80.1407C44.875 85.6485 44.9688 86.3516 45.8828 87.3126C47.0781 88.6016 47.3359 88.6485 54.0156 88.7188C61.0469 88.8126 62.3594 88.7188 63.4141 87.9923C65.125 86.8204 65.1484 86.7735 65.2188 80.6095C65.2891 75.172 65.2891 75.0313 64.7266 74.0235C64.3516 73.297 63.8594 72.8048 63.1562 72.4298C62.1719 71.8907 62.0078 71.8907 55.0938 71.8907C48.2266 71.8907 47.9922 71.9141 46.9844 72.4063ZM61.8438 75.3126C62.1719 75.6173 62.2188 76.4141 62.2188 80.3282C62.2188 84.8751 62.1953 84.9923 61.7031 85.3438C61.2578 85.672 60.2266 85.7188 55.0703 85.7188C49.9141 85.7188 48.8828 85.672 48.4375 85.3438C47.9453 84.9923 47.9219 84.8751 47.9219 80.2345C47.9219 76.8595 47.9922 75.4298 48.2031 75.2188C48.4141 75.0079 50.2422 74.9376 54.9766 74.9376C60.5781 74.9376 61.5391 74.9845 61.8438 75.3126Z" />
</svg>
              </div>  
        
              <div class="features__item-content">
                <div class="features__item-title aos-init aos-animate font color_new" data-aos="fade-left" data-aos-delay="100"> Сертифицированные препараты</div>
                <div class="features__item-text aos-init aos-animate color_new_2" data-aos="fade-left" data-aos-delay="200"> Услуги выполняются на оригинальных препаратах, сертифицированных на территории РФ и прошедших клинические испытания</div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  </section>

  <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div>
     <h2 class=" section__title aos-init aos-animate font" data-aos="fade-left">
      <div class='text06'>
      {setO_sebe1Ref?.current?.name} 
    
      </div>
      <input class='text07' defaultValue={setO_sebe1Ref?.current?.name} onChange={ e => setO_sebe2(e.target.value)}/>
    
    
         <svg class='mar_lf' onClick={function5} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
           <svg  width='47px' class='pd_f' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
   </h2>
 
      <div class="row mission__body g-3 g-xl-5">
        <div class="col-12 col-xl-5 aos-init aos-animate" data-aos="fade-up">
          <div class="mission__text">
        
          {setO_sebeRef?.current?.map(i =>
          <O_sebe23 i={i} setO_sebe4={setO_sebe4} setO_sebe3={setO_sebe3} />

          )}
 <input class='text08 file' onChange={selectFile1} placeholder={'Иконка'} type="file" />
 <button class='d_n' onClick={function613}>сохранить</button>
          </div>
        </div>
        <div class="col-12 col-xl-7">
          <div class="mission__image aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <img  class='img_avtor' src={process.env.REACT_APP_API_URL + setO_sebe1Ref?.current?.img} alt=""/></div>
        </div>
      </div>
    </div>
  </section>


  <section class="section mission">
    <div class="container">
      <div class='line_flex'>
      <div class='horizontal_line'></div> <h2 class="uslugi section__title aos-init aos-animate class01" data-aos="fade-left">Услуги</h2>
      </div> 
      <input class='context_' defaultValue={setO_sebe1Ref?.current?.name} onChange={ e => setO_sebe2(e.target.value)}/>
  
       <svg class='mar_lf' onClick={function61} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <svg width='47px' class='pd_f' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
    
       <div class='button_group'>
        
     
       {setUslugiRef?.current?.map(i =>
      
<Uslugi12 function1={function1} i={i} get={get}/> 
 
       )} 

{/* 
          <div class='d_flex ml_5 w_100'>
        
          <div class='but w_100 but_3'>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0"  class='fill1 mar_' width="50px" height="50px" viewBox="0 0 180.000000 180.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"  stroke="none">
<path d="M386 1470 c-36 -11 -83 -55 -90 -84 -3 -14 -21 -27 -56 -39 -66 -24 -152 -107 -188 -184 -25 -53 -27 -68 -27 -183 0 -122 1 -127 33 -192 18 -37 48 -80 66 -95 24 -21 37 -44 49 -91 47 -173 130 -249 264 -240 49 3 72 10 105 34 45 32 78 78 64 91 -4 4 -20 -6 -34 -24 -43 -51 -89 -73 -153 -73 -118 0 -191 87 -230 273 -25 123 -25 200 1 242 34 55 129 116 202 130 35 7 38 5 56 -32 22 -42 59 -81 138 -142 37 -28 57 -53 69 -85 10 -25 21 -46 26 -46 15 0 19 18 10 44 -8 20 -5 34 14 69 42 75 55 217 20 217 -8 0 -12 -21 -11 -68 0 -51 -6 -79 -23 -116 l-24 -48 -24 25 c-24 24 -25 25 -9 71 18 52 20 104 6 126 -14 22 -24 3 -21 -39 1 -21 -5 -55 -13 -75 -13 -32 -18 -36 -35 -27 -41 22 -100 103 -121 166 -12 35 -46 101 -76 147 -61 93 -69 136 -33 181 43 56 141 58 242 4 118 -62 186 -168 208 -323 17 -125 -18 -291 -72 -340 -20 -18 -26 -44 -10 -44 18 0 70 74 86 119 44 130 38 304 -15 419 -38 82 -117 165 -194 202 -66 32 -153 45 -200 30z m-96 -147 c0 -5 3 -18 6 -30 5 -16 2 -23 -8 -23 -18 0 -94 -64 -109 -91 -20 -37 3 -41 32 -6 16 20 46 46 66 58 l36 23 23 -29 22 -28 -42 -27 c-46 -29 -86 -74 -86 -96 0 -23 16 -16 44 21 25 33 72 65 95 65 12 0 36 -35 45 -66 5 -17 0 -22 -43 -33 -27 -7 -71 -26 -98 -43 -109 -69 -138 -117 -131 -225 3 -40 1 -73 -3 -73 -16 0 -58 75 -74 133 -12 41 -16 86 -13 150 4 109 32 181 96 245 55 55 142 100 142 75z"/>
<path d="M529 709 c-8 -15 -8 -24 0 -32 6 -6 11 -25 11 -43 0 -26 22 -60 117 -179 l117 -146 83 83 83 83 -23 21 c-12 12 -78 68 -147 124 -106 86 -129 101 -152 96 -15 -3 -30 -1 -33 4 -11 17 -44 11 -56 -11z m41 -19 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m76 -11 c6 -11 -52 -79 -68 -79 -16 0 -7 44 14 67 23 25 43 29 54 12z m126 -100 l89 -72 -57 -58 c-32 -32 -59 -57 -60 -56 -1 1 -34 42 -73 92 l-70 90 36 37 c21 21 39 38 41 38 2 0 45 -32 94 -71z m68 -164 c-36 -36 -67 -60 -69 -54 -5 15 99 119 118 119 9 0 -13 -29 -49 -65z"/>
</g>
</svg>
</div>
            Уходовая косметика
          </div>
          </div>

          <div class='d_flex w_100'>
         
          <div class='but w_100 but_4 ml_10'>
          <div >
          <svg xmlns="http://www.w3.org/2000/svg" class='ml_4 fill1 margin'version="1.2" viewBox="0 0 564 391" width="50" height="50">
	<title>IMG-20240116-WA0008[1]-vectormaker-co-svg</title>

	<path id="Layer" fill-rule="evenodd" class="s0" d="m159.5 27.3c-8.9 3.5-13.3 7.7-19.5 18.7-2.3 4.1-6.1 9.5-8.4 12-2.3 2.5-7.1 8.5-10.6 13.4-9.9 13.6-10.2 13.9-9.6 9.6 2.5-15.5 2.5-38.9 0.1-45.3-2.8-7.2-12 10.2-13.2 25-0.7 9 0.9 17.7 5 25.9l3 6.2-5 10.4c-2.8 5.6-6.6 14.3-8.3 19.3-1.8 4.9-3.5 9.7-3.8 10.5-0.6 1.5-1.6-6.4-2.7-20.2-0.8-9.8-2.9-13.1-6.7-10.6-9.5 6.2-8.4 31.7 1.8 43.7l3.6 4.2-1.2 11.6c-1.3 12.4-0.7 25.2 1.5 36.3l1.3 6.5-3.1-3.9q-0.9-1.1-1.8-2.3-0.9-1.1-1.8-2.2-0.9-1.1-1.8-2.2-0.9-1.2-1.8-2.3c-4.9-6.1-12.4-11.6-16.2-11.9-2.6-0.2-2.8 0-2.5 3.2 0.8 9.9 12.7 25.2 23.7 30.4 3.3 1.6 6.7 3.2 7.5 3.6 0.8 0.5 3.3 5.7 5.6 11.7 2.2 6 6.4 15.5 9.2 21.1 2.9 5.7 5 10.3 4.6 10.3-0.3 0-3.7-1.8-7.5-4-16.4-9.7-24.4-9.4-19.4 0.6 5.8 11.7 14.9 17.6 28.6 18.4l8.6 0.5 7.8 10.4c7.6 10 18.6 22.7 21.3 24.4 2.6 1.7 1 2.5-2.2 1.2-5.2-2.2-20.5-3.9-24.6-2.8-4.7 1.3-4.4 3 1.4 7.4 9 6.8 24.2 9.8 35 6.8 3.6-1 4.2-0.8 9 2.4 11.8 8.1 29 15.4 39.9 17 4.2 0.7 5.1-1 1-1.9-9.7-2.1-19.2-6.8-19.9-9.9-2.6-12.1-15-31.5-20.2-31.5-2.7 0-0.7 9.6 4 19.1 4.1 8.3 4.2 8.6 1.8 7.4-4.2-2.2-14.1-9.8-20.6-15.8l-6.1-5.7-0.7-7.4c-1.6-17.9-10.5-37.3-15.6-34.1-1.6 1-1.2 8.2 0.9 17 1.1 4.4 1.8 8.1 1.6 8.3-1 1.1-18.5-24.9-23.7-35.5l-4.1-8.2 2.1-3.3c5.2-8.5 6.9-30.8 3.2-43.1-3.1-10.5-10.2 3.1-10.8 20.7-0.4 11.5-0.5 11.9-1.9 8.5-2.8-6.7-7.4-23.6-8.9-32.7l-1.5-9.4 6.3-5.8c4.6-4.2 7.3-7.7 9.9-13.1 6.4-12.9 9-25.5 5.2-24.7-2.7 0.5-12.7 13.1-17.2 21.6l-4 7.7-0.1-4c0-4.6 2.6-21.4 4.1-26.5 0.6-1.9 2.4-7.4 4.1-12.2l3-8.7 5.7-1.2c13.6-2.7 38.1-23.3 33.3-28.1-1.6-1.6-16.8 4.9-26.2 11.2-5.1 3.4-5.3 3.5-3.9 0.9 10.3-19.6 26.6-40.5 34.2-44 9.4-4.2 17.2-9.7 20.5-14.3 3.4-4.7 8.2-14.2 8.2-16.3 0-1.6-6.4-1.6-10.5 0zm234.5 0.3c0 3.6 6.5 14.9 11.2 19.6 2.9 2.8 8.2 6.3 13.6 9 10.9 5.3 20.8 16.6 34.5 39.4 5 8.3 4.7 9-1.9 4.8-11.6-7.4-24.1-12.4-25-10-2.4 6.3 22.3 26.2 35 28.1l4.3 0.7 3.1 9.1c4.9 14.5 8.2 30.7 8.1 39.7v3.5l-2.4-5.2c-6.4-14.2-21.5-30.7-21.5-23.5 0 11.1 10.6 31.3 20.5 39 2.3 1.8 2.9 3 2.7 5.5-0.5 7-3.4 20-6.9 30.8l-3.7 11.4-0.7-11.1c-1-19-8.4-31.2-11.5-19-3.5 13.5-2.5 28.4 2.5 39.2l2.9 6.2-4.7 8.9c-5.3 9.9-16.3 26.9-21 32.3l-3 3.5 1.8-6.2c2.4-8 3.7-19.8 2.2-20.7-5.2-3.3-14.8 16.8-15.9 33.2l-0.5 8.3-7 6.5c-10.6 9.8-27.6 20.6-21.5 13.7 3.8-4.3 8.8-17.4 8.8-23.1 0-9.6-18.5 14.2-21.1 27.2l-1.2 5.5-10.6 3.7c-5.8 2.1-10.8 3.9-11 4.1-2.4 1.8 9.8-0.2 18.3-3.1 6.4-2.2 13.7-6 22.9-11.8 5.2-3.4 8.3-4.8 9.5-4.3 4.4 1.7 12.6 2.3 18.4 1.4 10-1.6 25.3-10.7 23.3-13.8-0.9-1.6-17.2-1.3-23.8 0.4-3.2 0.8-6.3 1.5-6.9 1.5-0.6 0 2.3-3.5 6.3-7.8 4.1-4.2 11-12.5 15.3-18.4l8-10.7h7.9c13.2 0 23.8-6.7 29.3-18.4 4.7-10.2-3.6-10.3-20.2-0.2-4.1 2.4-7.4 4.3-7.4 4.1 0-0.2 2.9-6.3 6.4-13.7 3.5-7.4 7.7-16.9 9.2-21.2l2.7-7.9 7.4-3.5c12.5-5.9 25.3-21.8 25.3-31.4 0-8.3-15.6 2.3-24.8 16.8-3.7 5.9-4.1 5.4-2.5-3 1.1-5.3 1.3-12.4 1-27.4l-0.4-20.2 2.4-2.2c10.3-9.7 12-35.5 2.8-43.9l-2.7-2.5-1.8 2.3c-1.9 2.3-2.2 4.4-3.8 22.2-0.5 5.2-1.1 8.8-1.4 8-0.4-0.8-1.8-4.9-3.3-9-1.5-4.1-5.2-12.6-8.1-18.8-6.4-13.2-6.1-11.5-2.4-19 6.7-13.5 6.4-29.8-0.7-44.1-4.6-9.1-6.6-10.1-8.4-3.9-1.6 5.5-1.6 27.8 0 38.1 1.5 9.5 1.2 10-2.5 4.5-4.8-7.2-11.5-16-16.9-22.3-2.8-3.3-6.7-8.9-8.6-12.5-6.1-11.7-14.7-18.5-24.9-19.7-4.4-0.5-5-0.4-5 1.3zm-198.2 69.9c-1.4 3.1-0.8 3.8 16.2 18.7 6.9 6.1 12.6 11.4 12.8 11.8 0.1 0.4-2.4 6.7-5.8 13.9-3.3 7.3-6 13.6-6 14.1 0 1.4-1.6 1.2-3.2-0.3-14.2-13.8-16.8-15.7-22.1-15.7-9.8 0-16.8 9.1-13.3 17.3 1.1 2.9 1.2 3.9 0.3 4.1-4 1.2-4.7 1.7-4.7 2.8 0 0.8 8.3 6.9 18.4 13.7l18.4 12.4-2.5 3.5c-3.6 5.3-3.8 7.6-1.3 13.5 4 9.4 5 9.6 12 3.1 5.6-5.3 5.6-5.3 3.4 2.4-2 6.9-1.1 11.8 4.3 23l3.7 7.7 0.4-5c0.4-6.9 1.4-7.3 5.4-2.6 4.8 5.6 4.9 4.7 1.1-6.6-2.7-8.1-4.4-19.3-3-19.3 3.2 0 27.7 21.7 27.7 24.5 0 0.7 0.8 1.9 1.7 2.6 0.9 0.8 6.1 8.1 11.6 16.4 12 18.2 13.1 19.5 17.1 19.5 4.6 0 15.3-7 14-9.1-0.3-0.5 0-0.9 0.7-0.9 0.7 0 1-0.3 0.6-0.6-0.3-0.4 2.2-3.5 5.7-6.9 5.8-5.8 6.4-6.7 6.4-10.7 0.1-4.3-2.2-8.3-4-7.2-0.4 0.3-0.7 0.1-0.6-0.3 0.2-0.5-2.2-3.3-5.2-6.1l-5.5-5.2 4.5 0.8c19.8 3.2 22.8 0.1 33-34.6 1.6-5.7 2.5-7.2 3.6-6.8 0.9 0.3 2 0.6 2.6 0.6 0.6 0 0.9 5 0.7 13.7-0.3 13.3-0.4 13.8-2.9 15.9-2.2 1.9-2.5 3.1-2.6 8.6-0.1 3.4-0.5 12.3-0.9 19.6-0.8 12.8-0.7 13.4 1.1 13.1 1-0.1 3.1 0.1 4.6 0.5 1.6 0.5 3.5 0.3 5-0.5 1.2-0.7 2.8-1.2 3.4-1.1 2.1 0.4 2.2-3.6 0.3-15-1-6.2-1.8-13.9-1.7-17.1 0.1-4.6-0.3-6.2-2.1-8-2.3-2.6-2.6-6-1.5-20.3l0.7-8 13.6 3.3c23.9 5.9 28.9 6.7 30.6 5.3 3.1-2.6 1.6-4.8-8.3-11.9-5.3-3.9-13.3-9.9-17.7-13.3-11.3-8.8-30.1-22.2-44-31.5-11.2-7.5-12.9-8.3-26.5-12.2-18.7-5.5-50.2-16-75.2-25-22.1-7.9-23.4-8.2-25-4.6z"/>
	<path id="Layer" fill-rule="evenodd" class="s1" d="m169 28.1c0 1.8-4.2 10.3-6.9 13.9-4.3 5.8-8.2 8.8-17.7 13.5-8.3 4.1-9.8 5.3-14.7 11.8-9 11.6-12.4 16.3-13.7 18.8-0.7 1.3-1.6 2.6-2 2.9-1.1 0.8-9.1 15.2-8.7 15.7 0.4 0.3 4.2-1.8 13-7.1 3.5-2.1 16.5-7.6 17.8-7.6 2.6 0-2.7 8-9.6 14.3-4.5 4.2-14.2 10.7-15.9 10.7-0.8 0-1.8 0.4-2.1 1-0.3 0.5-1.8 1-3.3 1-5.7 0-7.1 1-9.3 6.9-4.2 11.2-7 21.8-8.6 33.4-2.1 15.2-1 17.1 4.1 6.6 3.7-8 14.1-21.2 17-21.7 1.5-0.3 1.6 0.2 1.1 3.5-2.2 12.8-8.6 25.4-16.7 32.8l-6.1 5.5 0.6 6.8c0.8 7.8 6.4 29.3 9.9 37l2.3 5.4v-11.9c0.1-12.4 2-20 6.5-25.5l1.8-2.3 1.1 2.8c4.2 10.8 3.5 30.8-1.4 41.2-1.4 2.8-2.5 5.9-2.5 6.9 0 2.5 7.2 16.3 13.4 25.5 3.1 4.6 5.3 8.8 4.9 9.4-0.3 0.5-0.1 0.7 0.5 0.3 0.5-0.3 1.9 0.9 3 2.6 2.7 4.4 8.8 10.1 7.8 7.3-4.1-10.6-6.2-26.5-3.6-26.5 5.6 0 13.7 19.8 14.1 34.5l0.2 6.5 6.1 5.7c3.4 3.2 7.5 6.9 9.3 8.3 1.7 1.3 2.9 2.8 2.7 3.2-0.3 0.4 0.3 0.8 1.3 0.8 1 0 2.4 0.9 3.1 2.1 1.5 2.4 1.1 2.2-4.1-1.4-2.4-1.6-3.3-1.8-5.3-0.8-3.2 1.4-17.7 1.4-22.3 0-9.1-2.9-19.1-9.5-17.7-11.7 1.3-2.2 19.3-1.1 25.6 1.5 0.8 0.3 2 0.7 2.5 0.9 0.6 0.1 1.9 0.6 2.9 1 3.1 1.2 0.7-2.1-6.2-8.9-1.9-1.7-5.9-6.5-8.9-10.5-3-4-6.6-8.5-8-10-1.4-1.5-3.6-4.4-4.9-6.5-2.4-3.7-2.5-3.7-9.2-3.8-11.9-0.1-15.3-1.3-22.2-7.5-4.9-4.4-10.4-12.9-9.6-14.9 1.4-3.7 11.7-0.5 23 7 2.9 1.9 5.7 3.5 6.2 3.5 0.5 0-2.1-6.1-5.7-13.5-3.6-7.4-8.1-17.8-10-23-3.2-9-3.6-9.6-6.9-10.5-11.8-3.2-29-22.6-29-32.7 0-6.8 13.3 2.5 22.9 16.1 5.6 7.9 7.6 9.5 6.1 4.8-2.7-8.1-3.7-32-2-46.2 0.8-7.4 0.8-7.5-2-10.5-10.5-11-12.3-38.5-2.8-43.6 3.8-2 4.9 0.7 5.9 14.2 1.2 15.6 1.8 19.1 3 18.4 0.5-0.4 0.9-1.3 0.9-2.1 0-2.7 7.1-20.7 12.2-30.9l5-10-2.5-4.5c-8.4-15.2-8.1-33.5 0.8-48.7 1.4-2.4 3-4.3 3.6-4.3 3.4 0 4.8 20.4 2.6 38-0.8 6.3-1.2 11.9-1 12.3 0.3 0.4 2.7-2.4 5.4-6.3 5-7.3 11.4-15.7 13.4-17.5 2.6-2.5 8.5-10.6 12.2-17 4.9-8.3 8.4-11.9 15-15.1 4.9-2.4 12.3-3.2 12.3-1.3zm228.3-1.1c9.7 0 18.7 6.4 24.8 17.5 2.2 4.1 7.8 12 12.5 17.7 4.7 5.7 10.6 13.4 13.2 17.3 5.6 8.2 6 7.5 4.3-7.1-2-16.6-1-35.1 2-36.9 1.3-0.9 5.8 5.9 8.1 12.1 4.6 12.6 3 32.8-3.2 40.6-2.8 3.6-2.7 3.9 4.4 18.9 3.6 7.4 7.7 17.3 9.2 21.9l2.8 8.5 0.8-4c0.4-2.2 1.1-9.5 1.6-16.3 1.1-15.2 2.5-17.7 7.2-12.5 8.2 9.1 6 31.2-4.2 41.9l-3 3.2 1.3 9.7c1.3 10.8 0.7 28.6-1.5 39.7-1.6 8.2-1 8.4 3.6 1.5 5-7.4 11.5-14.5 15.9-17.3 4.4-2.7 9.5-3.3 8.6-1-0.3 0.8-1.1 3.3-1.7 5.4-2.9 10.8-19.3 27.2-27.1 27.2q-3.4 0-6.5 9.5c-0.9 2.7-5 12.2-9 20.9-4.1 8.8-7.2 16.2-6.9 16.4 0.2 0.2 3.7-1.6 7.7-4.1 16.5-10.3 24.7-10.6 19.4-0.6-6.3 11.6-20.2 19-32.4 17.2-2.9-0.5-3.8 0-7.3 3.7-2.1 2.3-3.9 4.6-3.9 5.1 0 0.5-0.5 0.9-1.1 0.9-1 0 2.8-6.2 4.3-6.8 0.4-0.2 0.8-0.7 0.8-1.1 0-0.4 3.6-6.7 8-14.1 9.8-16.3 10-16.7 6.7-23.3-3.9-7.7-5.1-14.7-4.4-26.2 0.6-10 2.3-17.2 4.2-17.7 3.8-0.9 8.9 18.3 7.9 30-0.8 10.5 1.2 7.7 6-8 7.4-24.3 8.1-32.7 3-35.9-2-1.2-5.6-4.8-8-8.1-7.2-9.8-14.1-30.8-10.1-30.8 2.4 0 13.6 14.6 17.5 22.7 1.9 4 3.9 7.3 4.4 7.3 2.6 0-2.5-28.1-7.8-43.5-1.9-5.5-3.4-10-3.4-10.1 0-0.1-2.1-0.5-4.8-0.8-12.4-1.8-38.4-22.7-33.8-27.3 1.1-1.2 15.4 5.4 25.1 11.6 7.9 5 7.1 2.3-5-16.4-12-18.5-17.7-24.4-28.2-30-13.5-7.1-19.5-13.5-24.3-26.1-0.9-2.2-0.7-2.4 2.3-2.4zm-174.8 76.4c5.5 2 13.4 4.8 17.5 6.2 4.1 1.4 8.5 2.9 9.8 3.4q0.5 0.3 1.1 0.5 0.5 0.3 1.1 0.5 0.6 0.2 1.1 0.5 0.6 0.2 1.1 0.4c1.3 0.5 7.7 2.6 14.3 4.6 6.6 2 13.1 4 14.5 4.5 1.4 0.4 4.3 1.3 6.5 1.9 2.2 0.6 6.9 2 10.4 3.1 3.5 1.1 7 2 7.7 2 1.2 0 12.6 7.5 32.9 21.6 17.1 11.9 52 38.7 52.3 40.2 1.1 4.2-7.4 3.3-33.3-3.7-8.2-2.3-11.1-2.7-11.7-1.8-0.4 0.7-0.8 7.1-0.8 14.2 0 12.1 0.1 13.1 2.1 14.3 1.8 1.1 2 2.1 1.7 6-0.3 2.6 0.4 9.4 1.4 15.2 2 11.7 2.3 19 0.8 19-0.6 0-1-0.6-1-1.3-0.1-0.7-0.6-0.5-1.4 0.6-1.1 1.5-2.4 1.7-6.8 1.4l-5.3-0.4-0.3-5.9c-0.2-3.3 0.2-9.7 0.9-14.4 0.6-4.7 1.1-10.6 1-13.3-0.2-3.9 0.2-5.1 2.3-7.1 3.6-3.3 4.1-30.6 0.6-30.6-1.1 0-2.3-0.1-2.7-0.3-0.3-0.1-1.2 1.6-1.9 3.8-12 39.6-12.5 40.2-32.6 37.6-6.9-0.9-8.8-2-18.9-10.6-2-1.6-9.3-7.5-16.4-13-7-5.5-13.3-10.5-13.9-11.1-3.4-3.5-18.4 7.6-20.8 15.3-1.2 3.9-2.8 5.8-2.8 3.3 0-0.6-0.6-1-1.4-1-3.6 0-2.7 10.3 2 22.7 1.3 3.5 2.4 6.6 2.4 6.8 0 0.3-1.6-1.3-3.6-3.5-4.3-4.7-5.1-4.5-6 1.6l-0.6 4.5-1.5-2.8c-6.2-11.7-7.5-20.1-4.3-28.5 2.6-6.9 2-7-4.4-1-6.9 6.5-8.1 6.5-11.1-0.1-3.1-6.6-3.1-8.9 0-13.5 1.4-2 2.5-4 2.5-4.4 0-0.4-8.3-6.4-18.5-13.3-10.2-6.9-18.5-13-18.5-13.5 0-0.5 1.8-1.4 4-2 3.8-1 4.2-0.9 7.8 2.3 17.7 16.1 28.6 24.7 31.1 24.3 1.4-0.3 4.6-0.6 7.1-0.7 3.6-0.2 5.6-1.2 9.8-4.6 3-2.4 6-4.3 6.8-4.3 3.4 0 0.4-2.7-22.3-20.7-1.2-1-1.1-1.8 1-6.5 12.1-26.2 11.5-24 8-26.8-17-13.2-29-26-26.6-28.3 1.3-1.4 8.8 0.6 25.8 6.7zm50.2 144.5c17.9 17.4 18.3 17.6 18.3 11.9 0-6.7 5.5-15.7 12.1-19.7 3.6-2.2 9.3-2.8 10.4-1.1 0.4 0.6-0.9 1-3.3 1-12.5 0-25 25.3-13 26.2l3.9 0.3-4.3 2.8c-9.8 6.3-11.1 5.6-24-14-5.8-8.7-11.4-16.7-12.6-17.7-1.2-1.1-2.2-2.3-2.2-2.9 0-0.5 6.6 5.5 14.7 13.2zm42.2 0l-0.1 2.6-1-2.8c-1.2-3.3-3.9-3.5-8.7-0.6l-3.4 2 3.4 3.5 3.3 3.4-2.9 3c-7.6 8-11.6-2.2-4.2-10.7 1.7-1.9 4-3.9 5.1-4.3 5.2-2.1 8.7-0.5 8.5 3.9zm-14.9 5.5c-2.2 5.8 0.4 8.6 4.3 4.7l2.1-2.1-5.3-5.4zm132.8 9.7c2 0 1 12.1-1.8 20.9-2.3 7.6-2.3 7.8 1.5 4.8 5.3-4.2-2.3 5.9-12.9 17-3.8 4-6.7 7.5-6.4 7.8 0.3 0.3 3.8-0.4 7.9-1.4 11.9-3.2 22.8-3.8 22.8-1.3 0 3.4-6.7 8.1-15.9 11.1-4.4 1.4-13.7 1.4-21.7-0.1l-6.3-1.2 3.7-3.1c13-10.8 13.9-12 14.7-19.8 1.3-13.8 5.6-26.8 10.8-32.5 1.2-1.2 2.8-2.2 3.6-2.2zm-244.9 72.2c0 1.3-7.7-2.2-10.8-5-2-1.8-2.9-3-1.9-2.6 2.4 0.8 2.3 0.5-2.2-7.3-3.9-6.7-7.5-17.8-6.5-19.5 3.3-5.3 21.4 23.7 21.4 34.4zm209.7-33.5c-0.3 1-0.8 3.3-1.2 5.3-0.8 3.7-5.5 13.7-8.7 18.2-1.7 2.5-1.7 2.8-0.2 2.8 2.7 0 0 2.5-5.8 5.4-4.9 2.4-7.8 2.6-5.9 0.2 0.5-0.6 1.1-2.9 1.5-5.1 0.9-6.1 6-15.4 12.2-22.3 5.5-6.1 9.1-8.1 8.1-4.5zm1.8 20.3c1 0 1.6 0.2 1.3 0.6-0.4 0.3-1.2 0.3-1.9 0-0.8-0.3-0.6-0.5 0.6-0.6z"/>
	<path id="Layer" fill-rule="evenodd" class="s2" d="m241.5 131.5c10.4 9.7 20.8 18.7 23 20 4.2 2.5 43.4 15 71.8 22.9 3.1 0.9 5.7 2.1 5.7 2.7 0 0.7-0.7 0.8-1.7 0.4-1-0.4-5.6-1.8-10.3-3.1-21.5-6.3-57-17.3-62.4-19.3-4.2-1.7-11-7.3-30.1-25.1-16.7-15.6-28.3-25.5-33.8-28.8-1.5-0.9-2.7-2-2.7-2.5 0-2.9 16.6 10.5 40.5 32.8zm-13.4-1.5c0.8 0 7.7 5.9 15.4 13.1 21.4 20.1 18.8 18.9 81 36.6 14 4 14.1 4 13.3 4.9-1.2 1.1-66.7-18.5-73.8-22.1-3.7-1.9-9.5-6.7-18.5-15.3-4.4-4.2-10.4-9.8-13.4-12.4-2.9-2.7-4.7-4.8-4-4.8zm70.4 14.5c1.7 1.9 10.3 7.4 19.5 12.6 9.1 5 19.5 10.9 23.2 13.1l6.8 3.9-0.7 20c-0.6 19.9-0.6 20 1.7 22.1 1.9 1.8 2.1 2.8 1.7 6.3-0.4 2.4 0.2 9.1 1.3 15.6 2.2 12.7 2.5 17.9 1 17.9-0.6 0-1-0.7-1-1.5 0-2.2-1.7-1.8-2.3 0.5-0.5 2.1-6 2.9-7.1 1.1-0.4-0.5-1.5-0.7-2.6-0.4-2.4 0.6-2.7-4.3-0.8-17.7 0.6-4.7 1-11 1-14.1-0.2-4.7 0.2-5.9 2.3-7.9 2.5-2.3 2.5-2.4 2.5-20.9v-18.6l-14.8-8.4c-8.1-4.7-18.5-10.7-23.2-13.5-6.9-4.1-9.2-4.9-12.5-4.7-7.1 0.4-12.8-6.9-7.8-9.8 3.6-2.1 7.1-0.8 11.8 4.4zm-102.5 32.5c7.2 6.2 13 11.6 13 12.1 0 1.8-2.1 0.8-9.2-4.3-4-2.8-11.2-7.7-16.1-10.9-15-9.9-15.2-10.1-8.9-11.9 3-0.8 1.6-1.8 21.2 15zm69.5-5c-0.3 0.5-3.1 1-6.1 1-6.8 0-11.2 1.8-14.7 5.9-2.7 3.3-3.9 6.7-1.5 4.3 1.4-1.4 2.8-1.6 2.8-0.3 0 0.5-0.9 1.3-2 1.6-1.1 0.3-2 1.2-2 1.9 0 0.8-0.8 2-1.7 2.7-1.5 1.2-1.6 1.2-0.9-0.6 1.2-2.8 0.8-6.7-0.7-7.7-1.1-0.7-0.2-1.2 1.7-0.9 0.5 0.1 2.6-1.4 4.7-3.5 2-2 5.2-4 7.1-4.4 5-1.2 14-1.2 13.3 0zm12.4 6.7c-1.2 3.7-2.4 6.2-2.6 5.6-0.4-1.1 2.1-10.4 3.4-12.6 1.6-2.8 1.2 1.2-0.8 7zm91.2 5.3c19.7 6 19.3 5.9 18.6 6.6-0.3 0.3-3.6-0.3-7.4-1.4-18.4-5.4-27.9-8.5-28.8-9.3-1.6-1.6 0.9-1 17.6 4.1zm-139.6 5.4c1.1 1.4 2.2 1.7 4.5 1.3 3.3-0.7 4.2 0.8 1 1.8-1.2 0.4-4.1 2.9-6.7 5.6-2.5 2.7-5.1 4.9-5.6 4.9-0.6 0 1-2.2 3.6-4.8 6.2-6.3 4.9-8.2-3-4.7-5.9 2.6-8.5 6-10.9 14.2-0.8 2.9-2 5.6-2.6 5.9-0.7 0.5-0.9 0.2-0.6-0.7 0.3-0.8 1.3-4 2.2-7.1 0.9-3.1 2.8-7.1 4.3-8.9 2.7-3.2 10-7.2 11.5-6.3 0.4 0.3 0.8-0.3 0.8-1.3 0.1-1.7 0.1-1.7 1.5 0.1zm19.5-0.4c0 0.6-0.6 1-1.4 1-3.5 0-12.5 13.4-12.6 18.8 0 1.2-0.5 2.2-1 2.2-4.1 0 4.4-17.1 10.4-21 3.5-2.2 4.6-2.5 4.6-1zm25.1 60.5l16.4 16 0.6-5.7c1.1-10.2 9.5-20.4 17.8-21.5 2.6-0.4 4.1-0.2 4.1 0.5 0 0.6-0.7 0.9-1.5 0.6-6.8-2.6-18.3 10.2-19.1 21.2-0.3 5.1-0.3 5.3 2.6 5.9 1.6 0.4 3.5 0.3 4.1-0.1 0.8-0.4 0.9-0.3 0.5 0.5-1.2 1.9-8.3 5.1-11.5 5.1-3.7 0-5.5-1.9-12.8-13.5-3.1-5-8.4-12.6-11.7-17-5.9-7.9-5.7-7.8 10.5 8zm40.8-1.5c0 0.8-0.4 0.5-0.9-0.7-1.2-3-5.8-3.1-9.4-0.2l-2.7 2.2 6.1 6.3-3 3.2c-3.2 3.5-4 3.8-5.8 2-3.5-3.5 0.5-12.9 6.8-16 4.8-2.5 9.1-0.9 8.9 3.2zm-14.8 4.8c-3.1 5.7 0.3 9.7 4.4 5.2 1.8-2 1.8-2.1-0.7-4.7-2.6-2.5-2.6-2.5-3.7-0.5z"/>
	<path id="Layer" fill-rule="evenodd" class="s3" d="m208.1 102.9c2.5 1.6 6.8 5 9.5 7.6 4.8 4.5 4.7 4.5-1.7-0.7-3.6-2.9-7.8-6.3-9.5-7.6-1.6-1.3-0.8-1 1.7 0.7zm25.9 21.9c0.3 0.3-0.4 0-1.5-0.6-1.1-0.6-3.8-3-6-5.3-4-4.3-2.2-2.9 7.5 5.9zm0.6 1.2c0.5 0 4.5 3.7 8.9 8.2l8 8.2-8-7.4c-4.4-4.1-8.4-7.8-8.9-8.2-0.6-0.5-0.6-0.8 0-0.8zm5.4 14.7l6.5 6.7-6.6-5.9c-3.7-3.3-6.7-6.3-6.8-6.8-0.2-1.3 0.4-0.8 6.9 6zm57.5 3.8c2.5 2.4 10.1 7.4 16.8 11.1 24.9 13.6 32.5 18.4 33 20.7 0.2 1.2 0.1 7.8-0.3 14.7-0.4 7.1-0.7 9.9-0.8 6.4-0.1-3.4-0.5-9.5-0.8-13.8l-0.7-7.6-20.1-11.6c-11.1-6.4-21.3-12.4-22.8-13.5q-2.7-1.9-5.5-1.3c-5.8 1.1-13.2-4.6-10.3-8.1 2.4-2.9 6.6-1.8 11.5 3zm-41.9 0.7l2.9 3.3-3.2-2.9c-1.8-1.7-3.3-3.1-3.3-3.3 0-0.8 0.8-0.1 3.6 2.9zm6.5 5.5c1.3 1.6 1.2 1.7-0.3 0.4-1-0.7-1.8-1.5-1.8-1.7 0-0.8 0.8-0.3 2.1 1.3zm-12.3-0.7c0.4 0.1 3.2 2.4 6.2 5.2 6 5.7 4 4.6-2.7-1.4-2.4-2.1-3.9-3.8-3.5-3.8zm15.5 2.6c1 0.3 1.5 0.9 1.2 1.2-0.3 0.3-1.1 0-1.8-0.7-0.9-1-0.8-1.1 0.6-0.5zm3.2 1.4c0.6 0 1.7 0.5 2.5 1 0.8 0.5 1.1 1 0.5 1-0.6 0-1.7-0.5-2.5-1-0.8-0.5-1.1-1-0.5-1zm5.5 2.1c0.8 0 2.2 0.4 3 0.9 1.8 1.2 0.2 1.2-2.5 0q-2-0.9-0.5-0.9zm11 3.4c1.9 0.7 2.8 1.4 2 1.4-0.8 0-2.9-0.6-4.5-1.4-3.9-1.7-2.1-1.8 2.5 0zm-95.9 12.1c17.1 14.5 20.3 17.4 19 17.4-0.9 0-14.5-8.4-16.1-10-0.3-0.3-1.2-0.9-2.1-1.5-16.4-10.4-19.6-13-17.2-14.4 3.3-1.9 4.9-1.1 16.4 8.5zm76.4-9.6c0.6 0 1.7 0.5 2.5 1 0.8 0.5 1.1 1 0.5 1-0.6 0-1.7-0.5-2.5-1-0.8-0.5-1.1-1-0.5-1zm30.9 1.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm9.6 3c0.8 0 2.4 0.4 3.5 0.9 1.3 0.5 1.4 0.9 0.5 0.9-0.8 0-2.4-0.4-3.5-0.9-1.3-0.5-1.4-0.9-0.5-0.9zm-22.6 2c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm6.1 1.9q2 0.9 0.5 0.9c-0.8 0-2.2-0.4-3-0.9-1.8-1.2-0.2-1.2 2.5 0zm29.9 0.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-63.4 2.1c1.9 0 2.7 0.2 1.8 0.5-1 0.2-2.6 0.2-3.5 0-1-0.3-0.2-0.5 1.7-0.5zm70-0.1c0.8 0 2.4 0.4 3.5 0.9 1.3 0.5 1.4 0.9 0.5 0.9-0.8 0-2.4-0.4-3.5-0.9-1.3-0.5-1.4-0.9-0.5-0.9zm-75.1 1.1c-0.2 0.2-1.7 1.4-3.3 2.8-2.7 2.3-2.8 2.3-1.7 0.3 0.6-1.2 1.6-2.4 2.3-2.6 1.4-0.6 3.4-0.9 2.7-0.5zm49.5-0.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm33 1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-26 1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-29.7 1.6c0.2 0.7-0.1 2-0.7 3-1.1 1.7-1.1 1.7-0.6 0 0.3-1 0.6-2.4 0.7-3 0-0.9 0.2-0.9 0.6 0zm35.8 0.3q2 0.9 0.5 0.9c-0.8 0-2.2-0.4-3-0.9-1.8-1.2-0.2-1.2 2.5 0zm6.5 2.1c0.8 0 2.4 0.4 3.5 0.9 1.3 0.5 1.4 0.9 0.5 0.9-0.8 0-2.4-0.4-3.5-0.9-1.3-0.5-1.4-0.9-0.5-0.9zm-79.6 2.3q2.7 3.4 0.6 6.6c-0.8 1.1-0.9 0.8-0.4-1.2 0.3-1.4 0.1-3.7-0.6-5-1.1-2.2-1-2.2 0.4-0.4zm87-0.3c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm30.6 0.1c0.8 0 3.1 0.6 5 1.3 1.9 0.7 2.8 1.3 2 1.3-0.8 0-3.1-0.6-5-1.3-1.9-0.7-2.8-1.3-2-1.3zm19.4 5.9c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-129.4 1.3c0 0.2-0.8 1-1.8 1.7-1.5 1.3-1.6 1.2-0.3-0.4 1.3-1.6 2.1-2.1 2.1-1.3zm-18.5 2.6c3.7 0 3.1 1.9-1.8 6.6l-5.2 4.9 4.5-4.8c3.7-3.9 4.2-4.9 3-5.7-0.8-0.5-1.1-1-0.5-1zm-4.1 0.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm18.4-0.1c0.3 0-0.5 1.2-1.9 2.8-4 4.6-4.2 4.8-3.4 3.2 0.4-0.8 1.7-2.5 2.8-3.7 1.1-1.3 2.3-2.3 2.5-2.3zm-22.8 2.3c0 0.2-1.4 1.6-3 3.2-1.7 1.6-3 2.5-3 2.1 0-0.4 1.2-1.8 2.6-3.1 2.5-2.4 3.4-2.9 3.4-2.2zm16.3 7.2c-0.3 0.9-0.8 1.4-1 1.1-0.3-0.3-0.2-0.9 0.2-1.5 0.9-1.6 1.5-1.3 0.8 0.4zm108 5l0.6 4.5c0.4 2.7 1.5 5.4 2.9 6.8 2 2 2.2 3 1.7 6.6-0.4 2.6 0.1 8.5 1.4 15.6 2.3 12.8 2.6 16 1.1 16-0.6 0-1-0.7-1-1.5 0-0.8-0.5-1.5-1-1.5-0.6 0-1 0.9-1 2 0 2.3-5.7 2.9-7.8 0.8-0.9-0.9-1.2-0.9-1.2 0.1 0 0.7-0.5 0.9-1.1 0.5-0.9-0.5-1-4-0.4-12.8 0.5-6.7 0.9-14.3 0.9-17.1 0.2-6 1.1-9.1 3.1-9.9q1.5-0.5 1.6-5.3zm-70.7 45.3c10.6 10.4 18.4 16.2 21.7 16.2 2.3 0 2.3 2 0 2-0.9 0-2.6 0.7-3.7 1.5-5.2 3.9-8.4 1.5-17.6-13.2-4.1-6.5-7.6-12-7.9-12.3-0.3-0.3-1.4-1.6-2.5-3-2.7-3.4-2-2.8 10 8.8zm26.1-8.8c0.8 0 0.3 0.8-1.4 2.1-1.6 1.3-1.6 1.2-0.4-0.4 0.8-0.9 1.6-1.7 1.8-1.7zm4.5 10.7c1.2 1.6 1.2 1.7-0.4 0.4-0.9-0.7-1.7-1.5-1.7-1.7 0-0.9 0.8-0.3 2.1 1.3zm-11.4-0.3c0.2 0.2 0 1.3-0.6 2.3-1.2 2-1.5 1.3-0.5-1.2 0.3-0.9 0.8-1.4 1.1-1.1zm-2.1 6.3c0.3 0.7 0.3 1.8 0 2.5-0.2 0.7-0.5 0.2-0.5-1.2 0-1.4 0.3-2 0.5-1.3z"/>
</svg>
</div>
         <div class='ml_15'> Обучение косметологии </div>   
          </div>
          </div>

          <div class='d_flex  w_100'>
           
          <div class='but w_100 but_4 ml_10'>
          <div >
          <svg xmlns="http://www.w3.org/2000/svg" class='ml_4 fill1 margin'version="1.2" viewBox="0 0 564 391" width="50" height="50">
	<title>IMG-20240116-WA0008[1]-vectormaker-co-svg</title>

	<path id="Layer" fill-rule="evenodd" class="s0" d="m159.5 27.3c-8.9 3.5-13.3 7.7-19.5 18.7-2.3 4.1-6.1 9.5-8.4 12-2.3 2.5-7.1 8.5-10.6 13.4-9.9 13.6-10.2 13.9-9.6 9.6 2.5-15.5 2.5-38.9 0.1-45.3-2.8-7.2-12 10.2-13.2 25-0.7 9 0.9 17.7 5 25.9l3 6.2-5 10.4c-2.8 5.6-6.6 14.3-8.3 19.3-1.8 4.9-3.5 9.7-3.8 10.5-0.6 1.5-1.6-6.4-2.7-20.2-0.8-9.8-2.9-13.1-6.7-10.6-9.5 6.2-8.4 31.7 1.8 43.7l3.6 4.2-1.2 11.6c-1.3 12.4-0.7 25.2 1.5 36.3l1.3 6.5-3.1-3.9q-0.9-1.1-1.8-2.3-0.9-1.1-1.8-2.2-0.9-1.1-1.8-2.2-0.9-1.2-1.8-2.3c-4.9-6.1-12.4-11.6-16.2-11.9-2.6-0.2-2.8 0-2.5 3.2 0.8 9.9 12.7 25.2 23.7 30.4 3.3 1.6 6.7 3.2 7.5 3.6 0.8 0.5 3.3 5.7 5.6 11.7 2.2 6 6.4 15.5 9.2 21.1 2.9 5.7 5 10.3 4.6 10.3-0.3 0-3.7-1.8-7.5-4-16.4-9.7-24.4-9.4-19.4 0.6 5.8 11.7 14.9 17.6 28.6 18.4l8.6 0.5 7.8 10.4c7.6 10 18.6 22.7 21.3 24.4 2.6 1.7 1 2.5-2.2 1.2-5.2-2.2-20.5-3.9-24.6-2.8-4.7 1.3-4.4 3 1.4 7.4 9 6.8 24.2 9.8 35 6.8 3.6-1 4.2-0.8 9 2.4 11.8 8.1 29 15.4 39.9 17 4.2 0.7 5.1-1 1-1.9-9.7-2.1-19.2-6.8-19.9-9.9-2.6-12.1-15-31.5-20.2-31.5-2.7 0-0.7 9.6 4 19.1 4.1 8.3 4.2 8.6 1.8 7.4-4.2-2.2-14.1-9.8-20.6-15.8l-6.1-5.7-0.7-7.4c-1.6-17.9-10.5-37.3-15.6-34.1-1.6 1-1.2 8.2 0.9 17 1.1 4.4 1.8 8.1 1.6 8.3-1 1.1-18.5-24.9-23.7-35.5l-4.1-8.2 2.1-3.3c5.2-8.5 6.9-30.8 3.2-43.1-3.1-10.5-10.2 3.1-10.8 20.7-0.4 11.5-0.5 11.9-1.9 8.5-2.8-6.7-7.4-23.6-8.9-32.7l-1.5-9.4 6.3-5.8c4.6-4.2 7.3-7.7 9.9-13.1 6.4-12.9 9-25.5 5.2-24.7-2.7 0.5-12.7 13.1-17.2 21.6l-4 7.7-0.1-4c0-4.6 2.6-21.4 4.1-26.5 0.6-1.9 2.4-7.4 4.1-12.2l3-8.7 5.7-1.2c13.6-2.7 38.1-23.3 33.3-28.1-1.6-1.6-16.8 4.9-26.2 11.2-5.1 3.4-5.3 3.5-3.9 0.9 10.3-19.6 26.6-40.5 34.2-44 9.4-4.2 17.2-9.7 20.5-14.3 3.4-4.7 8.2-14.2 8.2-16.3 0-1.6-6.4-1.6-10.5 0zm234.5 0.3c0 3.6 6.5 14.9 11.2 19.6 2.9 2.8 8.2 6.3 13.6 9 10.9 5.3 20.8 16.6 34.5 39.4 5 8.3 4.7 9-1.9 4.8-11.6-7.4-24.1-12.4-25-10-2.4 6.3 22.3 26.2 35 28.1l4.3 0.7 3.1 9.1c4.9 14.5 8.2 30.7 8.1 39.7v3.5l-2.4-5.2c-6.4-14.2-21.5-30.7-21.5-23.5 0 11.1 10.6 31.3 20.5 39 2.3 1.8 2.9 3 2.7 5.5-0.5 7-3.4 20-6.9 30.8l-3.7 11.4-0.7-11.1c-1-19-8.4-31.2-11.5-19-3.5 13.5-2.5 28.4 2.5 39.2l2.9 6.2-4.7 8.9c-5.3 9.9-16.3 26.9-21 32.3l-3 3.5 1.8-6.2c2.4-8 3.7-19.8 2.2-20.7-5.2-3.3-14.8 16.8-15.9 33.2l-0.5 8.3-7 6.5c-10.6 9.8-27.6 20.6-21.5 13.7 3.8-4.3 8.8-17.4 8.8-23.1 0-9.6-18.5 14.2-21.1 27.2l-1.2 5.5-10.6 3.7c-5.8 2.1-10.8 3.9-11 4.1-2.4 1.8 9.8-0.2 18.3-3.1 6.4-2.2 13.7-6 22.9-11.8 5.2-3.4 8.3-4.8 9.5-4.3 4.4 1.7 12.6 2.3 18.4 1.4 10-1.6 25.3-10.7 23.3-13.8-0.9-1.6-17.2-1.3-23.8 0.4-3.2 0.8-6.3 1.5-6.9 1.5-0.6 0 2.3-3.5 6.3-7.8 4.1-4.2 11-12.5 15.3-18.4l8-10.7h7.9c13.2 0 23.8-6.7 29.3-18.4 4.7-10.2-3.6-10.3-20.2-0.2-4.1 2.4-7.4 4.3-7.4 4.1 0-0.2 2.9-6.3 6.4-13.7 3.5-7.4 7.7-16.9 9.2-21.2l2.7-7.9 7.4-3.5c12.5-5.9 25.3-21.8 25.3-31.4 0-8.3-15.6 2.3-24.8 16.8-3.7 5.9-4.1 5.4-2.5-3 1.1-5.3 1.3-12.4 1-27.4l-0.4-20.2 2.4-2.2c10.3-9.7 12-35.5 2.8-43.9l-2.7-2.5-1.8 2.3c-1.9 2.3-2.2 4.4-3.8 22.2-0.5 5.2-1.1 8.8-1.4 8-0.4-0.8-1.8-4.9-3.3-9-1.5-4.1-5.2-12.6-8.1-18.8-6.4-13.2-6.1-11.5-2.4-19 6.7-13.5 6.4-29.8-0.7-44.1-4.6-9.1-6.6-10.1-8.4-3.9-1.6 5.5-1.6 27.8 0 38.1 1.5 9.5 1.2 10-2.5 4.5-4.8-7.2-11.5-16-16.9-22.3-2.8-3.3-6.7-8.9-8.6-12.5-6.1-11.7-14.7-18.5-24.9-19.7-4.4-0.5-5-0.4-5 1.3zm-198.2 69.9c-1.4 3.1-0.8 3.8 16.2 18.7 6.9 6.1 12.6 11.4 12.8 11.8 0.1 0.4-2.4 6.7-5.8 13.9-3.3 7.3-6 13.6-6 14.1 0 1.4-1.6 1.2-3.2-0.3-14.2-13.8-16.8-15.7-22.1-15.7-9.8 0-16.8 9.1-13.3 17.3 1.1 2.9 1.2 3.9 0.3 4.1-4 1.2-4.7 1.7-4.7 2.8 0 0.8 8.3 6.9 18.4 13.7l18.4 12.4-2.5 3.5c-3.6 5.3-3.8 7.6-1.3 13.5 4 9.4 5 9.6 12 3.1 5.6-5.3 5.6-5.3 3.4 2.4-2 6.9-1.1 11.8 4.3 23l3.7 7.7 0.4-5c0.4-6.9 1.4-7.3 5.4-2.6 4.8 5.6 4.9 4.7 1.1-6.6-2.7-8.1-4.4-19.3-3-19.3 3.2 0 27.7 21.7 27.7 24.5 0 0.7 0.8 1.9 1.7 2.6 0.9 0.8 6.1 8.1 11.6 16.4 12 18.2 13.1 19.5 17.1 19.5 4.6 0 15.3-7 14-9.1-0.3-0.5 0-0.9 0.7-0.9 0.7 0 1-0.3 0.6-0.6-0.3-0.4 2.2-3.5 5.7-6.9 5.8-5.8 6.4-6.7 6.4-10.7 0.1-4.3-2.2-8.3-4-7.2-0.4 0.3-0.7 0.1-0.6-0.3 0.2-0.5-2.2-3.3-5.2-6.1l-5.5-5.2 4.5 0.8c19.8 3.2 22.8 0.1 33-34.6 1.6-5.7 2.5-7.2 3.6-6.8 0.9 0.3 2 0.6 2.6 0.6 0.6 0 0.9 5 0.7 13.7-0.3 13.3-0.4 13.8-2.9 15.9-2.2 1.9-2.5 3.1-2.6 8.6-0.1 3.4-0.5 12.3-0.9 19.6-0.8 12.8-0.7 13.4 1.1 13.1 1-0.1 3.1 0.1 4.6 0.5 1.6 0.5 3.5 0.3 5-0.5 1.2-0.7 2.8-1.2 3.4-1.1 2.1 0.4 2.2-3.6 0.3-15-1-6.2-1.8-13.9-1.7-17.1 0.1-4.6-0.3-6.2-2.1-8-2.3-2.6-2.6-6-1.5-20.3l0.7-8 13.6 3.3c23.9 5.9 28.9 6.7 30.6 5.3 3.1-2.6 1.6-4.8-8.3-11.9-5.3-3.9-13.3-9.9-17.7-13.3-11.3-8.8-30.1-22.2-44-31.5-11.2-7.5-12.9-8.3-26.5-12.2-18.7-5.5-50.2-16-75.2-25-22.1-7.9-23.4-8.2-25-4.6z"/>
	<path id="Layer" fill-rule="evenodd" class="s1" d="m169 28.1c0 1.8-4.2 10.3-6.9 13.9-4.3 5.8-8.2 8.8-17.7 13.5-8.3 4.1-9.8 5.3-14.7 11.8-9 11.6-12.4 16.3-13.7 18.8-0.7 1.3-1.6 2.6-2 2.9-1.1 0.8-9.1 15.2-8.7 15.7 0.4 0.3 4.2-1.8 13-7.1 3.5-2.1 16.5-7.6 17.8-7.6 2.6 0-2.7 8-9.6 14.3-4.5 4.2-14.2 10.7-15.9 10.7-0.8 0-1.8 0.4-2.1 1-0.3 0.5-1.8 1-3.3 1-5.7 0-7.1 1-9.3 6.9-4.2 11.2-7 21.8-8.6 33.4-2.1 15.2-1 17.1 4.1 6.6 3.7-8 14.1-21.2 17-21.7 1.5-0.3 1.6 0.2 1.1 3.5-2.2 12.8-8.6 25.4-16.7 32.8l-6.1 5.5 0.6 6.8c0.8 7.8 6.4 29.3 9.9 37l2.3 5.4v-11.9c0.1-12.4 2-20 6.5-25.5l1.8-2.3 1.1 2.8c4.2 10.8 3.5 30.8-1.4 41.2-1.4 2.8-2.5 5.9-2.5 6.9 0 2.5 7.2 16.3 13.4 25.5 3.1 4.6 5.3 8.8 4.9 9.4-0.3 0.5-0.1 0.7 0.5 0.3 0.5-0.3 1.9 0.9 3 2.6 2.7 4.4 8.8 10.1 7.8 7.3-4.1-10.6-6.2-26.5-3.6-26.5 5.6 0 13.7 19.8 14.1 34.5l0.2 6.5 6.1 5.7c3.4 3.2 7.5 6.9 9.3 8.3 1.7 1.3 2.9 2.8 2.7 3.2-0.3 0.4 0.3 0.8 1.3 0.8 1 0 2.4 0.9 3.1 2.1 1.5 2.4 1.1 2.2-4.1-1.4-2.4-1.6-3.3-1.8-5.3-0.8-3.2 1.4-17.7 1.4-22.3 0-9.1-2.9-19.1-9.5-17.7-11.7 1.3-2.2 19.3-1.1 25.6 1.5 0.8 0.3 2 0.7 2.5 0.9 0.6 0.1 1.9 0.6 2.9 1 3.1 1.2 0.7-2.1-6.2-8.9-1.9-1.7-5.9-6.5-8.9-10.5-3-4-6.6-8.5-8-10-1.4-1.5-3.6-4.4-4.9-6.5-2.4-3.7-2.5-3.7-9.2-3.8-11.9-0.1-15.3-1.3-22.2-7.5-4.9-4.4-10.4-12.9-9.6-14.9 1.4-3.7 11.7-0.5 23 7 2.9 1.9 5.7 3.5 6.2 3.5 0.5 0-2.1-6.1-5.7-13.5-3.6-7.4-8.1-17.8-10-23-3.2-9-3.6-9.6-6.9-10.5-11.8-3.2-29-22.6-29-32.7 0-6.8 13.3 2.5 22.9 16.1 5.6 7.9 7.6 9.5 6.1 4.8-2.7-8.1-3.7-32-2-46.2 0.8-7.4 0.8-7.5-2-10.5-10.5-11-12.3-38.5-2.8-43.6 3.8-2 4.9 0.7 5.9 14.2 1.2 15.6 1.8 19.1 3 18.4 0.5-0.4 0.9-1.3 0.9-2.1 0-2.7 7.1-20.7 12.2-30.9l5-10-2.5-4.5c-8.4-15.2-8.1-33.5 0.8-48.7 1.4-2.4 3-4.3 3.6-4.3 3.4 0 4.8 20.4 2.6 38-0.8 6.3-1.2 11.9-1 12.3 0.3 0.4 2.7-2.4 5.4-6.3 5-7.3 11.4-15.7 13.4-17.5 2.6-2.5 8.5-10.6 12.2-17 4.9-8.3 8.4-11.9 15-15.1 4.9-2.4 12.3-3.2 12.3-1.3zm228.3-1.1c9.7 0 18.7 6.4 24.8 17.5 2.2 4.1 7.8 12 12.5 17.7 4.7 5.7 10.6 13.4 13.2 17.3 5.6 8.2 6 7.5 4.3-7.1-2-16.6-1-35.1 2-36.9 1.3-0.9 5.8 5.9 8.1 12.1 4.6 12.6 3 32.8-3.2 40.6-2.8 3.6-2.7 3.9 4.4 18.9 3.6 7.4 7.7 17.3 9.2 21.9l2.8 8.5 0.8-4c0.4-2.2 1.1-9.5 1.6-16.3 1.1-15.2 2.5-17.7 7.2-12.5 8.2 9.1 6 31.2-4.2 41.9l-3 3.2 1.3 9.7c1.3 10.8 0.7 28.6-1.5 39.7-1.6 8.2-1 8.4 3.6 1.5 5-7.4 11.5-14.5 15.9-17.3 4.4-2.7 9.5-3.3 8.6-1-0.3 0.8-1.1 3.3-1.7 5.4-2.9 10.8-19.3 27.2-27.1 27.2q-3.4 0-6.5 9.5c-0.9 2.7-5 12.2-9 20.9-4.1 8.8-7.2 16.2-6.9 16.4 0.2 0.2 3.7-1.6 7.7-4.1 16.5-10.3 24.7-10.6 19.4-0.6-6.3 11.6-20.2 19-32.4 17.2-2.9-0.5-3.8 0-7.3 3.7-2.1 2.3-3.9 4.6-3.9 5.1 0 0.5-0.5 0.9-1.1 0.9-1 0 2.8-6.2 4.3-6.8 0.4-0.2 0.8-0.7 0.8-1.1 0-0.4 3.6-6.7 8-14.1 9.8-16.3 10-16.7 6.7-23.3-3.9-7.7-5.1-14.7-4.4-26.2 0.6-10 2.3-17.2 4.2-17.7 3.8-0.9 8.9 18.3 7.9 30-0.8 10.5 1.2 7.7 6-8 7.4-24.3 8.1-32.7 3-35.9-2-1.2-5.6-4.8-8-8.1-7.2-9.8-14.1-30.8-10.1-30.8 2.4 0 13.6 14.6 17.5 22.7 1.9 4 3.9 7.3 4.4 7.3 2.6 0-2.5-28.1-7.8-43.5-1.9-5.5-3.4-10-3.4-10.1 0-0.1-2.1-0.5-4.8-0.8-12.4-1.8-38.4-22.7-33.8-27.3 1.1-1.2 15.4 5.4 25.1 11.6 7.9 5 7.1 2.3-5-16.4-12-18.5-17.7-24.4-28.2-30-13.5-7.1-19.5-13.5-24.3-26.1-0.9-2.2-0.7-2.4 2.3-2.4zm-174.8 76.4c5.5 2 13.4 4.8 17.5 6.2 4.1 1.4 8.5 2.9 9.8 3.4q0.5 0.3 1.1 0.5 0.5 0.3 1.1 0.5 0.6 0.2 1.1 0.5 0.6 0.2 1.1 0.4c1.3 0.5 7.7 2.6 14.3 4.6 6.6 2 13.1 4 14.5 4.5 1.4 0.4 4.3 1.3 6.5 1.9 2.2 0.6 6.9 2 10.4 3.1 3.5 1.1 7 2 7.7 2 1.2 0 12.6 7.5 32.9 21.6 17.1 11.9 52 38.7 52.3 40.2 1.1 4.2-7.4 3.3-33.3-3.7-8.2-2.3-11.1-2.7-11.7-1.8-0.4 0.7-0.8 7.1-0.8 14.2 0 12.1 0.1 13.1 2.1 14.3 1.8 1.1 2 2.1 1.7 6-0.3 2.6 0.4 9.4 1.4 15.2 2 11.7 2.3 19 0.8 19-0.6 0-1-0.6-1-1.3-0.1-0.7-0.6-0.5-1.4 0.6-1.1 1.5-2.4 1.7-6.8 1.4l-5.3-0.4-0.3-5.9c-0.2-3.3 0.2-9.7 0.9-14.4 0.6-4.7 1.1-10.6 1-13.3-0.2-3.9 0.2-5.1 2.3-7.1 3.6-3.3 4.1-30.6 0.6-30.6-1.1 0-2.3-0.1-2.7-0.3-0.3-0.1-1.2 1.6-1.9 3.8-12 39.6-12.5 40.2-32.6 37.6-6.9-0.9-8.8-2-18.9-10.6-2-1.6-9.3-7.5-16.4-13-7-5.5-13.3-10.5-13.9-11.1-3.4-3.5-18.4 7.6-20.8 15.3-1.2 3.9-2.8 5.8-2.8 3.3 0-0.6-0.6-1-1.4-1-3.6 0-2.7 10.3 2 22.7 1.3 3.5 2.4 6.6 2.4 6.8 0 0.3-1.6-1.3-3.6-3.5-4.3-4.7-5.1-4.5-6 1.6l-0.6 4.5-1.5-2.8c-6.2-11.7-7.5-20.1-4.3-28.5 2.6-6.9 2-7-4.4-1-6.9 6.5-8.1 6.5-11.1-0.1-3.1-6.6-3.1-8.9 0-13.5 1.4-2 2.5-4 2.5-4.4 0-0.4-8.3-6.4-18.5-13.3-10.2-6.9-18.5-13-18.5-13.5 0-0.5 1.8-1.4 4-2 3.8-1 4.2-0.9 7.8 2.3 17.7 16.1 28.6 24.7 31.1 24.3 1.4-0.3 4.6-0.6 7.1-0.7 3.6-0.2 5.6-1.2 9.8-4.6 3-2.4 6-4.3 6.8-4.3 3.4 0 0.4-2.7-22.3-20.7-1.2-1-1.1-1.8 1-6.5 12.1-26.2 11.5-24 8-26.8-17-13.2-29-26-26.6-28.3 1.3-1.4 8.8 0.6 25.8 6.7zm50.2 144.5c17.9 17.4 18.3 17.6 18.3 11.9 0-6.7 5.5-15.7 12.1-19.7 3.6-2.2 9.3-2.8 10.4-1.1 0.4 0.6-0.9 1-3.3 1-12.5 0-25 25.3-13 26.2l3.9 0.3-4.3 2.8c-9.8 6.3-11.1 5.6-24-14-5.8-8.7-11.4-16.7-12.6-17.7-1.2-1.1-2.2-2.3-2.2-2.9 0-0.5 6.6 5.5 14.7 13.2zm42.2 0l-0.1 2.6-1-2.8c-1.2-3.3-3.9-3.5-8.7-0.6l-3.4 2 3.4 3.5 3.3 3.4-2.9 3c-7.6 8-11.6-2.2-4.2-10.7 1.7-1.9 4-3.9 5.1-4.3 5.2-2.1 8.7-0.5 8.5 3.9zm-14.9 5.5c-2.2 5.8 0.4 8.6 4.3 4.7l2.1-2.1-5.3-5.4zm132.8 9.7c2 0 1 12.1-1.8 20.9-2.3 7.6-2.3 7.8 1.5 4.8 5.3-4.2-2.3 5.9-12.9 17-3.8 4-6.7 7.5-6.4 7.8 0.3 0.3 3.8-0.4 7.9-1.4 11.9-3.2 22.8-3.8 22.8-1.3 0 3.4-6.7 8.1-15.9 11.1-4.4 1.4-13.7 1.4-21.7-0.1l-6.3-1.2 3.7-3.1c13-10.8 13.9-12 14.7-19.8 1.3-13.8 5.6-26.8 10.8-32.5 1.2-1.2 2.8-2.2 3.6-2.2zm-244.9 72.2c0 1.3-7.7-2.2-10.8-5-2-1.8-2.9-3-1.9-2.6 2.4 0.8 2.3 0.5-2.2-7.3-3.9-6.7-7.5-17.8-6.5-19.5 3.3-5.3 21.4 23.7 21.4 34.4zm209.7-33.5c-0.3 1-0.8 3.3-1.2 5.3-0.8 3.7-5.5 13.7-8.7 18.2-1.7 2.5-1.7 2.8-0.2 2.8 2.7 0 0 2.5-5.8 5.4-4.9 2.4-7.8 2.6-5.9 0.2 0.5-0.6 1.1-2.9 1.5-5.1 0.9-6.1 6-15.4 12.2-22.3 5.5-6.1 9.1-8.1 8.1-4.5zm1.8 20.3c1 0 1.6 0.2 1.3 0.6-0.4 0.3-1.2 0.3-1.9 0-0.8-0.3-0.6-0.5 0.6-0.6z"/>
	<path id="Layer" fill-rule="evenodd" class="s2" d="m241.5 131.5c10.4 9.7 20.8 18.7 23 20 4.2 2.5 43.4 15 71.8 22.9 3.1 0.9 5.7 2.1 5.7 2.7 0 0.7-0.7 0.8-1.7 0.4-1-0.4-5.6-1.8-10.3-3.1-21.5-6.3-57-17.3-62.4-19.3-4.2-1.7-11-7.3-30.1-25.1-16.7-15.6-28.3-25.5-33.8-28.8-1.5-0.9-2.7-2-2.7-2.5 0-2.9 16.6 10.5 40.5 32.8zm-13.4-1.5c0.8 0 7.7 5.9 15.4 13.1 21.4 20.1 18.8 18.9 81 36.6 14 4 14.1 4 13.3 4.9-1.2 1.1-66.7-18.5-73.8-22.1-3.7-1.9-9.5-6.7-18.5-15.3-4.4-4.2-10.4-9.8-13.4-12.4-2.9-2.7-4.7-4.8-4-4.8zm70.4 14.5c1.7 1.9 10.3 7.4 19.5 12.6 9.1 5 19.5 10.9 23.2 13.1l6.8 3.9-0.7 20c-0.6 19.9-0.6 20 1.7 22.1 1.9 1.8 2.1 2.8 1.7 6.3-0.4 2.4 0.2 9.1 1.3 15.6 2.2 12.7 2.5 17.9 1 17.9-0.6 0-1-0.7-1-1.5 0-2.2-1.7-1.8-2.3 0.5-0.5 2.1-6 2.9-7.1 1.1-0.4-0.5-1.5-0.7-2.6-0.4-2.4 0.6-2.7-4.3-0.8-17.7 0.6-4.7 1-11 1-14.1-0.2-4.7 0.2-5.9 2.3-7.9 2.5-2.3 2.5-2.4 2.5-20.9v-18.6l-14.8-8.4c-8.1-4.7-18.5-10.7-23.2-13.5-6.9-4.1-9.2-4.9-12.5-4.7-7.1 0.4-12.8-6.9-7.8-9.8 3.6-2.1 7.1-0.8 11.8 4.4zm-102.5 32.5c7.2 6.2 13 11.6 13 12.1 0 1.8-2.1 0.8-9.2-4.3-4-2.8-11.2-7.7-16.1-10.9-15-9.9-15.2-10.1-8.9-11.9 3-0.8 1.6-1.8 21.2 15zm69.5-5c-0.3 0.5-3.1 1-6.1 1-6.8 0-11.2 1.8-14.7 5.9-2.7 3.3-3.9 6.7-1.5 4.3 1.4-1.4 2.8-1.6 2.8-0.3 0 0.5-0.9 1.3-2 1.6-1.1 0.3-2 1.2-2 1.9 0 0.8-0.8 2-1.7 2.7-1.5 1.2-1.6 1.2-0.9-0.6 1.2-2.8 0.8-6.7-0.7-7.7-1.1-0.7-0.2-1.2 1.7-0.9 0.5 0.1 2.6-1.4 4.7-3.5 2-2 5.2-4 7.1-4.4 5-1.2 14-1.2 13.3 0zm12.4 6.7c-1.2 3.7-2.4 6.2-2.6 5.6-0.4-1.1 2.1-10.4 3.4-12.6 1.6-2.8 1.2 1.2-0.8 7zm91.2 5.3c19.7 6 19.3 5.9 18.6 6.6-0.3 0.3-3.6-0.3-7.4-1.4-18.4-5.4-27.9-8.5-28.8-9.3-1.6-1.6 0.9-1 17.6 4.1zm-139.6 5.4c1.1 1.4 2.2 1.7 4.5 1.3 3.3-0.7 4.2 0.8 1 1.8-1.2 0.4-4.1 2.9-6.7 5.6-2.5 2.7-5.1 4.9-5.6 4.9-0.6 0 1-2.2 3.6-4.8 6.2-6.3 4.9-8.2-3-4.7-5.9 2.6-8.5 6-10.9 14.2-0.8 2.9-2 5.6-2.6 5.9-0.7 0.5-0.9 0.2-0.6-0.7 0.3-0.8 1.3-4 2.2-7.1 0.9-3.1 2.8-7.1 4.3-8.9 2.7-3.2 10-7.2 11.5-6.3 0.4 0.3 0.8-0.3 0.8-1.3 0.1-1.7 0.1-1.7 1.5 0.1zm19.5-0.4c0 0.6-0.6 1-1.4 1-3.5 0-12.5 13.4-12.6 18.8 0 1.2-0.5 2.2-1 2.2-4.1 0 4.4-17.1 10.4-21 3.5-2.2 4.6-2.5 4.6-1zm25.1 60.5l16.4 16 0.6-5.7c1.1-10.2 9.5-20.4 17.8-21.5 2.6-0.4 4.1-0.2 4.1 0.5 0 0.6-0.7 0.9-1.5 0.6-6.8-2.6-18.3 10.2-19.1 21.2-0.3 5.1-0.3 5.3 2.6 5.9 1.6 0.4 3.5 0.3 4.1-0.1 0.8-0.4 0.9-0.3 0.5 0.5-1.2 1.9-8.3 5.1-11.5 5.1-3.7 0-5.5-1.9-12.8-13.5-3.1-5-8.4-12.6-11.7-17-5.9-7.9-5.7-7.8 10.5 8zm40.8-1.5c0 0.8-0.4 0.5-0.9-0.7-1.2-3-5.8-3.1-9.4-0.2l-2.7 2.2 6.1 6.3-3 3.2c-3.2 3.5-4 3.8-5.8 2-3.5-3.5 0.5-12.9 6.8-16 4.8-2.5 9.1-0.9 8.9 3.2zm-14.8 4.8c-3.1 5.7 0.3 9.7 4.4 5.2 1.8-2 1.8-2.1-0.7-4.7-2.6-2.5-2.6-2.5-3.7-0.5z"/>
	<path id="Layer" fill-rule="evenodd" class="s3" d="m208.1 102.9c2.5 1.6 6.8 5 9.5 7.6 4.8 4.5 4.7 4.5-1.7-0.7-3.6-2.9-7.8-6.3-9.5-7.6-1.6-1.3-0.8-1 1.7 0.7zm25.9 21.9c0.3 0.3-0.4 0-1.5-0.6-1.1-0.6-3.8-3-6-5.3-4-4.3-2.2-2.9 7.5 5.9zm0.6 1.2c0.5 0 4.5 3.7 8.9 8.2l8 8.2-8-7.4c-4.4-4.1-8.4-7.8-8.9-8.2-0.6-0.5-0.6-0.8 0-0.8zm5.4 14.7l6.5 6.7-6.6-5.9c-3.7-3.3-6.7-6.3-6.8-6.8-0.2-1.3 0.4-0.8 6.9 6zm57.5 3.8c2.5 2.4 10.1 7.4 16.8 11.1 24.9 13.6 32.5 18.4 33 20.7 0.2 1.2 0.1 7.8-0.3 14.7-0.4 7.1-0.7 9.9-0.8 6.4-0.1-3.4-0.5-9.5-0.8-13.8l-0.7-7.6-20.1-11.6c-11.1-6.4-21.3-12.4-22.8-13.5q-2.7-1.9-5.5-1.3c-5.8 1.1-13.2-4.6-10.3-8.1 2.4-2.9 6.6-1.8 11.5 3zm-41.9 0.7l2.9 3.3-3.2-2.9c-1.8-1.7-3.3-3.1-3.3-3.3 0-0.8 0.8-0.1 3.6 2.9zm6.5 5.5c1.3 1.6 1.2 1.7-0.3 0.4-1-0.7-1.8-1.5-1.8-1.7 0-0.8 0.8-0.3 2.1 1.3zm-12.3-0.7c0.4 0.1 3.2 2.4 6.2 5.2 6 5.7 4 4.6-2.7-1.4-2.4-2.1-3.9-3.8-3.5-3.8zm15.5 2.6c1 0.3 1.5 0.9 1.2 1.2-0.3 0.3-1.1 0-1.8-0.7-0.9-1-0.8-1.1 0.6-0.5zm3.2 1.4c0.6 0 1.7 0.5 2.5 1 0.8 0.5 1.1 1 0.5 1-0.6 0-1.7-0.5-2.5-1-0.8-0.5-1.1-1-0.5-1zm5.5 2.1c0.8 0 2.2 0.4 3 0.9 1.8 1.2 0.2 1.2-2.5 0q-2-0.9-0.5-0.9zm11 3.4c1.9 0.7 2.8 1.4 2 1.4-0.8 0-2.9-0.6-4.5-1.4-3.9-1.7-2.1-1.8 2.5 0zm-95.9 12.1c17.1 14.5 20.3 17.4 19 17.4-0.9 0-14.5-8.4-16.1-10-0.3-0.3-1.2-0.9-2.1-1.5-16.4-10.4-19.6-13-17.2-14.4 3.3-1.9 4.9-1.1 16.4 8.5zm76.4-9.6c0.6 0 1.7 0.5 2.5 1 0.8 0.5 1.1 1 0.5 1-0.6 0-1.7-0.5-2.5-1-0.8-0.5-1.1-1-0.5-1zm30.9 1.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm9.6 3c0.8 0 2.4 0.4 3.5 0.9 1.3 0.5 1.4 0.9 0.5 0.9-0.8 0-2.4-0.4-3.5-0.9-1.3-0.5-1.4-0.9-0.5-0.9zm-22.6 2c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm6.1 1.9q2 0.9 0.5 0.9c-0.8 0-2.2-0.4-3-0.9-1.8-1.2-0.2-1.2 2.5 0zm29.9 0.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-63.4 2.1c1.9 0 2.7 0.2 1.8 0.5-1 0.2-2.6 0.2-3.5 0-1-0.3-0.2-0.5 1.7-0.5zm70-0.1c0.8 0 2.4 0.4 3.5 0.9 1.3 0.5 1.4 0.9 0.5 0.9-0.8 0-2.4-0.4-3.5-0.9-1.3-0.5-1.4-0.9-0.5-0.9zm-75.1 1.1c-0.2 0.2-1.7 1.4-3.3 2.8-2.7 2.3-2.8 2.3-1.7 0.3 0.6-1.2 1.6-2.4 2.3-2.6 1.4-0.6 3.4-0.9 2.7-0.5zm49.5-0.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm33 1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-26 1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-29.7 1.6c0.2 0.7-0.1 2-0.7 3-1.1 1.7-1.1 1.7-0.6 0 0.3-1 0.6-2.4 0.7-3 0-0.9 0.2-0.9 0.6 0zm35.8 0.3q2 0.9 0.5 0.9c-0.8 0-2.2-0.4-3-0.9-1.8-1.2-0.2-1.2 2.5 0zm6.5 2.1c0.8 0 2.4 0.4 3.5 0.9 1.3 0.5 1.4 0.9 0.5 0.9-0.8 0-2.4-0.4-3.5-0.9-1.3-0.5-1.4-0.9-0.5-0.9zm-79.6 2.3q2.7 3.4 0.6 6.6c-0.8 1.1-0.9 0.8-0.4-1.2 0.3-1.4 0.1-3.7-0.6-5-1.1-2.2-1-2.2 0.4-0.4zm87-0.3c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm30.6 0.1c0.8 0 3.1 0.6 5 1.3 1.9 0.7 2.8 1.3 2 1.3-0.8 0-3.1-0.6-5-1.3-1.9-0.7-2.8-1.3-2-1.3zm19.4 5.9c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm-129.4 1.3c0 0.2-0.8 1-1.8 1.7-1.5 1.3-1.6 1.2-0.3-0.4 1.3-1.6 2.1-2.1 2.1-1.3zm-18.5 2.6c3.7 0 3.1 1.9-1.8 6.6l-5.2 4.9 4.5-4.8c3.7-3.9 4.2-4.9 3-5.7-0.8-0.5-1.1-1-0.5-1zm-4.1 0.1c1.1-0.1 1.7 0.2 1.3 0.5-0.3 0.3-1.2 0.4-1.9 0.1-0.8-0.3-0.5-0.6 0.6-0.6zm18.4-0.1c0.3 0-0.5 1.2-1.9 2.8-4 4.6-4.2 4.8-3.4 3.2 0.4-0.8 1.7-2.5 2.8-3.7 1.1-1.3 2.3-2.3 2.5-2.3zm-22.8 2.3c0 0.2-1.4 1.6-3 3.2-1.7 1.6-3 2.5-3 2.1 0-0.4 1.2-1.8 2.6-3.1 2.5-2.4 3.4-2.9 3.4-2.2zm16.3 7.2c-0.3 0.9-0.8 1.4-1 1.1-0.3-0.3-0.2-0.9 0.2-1.5 0.9-1.6 1.5-1.3 0.8 0.4zm108 5l0.6 4.5c0.4 2.7 1.5 5.4 2.9 6.8 2 2 2.2 3 1.7 6.6-0.4 2.6 0.1 8.5 1.4 15.6 2.3 12.8 2.6 16 1.1 16-0.6 0-1-0.7-1-1.5 0-0.8-0.5-1.5-1-1.5-0.6 0-1 0.9-1 2 0 2.3-5.7 2.9-7.8 0.8-0.9-0.9-1.2-0.9-1.2 0.1 0 0.7-0.5 0.9-1.1 0.5-0.9-0.5-1-4-0.4-12.8 0.5-6.7 0.9-14.3 0.9-17.1 0.2-6 1.1-9.1 3.1-9.9q1.5-0.5 1.6-5.3zm-70.7 45.3c10.6 10.4 18.4 16.2 21.7 16.2 2.3 0 2.3 2 0 2-0.9 0-2.6 0.7-3.7 1.5-5.2 3.9-8.4 1.5-17.6-13.2-4.1-6.5-7.6-12-7.9-12.3-0.3-0.3-1.4-1.6-2.5-3-2.7-3.4-2-2.8 10 8.8zm26.1-8.8c0.8 0 0.3 0.8-1.4 2.1-1.6 1.3-1.6 1.2-0.4-0.4 0.8-0.9 1.6-1.7 1.8-1.7zm4.5 10.7c1.2 1.6 1.2 1.7-0.4 0.4-0.9-0.7-1.7-1.5-1.7-1.7 0-0.9 0.8-0.3 2.1 1.3zm-11.4-0.3c0.2 0.2 0 1.3-0.6 2.3-1.2 2-1.5 1.3-0.5-1.2 0.3-0.9 0.8-1.4 1.1-1.1zm-2.1 6.3c0.3 0.7 0.3 1.8 0 2.5-0.2 0.7-0.5 0.2-0.5-1.2 0-1.4 0.3-2 0.5-1.3z"/>
</svg>
</div>
         <div class='ml_15'> Обучение косметологии </div>   
          </div>
          </div> */}

        </div>
        <div class='cont_usl'>
        
        <div class='carousel_width' id='carousel_width_1'>
          
   <div class='usl_title'>

   <input class='class0 title_tex_ file' defaultValue={setUslugi_titleRef.current} onChange={e => setUslugi_title(e.target.value)  } placeholder={'Иконка'} type="text" />

    <strong class='color_new height_tit class01'>
      
{setUslugi_titleRef.current}
    </strong>
   </div>

   <textarea class='class0  textarea' defaultValue={setUslugi_textRef.current} onChange={e => setUslugi_text(e.target.value)  } placeholder={'Иконка'}  ></textarea>
   <input class='class0 file file_' onChange={selectFile2} placeholder={'Иконка'} type="file" />
   <button class='butil' onClick={put__usl}>сохранить</button>
  <div class='dffd'>
  <svg class='mar_lf class0' onClick={function62} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
   <svg  width='47px' class='pd_f class0' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
      
  </div>

   <div class='usl_text color_2 color_new_2 class01'>
   {setUslugi_textRef.current}
   </div>

 
        </div>

        <div class='carousel_width'>
<img src={process.env.REACT_APP_API_URL + setimgRef?.current} class='usl_img'/>
        </div>

       
         </div>
         <div class='cont_but_ color_new_2'>
         {setUslugi1Ref?.current?.map(i =>

<Price i={i} />



         )}



</div>

<div class='but_flex'>
<div class='carousel_buttom zapis bgcolor_new color_bg'>
        Записаться 
       </div>
</div>

      </div>
      </section>


  <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div>  
    <input class='class6 title_tex_ file' defaultValue={'Комплексные предложения'} onChange={setUslugi_title} placeholder={'Иконка'} type="text" />

    <h2 class="section__title aos-init aos-animate class8" data-aos="fade-left">Комплексные предложения</h2>
 

    <div class='dffd'>
  <svg class='mar_lf class7' onClick={function64} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
   <svg  width='47px' class='pd_f class7' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 

  </div>



           <div class='bmw ' link='bmw'>
           <Carous num={setitems1Ref.current} />
      </div>

     




      </div>
      </section>


      <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> 
    
    <h2 class="section__title section__title_2 aos-init aos-animate" data-aos="fade-left">Акции</h2>
    <input class='class11 title_tex_1 file' defaultValue={'Акции'} onChange={setUslugi_title} placeholder={'Иконка'} type="text" />

    <div class='dffd -'>
  <svg class='mar_lf ' onClick={function65} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
   <svg  width='47px' class='pd_f ' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
  </div>

      <div class="row mission__body g-3 g-xl-5">
      <div class="col-12 col-xl-7">
          <div class="mission__image aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
         <img src={process.env.REACT_APP_API_URL + setActiiRef?.current?.img} alt="" class=" lazyloaded"/></div>
         
        </div>
        <div class="col-12 col-xl-5 aos-init aos-animate" data-aos="fade-up">
          <div class="mission__text color_2">
          {setActii2Ref?.current?.map(i =>

<Actii1 i={i}  get={get}/>
          )}
    
    <input class='margin-top_101 class1212 text08 file' onChange={selectFile3} placeholder={'Иконка'} type="file" />
   <button onClick={save_photo} class='v_but bububu butil'>сохранить</button>
        <div class='but_flex'>
<div class='carousel_buttom zapis bgcolor_new color_bg'>
        Записаться 
       </div>
</div>
          </div>
        </div>
 
      </div>
    </div>
  </section>



  <section class="section mission">
    <div class="container">

   
    <div class="koguvcavis-varazdel">
  <div class="sestim-donials">
  <input class='class14 title_tex_1 file' defaultValue={'Отзывы'} onChange={setUslugi_title} placeholder={'Иконка'} type="text" />
  <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Отзывы</h2>

  <div class="sectionesag"></div>

  <div class="sagestim-lonials">

  <div class='bmw ' link='bmw'>
  <Carous1 num={setitems2Ref.current} />
   {/* <Gallery1 items1={items3} /> */}
   </div>


  </div>

  </div>
  </div>




    </div>
    </section>


    <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> 
    <input class='class17  file' defaultValue={setVizitRef?.current?.name}   placeholder={'Иконка'} type="text" />

    <h2 class="section__title aos-init aos-animate class18" data-aos="fade-left">{setVizitRef?.current?.name}</h2>
    <div class='dffd'>
  <svg class='mar_lf class13' onClick={function67} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  <button class='butil' onClick={functi3}>сохранить</button>
  </div>
    <div class=" ">
   <div class="row d_row">
    <div class="col-md-6 image-section">
      <div class='title_vizit class18'>
      {setVizitRef?.current?.description}
      </div>
      <textarea class='class17_  file' defaultValue={setVizitRef?.current?.description} onChange={e => setvizit_desc(e.target.value)}placeholder={'Иконка'} type="text" ></textarea>
      <input class='class17__ file' onChange={selectFile4} placeholder={'Иконка'} type="file" />
     <img class='img_forma '  height="400" 
     src={process.env.REACT_APP_API_URL + setVizitRef?.current?.img}
    width="600"/>
    </div>
    <div class="col-md-6">
     <div class="appointment-form">
      <h5>
       Как К Вам можно обращаться?
      </h5>
      <input class="form-control form-control__" placeholder="Имя Фамилия" type="text"/>
      <h5>
       Телефон
      </h5>
      <div class="input-group mb-3">
       <span class="input-group-text" id="basic-addon1">
        +7
       </span>
       <input aria-describedby="basic-addon1" aria-label="Phone" class="form-control form-control_" placeholder="(999) 999-99-99" type="text"/>
      </div>
      <h5>
       Напишите свой вопрос или пожелания
      </h5>
      <textarea class="form-control" rows="3"></textarea>
      <button class="btn btn-submit bgcolor_new bord_r">
       ОТПРАВИТЬ ЗАЯВКУ
      </button>
      <p class="form-text">
       Нажимая на кнопку "Оставить заявку", Вы выражаете свое согласие с условиями обработки персональных данных
      </p>
     </div>
    </div>
   </div>
  </div>
    </div>
    </section>



    
    <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> 
    <input class='class22  file' defaultValue={'Сертификаты'} onChange={setUslugi_title} placeholder={'Иконка'} type="text" />

    <h2 class="class21 section__title aos-init aos-animate" data-aos="fade-left">Сертификаты</h2>

    <div class='dffd'>
  <svg class='mar_lf class13' onClick={function68} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
   <svg  width='47px' class='pd_f class13' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
  </div>
      <div class='bmw ' link='bmw'>
      <Carous1 num={setitems3Ref?.current} />
   {/* <Gallery1 items1={items2} /> */}
   </div>

    </div>
    </section>


    <div class=" mission marg_bot">
    <div class="">
    <div class='horizontal_line'></div> 
    <div class='kont_display'>
    <div class='kontact'>

<h2 class="section__title color aos-init aos-animate" data-aos="fade-left">{setKontactsRef?.current?.name}</h2>

<h4 class='fs_2'>Адрес: Москва, Трубная 27 стр.3

</h4>
Телефоны:<br/>
<div class='teex1'>
+7 916 056-07-13<br/>
+7 499 460-43-15
</div>
<div class='teex'>
{setKontactsRef?.current?.uslugi}
</div>
</div>


<div class='kontact_geo'>
<iframe class='kontact_geo_1'src="https://yandex.ru/map-widget/v1/?um=constructor%3A630bc46eb12982583d132b4749990759e97393084a0ce5df595cb7e2e1649e70&amp;source=constructor" frameborder="0"></iframe>
</div>
    </div>
   
   

    </div>
    </div>
    <footer class="footer">
   
      {/* <div class='footer_d'>
 
    <svg xmlns="http://www.w3.org/2000/svg" class="logo logo1" viewBox="0 0 525 403"><path d="M264.664 59.75c-1.201 77.613-.896 122.25.836 122.25 1.321 0 1.5-9.833 1.5-82.5 0-45.375-.377-82.5-.837-82.5-.461 0-1.135 19.237-1.499 42.75M373.5 91.026c-40.605 3.748-67.439 26.827-67.488 58.042-.018 11.413 3.631 22.04 10.098 29.404l3.097 3.528h33.277l-4.992-2.642c-18.252-9.659-25.993-20.528-25.897-36.358.133-21.873 15.196-39.035 41.405-47.171 11.365-3.529 36.178-3.248 46.871.53 16.118 5.695 27.912 15.009 35.559 28.086 2.109 3.605 4.224 6.555 4.702 6.555.477 0 .868-6.879.868-15.286v-15.286l-10.141-2.82c-22.492-6.253-46.016-8.552-67.359-6.582M57 96c0 .55 1.237 1.007 2.75 1.016 4.642.028 10.375 4.032 12.863 8.984 3.679 7.322 4.514 14.897 5.104 46.25l.559 29.75H97V96.77l33.75.529c55.627.873 81.743 8.483 85.638 24.951 1.597 6.753 2.612 1.992 2.612-12.25V95h-81c-53.333 0-81 .342-81 1M12.921 201.25c-.044.137-.157 5.538-.25 12L12.5 225h8.75c5.167 0 8.75-.41 8.75-1 0-.578-3.167-1-7.5-1H15v-9h5.941c3.268 0 6.219-.45 6.559-1 .388-.628-1.823-1-5.941-1H15v-9h7c4 0 7-.429 7-1 0-.833-15.819-1.57-16.079-.75M47 213v12h8c4.667 0 8-.417 8-1 0-.564-2.833-1-6.5-1H50v-11c0-9.111-.258-11-1.5-11-1.25 0-1.5 2-1.5 12m32 0c0 9.645.276 12 1.406 12 1.124 0 1.431-2.412 1.525-12 .101-10.14-.117-12-1.406-12-1.282 0-1.525 1.912-1.525 12m22 0c0 8.933.319 12 1.25 12 .918 0 1.203-2.315 1.074-8.715-.097-4.794.053-9.086.333-9.539.28-.453 3.922 3.469 8.094 8.715 4.172 5.247 7.96 9.539 8.417 9.539.458 0 .832-5.4.832-12 0-14.417-1.798-16.352-2.214-2.383l-.286 9.617-7.5-9.593c-4.125-5.275-8.062-9.603-8.75-9.616-.932-.019-1.25 3.029-1.25 11.975m45.08-7.75c-1.016 2.338-3.45 7.738-5.407 12-2.432 5.296-3.141 7.75-2.237 7.75.727 0 1.881-1.35 2.564-3 1.233-2.977 1.611-3.25 4.5-3.25 10.576 0 11.224.168 12.5 3.25 1.126 2.719 2.985 4.109 3.01 2.25.029-2.22-10.577-23.25-11.726-23.25-.745 0-2.187 1.912-3.204 4.25m52.666-3c-4.977 3.802-2.688 8.901 5.192 11.562 6.156 2.079 8.157 4.235 6.44 6.938-1.196 1.882-9.217 2.418-12.628.844-1.112-.513-1.75-.395-1.75.324 0 3.576 12.023 4.15 15.436.737 4.636-4.636 1.953-8.222-8.686-11.614-7.565-2.413-4.182-8.625 4.255-7.815 4.844.466 6.634-.383 3.413-1.619-2.749-1.055-9.97-.657-11.672.643M231 210.364c0 11.444 2.072 14.636 9.5 14.636s9.5-3.192 9.5-14.636c0-5.576-.405-9.364-1-9.364-.591 0-1 3.604-1 8.811 0 10.284-1.622 13.189-7.365 13.189-5.836 0-7.635-3.138-7.635-13.314 0-5.124-.41-8.686-1-8.686-.595 0-1 3.788-1 9.364M270 213c0 7.333.389 12 1 12 .55 0 1-1.325 1-2.944 0-1.719 1.036-4.112 2.489-5.75l2.49-2.806 5.26 5.778c7.287 8.003 9.168 7.233 2.25-.922l-5.637-6.644 5.29-5.356c2.909-2.946 4.641-5.356 3.847-5.356-.793 0-4.715 3.251-8.715 7.225L272 215.45v-7.225c0-4.15-.426-7.225-1-7.225-.611 0-1 4.667-1 12m36 0c0 7.333.389 12 1 12 .55 0 1-2.475 1-5.5V214h16v5.5c0 3.025.45 5.5 1 5.5.611 0 1-4.667 1-12s-.389-12-1-12c-.55 0-1 2.494-1 5.542v5.542l-7.75-.292-7.75-.292v-5.252c0-3.535-.408-5.251-1.25-5.25-.93.002-1.25 3.07-1.25 12.002m45.065-7.75c-1.026 2.338-3.473 7.738-5.439 12-2.384 5.167-3.144 7.75-2.281 7.75.712 0 1.938-1.448 2.725-3.217 1.465-3.297 3.315-3.669 14.332-2.883.771.055 1.873 1.45 2.448 3.1.897 2.572 3.15 4.263 3.15 2.364 0-2.278-10.544-23.364-11.683-23.364-.763 0-2.227 1.912-3.252 4.25M382 213c0 9.868.26 12 1.464 12 1.162 0 1.523-1.958 1.75-9.508l.286-9.508 7.498 9.508c4.124 5.229 7.951 9.508 8.504 9.508.607 0 1.098-4.769 1.236-12 .189-9.911-.023-12-1.218-12-1.142 0-1.508 2.009-1.734 9.508l-.286 9.508-7.498-9.508c-4.124-5.229-8.062-9.508-8.75-9.508-.933 0-1.252 3.057-1.252 12m43.763-10.492c-10.744 6.055-5.34 22.502 7.388 22.488 10.27-.011 15.855-12.481 9.017-20.134-3.432-3.841-11.669-5.023-16.405-2.354m35.821 4.242c1.407 3.162 3.764 8.567 5.237 12.01 1.674 3.912 3.206 6.163 4.083 6 1.786-.331 12.379-23.76 10.742-23.76-.657 0-3.176 4.5-5.596 10-2.421 5.5-4.7 10-5.066 10-.365 0-2.608-4.5-4.984-10s-4.918-10-5.648-10c-.96 0-.619 1.59 1.232 5.75m38.737 6.014c-4.554 10.297-6.187 16.282-2.954 10.824 2.681-4.525 4.157-5.269 10.153-5.112 4.414.116 6.105.587 6.912 1.925 5.447 9.036 5.103 5.276-.705-7.703-3.332-7.447-5.771-11.675-6.727-11.663-.946.012-3.412 4.341-6.679 11.729m-74.532-6.866c-2.684 2.398-3.244 3.622-3.244 7.102 0 10.576 15.397 13.797 19.429 4.064 4.323-10.437-7.71-18.739-16.185-11.166m-279.209 3.381c-3.433 7.688-3.42 7.721 2.987 7.721 6.338 0 6.376-.18 1.884-9l-2.292-4.5-2.579 5.779m205 0c-3.433 7.688-3.42 7.721 2.987 7.721 6.338 0 6.376-.18 1.884-9l-2.292-4.5-2.579 5.779m152.42.416c-1.375 3.113-2.65 6.03-2.833 6.483-.184.452 2.441.822 5.833.822 3.392 0 6.017-.35 5.833-.779l-2.767-6.5c-2.981-7.007-2.983-7.007-6.066-.026M77.66 269.25c-1.014 37.818-4.151 47.137-16.579 49.236C48.889 320.546 62.776 321 138 321h81v-18.5c0-10.189-.401-18.5-.893-18.5-1.055 0-2.107 2.451-2.107 4.91 0 .961-1.382 3.833-3.071 6.383-10.393 15.691-42.63 23.676-95.679 23.698L97 319v-74H78.309l-.649 24.25M264 319.941c0 68.059.55 84.653 2.367 71.396 1.508-11.003.706-146.337-.867-146.337-1.32 0-1.5 8.993-1.5 74.941m178.768-72.688c12.204 12.991 10.497 38.37-3.633 54.023-31.575 34.975-92.948 22.257-125.587-26.026-2.696-3.988-5.272-7.25-5.725-7.25-.452 0-.817 6.863-.81 15.25l.013 15.25 7.237 4.698c10.045 6.522 23.459 13.212 32.572 16.247 57.525 19.158 119.773-13.03 116.896-60.445-.855-14.085-.777-14-12.881-14h-10.199l2.117 2.253" fill-rule="evenodd"></path></svg>
 
      </div> */}

     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Компания</h4>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Комплексные предложения</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Услуги</h4>
          <ul>
            <li><a href="#">Иньекционная косметология</a></li>
            <li><a href="#">Уходовая косметика
</a></li>
            <li><a href="#">Обучение косметологии
</a></li>
     
          </ul>
        </div>
        <div class="footer-col">
          <h4>Информация</h4>
          <ul>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">Запланировать визит</a></li>

          </ul>
        </div>

       
        <div class="footer-col">
          <h4>Подпишись на нас</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-vk"></i></a>
            <a href="#"><i class="fab fa-google"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>

    </div>
  );
}

export default App;
