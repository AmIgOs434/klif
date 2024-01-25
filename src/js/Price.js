import AliceCarousel from "react-alice-carousel";
import { getKomplexpredlinfodesc, putKategorii, putPrice } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Price = ({i}) => {

    const [svg,setsvg,setsvgRef] = useState(i.svg)
    const [name,setname,setnameRef] = useState(i.name)
    const [price,setprice,setpriceRef] = useState(i.price)




    const selectFile = e => {
        setsvg(e.target.files[0])
    }
    
    const function6 = async() => {
  
      const formData = new FormData()
      formData.append('id',i.id)
      formData.append('name',setnameRef.current)
      formData.append('price',setpriceRef.current)
    const fff = await putPrice(formData)
      
      }


      
    return (
      


<div class='but_price'>
<div class='dfl_l'>
<div class='class2'>{i.name}</div>
<div class='class2'>от {i.price}р</div>

<input class='class3 title_tex_ ' defaultValue={i.name} onChange={e => setname(e.target.value) } placeholder={'Иконка'} type="text" />
<input class='class3  title_tex_1 title_tex_11' defaultValue={i.price} onChange={e => setprice(e.target.value) } placeholder={'Иконка'} type="number" />

</div>
<button class='class3 mt_2_'>сохранить</button>
</div>

  )
}