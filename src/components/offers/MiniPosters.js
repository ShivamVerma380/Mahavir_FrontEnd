import React from "react";
import { useNavigate } from "react-router-dom";
import './MiniPoster.css';
import { MDBRow, MDBCard,  MDBCardImage } from 'mdb-react-ui-kit';
const MiniPosters = ({MiniPosters}) => {

    const navigate = useNavigate();

    const handleMiniPosteronClick=(product)=>{
      localStorage.setItem("offerPostersModelNumber",product.modelNumbers)
      navigate("/offers")
    }
    
    var coll=[]
    var len=MiniPosters.length;
    var grid_len;
    if(len%2===0){
      grid_len=len/2;
    }
    else{
      grid_len=parseInt(len/2)+1;
    }
    
     
    return (
        
        <div>
<MDBRow style={{padding:'1%', display:'flex',justifyContent: 'center'}} className='row-cols-1 row-cols-md-3 g-4'>
                {
                  MiniPosters.map((product,index) => {
                    
                    return (
                      <MDBCard className="minipostercard" >
                        <MDBCardImage style={{border: 'solid 1px gray', cursor:"pointer"}} src={product.imageUrl} onClick={()=>handleMiniPosteronClick(product)} alt='...' position='top' />
                        
                      </MDBCard>
                    )
                  })
                }


              </MDBRow>
        </div>
    )

}
export default MiniPosters;