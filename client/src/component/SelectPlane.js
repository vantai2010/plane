import { FaArrowCircleRight,FaArrowLeft } from "react-icons/fa";
import {useSelector, useDispatch} from 'react-redux';
import {changeListFlight} from '../slices/listFlight'

import {changeFlight} from '../slices/flight'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import './SelectPlane.css';

function SelectPlane() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const flight = useSelector(state => state.flight)
    const listFlight = useSelector(state => state.listFlight)

    
    const handleCancel = () => {
        navigate('/')
    }

    const handleSelect = (index) => {
        dispatch(changeFlight({
            FLI_CODE: listFlight[index].FLI_CODE,
            FLI_S_DATE: listFlight[index].FLI_S_DATE,
            FLI_E_DATE: listFlight[index].FLI_E_DATE,
            PLANE_CODE: listFlight[index].PLANE_CODE
        }))
        
        navigate('/chair')
    }

    return (
        <div className="body_plane">
            <div className="body_plane_3st">
              <iframe className="body-plane-if"  src="https://www.vietnamairlines.com/vn/vi/home" width="300" ></iframe>
              <br/>
              <iframe className="body-plane-if"  src="https://vietjets.com.vn/?gclid=CjwKCAiAheacBhB8EiwAItVO24eT7NLg0OAO_svVcxvcGOuSFxEoqCG8WB0ACGUlusZbAbINwG_1gxoCNLgQAvD_BwE"></iframe>
              <br/>
              <iframe className="body-plane-if" src="https://dsvn.vn/#/"></iframe> 
              <br/>
              <iframe className="body-plane-if" src="http://vetautructuyen.vn/"></iframe>      
            </div>
            <div className="body_plane_2st">
                <div>
                  <button className="body_plane_back" onClick={() => handleCancel()}><FaArrowLeft className="body-back-icon"></FaArrowLeft>Quay lại</button>
                  <h1 className="plane-add-title">Thông tin chuyến bay </h1>
                  <span className="plane-add">{listFlight[0].FLI_S_PLACE}<FaArrowCircleRight className="plane-add-icons"></FaArrowCircleRight>{listFlight[0].FLI_E_PLACE}</span>
                </div>
                <div>
                  <table className="plane-table" cellspacing="5" cellpadding="3" border="1">
                      <tr>
                        <td className="plane-table-td">Mã máy bay</td>
                        <td className="plane-table-td">Mã chuyến bay</td>
                        <td className="plane-table-td">Thời gian bắt đầu</td>
                        <td className="plane-table-td">Thời gian kết thúc</td>
                      </tr>
                      {
                        listFlight.map((flight, index) => {
                            return (
                                <tr key={index}>
                                  <td className="plane-table-td">{flight.FLI_CODE}</td>
                                  <td className="plane-table-td">{flight.PLANE_CODE}</td>
                                  <td className="plane-table-td">{flight.FLI_S_DATE}</td>
                                  <td className="plane-table-td">{flight.FLI_E_DATE}</td>
                                  <td  className="plane-table-td-btn" onClick={() => handleSelect(index)}><button className="plane-table-button">Chọn</button></td>
                                </tr>
                            )
                        })
                      }
                      
                      

                  </table>
                </div>
            </div>
        </div>
  );
}

export default SelectPlane;