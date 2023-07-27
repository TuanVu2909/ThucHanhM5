import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditTour(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [tours, setTours] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTours(res.data)
        });
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    tours
                }}
                onSubmit={(values) => {
                    axios.put(`http://localhost:8080/api/tours/${id}`, values).then(() => {
                        alert('update Thành công')
                        navigate('/')
                    })
                }}>
                <Form>
                    <table>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr><td><Field name={'name'} placeholder={tours.name}></Field></td></tr>
                        <tr>
                            <td>Price</td>

                        </tr>
                        <tr>  <td><Field name={'price'} placeholder={tours.price}></Field></td></tr>
                        <tr>
                            <td>Information</td>

                        </tr>
                        <tr><td><Field name={'information'} placeholder={tours.information}></Field></td></tr>
                        <tr>
                            <td colSpan={2}>
                                <button type={"submit"} className={"btn btn-warning"}>Save</button>
                                <Link to={'/'} className={"btn btn-success"} style={{textAlign: "center"}}>Danh Sach</Link>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </>
    )

}