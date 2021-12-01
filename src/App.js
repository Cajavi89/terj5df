import React, {useState} from 'react';

const App =()=>{
  const [data, setData]= useState({name:'',lastName:''})
  const [listInviteds, setListInviteds] = useState([])

  const submitInfo =(e)=>{
    e.preventDefault()
    if(data.name===''|| data.lastName==='')return alert("no hay datos")
    setListInviteds([
      ...listInviteds,
      {
        name: data.name,
        lastName: data.lastName
      }
    ])
    setData({name:'',lastName:''})
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={submitInfo}>
            <div className="form-group">
              <label htmlFor="first-name">Nombre</label>
              <input type="text" className="form-control" name="first-name" value={data.name} onChange={e=>setData({...data,name:e.target.value})} />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Apellido</label>
              <input type="text" className="form-control" name="last-name" value={data.lastName} onChange={e=>setData({...data,lastName:e.target.value})} />
            </div>

            <div className="action">
              <button type="submit" className="btn btn-primary">Agregar Invitado</button>
            </div>
          </form>

          <table className="table bordered-table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>

                <th>Apellido</th>

              </tr>
            </thead>
            <tbody>
              {listInviteds.map(({name,lastName,index}) =>
              <tr key={Math.random()*10}>
                <td>{name}</td>
                <td>{lastName}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App


