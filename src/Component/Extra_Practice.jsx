// import React from 'react'
// import { useState } from 'react'

// function Extra_Practice() {
//     const [activity , setActivity] = useState("")
//     const[listData, setListData]= useState("")

//     function Addactivity(e){
//         e.preventDefault()
//            setListData([...listData, activity])
//            console.log(listData)
//            setActivity("");
//     }
//     function remove(i){
//            const update = listData.filter((elem, id)=>{
//               return i!= id;
//            })
//            setListData(update)
//     }

//   return (
//     <>
//     <div className='text-center text-success'>
//         <div >ToDo</div>
//         <input type='text' placeholder='add activity' onChange={(e)=>setActivity(e.target.value)} value={activity}></input>
//         <button  onClick={Addactivity} className='p-1' >add</button>
//         <p>here is your data</p>
//         <div>
//             {listData !=[] && listData.map((data, i)=>{
//             return(
//                 <p key={i}> 
//                 <div> {data} </div>
//             <button onClick={()=>remove(i)}>remove</button>
//                 </p>
//             )
//             })}
//         </div>
//     </div>
//     </>
//   )
// }

// export default Extra_Practice

// import React from 'react'
// import { useState } from 'react'

// function Extra_Practice() {
//     const [ email, setEmail]= useState("");
//     const [ password, setPassword]= useState("");
//     function submit(){
//         const data= {
//             email, password
//         }
//         console.log(data)
//         fetch("https://jsonplaceholder.typicode.com/users" ,{
//             method:"POST",
//             headers:{
//                 'Content-Type':"application/json"
//             },
//             body:JSON.stringify(data)
//         })
        
//         .then(response=> response.json())
//         .then(result=>{
//             console.log(result)
           
//             .catch(error => {
//                 console.error('Error:', error);
//               });
//               setEmail("");
//               setPassword("");
//         })
//     }
//   return (
//     <>
//     <div> 
//         <input type='text' placeholder='user email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//         <input type='password' placeholder='use password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
//         <button onClick={submit}>submit</button>
//     </div>
//     </>
//   )
// }
// export default Extra_Practice


// import React, { useState } from 'react'

// export default function Extra_Practice() {
//         const [name, setName]= useState("")
//         const [password, setPassword]= useState("")
//         const [email, setEmail]= useState("")

//        async function singup(){
           
//             let item ={name, password, email}
//             console.log(item)

//            let result= await fetch("https://jsonplaceholder.typicode.com/users",{
//                 method:"POST",
//                 body:JSON.stringify(item),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Accept":"application/json"
//                   },
//             })
//             result =  await result.json()
//             console.log("result", result);
//         }

//   return (
//     <div className='col-sm-6 offset-sm-3'>
//       <h1> product page </h1>
//       <input className='form-control' value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='name'/> 
//       <br/>
//       <input className='"form-control' value={password} type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password'/> 
//       <br/>
//       <input className='"form-control' value={email} type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='email'/> 
//       <br/>
//       <button onClick={singup} className='btn btn-primary'>singup</button>
//     </div>
//   )
// }



// let arr = [1,2,3,4,5,6]
// console.log(arr);









// import React from 'react'
// export default function Extra_Practice() {
//     const [user, setUser]= useState("")
//     const [pass, setPass]= useState("")

//    async function submit(e){

//    e.preventDefault()
//    let data = {user,pass}
//    let result = await fetch(,{
//     method:"POST",
//     headers:{
//         'Content-Type': 'application/json',
//        "Accept":"application/json"
//     }, body:JSON.stringify(data)
//    })
//    result =  await result.json()
//  console.log("result", result);
//     }
//   return (
//     <>
//     <div>
//      <input  className="form-control text-center" type="name" placeholder="username" value={user} onChange={(e)=>setUser(e.target.value)}/>
//      <input className="form-control text-center" type="password"  placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
//      <button onClick={submit}>submit</button>
//     </div>
      
//     </>
//   )
// }


// import React from 'react'

// export default function Extra_Practice() {
//   const [name, setName] = useState("")
//   const [password, setPassword] = useState("")
//   function submit(){
//     let onj = {name , password}
//     console.log( "data:"+ onj)
//   }
//   return (
//     <div >
//       <form onSubmit={submit}> 
//       <input placeholder="username" type="text" name="username" value={name}  onChange={(e)=>setName(e.target.name)} />
//       <input placeholder="username" type="password" name="username" value={password}  onChange={(e)=>setPassword(e.target.name)} />
//       </form >
//     </div>
//   )
// }


// import React from 'react'


import React from 'react'
import { useState } from 'react'

export default function Extra_Practice() {
  const [tabledata, setTabledata]=useState([])
  const[edit, setEdit] =useState(false)
 const [inputs, setInputs]= useState({
  name:"",
  email:""
 });
const handleChange = (e) =>{
 setInputs({
   ...inputs,
  [e.target.name]: e.target.value
 });
}
 const handlesubmit =(e)=>{
  e.preventDefault()
  setTabledata([...tabledata, inputs])
  setInputs({
    name:"",
    email:""
  })
 }
 const handleDelete =(index) =>{
   const filterdata = tabledata.filter((item, i)=> i !==index);
   setTabledata(filterdata)
 }
 const handleedit =(index)=>{
  const tempdata= tabledata[index]
  setInputs({name: tempdata.name, email: tempdata.email });
  setEdit(true)
 }
  return (
    <>
    <div>
      <h1 className='text-center'>CRUD</h1>
      <div>
        <form onSubmit={handlesubmit}> 
          <div>
            <label>Name</label>
            <input name='name' value={inputs.name} onChange={handleChange} />
          </div>
            <div>
            <label>Email</label>
            <input  name='email' value={inputs.email} onChange={handleChange}/>
          </div>
          <button type='submit'>{edit?"update": "Add"}</button>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              tabledata.map((item, i)=>(
                <tr className='text-blue'>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={()=>handleedit(i)} className='btn btn-primary'>edit</button>
                <button onClick={()=>handleDelete(i)} className='btn btn-success'>delete</button>
              </td>
             
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
