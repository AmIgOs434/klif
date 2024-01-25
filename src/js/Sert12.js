import AliceCarousel from "react-alice-carousel";
import { getKomplexpredlinfodesc, putKategorii, putSert, putUslugi } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Sert12 = ({e,get}) => {

    const [img,setimg,setimgRef] = useState(e.img)



    const function68 = async() => {
    
     
      $(`.class20${e.id}`).toggleClass('input_active')
   
    }

    const selectFile = e => {
      setimg(e.target.files[0])
    }

    const function6 = async() => {
  console.log(e.img)
  console.log(  setimgRef.current)

     if(e.img==setimgRef.current){
        return
     }else{
        const formData = new FormData()
        formData.append('id',e.id)
        formData.append('img',setimgRef.current)
      const fff = await putSert(formData)
     }
     get()
     get()
      }
    return (
      

      <div class='mll_'>
      <img class='sert_img' src={process.env.REACT_APP_API_URL + e.img} />
      
       <div class="dffd">
        <svg onClick={function68} class="mar_lf class13" viewBox="0 0 24 24" width="30px" cursor="pointer" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <button onClick={function6} class='butil'>сохранить</button>

       </div>
       <input class={`class20${e.id} class20 file`} onChange={selectFile} placeholder={'Иконка'} type="file" />
            </div>
  )
}