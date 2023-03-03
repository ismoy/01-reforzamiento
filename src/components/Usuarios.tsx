import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from '../interfaces/requestResponseInter';


export const Usuarios = () => {

   const {usuarios,paginaSiguiente,paginaAnterior} =useUsuarios()
   
    const renderItem = (usuario:Usuario) =>{
        return(
            <tr key={usuario.id}>
           <td>
            <img src={usuario.avatar} alt=""
              style={{
                width:40,
                borderRadius:100
              }}
            />
          
            </td> 
           <td>{usuario.first_name} {usuario.last_name}</td> 
           <td>{usuario.email}</td>
            </tr>
        )

    }
    
  return (
    <>
    <h3>Usuario:</h3>
    <table className="table">
       <thead>
        <tr>
           <th>Avatar</th> 
           <th>Nombre</th> 
           <th>Email</th> 
        </tr>
        </thead> 
        <tbody>
            {
                usuarios.map( renderItem)
            }

        </tbody>
    </table>

    <button className="btn btn-secondary"
    onClick={paginaAnterior}>
        Anterior
    </button>
    &nbsp;
    <button className="btn btn-primary"
    onClick={paginaSiguiente}>
        Siguientes
    </button>
    </>
  )
}
