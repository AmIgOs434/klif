import AliceCarousel from "react-alice-carousel";
import { createKomplexpredlinfodesc, delKomplexpredlinfodesc1, getKomplexpredlinfodesc, putKategorii, putKomplex_predl_info_desc } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Kompl1 = ({e,get45}) => {
    
    // const [O_sebe2,setO_sebe2,setO_sebe2Ref] = useState()
    // const get4 = async() => {
    // const ceo =await getKomplexpredlinfodesc1(e.id)
    // setO_sebe2(ceo)
    // }
    // useEffect(() => {

    //     get4
    // }, []);

    
    const del = async() => {
    await  delKomplexpredlinfodesc1(e.id)
    $(`.input_asss211${e.id}`).addClass('ddd_nnn')
    
    }
    const get4 = async() => {
         $(`.ccd${e.id}`).toggleClass('input_active')
            $(`.tex_area_1${e.id}`).toggleClass('input_active')
            $(`.class9_1${e.id}`).toggleClass('input_active')
            $(`.carousel_title_1_1${e.id}`).toggleClass('input_1_active')
        }
        const get6 = async() => {
            const formData = new FormData()
            formData.append('id', e.id)
            formData.append('title', settitleRef.current)
            formData.append('description', setdescriptionRef.current)
           const asds =  putKomplex_predl_info_desc(formData)
           get4()
           get45()
        }
    const [title,settitle,settitleRef] = useState(e.title)
    const [description,setdescription,setdescriptionRef] = useState(e.description)
    return (
     
        <div class= {`carousel_text color_2 input_asss211${e.id}`} >
            {/* carousel_title_1
            tex_area
            class9 */}
            <div class={`carousel_title_1_1${e.id}`}>
            <strong class='color'>  {e.title}  </strong>  {e.description}
            </div>
            
        <input class= {`class9_1${e.id} class9_1 class10 title_tex_ file`} defaultValue={settitleRef.current} onChange={e => settitle(e.target.value)} placeholder={'Иконка'} type="text" />
        <textarea class={`tex_area_1${e.id} tex_area_1  title_tex_  file`} defaultValue={setdescriptionRef.current} onChange={e => setdescription(e.target.value)}  placeholder={'Иконка'} type="text" ></textarea>
        <div class='dffd mt_mt'>
  <svg class='mar_lf  invize'  onClick={get4}  viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  <svg onClick={del}   class='del_krest invize' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-checkbox</title> <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z"></path> </g></svg>
   
   <button onClick={get6} class={`butttt ccd ccd${e.id}`} >сохранить</button>
  </div>

        </div>

    
  )
}