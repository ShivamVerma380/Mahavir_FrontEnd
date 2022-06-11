import React  from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';

var isClicked = false;   


const AllComplaints = () => {

    const ComplaintHandler=()=> {
        isClicked = true;
        
    }
    localStorage.setItem("isclick",isClicked);

    return (
    
        <div>

            <h1 style={{textAlign:"center"}}>User Complaints</h1>
            
        <Table className="complaintone" style={{margin:"100px"}}>
               
                <tbody>
                    <tr>
                    
                    <tr style={{marginTop:"50px"}}>
                    <td>Complaint By: Shivam Verma</td>
                    </tr>
                    <tr>
                    <td>Phone No: 8756562321</td>
                    </tr>
                    <tr>
                    <td>Address: Bibwewadi Pune</td>
                    </tr>
                    
                    <tr>
                        <td>Complaint Description: AC not working</td>
                    </tr>
                    <td><table>
                        <tr>
                            <td style={{paddingRight:"500px"}}><Button onClick={ComplaintHandler}>Is Complaint Resolved</Button></td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <td><table>
                        
                        </table>
                    </td>
                    <td></td>
                    </tr>
                </tbody>
        </Table>
        <Table style={{margin:"100px"}}>
                <tbody>
                    <tr>
                    
                    
                    
                    
                    <tr style={{marginTop:"50px"}}>
                    <td>Complaint By: Shivam Verma</td>
                    </tr>
                    <tr>
                    <td>Phone No: 8756562321</td>
                    </tr>
                    <tr>
                    <td>Address: Bibwewadi Pune</td>
                    </tr>
                   
                    <tr>
                        <td>Complaint Description: TV not working</td>
                    </tr>
                    <td><table>
                        <tr>
                            <td style={{paddingRight:"500px"}}><Button>Is Complaint Resolved</Button></td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <td><table>
                        
                        </table>
                    </td>
                    <td></td>
                    </tr>
                </tbody>
        </Table>
        </div>
   
        
    )

}
export default AllComplaints;