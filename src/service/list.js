import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function List(){
    const [tours,setTours] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/api/tours').then(res => {
            setTours(res.data)
        })
    },[]);
    const handleSubmit = (id) => {
        if (window.confirm("bạn muon xoa")){
            axios.delete(`http://localhost:8080/api/tours/${id}`).then(() => {
                window.location.reload();
            })
        }
    }
    return (
        <>
            <div >
                <div id={"nav"}>
                    <div><Link to={"/create-tour"} className={"btn btn-success"}>Add +</Link></div>
                </div>

                <table className={"table"}>
                    <thead>
                    <tr>
                        <td><h5>ID</h5></td>
                        <td><h5>NAME</h5></td>
                        <td><h5>PRICE</h5></td>
                        <td><h5>INFORMATION</h5></td>
                        <td style={{textAlign: "center"}} colSpan={3}><h5>ACTION</h5></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tours.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={`/info-tour/${item.id}`} >{item.name}</Link></td>
                                <td>{item.price}</td>
                                <td>{item.information}</td>
                                <td><Link to={`/edit-tour/${item.id}`} className={"btn btn-info"}>Edit</Link></td>
                                <td><button onClick={() => handleSubmit(item.id)} className={"btn btn-danger"}>Delete</button></td>

                            </tr>

                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}