import AliceCarousel from "react-alice-carousel";
import { getKomplexpredlinfodesc, getKomplexpredlinfodesc1, putKategorii, putKomplex_predl_info, putKomplex_predl_info1 } from "../https/deviceAPI";
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
    console.log(ceo)
    setO_sebe2(ceo)
    }
    useEffect(() => {

        get4()
    }, []);
    
    
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
      
        <div class='carousel_'>
        <div class='carousel_cont'>
            <div class='carousel_width'>
            <img class='carousel_img' src= {process.env.REACT_APP_API_URL + e.img} alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
            </div>
            {/* <Kompl1 /> */}
            <div class='carousel_width color_2'>
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
            <div  class='carousel_buttom bgcolor_new color_bg'>
                  Записаться 
            </div>

    
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
  )
}