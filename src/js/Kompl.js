import AliceCarousel from "react-alice-carousel";
import { createKomplexpredlinfodesc, delKomplex_predl_info1, getKomplexpredlinfodesc, getKomplexpredlinfodesc1, putKategorii, putKomplex_predl_info, putKomplex_predl_info1 } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
import { Kompl1 } from "./Kompl1";
export const Kompl = ({e,get}) => {
    
    const [O_sebe2,setO_sebe2,setO_sebe2Ref] = useState()
    const [title,settitle,settitleRef] = useState(e.title2)
    const [name2,setname2,setname2Ref] = useState(e.name2)
    const [img,setimg,setimgRef] = useState(e.img)

    const [img1,setimg1,setimg1Ref] = useState(e.img)

    const get4 = async() => {
    const ceo =await getKomplexpredlinfodesc1(e.id)
    ceo.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    console.log(ceo)
    setO_sebe2(ceo)
   
    }
    useEffect(() => {

        get4()
    }, []);
    
    const ge44 = async() => {
        await  createKomplexpredlinfodesc(e.id)
        
        setTimeout(function(){$('.invize').addClass('display_admin')},500);
        get4()
      }


    const del_kateg = async() => {
        await delKomplex_predl_info1(e.id)
      $(`.input_as211${e.id}`).addClass('ddd_nnn')
      get()
  }
    const selectFile = e => {
        setimg(e.target.files[0])
    }

    const function222 = async() => {
        
        const formData = new FormData()
     
        formData.append('name2', setname2Ref.current)
        formData.append('title2', settitleRef.current)
        formData.append('id', e.id)
         if(setimg1Ref.current==setimgRef.current){
            const dsds = await putKomplex_predl_info1(formData)   
         }else{
            formData.append('img', setimgRef.current)
            const dsds = await putKomplex_predl_info(formData)   
         }
         function64()
         get()
    }

    const function64 = async() => {
    
        $(`.cla0`).toggleClass('input_active')
        $(`.tex_area`).toggleClass('input_active')
        $(`.class6`).toggleClass('input_active')
        $(`.class9`).toggleClass('input_active')
        $(`.class8`).toggleClass('input_1_active')
        $(`.carousel_title_1`).toggleClass('input_1_active')
        
      }
    return (
      <div class={`input_as211${e.id}`}>
        <div class='sswcf'>
        <svg onClick={del_kateg}   class='del_krest invize' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-checkbox</title> <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z"></path> </g></svg>
  
      
        </div>

        <div class= {`carousel_ `}>
           
        <div class='carousel_cont'>
            <div class='carousel_width'>
            <img class='carousel_img reveal fade-bottom' src= {process.env.REACT_APP_API_URL + e.img} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
            </div>
            {/* <Kompl1 /> */}
            <div class='carousel_width color_2 reveal fade-right'>
    <div class='carousel_title'>
        <div class='carousel_title_1'>
        <strong class='color'>{e.title2} </strong> {e.name2}
        </div>

<input class='class9 title_tex_ file' defaultValue={e.title2} onChange={e => settitle(e.target.value)} placeholder={'Иконка'} type="text" />
<input class='class9 title_tex_ file' defaultValue={e.name2} onChange={e => setname2(e.target.value)}  placeholder={'Иконка'} type="text" />

    </div>
           
<div>

{setO_sebe2Ref?.current?.map(e=>
<Kompl1 e={e} get45={get4} />
)}

 <input class=' class9 text08 file' onChange={selectFile} placeholder={'Иконка'} type="file" />
 <button onClick={function222} class='cla0 butttt'>сохранить</button>
 <div class='plus mtta_'>
        <svg onClick={ge44} class='add_plus invize'viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set"  transform="translate(-100.000000, -1035.000000)" fill="#000000"> <path d="M130,1063 C130,1064.1 129.104,1065 128,1065 L104,1065 C102.896,1065 102,1064.1 102,1063 L102,1039 C102,1037.9 102.896,1037 104,1037 L128,1037 C129.104,1037 130,1037.9 130,1039 L130,1063 L130,1063 Z M128,1035 L104,1035 C101.791,1035 100,1036.79 100,1039 L100,1063 C100,1065.21 101.791,1067 104,1067 L128,1067 C130.209,1067 132,1065.21 132,1063 L132,1039 C132,1036.79 130.209,1035 128,1035 L128,1035 Z M122,1050 L117,1050 L117,1045 C117,1044.45 116.552,1044 116,1044 C115.448,1044 115,1044.45 115,1045 L115,1050 L110,1050 C109.448,1050 109,1050.45 109,1051 C109,1051.55 109.448,1052 110,1052 L115,1052 L115,1057 C115,1057.55 115.448,1058 116,1058 C116.552,1058 117,1057.55 117,1057 L117,1052 L122,1052 C122.552,1052 123,1051.55 123,1051 C123,1050.45 122.552,1050 122,1050 L122,1050 Z" id="plus-square"> </path> </g> </g> </g></svg>
           </div>
            <a href='#vizit' class='carousel_buttom bgcolor_new color_bg'>
                  Записаться 
            </a>

    
            </div>
                
        
  </div>

            {/* <div class='carousel_width color_2'>
            <div class='carousel_title'>
        <strong class='color'>Smas-лифтинг от 3 500₽ | </strong>   {e.name}
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
            </div> */}

        </div>
        </div>
        </div>
  )
}