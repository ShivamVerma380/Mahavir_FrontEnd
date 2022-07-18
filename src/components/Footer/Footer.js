import React from "react";
import {Row,Col} from "react-bootstrap"
import { Icon } from '@iconify/react';
function Footer(){
    
    return(
        
        <>
        <div>
            
            
  <footer className="text-white text-center text-lg-start bg-dark">
    <div className="container p-4">
      <div className="row mt-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          <div className="mt-4">
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fa fa-facebook-f"></i></a>
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fa fa-dribbble"></i></a>
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fa fa-twitter"></i></a>
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fa fa-google"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          

          <ul className="fa-ul" style={{marginLeft: '1.65em'}}>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    
  </footer>

                      
                  </div>
        </>
    );
};

export default Footer;