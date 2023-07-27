import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateTour(){
    const navigate = useNavigate();
    return(
        <>
            <h1 style={{textAlign: "center"}}>Create Form</h1>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    information: '',
                }}
                onSubmit={(values) =>{
                    axios.post('http://localhost:8080/api/tours',values).then(() =>{
                        alert('Thành công')
                        navigate('/')

                    })
                }}>
                <Form>
                    <table>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr> <td><Field name = {'name'}></Field></td></tr>
                        <tr>
                            <td>Price</td>
                        </tr>
                        <tr><td> <Field name = {'price'}></Field></td></tr>
                        <tr>
                            <td>Information</td>
                        </tr>
                        <tr><td> <Field name = {'information'}></Field></td></tr>
                        <tr>
                            <td colSpan={2}><button type={"submit"} className={"btn btn-warning"}>Save</button>
                            <Link to={`/`} className={"btn btn-info"}>Cancel</Link></td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </>
    );
}