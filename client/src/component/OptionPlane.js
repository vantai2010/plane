import axios from 'axios'
import { BsPeopleFill,BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import{useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux' 
import {changeTicket} from '../slices/ticket'
import {changePlane} from '../slices/plane'
import {changeCustomer} from '../slices/customer'


import './OptionPl.css';

function OptionPlane() {
  const flight = useSelector(state => state.flight)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cusName, setCusName] = useState('')
  const [cusPhone, setCusPhone] = useState('')
  const [cusId, setCusId] = useState('')
  const [cssA01 , setCssA01] = useState({})
  const [cssA02 , setCssA02] = useState({})
  const [cssA03 , setCssA03] = useState({})
  const [cssA04 , setCssA04] = useState({})
  const [cssA05 , setCssA05] = useState({})
  const [cssA06 , setCssA06] = useState({})
  const [cssA07 , setCssA07] = useState({})
  const [cssA08 , setCssA08] = useState({})
  const [cssA09 , setCssA09] = useState({})
  const [cssA10 , setCssA10] = useState({})
  const [cssA11 , setCssA11] = useState({})
  const [cssA12 , setCssA12] = useState({})
  const [cssA13 , setCssA13] = useState({})
  const [cssA14 , setCssA14] = useState({})
  const [cssA15 , setCssA15] = useState({})
  const [cssA16 , setCssA16] = useState({})
  const [cssB17 , setCssB17] = useState({})
  const [cssB18 , setCssB18] = useState({})
  const [cssB19 , setCssB19] = useState({})
  const [cssB20 , setCssB20] = useState({})
  const [cssB21 , setCssB21] = useState({})
  const [cssB22 , setCssB22] = useState({})
  const [cssB23 , setCssB23] = useState({})
  const [cssB24 , setCssB24] = useState({})
  const [cssB25 , setCssB25] = useState({})
  const [cssB26 , setCssB26] = useState({})
  const [cssB27 , setCssB27] = useState({})
  const [cssB28 , setCssB28] = useState({})
  const [cssB29 , setCssB29] = useState({})
  const [cssB30 , setCssB30] = useState({})
  const [cssB31 , setCssB31] = useState({})
  const [cssB32 , setCssB32] = useState({})
  const [cssB33 , setCssB33] = useState({})
  const [cssB34 , setCssB34] = useState({})
  const [cssB35 , setCssB35] = useState({})
  const [cssB36 , setCssB36] = useState({})
  const [cssB37 , setCssB37] = useState({})
  const [cssB38 , setCssB38] = useState({})
  const [cssB39 , setCssB39] = useState({})
  const [cssB40 , setCssB40] = useState({})
  const [cssC41 , setCssC41] = useState({})
  const [cssC42 , setCssC42] = useState({})
  const [cssC43 , setCssC43] = useState({})
  const [cssC44 , setCssC44] = useState({})
  const [cssC45 , setCssC45] = useState({})
  const [cssC46 , setCssC46] = useState({})
  const [cssC47 , setCssC47] = useState({})
  const [cssC48 , setCssC48] = useState({})
  const [cssC49 , setCssC49] = useState({})
  const [cssC50 , setCssC50] = useState({})
  const [cssC51 , setCssC51] = useState({})
  const [cssC52 , setCssC52] = useState({})
  const [cssC53 , setCssC53] = useState({})
  const [cssC54 , setCssC54] = useState({})
  const [cssC55 , setCssC55] = useState({})
  const [cssC56 , setCssC56] = useState({})
  const [cssC57 , setCssC57] = useState({})
  const [cssC58 , setCssC58] = useState({})
  const [cssC59 , setCssC59] = useState({})
  const [cssC60 , setCssC60] = useState({})
  const [cssC61 , setCssC61] = useState({})
  const [cssC62 , setCssC62] = useState({})
  const [cssC63 , setCssC63] = useState({})
  const [cssC64 , setCssC64] = useState({})
  const [cssC65 , setCssC65] = useState({})
  const [cssC66 , setCssC66] = useState({})
  const [cssC67 , setCssC67] = useState({})
  const [cssC68 , setCssC68] = useState({})
  const [cssC69 , setCssC69] = useState({})
  const [cssC70 , setCssC70] = useState({})
  const [cssC71 , setCssC71] = useState({})
  const [cssC72 , setCssC72] = useState({})
  const [cssC73 , setCssC73] = useState({})
  const [cssC74 , setCssC74] = useState({})
  const [cssC75 , setCssC75] = useState({})
  const [cssC76 , setCssC76] = useState({})
  const [showEnterInfor, setShowEnterInfor] = useState(false)


  const listChairBooked = useRef()
  
  
  useEffect(() =>{
    callApi()
  }, [])

  const callApi = async () => {
    try {
      const customer = await axios.get(`http://localhost:5000/api/plane/${flight.PLANE_CODE}`)
      listChairBooked.current = customer.data.plane.CHAIR_BOOKED
      
      listChairBooked.current.split(' ').forEach(member => {
        switch(member){
          case 'A01': {
            return setCssA01({background:"red"})
          }
          case 'A02': {
            return setCssA02({background:"red"})
          }
          case 'A03': {
            return setCssA03({background:"red"})
          }
          case 'A04': {
            return setCssA04({background:"red"})
          }
          case 'A05': {
            return setCssA05({background:"red"})
          }
          case 'A06': {
            return setCssA06({background:"red"})
          }
          case 'A07': {
            return setCssA07({background:"red"})
          }
          case 'A08': {
            return setCssA08({background:"red"})
          }
          case 'A09': {
            return setCssA09({background:"red"})
          }
          case 'A10': {
            return setCssA10({background:"red"})
          }
          case 'A11': {
            return setCssA11({background:"red"})
          }
          case 'A12': {
            return setCssA12({background:"red"})
          }
          case 'A13': {
            return setCssA13({background:"red"})
          }
          case 'A14': {
            return setCssA14({background:"red"})
          }
          case 'A15': {
            return setCssA15({background:"red"})
          }
          case 'A16': {
            return setCssA16({background:"red"})
          }
          case 'B17': {
            return setCssB17({background:"red"})
          }
          case 'B18': {
            return setCssB18({background:"red"})
          }
          case 'B19': {
            return setCssB19({background:"red"})
          }
          case 'B20': {
            return setCssB20({background:"red"})
          }
          case 'B21': {
            return setCssB21({background:"red"})
          }
          case 'B22': {
            return setCssB22({background:"red"})
          }
          case 'B23': {
            return setCssB23({background:"red"})
          }
          case 'B24': {
            return setCssB24({background:"red"})
          }
          case 'B25': {
            return setCssB25({background:"red"})
          }
          case 'B26': {
            return setCssB26({background:"red"})
          }
          case 'B27': {
            return setCssB27({background:"red"})
          }
          case 'B28': {
            return setCssB28({background:"red"})
          }
          case 'B29': {
            return setCssB29({background:"red"})
          }
          case 'B30': {
            return setCssB30({background:"red"})
          }
          case 'B31': {
            return setCssB31({background:"red"})
          }
          case 'B32': {
            return setCssB32({background:"red"})
          }
          case 'B33': {
            return setCssB33({background:"red"})
          }
          case 'B34': {
            return setCssB34({background:"red"})
          }
          case 'B35': {
            return setCssB35({background:"red"})
          }
          case 'B36': {
            return setCssB36({background:"red"})
          }
          case 'B37': {
            return setCssB37({background:"red"})
          }
          case 'B38': {
            return setCssB38({background:"red"})
          }
          case 'B39': {
            return setCssB39({background:"red"})
          }
          case 'B40': {
            return setCssB40({background:"red"})
          }
          case 'C41': {
            return setCssC41({background:"red"})
          }
          case 'C42': {
            return setCssC42({background:"red"})
          }
          case 'C42': {
            return setCssC42({background:"red"})
          }
          case 'C43': {
            return setCssC43({background:"red"})
          }
          case 'C44': {
            return setCssC44({background:"red"})
          }
          case 'C45': {
            return setCssC45({background:"red"})
          }
          case 'C46': {
            return setCssC46({background:"red"})
          }
          case 'C47': {
            return setCssC47({background:"red"})
          }
          case 'C48': {
            return setCssC48({background:"red"})
          }
          case 'C49': {
            return setCssC49({background:"red"})
          }
          case 'C50': {
            return setCssC50({background:"red"})
          }
          case 'C51': {
            return setCssC51({background:"red"})
          }
          case 'C52': {
            return setCssC52({background:"red"})
          }
          case 'C53': {
            return setCssC53({background:"red"})
          }
          case 'C54': {
            return setCssC54({background:"red"})
          }
          case 'C55': {
            return setCssC55({background:"red"})
          }
          case 'C56': {
            return setCssC56({background:"red"})
          }
          case 'C57': {
            return setCssC57({background:"red"})
          }
          case 'C58': {
            return setCssC58({background:"red"})
          }
          case 'C59': {
            return setCssC59({background:"red"})
          }
          case 'C60': {
            return setCssC60({background:"red"})
          }
          case 'C61': {
            return setCssC61({background:"red"})
          }
          case 'C62': {
            return setCssC62({background:"red"})
          }
          case 'C63': {
            return setCssC63({background:"red"})
          }
          case 'C64': {
            return setCssC64({background:"red"})
          }
          case 'C65': {
            return setCssC65({background:"red"})
          }
          case 'C66': {
            return setCssC66({background:"red"})
          }
          case 'C67': {
            return setCssC67({background:"red"})
          }
          case 'C68': {
            return setCssC68({background:"red"})
          }
          case 'C69': {
            return setCssC69({background:"red"})
          }
          case 'C70': {
            return setCssC70({background:"red"})
          }
          case 'C71': {
            return setCssC71({background:"red"})
          }
          case 'C72': {
            return setCssC72({background:"red"})
          }
          case 'C73': {
            return setCssC73({background:"red"})
          }
          case 'C74': {
            return setCssC74({background:"red"})
          }
          case 'C75': {
            return setCssC75({background:"red"})
          }
          case 'C76': {
            return setCssC76({background:"red"})
          }
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = (code) => {
    if(listChairBooked.current.includes(code)) {
      alert('Vị trí này đã được chọn !!!')
    }else {
      const alet = confirm("Bạn có đồng ý đăng ký vị trí này ?")
    if(alet == true){
      if(code[0] === 'A'){
        dispatch(changeTicket({
          TIK_RANK: 'Thương gia'
        }))
        dispatch(changePlane({
          CHAIR_BOOKED: code
        }))
        setShowEnterInfor(true)
      }
      if(code[0] === 'B'){
        dispatch(changeTicket({
          TIK_RANK: 'Phổ thông đặc biệt'
        }))
        dispatch(changePlane({
          CHAIR_BOOKED: code
        }))
        setShowEnterInfor(true)
      }
      if(code[0] === 'C'){
        dispatch(changeTicket({
          TIK_RANK: 'Phổ thông'
        }))
        dispatch(changePlane({
          CHAIR_BOOKED: code
        }))
        setShowEnterInfor(true)
      }
    }else{
    alert("Bạn đã hủy thành công !")
    
    }
    }
  }

  
  const handleCancel = () => {
    navigate('/selectPlane')
  }
  const handleEnterInfor = async () => {
    
    if(!cusId || !cusPhone || !cusName){
      alert('Vui lòng nhập đủ các trường thông tin !!!')
    }else if(cusPhone.length < 10){
      alert('Số điện thoại phải có đủ 10 số')
    }else if(cusId.length < 12){
      alert('Số CMND/CCCD phải có đủ 12 số')
    }else {
      const customer = await axios.get(`http://localhost:5000/api/customer/${cusId}`)
      if(customer.data.success){
        alert('Số chứng minh nhân dân của quý khách đã bị chùng')
        alert('vui lòng nhập lại')
      }else{
        dispatch(changeCustomer({
          CUS_ID: cusId,
          CUS_PHONE: cusPhone,
          CUS_NAME: cusName
        }))
        navigate('/show')
      }
    }
    
  }
  const handleCancelBox = () => {
    setShowEnterInfor(false)
  }
  return (
    <>
      <div className="div-big">

      
      <table className="table-max" border="1" width="30%" cellpadding="10" cellspacing="10">
        <tr>
          <th colspan="4" className="demo-plane"></th>
        </tr>
        <tr>
          <th colspan="4" className="demo-plane"></th>
        </tr>
        <tr>
          <th colspan="4" className="demo-plane"></th>
        </tr>
        <tr>
          <th colspan="4" className="plane-icon">AIRCRAFT HEAD</th>
        </tr>
        <tr>
            <th colspan="4" className="col-num">A</th>
        </tr>
        <tr>
          <td className="table-number" name='A01' onClick={() => handleClick('A01')} style={cssA01}>01</td>
          <td className="table-number" name='A02' onClick={() => handleClick('A02')} style={cssA02}>02</td>
          <td className="table-number" name='A03' onClick={() => handleClick('A03')} style={cssA03}>03</td>
          <td className="table-number" name='A04' onClick={() => handleClick('A04')} style={cssA04}>04</td>
          
        </tr>
        <tr>
          <td className="table-number" name='A05' onClick={() => handleClick('A05')} style={cssA05}>05</td>
          <td className="table-number" name='A06' onClick={() => handleClick('A06')} style={cssA06}>06</td>
          <td className="table-number" name='A07' onClick={() => handleClick('A07')} style={cssA07}>07</td>
          <td className="table-number" name='A08' onClick={() => handleClick('A08')} style={cssA08}>08</td>
        </tr>
        <tr>
          <td className="table-number" name='A09' onClick={() => handleClick('A09')} style={cssA09}>09</td>
          <td className="table-number" name='A10' onClick={() => handleClick('A10')} style={cssA10}>10</td>
          <td className="table-number" name='A11' onClick={() => handleClick('A11')} style={cssA11}>11</td>
          <td className="table-number" name='A12' onClick={() => handleClick('A12')} style={cssA12}>12</td>
        </tr>
        <tr>
          <td className="table-number" name='A13' onClick={() => handleClick('A13')} style={cssA13}>13</td>
          <td className="table-number" name='A14' onClick={() => handleClick('A14')} style={cssA14}>14</td>
          <td className="table-number" name='A15' onClick={() => handleClick('A15')} style={cssA15}>15</td>
          <td className="table-number" name='A16' onClick={() => handleClick('A16')} style={cssA16}>16</td>
        </tr>
        <tr>
          <th colspan="4" className="plane-icon">FUSELAGE</th>
        </tr>
        <tr>
            <th colspan="4" className="col-num">B</th>
        </tr>
        <tr>
          <td className="table-number-1" name='B17' onClick={() => handleClick('B17')} style={cssB17}>17</td>
          <td className="table-number-1" name='B18' onClick={() => handleClick('B18')} style={cssB18}>18</td>
          <td className="table-number-1" name='B19' onClick={() => handleClick('B19')} style={cssB19}>19</td>
          <td className="table-number-1" name='B20' onClick={() => handleClick('B20')} style={cssB20}>20</td>
        </tr>
        <tr>
          <td className="table-number-1" name='B21' onClick={() => handleClick('B21')} style={cssB21}>21</td>
          <td className="table-number-1" name='B22' onClick={() => handleClick('B22')} style={cssB22}>22</td>
          <td className="table-number-1" name='B23' onClick={() => handleClick('B23')} style={cssB23}>23</td>
          <td className="table-number-1" name='B24' onClick={() => handleClick('B24')} style={cssB24}>24</td>
        </tr>
        <tr>
          <td className="table-number-1" name='B25' onClick={() => handleClick('B25')} style={cssB25}>25</td>
          <td className="table-number-1" name='B26' onClick={() => handleClick('B26')} style={cssB26}>26</td>
          <td className="table-number-1" name='B27' onClick={() => handleClick('B27')} style={cssB27}>27</td>
          <td className="table-number-1" name='B28' onClick={() => handleClick('B28')} style={cssB28}>28</td>
        </tr>
        <tr>
          <td className="table-number-1" name='B29' onClick={() => handleClick('B29')} style={cssB29}>29</td>
          <td className="table-number-1" name='B30' onClick={() => handleClick('B30')} style={cssB30}>30</td>
          <td className="table-number-1" name='B31' onClick={() => handleClick('B31')} style={cssB31}>31</td>
          <td className="table-number-1" name='B32' onClick={() => handleClick('B32')} style={cssB32}>32</td>
        </tr>
        <tr>
          <td className="table-number-1" name='B33' onClick={() => handleClick('B33')} style={cssB33}>33</td>
          <td className="table-number-1" name='B34' onClick={() => handleClick('B34')} style={cssB34}>34</td>
          <td className="table-number-1" name='B35' onClick={() => handleClick('B35')} style={cssB35}>35</td>
          <td className="table-number-1" name='B36' onClick={() => handleClick('B36')} style={cssB36}>36</td>
        </tr>
        <tr>
          <td className="table-number-1" name='B37' onClick={() => handleClick('B37')} style={cssB37}>37</td>
          <td className="table-number-1" name='B38' onClick={() => handleClick('B38')} style={cssB38}>38</td>
          <td className="table-number-1" name='B39' onClick={() => handleClick('B39')} style={cssB39}>39</td>
          <td className="table-number-1" name='B40' onClick={() => handleClick('B40')} style={cssB40}>40</td>
        </tr>
        <tr>
          <th colspan="4" className="plane-icon">TAIL PLANE</th>
        </tr>
        <tr>
            <th colspan="4" className="col-num">C</th>
        </tr>
        <tr>
          <td className="table-number-2" name='C41' onClick={() => handleClick('C41')} style={cssC41}>41</td>
          <td className="table-number-2" name='C42' onClick={() => handleClick('C42')} style={cssC42}>42</td>
          <td className="table-number-2" name='C43' onClick={() => handleClick('C43')} style={cssC43}>43</td>
          <td className="table-number-2" name='C44' onClick={() => handleClick('C44')} style={cssC44}>44</td>
        </tr>
        <tr>
          <td className="table-number-2" name='C45' onClick={() => handleClick('C45')} style={cssC45}>45</td>
          <td className="table-number-2" name='C46' onClick={() => handleClick('C46')} style={cssC46}>46</td>
          <td className="table-number-2" name='C47' onClick={() => handleClick('C47')} style={cssC47}>47</td>
          <td className="table-number-2" name='C48' onClick={() => handleClick('C48')} style={cssC48}>48</td>
        </tr>
        <tr>
          <td className="table-number-2" name='C49' onClick={() => handleClick('C49')} style={cssC49}>49</td>
          <td className="table-number-2" name='C50' onClick={() => handleClick('C50')} style={cssC50}>50</td>
          <td className="table-number-2" name='C51' onClick={() => handleClick('C51')} style={cssC51}>51</td>
          <td className="table-number-2" name='C52' onClick={() => handleClick('C52')} style={cssC52}>52</td>
        </tr>
        <tr>
          <td className="table-number-2" name='C53' onClick={() => handleClick('C53')} style={cssC53}>53</td>
          <td className="table-number-2" name='C54' onClick={() => handleClick('C54')} style={cssC54}>54</td>
          <td className="table-number-2" name='C55' onClick={() => handleClick('C55')} style={cssC55}>55</td>
          <td className="table-number-2" name='C56' onClick={() => handleClick('C56')} style={cssC56}>56</td>
        </tr>
        <tr>
          <td className="table-number-2" name='C57' onClick={() => handleClick('C57')} style={cssC57}>57</td>
          <td className="table-number-2" name='C58' onClick={() => handleClick('C58')} style={cssC58}>58</td>
          <td className="table-number-2" name='C59' onClick={() => handleClick('C59')} style={cssC59}>59</td>
          <td className="table-number-2" name='C60' onClick={() => handleClick('C60')} style={cssC60}>60</td>
        </tr>
        <tr>
          <td className="table-number-2" name='C61' onClick={() => handleClick('C61')} style={cssC61}>61</td>
          <td className="table-number-2" name='C62' onClick={() => handleClick('C62')} style={cssC62}>62</td>
          <td className="table-number-2" name='C63' onClick={() => handleClick('C63')} style={cssC63}>63</td>
          <td className="table-number-2" name='C64' onClick={() => handleClick('C64')} style={cssC64}>64</td>
        </tr>
        <tr>
          <td className="table-number-3" name='C65' onClick={() => handleClick('C65')} style={cssC65}>65</td>
          <td className="table-number-3" name='C66' onClick={() => handleClick('C66')} style={cssC66}>66</td>
          <td className="table-number-3" name='C67' onClick={() => handleClick('C67')} style={cssC67}>67</td>
          <td className="table-number-3" name='C68' onClick={() => handleClick('C68')} style={cssC68}>68</td>
        </tr>
        <tr>
          <td className="table-number-3" name='C69' onClick={() => handleClick('C69')} style={cssC69}>69</td>
          <td className="table-number-3" name='C70' onClick={() => handleClick('C70')} style={cssC70}>70</td>
          <td className="table-number-3" name='C71' onClick={() => handleClick('C71')} style={cssC71}>71</td>
          <td className="table-number-3" name='C72' onClick={() => handleClick('C72')} style={cssC72}>72</td>
        </tr>
        <tr>
          <td className="table-number-2" name='C73' onClick={() => handleClick('C73')} style={cssC73}>73</td>
          <td className="table-number-2" name='C74' onClick={() => handleClick('C74')} style={cssC74}>74</td>
          <td className="table-number-2" name='C75' onClick={() => handleClick('C75')} style={cssC75}>75</td>
          <td className="table-number-2" name='C76' onClick={() => handleClick('C76')} style={cssC76}>76</td>
        </tr>
      </table>

      <table border="1" className="table-2" cellpadding="10" cellspacing="10">
          <tr>
            <td className="yl-1"></td>
            <td className="name-chuthich">Thương gia(A)</td>
          </tr>
          <tr>
            <td className="gr-2"></td>
            <td className="name-chuthich">Phổ thông đặc biệt (B)</td>
          </tr>
          <tr>
            <td className="gr-3"></td>
            <td className="name-chuthich">Phổ thông (C)</td>
          </tr>
          <tr>
            <td className="rd-4"></td>
            <td className="name-chuthich">Ghế đã được đặt</td>
          </tr>
          <tr>
            <td className ="pk-5"></td>
            <td className="name-chuthich">Khu vực gần nối thoát hiểm</td>
          </tr>
      </table> 
      <div className ="div-1">
          <button onClick={() => {handleCancel()}} className='button-cancel'>Quay lại</button>
          <p>Hãy lựa chọn vị trí ghế mà bạn muốn</p>
      </div>

      
    </div>


    {
        showEnterInfor && 
        <div className="search-div">
        <div className="contact">
          <h3 className="contact-title">VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN CỦA BẠN</h3>
          <span className="contact-user"><BsPeopleFill></BsPeopleFill>Họ và tên <b className="color-sao">*</b></span>
          <br/>
          <input className="contact-input-text" type="text" value={cusName} onChange={e => setCusName(e.target.value)} placeholder="Nhập họ tên đầy đủ"/>
          <br/>
          <span className="contact-user"><BsFillTelephoneFill></BsFillTelephoneFill>Điện thoại <b className="color-sao">*</b></span>
          <br/>
          <input className="contact-input-text" value={cusPhone} onChange={e => setCusPhone(e.target.value)} type="text" placeholder="Điện thoại"/>
          <br/>
          <span className="contact-user"><FaAddressCard></FaAddressCard>CMND/CCCD <b className="color-sao">*</b></span>
          <br/>
          <input className="contact-input-text" value={cusId} onChange={e => setCusId(e.target.value)} type="text" placeholder="CMND/CCCD"/>
          <br />
          <button className="contact-button" onClick={() => handleEnterInfor()}>Book</button>
          <button className="contact-button" onClick={() => handleCancelBox()}>Cancel</button>
        </div>
          
        </div>
      }
    </>
    
  );
}

export default OptionPlane;