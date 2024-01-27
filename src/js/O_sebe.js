import AliceCarousel from "react-alice-carousel";
import { delKategorii1, delOsebeinfo1, getKomplexpredlinfodesc, putKategorii, putO_sebe_info } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const O_sebe23 = ({i}) => {




    const [O_sebe1,setO_sebe1,setO_sebe1Ref] = useState(i.title)
    const [O_sebe2,setO_sebe2,setO_sebe2Ref] = useState(i.description)


    const function61 = async() => {
    const ddd =  await putO_sebe_info(i.id,setO_sebe1Ref.current,setO_sebe2Ref.current)
    }
    const function62 = async() => {

 
        await delOsebeinfo1(i.id)
        $(`.input_21e1${i.id}`).addClass('ddd_nnn')
     
    }

    return (
      

        <p class={`input_21e1${i.id} reveal fade-left`}>
        <strong class='color font '>
          <div class='text06'>
          {i.title}
          
          </div>
          <input class='text07' defaultValue={i.title} onChange={ e => setO_sebe1(e.target.value)}/>

     
        </strong> 
      <div class='fs_italic color_2 color_new_2'>
      <div class='text06'>
        {i.description}
        </div>
        <textarea class='text07 text07_' defaultValue={i.description} onChange={ e => setO_sebe2(e.target.value)}></textarea>

</div>
<div class='d_dd_f'>
<button class='d_n' onClick={function61}>сохранить</button>
<button class='d_n' onClick={function62}>удалить</button>
</div>

</p>
  )
}