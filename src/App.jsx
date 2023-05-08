import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Example from "./Example";
import { useState, useEffect } from "react";
import { deleteUser } from "./createSlicer";
import { Button, Table } from "reactstrap";
function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
 const[ind,setInd]=useState('')
  const [currentUser, setCurrentUser] = useState({
    name:'',
    surname:'',  
    email: "",
    password: "",
    nationality: "",
    country: "",
  });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.createSlicer.users);
  const change = (item ,index) => {
    setInd( index)
    toggle();
    setCurrentUser(item);
     
  };
  useEffect(()=>{
      if(!modal){
        setInd('')
        setCurrentUser({
          name:'',
          surname:'',
          email: "",
          password: "",
          nationality: "",
          country: "",
        })
      }
  },[modal])
  return (
    <>
      <Example ind={ind} setCurrentUser={setCurrentUser} args={currentUser} modal={modal} toggle={toggle} />
     
      <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Name
      </th>
      <th>
        Sure Name
      </th>
      <th>
         Country
      </th>
      <th>
         Nationality
      </th>  <th>
         Email
      </th>  <th>
         Password
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
    {users.map((item, index) => {
        return (
          <>
              <th scope="row">
        {index+1}
      </th>
      <td>
        {item.name}
      </td>
      <td>
        {item.surname}
      </td>
      <td>
        {item.country}
      </td>
      <td>
        {item.nationality}
      </td>
      <td>
        {item.email}
      </td>
      <td>
        {item.password||'no'}
      </td>
            <Button style={{background:'green'}}   className="success" onClick={() => change(item,index)}>change</Button>
          <Button style={{background:'red'}} onClick={()=>dispatch(deleteUser(index))} >delete</Button>

          
          </>
        );
      })}
      
    </tr>
  </tbody>
</Table>
    </>
  );
}

export default App;
