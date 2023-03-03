import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/requestResponse"
import { ReqResListado, Usuario } from "../interfaces/requestResponseInter"

export const useUsuarios = () => {
  
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const pageRef =  useRef(1)

    useEffect(() => {
    cargarUsuarios()

    }, [])

    const cargarUsuarios = async() =>{
   const resp = await reqResApi.get<ReqResListado>('/users',{
    params:{
        page: pageRef.current
    }
   })

   if(resp.data.data.length > 0){

     setUsuarios(resp.data.data)
     console.log(resp.data.data)
   }else{
    pageRef.current--
   }
     
    }

    const paginaSiguiente = () =>{
      cargarUsuarios()
      pageRef.current++
    }

    const paginaAnterior = () =>{
      if(pageRef.current>1){
        pageRef.current--
          cargarUsuarios()
      }
    
    }

    return{
      usuarios,
      paginaSiguiente,
      paginaAnterior
    }

}
