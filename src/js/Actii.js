import AliceCarousel from "react-alice-carousel";
import { getKomplexpredlinfodesc, putActii_info, putKategorii, putUslugi } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Actii1 = ({i,get}) => {
    
    // const [O_sebe2,setO_sebe2,setO_sebe2Ref] = useState()
    // const get4 = async() => {
    // const ceo =await getKomplexpredlinfodesc1(e.id)
    // setO_sebe2(ceo)
    // }
    // useEffect(() => {

    //     get4
    // }, []);
    const function65 = async() => {
    
    $(`.class12${i.id}`).toggleClass('input_active')
    $(`.section__title_2${i.id}`).toggleClass('input_1_active')

      }
     
    const [title,settitle,settitleRef] = useState(i.name)
    const [name2,setname2,setname2Ref] = useState(i.description)

    const function6 = async() => {
           const formData = new FormData()
           formData.append('id',i.id)
           formData.append('name',settitleRef.current)
           formData.append('description',setname2Ref.current)
           const fff = await putActii_info(formData)

        function65()
        get()
         }


    return (
     <div>
        <div class={`section__title_2 section__title_2${i.id}`}>
        <p><strong class='color'>{i.name}</strong> {i.description}</p>
        </div>

  <input class={`class12 class12${i.id} title_tex_2 file`} defaultValue={settitleRef.current} onChange={e => settitle(e.target.value)}  placeholder={'Иконка'} type="text" />
  <textarea class={`class12 class12${i.id}  tex_area_12 file`} defaultValue={setname2Ref.current} onChange={e => setname2(e.target.value)}  placeholder={'Иконка'} type="text" ></textarea>
  <div class="dffd ">
    <svg onClick={function65}class= {`mar_lf mar_lf1`}  viewBox="0 0 24 24" width="30px" cursor="pointer" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    <button onClick={function6} class={`bububu`} >сохранить</button>
 </div>

     </div>
      
    
  )
}