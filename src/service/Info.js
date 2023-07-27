import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Form, Formik} from "formik";

export default function Info(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [tours, setTours] = useState({
        name: "",
        price: "",
        information: "",

    });
    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTours(res.data)
        });
    }, [])
    const handleSubmit = (id) => {
        if (window.confirm("bạn muon xoa")){
            axios.delete(`http://localhost:8080/api/tours/${id}`).then(() => {
                navigate('/')
            })
        }
    }
    return(
        <>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    information: '',
                }}
            >

                <Form >
                    <table className={"table"} style={{width:500}}>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{tours.name}</td>

                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{tours.price}</td>

                        </tr>
                        <tr>
                            <td>Information</td>
                            <td>{tours.information}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Link to={`/`} className={"btn btn-info"}>Danh Sach</Link></td>
                        </tr>
                        </tbody>
                    </table>
                </Form>
            </Formik>
        </>
    )
}