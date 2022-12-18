import { AiFillHome ,AiOutlineMenuUnfold } from "react-icons/ai";
import { FaAudioDescription,FaAddressCard,FaGlobeAmericas,FaAddressBook,FaPlane,FaBell,FaEnvelope} from "react-icons/fa";
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {changeAutherial} from '../slices/autherial'
import {changeListCustomer} from '../slices/listCustomer'
import {changeListPlane} from '../slices/listPlane'
import {changeListTicket} from '../slices/listTicket'
import { changeListFlight } from "../slices/listFlight";

import './Admin.css';

function Admin() {
  const autherial = useSelector(state => state.autherial)
  const listCustomer = useSelector(state => state.listCustomer)
  const listPlane = useSelector(state => state.listPlane)
  const listFlight = useSelector(state => state.listFlight)
  const listTicket = useSelector(state => state.listTicket)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [show , setShow] = useState(false)

  const idNeedUpdate = useRef()
  const [isListCustomerChanged, setIsListCustomerChanged] = useState(false)
  const [isListFlightChanged, setIsListFlightChanged] = useState(false)
  const [isListPlaneChanged, setIsListPlaneChanged] = useState(false)
  const [isListTicketChanged, setIsListTicketChanged] = useState(false)
  const [nameUpdate, setNameUpdate] = useState('')
  const [idUpdate, setIdUpdate] = useState('')
  const [phoneUpdate, setPhoneUpdate] = useState('')
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [phone, setPhone] = useState('')

  const [codePlaneUpdate, setCodePlaneUpdate] = useState('')
  const [chairFreeUpdate, setChairFreeUpdate] = useState('')
  const [chairBookedUpdate, setChairBookedUpdate] = useState('')
  const [codePlane, setCodePlane] = useState('')
  const [chairFree, setChairFree] = useState('')
  const [chairBooked, setChairBooked] = useState('')

  const [codeChairUpdate, setCodeChairUpdate] = useState('')
  const [rankUpdate, setRankUpdate] = useState('')
  const [codeTicketUpdate, setCodeTicketUpdate] = useState('')
  const [codeChair, setCodeChair] = useState('')
  const [rank, setRank] = useState('')
  const [codeTicket, setCodeTicket] = useState('')

  const [codeFlightUpdate, setCodeFlightUpdate] = useState('')
  const [s_placeUpdate, setS_placeUpdate] = useState('')
  const [e_placeUpdate, setE_placeUpdate] = useState('')
  const [s_dateUpdate, setS_dateUpdate] = useState('')
  const [e_dateUpdate, setE_dateUpdate] = useState('')
  const [codeFlight, setCodeFlight] = useState('')
  const [s_place, setS_place] = useState('')
  const [e_place, setE_place] = useState('')
  const [s_date, setS_date] = useState('')
  const [e_date, setE_date] = useState('')

  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/customer',
   
    })
      .then(function (response) {
        const customers = response.data
        dispatch(changeListCustomer(customers.customers))
      })
  }, [isListCustomerChanged])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/flight',
   
    })
      .then(function (response) {
        const flights = response.data
        dispatch(changeListFlight(flights.flights))
      })
  }, [isListFlightChanged])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/ticket',
   
    })
      .then(function (response) {
        const tickets = response.data
        dispatch(changeListTicket(tickets.tickets))
      })
  }, [isListTicketChanged])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/plane',
   
    })
      .then(function (response) {
        const planes = response.data
        dispatch(changeListPlane(planes.planes))
      })
  }, [isListPlaneChanged])

  const [showUpdate, setShowUpdate] = useState(false)
  const [showCustomerCreate,setShowCustomerCreate] = useState(false)
  const [showPlaneCreate, setShowPlaneCreate] = useState(false)
  const [showFlightCreate, setShowFlightCreate] = useState(false)
  const [showTicketCreate, setShowTicketCreate] = useState(false)

  const [showCustomer , setShowCustomer] = useState(false)
  const [showPlane , setShowPlane] = useState(false)
  const [showTicket , setShowTicket] = useState(false)
  const [showFlight , setShowFlight] = useState(false)
  
  const [showUpdateCustomer, setShowUpdateCustomer] = useState(false)
  const [showUpdateTicket, setShowUpdateTicket] = useState(false)
  const [showUpdateFlight, setShowUpdateFlight] = useState(false)
  const [showUpdatePlane, setShowUpdatePlane] = useState(false)

  const [password, setPassword] = useState('')

  const handleCancelDialog = () => {
    navigate('/')
  }
  const handleAccessAdmin = () => {
    if(password === ''){
      alert('Vui lòng nhập mật khẩu !!!')
    }else if(password === 'VT'){
      dispatch(changeAutherial({isAutherialed: true}))
    }else{
      alert('MK sai !!!')
    }
  }
  
  const handleShow =() =>{
    setShow(true)
    setShowCustomer(false)
    setShowPlane(false)
    setShowTicket(false)
    setShowFlight(false)

  }
  const handleShowCustomer =() =>{
    setShow(false)
    setShowCustomer(true)
    setShowPlane(false)
    setShowTicket(false)
    setShowFlight(false)
    setShowUpdate(false)
    // setShowCustomerCreate(false)
    // setShowPlaneCreate(false)
    // setShowTicketCreate(false)
    // setShowFlightCreate(false)
    // setShowUpdateCreate(false)
}
  const handleShowPlane =() =>{
        setShow(false)
        setShowCustomer(false)
        setShowPlane(true)
        setShowTicket(false)
        setShowFlight(false)
        setShowUpdate(false)
        // setShowCustomerCreate(false)
        // setShowPlaneCreate(false)
        // setShowTicketCreate(false)
        // setShowFlightCreate(false)
        // setShowUpdateCreate(false)
    

    }
  const handleShowTicket =() =>{
        setShow(false)
        setShowCustomer(false)
        setShowPlane(false)
        setShowTicket(true)
        setShowFlight(false)
        
        // setShowCustomerCreate(false)
        // setShowPlaneCreate(false)
        // setShowTicketCreate(false)
        // setShowFlightCreate(false)
        // setShowUpdateCreate(false)
        

    }
  const handleShowFlight =() =>{
        setShow(false)
        setShowCustomer(false)
        setShowPlane(false)
        setShowTicket(false)
        setShowFlight(true)
        
        // setShowCustomerCreate(false)
        // setShowPlaneCreate(false)
        // setShowTicketCreate(false)
        // setShowFlightCreate(false)
        // setShowUpdateCreate(false)
    }
  const handleUpdate =(type, index) =>{
        switch(type){
        case 'customer':{
            setShowUpdateCustomer(true)
            idNeedUpdate.current = listCustomer[index].CUS_ID
            setNameUpdate(listCustomer[index].CUS_NAME)
            setIdUpdate(listCustomer[index].CUS_ID)
            setPhoneUpdate(listCustomer[index].CUS_PHONE)
            return;
        }
        case 'ticket':{
            setShowUpdateTicket(true)
            idNeedUpdate.current = listTicket[index].TIK_CODE
            setCodeTicketUpdate(listTicket[index].TIK_CODE)
            setCodePlaneUpdate(listTicket[index].PLANE_CODE)
            setIdUpdate(listTicket[index].CUS_ID)
            setRankUpdate(listTicket[index].TIK_RANK)
            setCodeChairUpdate(listTicket[index].CHAIR_CODE)

            return;
        }
        case 'plane':{
            setShowUpdatePlane(true)
            idNeedUpdate.current = listPlane[index].PLANE_CODE
            setCodePlaneUpdate(listPlane[index].PLANE_CODE)
            setChairFreeUpdate(listPlane[index].CHAIR_FREE)
            setChairBookedUpdate(listPlane[index].CHAIR_BOOKED)
            return;
        }
        case 'flight':{
            setShowUpdateFlight(true)
            idNeedUpdate.current = listFlight[index].FLI_CODE
            setCodeFlightUpdate(listFlight[index].FLI_CODE)
            setCodePlaneUpdate(listFlight[index].PLANE_CODE)
            setS_dateUpdate(listFlight[index].FLI_S_DATE)
            setE_dateUpdate(listFlight[index].FLI_E_DATE)
            setS_placeUpdate(listFlight[index].FLI_S_PLACE)
            setE_placeUpdate(listFlight[index].FLI_E_PLACE)
            return;
        }
        }
    
    }
  
  const handleCreate =(type) =>{
    switch(type){
        case 'customer':{
          setShowCustomerCreate(true)
          return;
        }
        case 'ticket':{
          setShowTicketCreate(true)
          return;
        }
        case 'plane':{
          setShowPlaneCreate(true)
          return;
        }
        case 'flight':{
          setShowFlightCreate(true)
          return;
        }
    }
    
    }
  const handleModal_cancel =(type) =>{
    switch(type){
        case 'customer':{
          setShowUpdateCustomer(false)
          return;
        }
        case 'ticket':{
          setShowUpdateTicket(false)
          return;
        }
        case 'plane':{
          setShowUpdatePlane(false)
          return;
        }
        case 'flight':{
          setShowUpdateFlight(false)
          return;
        }
        case 'customerC':{
          setShowCustomerCreate(false)
          return;
        }
        case 'flightC':{
          setShowFlightCreate(false)
          return;
        }
        case 'planeC':{
          setShowPlaneCreate(false)
          return;
        }
        case 'ticketC':{
          setShowTicketCreate(false)
          return;
        }

      }
    
    }
  const handleModal_Ok =(type) =>{
    switch(type){
        case 'customer':{
          setShowUpdateCustomer(false)
          axios({
            method: 'put',
            url: `http://localhost:5000/api/customer/${idNeedUpdate.current}`,
            data: {
              CUS_ID: idUpdate,
              CUS_NAME: nameUpdate,
              CUS_PHONE: phoneUpdate
            }
          }).then(response => {
            setMessage(response.data.message)
            setShowMessage(true)
            if(response.data.success) {
              setIsListCustomerChanged(!isListCustomerChanged)
            }
          })
          return;
        }
        case 'ticket':{
          setShowUpdateTicket(false)
          axios({
            method: 'put',
            url: `http://localhost:5000/api/ticket/${idNeedUpdate.current}`,
            data: {
              TIK_CODE: codeTicketUpdate,
              PLANE_CODE: codePlaneUpdate,
              CUS_ID: idUpdate,
              TIK_RANK: rankUpdate,
              CHAIR_CODE: codeChairUpdate
            }
          }).then(response => {
            setMessage(response.data.message)
            setShowMessage(true)
            if(response.data.success) {
              setIsListTicketChanged(!isListTicketChanged)
            }
          })
          return;
        }
        
        case 'plane':{
          setShowUpdatePlane(false)
          axios({
            method: 'put',
            url: `http://localhost:5000/api/plane/${idNeedUpdate.current}`,
            data: {
              PLANE_CODE: codePlaneUpdate,
              CHAIR_FREE: chairFreeUpdate,
              CHAIR_BOOKED: chairBookedUpdate
            }
          }).then(response => {
            setMessage(response.data.message)
            setShowMessage(true)
            if(response.data.success) {
              setIsListPlaneChanged(!isListPlaneChanged)
            }
          })
          return;
        }
        case 'flight':{
          setShowUpdateFlight(false)
          axios({
            method: 'put',
            url: `http://localhost:5000/api/flight/${idNeedUpdate.current}`,
            data: {
              FLI_CODE: codeFlightUpdate,
              PLANE_CODE: codePlaneUpdate,
              FLI_S_PLACE: s_placeUpdate,
              FLI_E_PLACE: e_placeUpdate,
              FLI_S_DATE: s_dateUpdate,
              FLI_E_DATE: e_dateUpdate
            }
          }).then(response => {
            setMessage(response.data.message)
            setShowMessage(true)
            if(response.data.success) {
              setIsListFlightChanged(!isListFlightChanged)
            }
          })
          return;
        }
        case 'customerC': {
          setShowCustomerCreate(false)
          axios({
            method: 'post',
            url: `http://localhost:5000/api/customer/create`,
            data: {
              CUS_ID: id,
              CUS_NAME: name,
              CUS_PHONE: phone
            }
          }).then(response => {
            setShowMessage(true)
            setMessage(response.data.message)
            setId('')
            setName('')
            setPhone('')
            if(response.data.success){
              setIsListCustomerChanged(!isListCustomerChanged)
            }
          })
          return;
        }

        case 'planeC': {
          setShowPlaneCreate(false)
          axios({
            method: 'post',
            url: `http://localhost:5000/api/plane/create`,
            data: {
              PLANE_CODE: codePlane,
              CHAIR_FREE: chairFree,
              CHAIR_BOOKED: chairBooked
            }
          }).then(response => {
            setCodePlane('')
            setChairFree('')
            setChairBooked('')
            setShowMessage(true)
            setMessage(response.data.message)
            if(response.data.success){
              setIsListPlaneChanged(!isListPlaneChanged)
            }
          })
          return;
        }

        case 'flightC': {
          setShowFlightCreate(false)
          axios({
            method: 'post',
            url: `http://localhost:5000/api/flight/create`,
            data: {
              FLI_CODE: codeFlight,
              PLANE_CODE: codePlane,
              FLI_S_PLACE: s_place,
              FLI_E_PLACE: e_place,
              FLI_S_DATE: s_date,
              FLI_E_DATE: e_date
            }
          }).then(response => {
            setCodeFlight('')
            setCodePlane('')
            setS_place('')
            setE_place('')
            setS_date('')
            setE_date('')
            setShowMessage(true)
            setMessage(response.data.message)
            if(response.data.success){
              setIsListFlightChanged(!isListFlightChanged)
            }
          })
          return;
        }

        case 'ticketC': {
          setShowTicketCreate(false)
          axios({
            method: 'post',
            url: `http://localhost:5000/api/ticket/create`,
            data: {
              TIK_CODE: codeTicket,
              PLANE_CODE: codePlane,
              CUS_ID: id,
              TIK_RANK: rank,
              CHAIR_CODE: codeChair
            }
          }).then(response => {
            setCodeTicket('')
            setCodePlane('')
            setId('')
            setRank('')
            setCodeChair('')
            setShowMessage(true)
            setMessage(response.data.message)
            if(response.data.success){
              setIsListTicketChanged(!isListTicketChanged)
            }
          })
          return;
        }
    }
  }
  const handleDelete = (type, index) => {
    switch(type) {
      case 'customer': {
        const idNeedDelete = listCustomer[index].CUS_ID
        axios({
          method: 'delete',
          url: `http://localhost:5000/api/customer/${idNeedDelete}`,
        }).then(response => {
          if(response.data.success) {
            setMessage(response.data.message)
            setShowMessage(response.data.message)
            if(response.data.success) {
              setIsListCustomerChanged(!isListCustomerChanged)
            }
            
          }
        })
        return;
      }
      case 'plane': {
        const idNeedDelete = listPlane[index].PLANE_CODE
        axios({
          method: 'delete',
          url: `http://localhost:5000/api/plane/${idNeedDelete}`
        }).then(response => {
          if(response.data.success) {
            setMessage(response.data.message)
            setShowMessage(response.data.message)
            if(response.data.success) {
              setIsListPlaneChanged(!isListPlaneChanged)
            }
          }
        })
        return;
      }
      case 'flight': {
        const idNeedDelete = listFlight[index].FLI_CODE
        axios({
          method: 'delete',
          url: `http://localhost:5000/api/flight/${idNeedDelete}`,
        }).then(response => {
          if(response.data.success) {
            setMessage(response.data.message)
            setShowMessage(response.data.message)
            if(response.data.success) {
              setIsListFlightChanged(!isListFlightChanged)
            }
          }
        })
        return;
      }
      case 'ticket': {
        const idNeedDelete = listTicket[index].TIK_CODE
        axios({
          method: 'delete',
          url: `http://localhost:5000/api/ticket/${idNeedDelete}`,
        }).then(response => {
          if(response.data.success) {
            setMessage(response.data.message)
            setShowMessage(response.data.message)
            if(response.data.success) {
              setIsListTicketChanged(!isListTicketChanged)
            }
          }
        })
        return;
      }
    }
  }

  


    if(autherial.isAutherialed){
      return (
        <div className="heading-manage">
          <div className="head-manage">
                    <div className="name-admin-heading">
                      <h1 className="name-admin"><AiFillHome className="i-ser-input"></AiFillHome>Trang Chủ Admin</h1>
                    </div>
                    <div className="input-search">
                      <input className="input-search-1" type="text" placeholder="Search..." />
                    </div>
                    <div className="input-search-div" >
                      {/* <FaAudioDescription className="i-ser-input"></FaAudioDescription> */}
                      <a className="input-search-2"  href="#" onClick ={() => handleShow()}><FaAudioDescription className="i-ser-input"></FaAudioDescription>ADMIN</a>
                    </div>
                    <div className="input-search-div">
                    {/* <FaAudioDescription className="i-ser-input"></FaAudioDescription> */}
                      <a className="input-search-2" href="#" onClick ={() => handleShowCustomer()}><FaAddressBook className="i-ser-input"></FaAddressBook>CUSTOMER</a>
                    </div>
                    <div className="input-search-div">
                      {/* <FaPlane className="i-ser-input"></FaPlane> */}
                      <a className="input-search-2" href="#" onClick ={() => handleShowPlane()}><FaPlane className="i-ser-input"></FaPlane>PLANE</a>
                    </div>
                    <div className="input-search-div">
                      {/* <FaAddressCard className="i-ser-input"></FaAddressCard> */}
                      <a className="input-search-2" href="#"onClick ={() => handleShowTicket()}><FaAddressCard className="i-ser-input"></FaAddressCard>TICKET</a>
                    </div>
                    <div className="input-search-div">
                      {/* <FaGlobeAmericas className="i-ser-input"></FaGlobeAmericas> */}
                      <a className="input-search-2" href="#" onClick ={() => handleShowFlight()}><FaGlobeAmericas className="i-ser-input"></FaGlobeAmericas>FLIGHT</a>
                    </div>
          </div>

          <div className="head-per">
            <div className="img-avatar">
              <img className="img-avt-i" src="https://thpt-phamhongthai.edu.vn/wp-content/uploads/2022/07/hinh-nen-girl-xinh-full-hd-cho-laptop-va-may.jpg" />
              <img className="img-blue"></img>
              <span className="adm-img">Admin</span>
              <FaEnvelope className="icon-avt"></FaEnvelope>
              <FaBell className="icon-avt"></FaBell>
            </div>


            <div className="local-img">
                    {show && 
                      <div id="admin-sub">
                        <p className="infomation-tit-ad">ADMIN</p>
                        <p className="infomation-sub">Họ và tên:</p>
                        <p className="infomation-sub">CCCD/CMND/ID:</p>
                        <p className="infomation-sub">Number Phone:</p>
                        <button className="infomation-sub-but" onClick={() => handleUpdate()}>Update</button>
                        <button className="infomation-sub-but">Delete</button>
                      </div>
                    }
                    {showCustomer&& 
                      <div id ="customer-sub">
                      <div>
                        <button className="create-show" onClick={() => handleCreate('customer')} >Create</button>
                        <p className="infomation-tit">ADMIN/CUSTOMER    (số lượng: {listCustomer.length})</p>
                      </div>
                      {listCustomer.map((customer, index) => {
                          return (
                            <div className='list' key={index}>
                              <p className="infomation-sub">- Họ và tên:    {customer.CUS_NAME}</p>
                              <p className="infomation-sub">- CCCD/CMND/ID: {customer.CUS_ID}</p>
                              <p className="infomation-sub">- Number Phone: {customer.CUS_PHONE}</p>
                              <button className="infomation-sub-but" onClick={() => handleUpdate('customer', index)}>Update</button>
                              <button className="infomation-sub-but" onClick={() => handleDelete('customer', index)}>Delete</button>
                            </div>
                          )
                      }
                      )}
                      </div>}

                    {showPlane && 
                    <div id ="plane-sub">
                      <div>
                        <button className="create-show" onClick={() => handleCreate('plane')}>Create</button>
                        <p className="infomation-tit">ADMIN/PLANE   (số lượng: {listPlane.length})</p>
                      </div>
                      {
                        listPlane.map((plane, index) => {
                          return (
                            <div className='list' key={index}>
                              <p className="infomation-sub">- Mã máy bay:    {plane.PLANE_CODE}</p>
                              <p className="infomation-sub">- Ghế còn trống: {plane.CHAIR_FREE}</p>
                              <p className="infomation-sub">- Ghế đã đặt:    {plane.CHAIR_BOOKED}</p>
                              <button className="infomation-sub-but" onClick={() => handleUpdate('plane', index)}>Update</button>
                              <button className="infomation-sub-but" onClick={() => handleDelete('plane', index)}>Delete</button>
                            </div>
                          )
                        })

                      }
                    </div>}

                    {showTicket && 
                    <div id ="ticket-sub">
                      <div>
                        <button className="create-show" onClick={() => handleCreate('ticket')}>Create</button>
                        <p className="infomation-tit">ADMIN/TICKET    (số lượng: {listTicket.length})</p>
                      </div>
                      {
                        listTicket.map((ticket, index) => {
                          return (
                            <div className='list' key={index}>
                              <p className="infomation-sub">- Mã vé:       {ticket.TIK_CODE}</p>
                              <p className="infomation-sub">- Mã máy bay:  {ticket.PLANE_CODE}</p>
                              <p className="infomation-sub">- CCCD/CMND/ID:{ticket.CUS_ID}</p>
                              <p className="infomation-sub">- Hạng ghế:    {ticket.TIK_RANK}</p>
                              <p className="infomation-sub">- Ghế đã đặt:  {ticket.CHAIR_CODE}</p>
                              <button className="infomation-sub-but" onClick={() => handleUpdate('ticket', index)}>Update</button>
                              <button className="infomation-sub-but" onClick={() => handleDelete('ticket', index)}>Delete</button>
                            </div>
                          )
                        })
                      }
                    </div>
                    }

                    {showFlight && 
                     <div id ="flight-sub">
                      <div>
                        <button className="create-show" onClick={() => handleCreate('flight')}>Create</button>
                        <p className="infomation-tit">ADMIN/FLIGHT    (số lượng: {listFlight.length})</p>
                      </div>
                      {
                        listFlight.map((flight, index) => {
                          
                          return (
                            <div className='list' key={index}>
                              <p className="infomation-sub">- Mã chuyến bay: {flight.FLI_CODE}</p>
                              <p className="infomation-sub">- Mã máy bay:    {flight.PLANE_CODE}</p>
                              <p className="infomation-sub">- Ngày bắt đầu:  {flight.FLI_S_DATE}</p>
                              <p className="infomation-sub">- Ngày kết thúc: {flight.FLI_E_DATE}</p>
                              <p className="infomation-sub">- Điểm bắt đầu:  {flight.FLI_S_PLACE}</p>
                              <p className="infomation-sub">- Điểm kết thúc: {flight.FLI_E_PLACE}</p>
                              <button className="infomation-sub-but" onClick={() => handleUpdate('flight', index)}>Update</button>
                              <button className="infomation-sub-but" onClick={() => handleDelete('flight', index)}>Delete</button>
                            </div>
                          )
                        })
                      }
                     </div>
                    }
            </div>
                  
            { showUpdateCustomer &&
              <div className ="customer-mod">
                          <div className="modalCustomer">
                            <p className="infomation-tit-mod">CUSTOME</p>

                            <div className="from-input">
                              <div>
                                <p className="infomation-sub-mod">Họ và tên:</p>
                                <p className="infomation-sub-mod">CCCD/CMND/ID:</p>
                                <p className="infomation-sub-mod">Number Phone:</p>
                              </div>
                              <div>
                                <input className="inpit-modal" type="text" value={nameUpdate} onChange={e => setNameUpdate(e.target.value)} placeholder="...................................." />
                                <input className="inpit-modal" type="text" value={idUpdate} onChange={e => setIdUpdate(e.target.value)} placeholder="...................................."/>
                                <input className="inpit-modal" type="text" value={phoneUpdate} onChange={e => setPhoneUpdate(e.target.value)} placeholder="...................................." />
                              </div>
                            </div>
                            <button className="modal-button" onClick={() => handleModal_cancel('customer')}>Cancel</button>
                            <button className="modal-button" onClick={() => handleModal_Ok('customer')}>Ok</button>
                          </div>
              </div>
            } 
            { showUpdatePlane &&
              <div className ="plane-mod">
                          <div className="modalPlane">
                            <p className="infomation-tit-mod">PLANE
                            </p>
                            <div className="from-input">
                              <div>
                                <p className="infomation-sub-mod">Mã máy bay: </p>
                                <p className="infomation-sub-mod">Ghế còn trống:</p>
                                <p className="infomation-sub-mod">Ghế đã đặt:  </p>
                              </div>
                              <div>
                                <input className="inpit-modal" type="text" value={codePlaneUpdate} onChange={e => setCodePlaneUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={chairFreeUpdate} onChange={e => setChairFreeUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={chairBookedUpdate} onChange={e => setChairBookedUpdate(e.target.value)} placeholder="...................................." />
                              </div>
                            </div>
                            <button className="modal-button" onClick={() => handleModal_cancel('plane')}>Cancel</button>
                            <button className="modal-button" onClick={() => handleModal_Ok('plane')}>Ok</button>
                          </div>
              </div>
            } 
            { showUpdateTicket &&
              <div className ="ticket-mod">
                          <div className="modalTicket">
                            <p className="infomation-tit-mod">TICKET
                            </p>

                            <div className="from-input">
                              <div>
                                <p className="infomation-sub-mod">Mã vé:</p>
                                <p className="infomation-sub-mod">Mã máy bay:</p>
                                <p className="infomation-sub-mod">CCCD/CMND/ID: </p>
                                <p className="infomation-sub-mod">Hạng ghế: </p>
                                <p className="infomation-sub-mod">Ghế đã đặt:</p>
                              </div>
                              <div>
                                <input type="text" className="inpit-modal" value={codeTicketUpdate} onChange={e => setCodeTicketUpdate(e.target.value)} placeholder="...................................." />
                                <input className="inpit-modal" type="text" value={codePlaneUpdate} onChange={e => setCodePlaneUpdate(e.target.value)} placeholder="...................................." />
                                <input className="inpit-modal" type="text" value={idUpdate} onChange={e => setIdUpdate(e.target.value)} placeholder="...................................." />
                                <input className="inpit-modal" type="text" value={rankUpdate} onChange={e => setRankUpdate(e.target.value)} placeholder="...................................."/>
                                <input className="inpit-modal" type="text" value={codeChairUpdate} onChange={e => setCodeChairUpdate(e.target.value)} placeholder="...................................." />
                              </div>
                            </div>
                            <button className="modal-button" onClick={() => handleModal_cancel('ticket')}>Cancel</button>
                            <button className="modal-button" onClick={() => handleModal_Ok('ticket')}>Ok</button>
                          </div>
              </div>
            } 
            { showUpdateFlight &&
              <div className ="flight-mod">
                          <div className="modalFlight">
                            <p className="infomation-tit-mod">FLIGHT</p>
                            
                            <div className="from-input">
                              <div>
                                <p className="infomation-sub-mod">Mã chuyến bay:</p>
                                <p className="infomation-sub-mod">Mã máy bay:</p>
                                <p className="infomation-sub-mod">Ngày bắt đầu:</p>
                                <p className="infomation-sub-mod">Ngày kết thúc:</p>
                                <p className="infomation-sub-mod">Điểm bắt đầu:</p>
                                <p className="infomation-sub-mod">Điểm kết thúc:</p>
                              </div>
                              <div>
                                <input className="inpit-modal" type="text" value={codeFlightUpdate} onChange={e => setCodeFlightUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={codePlaneUpdate} onChange={e => setCodePlaneUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={s_dateUpdate} onChange={e => setS_dateUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={e_dateUpdate} onChange={e => setE_dateUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={s_placeUpdate} onChange={e => setS_placeUpdate(e.target.value)} placeholder="...................................." /><br/>
                                <input className="inpit-modal" type="text" value={e_placeUpdate} onChange={e => setE_placeUpdate(e.target.value)} placeholder="....................................." />
                              </div>
                            </div>
                            <button className="modal-button" onClick={() => handleModal_cancel('flight')}>Cancel</button>
                            <button className="modal-button" onClick={() => handleModal_Ok('flight')}>Ok</button>
                          </div>
              </div>
            }

            
           

            { showCustomerCreate &&
              <div className ="customer-mod">
                <div className="modalCustomer">
                  <p className="infomation-tit-mod">CUSTOMER
                  </p>
                  <div className="from-input">
                    <div> 
                      <p className="infomation-sub-mod">Họ và tên:</p>
                      <p className="infomation-sub-mod">CCCD/CMND/ID:</p>
                      <p className="infomation-sub-mod">Number Phone:</p>
                    </div>
                    <div>
                      <input className="inpit-modal" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="...................................." />
                      <input className="inpit-modal" type="text" value={id} onChange={e => setId(e.target.value)} placeholder="...................................."/>
                      <input className="inpit-modal" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="...................................." />
                    </div>
                  </div>
                  <button className="modal-button" onClick={() => handleModal_cancel('customerC')}>Cancel</button>
                  <button className="modal-button" onClick={() => handleModal_Ok('customerC')}>Ok</button>
                </div>
              </div>
            } 
            { showPlaneCreate &&
              <div className ="plane-mod">
                <div className="modalPlane">
                  <p className="infomation-tit-mod">PLANE
                  </p>
                  <div className="from-input">
                    <div>
                      <p className="infomation-sub-mod">Mã máy bay: </p>
                      <p className="infomation-sub-mod">Ghế còn trống:</p>
                      <p className="infomation-sub-mod">Ghế đã đặt:  </p>
                    </div>
                    <div>
                      <input className="inpit-modal" type="text" value={codePlane} onChange={e => setCodePlane(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={chairFree} onChange={e => setChairFree(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={chairBooked} onChange={e => setChairBooked(e.target.value)} placeholder="...................................." />
                    </div>
                  </div>
                  <button className="modal-button" onClick={() => handleModal_cancel('planeC')}>Cancel</button>
                  <button className="modal-button" onClick={() => handleModal_Ok('planeC')}>Ok</button>
                </div>
              </div>
            } 
            { showTicketCreate &&
              <div className ="ticket-mod">
                <div className="modalTicket">
                  <p className="infomation-tit-mod">TICKET
                  </p>
                  <div className="from-input">
                    <div>
                      <p className="infomation-sub-mod">Mã vé:</p>
                      <p className="infomation-sub-mod">Mã máy bay:</p>
                      <p className="infomation-sub-mod">CCCD/CMND/ID: </p>
                      <p className="infomation-sub-mod">Hạng ghế: </p>
                      <p className="infomation-sub-mod">Ghế đã đặt:</p>
                    </div>
                    <div>
                      <input type="text" className="inpit-modal" value={codeTicket} onChange={e => setCodeTicket(e.target.value)} placeholder="...................................." />
                      <input className="inpit-modal" type="text" value={codePlane} onChange={e => setCodePlane(e.target.value)} placeholder="...................................." />
                      <input className="inpit-modal" type="text" value={id} onChange={e => setId(e.target.value)} placeholder="...................................." />
                      <input className="inpit-modal" type="text" value={rank} onChange={e => setRank(e.target.value)} placeholder="...................................."/>
                      <input className="inpit-modal" type="text" value={codeChair} onChange={e => setCodeChair(e.target.value)} placeholder="...................................." />
                    </div>
                  </div>
                  <button className="modal-button" onClick={() => handleModal_cancel('ticketC')}>Cancel</button>
                  <button className="modal-button" onClick={() => handleModal_Ok('ticketC')}>Ok</button>
                </div>
              </div>
            } 
            { showFlightCreate &&
              <div className ="flight-mod">
                <div className="modalFlight">
                  <p className="infomation-tit-mod">FLIGHT</p>
                  <div className="from-input">
                    <div>
                      <p className="infomation-sub-mod">Mã chuyến bay:</p>
                      <p className="infomation-sub-mod">Mã máy bay:</p>
                      <p className="infomation-sub-mod">Ngày bắt đầu:</p>
                      <p className="infomation-sub-mod">Ngày kết thúc:</p>
                      <p className="infomation-sub-mod">Điểm bắt đầu:</p>
                      <p className="infomation-sub-mod">Điểm kết thúc:</p>
                    </div>
                    <div>
                      <input className="inpit-modal" type="text" value={codeFlight} onChange={e => setCodeFlight(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={codePlane} onChange={e => setCodePlane(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={s_date} onChange={e => setS_date(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={e_date} onChange={e => setE_date(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={s_place} onChange={e => setS_place(e.target.value)} placeholder="...................................." /><br/>
                      <input className="inpit-modal" type="text" value={e_place} onChange={e => setE_place(e.target.value)} placeholder="....................................." />
                    </div>
                  </div>
                  <button className="modal-button" onClick={() => handleModal_cancel('flightC')}>Cancel</button>
                  <button className="modal-button" onClick={() => handleModal_Ok('flightC')}>Ok</button>
                </div>
              </div>
            } 
              
 
          </div>
        </div>
      );
    }else{
      return (
        <div className="box-check">
            <div className ="customer-mod">
              <div className="modalCustomer">
                <p className="infomation-tit-mod">Vấn đề bảo mật</p>
                <p className="infomation-tit-mod">Vui lòng nhập mật khẩu</p>

                <input className="inpit-modal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="...................................." />

                <button className="modal-button" onClick={()=>{ handleCancelDialog() }}>Cancel</button>
                <button className="modal-button" onClick={()=>{ handleAccessAdmin() }}>Ok</button>
              </div>
            </div>
          </div>
      )
    }
  
}

export default Admin;
