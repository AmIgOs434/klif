import AliceCarousel from "react-alice-carousel";
import { crteatePhone, delPhone, delUslugi1, delUslugiprice1, getKomplexpredlinfodesc, putKategorii, putPhone, putPrice } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Phone123 = ({i,get}) => {

    const [svg,setsvg,setsvgRef] = useState(i.phone)




    
    const changew = async() => {
        
        $(`.ddfgrd`).toggleClass('input_active')
 $(`.dsfcs3s${i.id}`).toggleClass('input_active')
 $(`.dsfcs3s1${i.id}`).toggleClass('input_1_active')

          }

    
    const function6 = async() => {
  
      const formData = new FormData()
      formData.append('id',i.id)
      formData.append('phone',setsvgRef.current)

    const fff = await putPhone(formData)
    get()
      }

      const del_price = async() => {
    //     console.log(i.id)
    //     await delUslugiprice1(i.id)
    //   $(`.input_2sd11${i.id}`).addClass('ddd_nnn')
    await delPhone(i.id)
    get()
  }

  const add_price = async() => {
    //     console.log(i.id)
    //     await delUslugiprice1(i.id)
    //   $(`.input_2sd11${i.id}`).addClass('ddd_nnn')
  await  crteatePhone()
get()
  }
      
    return (
      


<div class= {`ddfdfd`} >

<div class={`dsfcs3s1${i.id}`}>
{i.phone}
</div>
<input defaultValue={setsvgRef?.current} onChange={e => setsvg(e.target.value)  }  class= {`teex_iput2 dsfcs3s${i.id}`}  />
<svg onClick={changew} class='invize mar_lf class13 ' stroke='#FFF'  viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  
<button class='ddfgrd mt_2_ invize' onClick={function6}>сохранить</button>
<button class='ddfgrd mt_2_ invize' onClick={del_price}>удалить</button>
<button class='ddfgrd mt_2_ invize' onClick={add_price}>добавить</button>
</div>

  )
}