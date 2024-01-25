import {$host} from "./index";


export const getGlav_text = async () => {
    const {data} = await $host.get('api/device/getGlav_text/1')  
    return data
}
export const putGlav_text = async (id,video,text1,text2) => {
    const data1 = await $host.put('api/device/putGlav_text/' + id,  { video:video, text1:text1,text2:text2})
    return data1
}





export const getKategorii = async () => {
    const {data} = await $host.get('api/device/getKategorii/1')  
    return data
}
export const putKategorii = async (device) => {
    const data1 = await $host.post('api/device/putKategorii', device)
    return data1
}
export const putKategorii1 = async (device) => {
    const data1 = await $host.post('api/device/putKategorii1', device)
    return data1
}


export const putPrice = async (device) => {
    const data1 = await $host.post('api/device/putUslugi_price', device)
    return data1
}
export const putKomplex_predl_info = async (device) => {
    const data1 = await $host.post('api/device/putKomplex_predl_info', device)
    return data1
}

export const putKomplex_predl_info1 = async (device) => {
    const data1 = await $host.post('api/device/putKomplex_predl_info1', device)
    return data1
}
export const putKomplex_predl_info_desc = async (device) => {
    const data1 = await $host.post('api/device/putKomplex_predl_info_desc', device)
    return data1
}
export const putvideo = async (device) => {
    const data1 = await $host.post('api/device/putGlav_text', device)
    return data1
}
export const putvideo1 = async (device) => {
    const data1 = await $host.post('api/device/putGlav_text1', device)
    return data1
}


export const createKategorii = async (type) => {
    const {data} = await $host.post('api/createKategorii', type)
    return data
}
export const delKategorii = async (id) => {
    const {data} = await $host.delete('api/delKategorii'+ id )
    return data
}



export const getO_sebe = async () => {
    const {data} = await $host.get('api/device/getO_sebe/1')  
    return data
}
export const putO_sebe = async (device) => {
    const data1 = await $host.post('api/device/putO_sebe' , device)
    return data1
}



export const creategetOsebeinfo = async (type) => {
    const {data} = await $host.post('api/creategetOsebeinfo', type)
    return data
}
export const delOsebeinfo = async (id) => {
    const {data} = await $host.delete('api/delOsebeinfo'+ id )
    return data
}

export const getO_sebe_info = async () => {
    const {data} = await $host.get('api/device/getO_sebe_info/1')  
    return data
}
export const putO_sebe_info = async (id,title,description) => {
    const data1 = await $host.put('api/device/putO_sebe_info/' + id,  { title:title,description:description})
    return data1
}




export const createUslugi = async (type) => {
    const {data} = await $host.post('api/creategetOsebeinfo', type)
    return data
}
export const delUslugi = async (id) => {
    const {data} = await $host.delete('api/delOsebeinfo'+ id )
    return data
}

export const getUslugi = async () => {
    const {data} = await $host.get('api/device/getUslugi')  
    return data
}
export const putUslugi = async (device) => {
    const data1 = await $host.post('api/device/putUslugi',  device)
    return data1
}
export const putSert = async (device) => {
    const data1 = await $host.post('api/device/putSertificatsinfo',  device)
    return data1
}

export const putOtzivi = async (device) => {
    const data1 = await $host.post('api/device/putOtzivi_info',  device)
    return data1
}
export const putVizit = async (device) => {
    const data1 = await $host.post('api/device/putVizit',  device)
    return data1
}
export const putVizit1 = async (device) => {
    const data1 = await $host.post('api/device/putVizit1',  device)
    return data1
}
export const putOtzivi1 = async (device) => {
    const data1 = await $host.post('api/device/putOtzivi_info1',  device)
    return data1
}


export const putActii_info = async (device) => {
    const data1 = await $host.post('api/device/putActii_info',  device)
    return data1
}

export const putActii_img = async (device) => {
    const data1 = await $host.post('api/device/putActii_img',  device)
    return data1
}

export const putUslugi2 = async (device) => {
    const data1 = await $host.post('api/device/putUslugi2',  device)
    return data1
}
export const putUslugi3= async (device) => {
    const data1 = await $host.post('api/device/putUslugi3',  device)
    return data1
}


export const createUslugiprice = async (type) => {
    const {data} = await $host.post('api/createUslugiprice', type)
    return data
}
export const delUslugiprice = async (id) => {
    const {data} = await $host.delete('api/delUslugiprice'+ id )
    return data
}

export const getUslugi_price = async (id) => {
    const {data} = await $host.get('api/device/getUslugi_price/'+ id)  
    return data
}
export const putUslugi_price = async (id,text1,text2) => {
    const data1 = await $host.put('api/device/putUslugi_price/' + id,  { text1:text1,text2:text2})
    return data1
}




export const getKomplexpredlinfodesc = async (id) => {
    const {data} = await $host.get('api/device/getKomplexpredlinfo')  
    return data
}
export const getKomplexpredlinfodesc1 = async (id) => {
    const {data} = await $host.get('api/device/getKomplexpredlinfodesc/'+ id)  
    return data
}
export const getActii = async () => {
    const {data} = await $host.get('api/device/getActii/1')  
    return data
}
export const getActii2 = async () => {
    const {data} = await $host.get('api/device/getActii_info/1')  
    return data
}
export const getOtzivi_info = async () => {
    const {data} = await $host.get('api/device/getOtzivi_info/1')  
    return data
}
export const getVizit = async () => {
    const {data} = await $host.get('api/device/getVizit/1')  
    return data
}
export const getSertificats_info = async () => {
    const {data} = await $host.get('api/device/getSertificats_info/1')  
    return data
}

export const getKontacts = async () => {
    const {data} = await $host.get('api/device/getKontacts/1')  
    return data
}
export const getKontacts_phone = async () => {
    const {data} = await $host.get('api/device/getKontacts_phone/1')  
    return data
}