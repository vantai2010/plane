import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {useState , useRef, useEffect} from 'react'
import {FaFacebookSquare , FaInstagramSquare,FaTwitterSquare,FaYoutube} from "react-icons/fa";
import { ImEnvelop ,ImLocation2,ImPhoneHangUp} from "react-icons/im";
import {changeFlight} from './slices/flight'
import { changeTicket } from './slices/ticket'
import {changeListFlight} from './slices/listFlight'
import {changeAutherial} from './slices/autherial'


function App() {
  const customer = useSelector(state => state.flight)
  const autherial = useSelector(state => state.autherial)
  const listFlight = useSelector(state => state.listFlight)
  const ticket = useSelector(state => state.ticket)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [finds_1 , setFinds_1] =useState('')
  const [finds_2 , setFinds_2] =useState('')
  const [finds_3 , setFinds_3] =useState('')
  const [finds_4 , setFinds_4] =useState('')
  const [finds_5 , setFinds_5] =useState('')
  const [message , setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [show , setShow] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [css , setCss]   = useState({})
  const [imageBackground, setImageBackground] = useState('https://wallpapercave.com/wp/wp3780239.jpg')
  const listImage = useRef([])
  const index = useRef(0)
  const index2 = useRef()
  // listImage.current = ['https://tophinhanhdep.com/wp-content/uploads/2021/10/Airplane-4K-Wallpapers-1024x636.jpg','https://wallpapercave.com/wp/wp3780239.jpg']
  // console.log(listImage.current.length)
  // useEffect(() => {
    
  //   index2.current = setInterval(() => {
  //     if(index.current > listImage.current.length - 1){
  //       index.current = 0
  //     }
  //     setImageBackground(listImage.current[index.current])
  //     index.current = index.current + 1
      
  //   }, 20000);
  // }, [imageBackground])
  
  const handleOption = () => {
    console.log(listFlight)
    if(finds_1 === ''){
      setShow(true)
      return setMessage("Vui l??ng nh???p ?????y ????? th??ng tin ??i???m b???t ?????u !")
    }
    if(finds_2 === ''){
      setShow(true)
      return setMessage("Vui l??ng nh???p ?????y ????? th??ng tin ??i???m ?????n !")
    }
    if(finds_1 === finds_2){
      setShow(true)
      return setMessage("Vui l??ng kh??ng ????? ??i???m ?????n gi???ng ??i???m ??i !")
    }
    if(finds_3 === ''){
      setShow(true)
      return setMessage("Vui l??ng nh???p ?????y ????? th??ng tin th???i gian kh???i h??nh !")
    } 
    if(finds_4 ===''){
      setShow(true)
      return setMessage("Vui l??ng nh???p ?????y ????? th??ng tin th???i gian k???t th??c !")
    }
    if(finds_5 ===''){
      setShow(true)
      return setMessage("Vui l??ng nh???p ?????y ????? th??ng tin h???ng khoang !")
    } 
    setCss({color:"#0a9c3d"})
    setShow(true)

    axios({
      method: 'get',
      url: 'http://localhost:5000/api/flight'
    }).then(response => {
      const satifyFlights = response.data.flights.filter(flight => {
        return flight.FLI_S_PLACE === finds_1 && flight.FLI_E_PLACE === finds_2
      })
    
      if(satifyFlights.length > 0){
        dispatch(changeListFlight(satifyFlights))
        dispatch(changeFlight({
          FLI_S_PLACE: finds_1,
          FLI_E_PLACE: finds_2,
          FLI_S_DATE: finds_3,
          FLI_E_DATE: finds_4,
        }))
        dispatch(changeTicket({
          TIK_RANK: finds_5
        }))
        return navigate('/selectPlane')
      }else{
        setMessage('Kh??ng c?? chuy???n bay n??o ph?? h???p v???i y??u c???u')
      }
    }).catch(() => {
      setMessage('Server ???? g???p l???i !!!')
    })
    
    
  }
  const handleAccess = () => {
    setShowDialog(true)
  }
  const handleCancelDialog = () => {
    setShowDialog(false)
  }
  const handleAccessAdmin = () => {
    if(password === ''){
      alert('Vui l??ng nh???p m???t kh???u !!!')
    }else if(password === 'VT'){
      dispatch(changeAutherial({isAutherialed: true}))
      navigate('/admin')
    }else{
      alert('MK sai !!!')
    }
  }
  return (
  <>
    <div>
      <h1 className="heading-h1">Website ?????t <p id='str-flight'>v?? m??y bay <strong>t???t nh???t</strong></p></h1>
      <img  className='image-background'src={imageBackground} alt='Plane' />
        <div id="menu">
          <ul className="meme">
            <li><a> V??? Ch??ng T??i</a></li>
            <li><a>Thanh To??n</a></li>
            <li><a>H?????ng D???n</a></li>
            <li><a>Khuy???n M???i</a></li>
            <li><a><button  onClick={() => handleAccess()}>Admin</button></a></li>
          </ul>
        </div>

        {
          showDialog &&
          <div className="box-check">
            <div className ="customer-mod">
              <div className="modalCustomer">
                <p className="infomation-tit-mod">V???n ????? b???o m???t</p>
                <p className="infomation-tit-mod">Vui l??ng nh???p m???t kh???u</p>

                <input className="inpit-modal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="...................................." />

                <button className="modal-button" onClick={()=>{ handleCancelDialog() }}>Cancel</button>
                <button className="modal-button" onClick={()=>{ handleAccessAdmin() }}>Ok</button>
              </div>
            </div>
          </div>
        }
        <div id="table-tikit">
            <div className="mono  ">
              <div className="option"><input type="radio" name="radio-op" /><span>Kh??? h???i</span></div>
              <div className="option"><input type="radio" name="radio-op"/><span>M???t chi???u</span></div>
              <div className="option"><input type="radio" name="radio-op"/><span>Nhi???u th??nh ph???</span></div>
            </div>
            <div className="mimi">
              <div className="lab-atribute">
                <lable>T???:</lable>
                <select 
                  className="inp-atribute" 
                  type="text" 
                  value={finds_1} 
                  onChange={e => {
                    setFinds_1(e.target.value)
                    setShow(false)
                  }}>
                    <option></option>
                    <option>H?? N???i</option>
                    <option>H??? Ch?? Minh</option>
                    <option>???? N???ng</option>
                    <option>Qu???ng Ninh</option>
                    <option>H???i Ph??ng</option>
                    <option>Ngh??? An</option>
                    <option>Hu???</option>
                    <option>Kh??nh H??a</option>
                    <option>L??m ?????ng</option>
                    <option>B??nh ?????nh</option>
                    <option>C???n Th??</option>
                    <option>Ki??n Giang</option>
                    <option>?????ng Nai</option>

                  </select>
              </div>
              <div className="lab-atribute">
                <lable>?????n:</lable>

                <select className="inp-atribute" 
                  type="text"  
                  value={finds_2} 
                  onChange={e => {
                    setShow(false)
                    setFinds_2(e.target.value)
                  }}>
                    <option></option>
                    <option>H?? N???i</option>
                    <option>H??? Ch?? Minh</option>
                    <option>???? N???ng</option>
                    <option>Qu???ng Ninh</option>
                    <option>H???i Ph??ng</option>
                    <option>Ngh??? An</option>
                    <option>Hu???</option>
                    <option>Kh??nh H??a</option>
                    <option>L??m ?????ng</option>
                    <option>B??nh ?????nh</option>
                    <option>C???n Th??</option>
                    <option>Ki??n Giang</option>
                    <option>?????ng Nai</option>
                  </select> 


              </div>
              <div className="lab-atribute">
                <lable>Kh???i h??nh:</lable>
                <input 
                  className="inp-atribute-1" 
                  type="date" 
                  value={finds_3} 
                  onChange={e => {
                    setShow(false)
                    setFinds_3(e.target.value)
                  }} />
              </div>
              <div className="lab-atribute">
                <lable>K???t th??c:</lable>
                <input 
                  className="inp-atribute" 
                  type="date"  
                  value={finds_4} 
                  onChange={e => {
                    setShow(false)
                    setFinds_4(e.target.value)
                  }}/>
              </div>
              <div className="lab-atribute">
                <lable>H???ng khoang:</lable>
                <select className="inp-atribute" value={finds_5} onChange={e => {
                  setShow(false)
                  setFinds_5(e.target.value)
                }}>
                  <option>-------------------------</option>
                  <option>Ph??? th??ng</option>
                  <option>Ph??? th??ng ?????c bi???t</option>
                  <option>Th????ng gia</option>
                  <option>H???ng nh???t</option>
                </select>
              </div>
            </div>
            <div className="mami">
                <div className ="check-option"><input type="checkbox" /><span>Th??m c??c s??n bay g???n nh???t</span></div>
                <div className ="check-option"><input type="checkbox" /><span>Ch??? c??c chuy???n bay th???ng</span></div>
            </div>
            <div className="mumu">
              <div>
                { show && <p style={css} className="mes-p">{message}</p>}
              </div>
              <div><button className="btn-op" onClick={() => handleOption()}>T??m chuy???n bay</button></div>
            </div>
        </div>
    </div>
    <div className="body_heading">
      <h2 className="body_h2">T???i sao ch??ng t??i l???i ??? ????y ?</h2>
      <div className="body-fat">
        <div className="body-span-1">
          <img className="span-img"  src="https://js.skyscnr.com/sttc/blackbird/static/media/first_pillar.5de1acf4.svg"/>
          <span className="span-b"><b>Ch??ng t??i lu??n s???n s??ng h??? tr???</b></span><br></br>
          <span>Xem nh???ng n??i b???n c?? th??? ?????n du l???ch ngay b??y gi??? v?? t??m nh???ng ??u ????i t???t nh???t cho h??ng ngh??n chuy???n bay</span>
        </div>
        <div className="body-span-2">
          <img  className="span-img-2"src="https://js.skyscnr.com/sttc/blackbird/static/media/second_pillar.b0aba788.svg"/>
          <span className="span-b"><b>Ph????ng th???c thanh to??n ????n gi???n</b></span><br></br>
          <span>V???i 2 ti??u ch?? l??m vi???c l?? kh??ng l???a ?????o v?? kh??ng ph?? ng???m, b???n ch???ng lo m???t ti???n oan v?? c??c kho???n chi ti??u r?? nh?? ban ng??y</span>

        </div>
        <div className="body-span-3">
          <img className="span-img-3" src ="https://js.skyscnr.com/sttc/blackbird/static/media/third_pillar.f5197051.svg"/>
          <span className="span-b"><b>Ch??m s??c kh??ch h??ng chu ????o, t???n t??m</b></span><br></br>
          <span>Lu??n ??i tr?????c m???t b?????c b???ng c??ch t??m hi???u th??ng tin c???p nh???t v??? ??i l???i, d??? b??o th???i ti???t</span>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-cha">
        <div className="footer-con">
          <h2 className="footer-title">Kh??m ph??</h2>
          <ul>
            <li className="footer-chau">Chuy???n bay n???i ?????a</li>
            <li className="footer-chau">Th??nh ph???</li>
            <li className="footer-chau">C??c s??n bay</li>
            <li className="footer-chau">Qu???c gia</li>
            <li className="footer-chau">H??ng h??ng kh??ng</li>
            <li className="footer-chau">Kh??ch s???n</li>
            <li className="footer-chau">Thu?? xe</li>
            <li className="footer-chau">???ng d???ng</li>

          </ul>
        </div>
        <div className="footer-con">
          <h2 className="footer-title">?????i t??c</h2>
          <ul>
            <li className="footer-chau">L??m vi???c v???i ch??ng t??i</li>
            <li className="footer-chau">Qu???ng c??o v???i ch??ng t??i</li>
            <li className="footer-chau">Hi???u bi???t v??? du l???ch</li>
            <li className="footer-chau">????n v??? li??n k???t</li>
            <li className="footer-chau">API du l???ch</li>

          </ul>
        </div>
        <div className="footer-con">
          <h2 className="footer-title">C??ng ty</h2>
          <ul>
            <li className="footer-chau">V??? ch??ng t??i</li>
            <li className="footer-chau">Truy???n th??ng</li>
            <li className="footer-chau">?????i ng?? ch??ng t??i</li>
            <li className="footer-chau">H??? tr??? ng?????i khuy???t t???t</li>
            <li className="footer-chau">T??nh b???n v???ng</li>
            <li className="footer-chau">C??u chuy???n c??ng vi???c</li>
            <li className="footer-chau">Vi???c l??m</li>
            <li className="footer-chau">??i???u ki???n d???ch v???</li>

          </ul>
        </div>
        <div className="footer-con">
          <h2 className="footer-title">Gi??p ?????</h2>
          <ul>
            <li className="footer-chau">Tr??? gi??p</li>
            <li className="footer-chau">C??i ?????t v??? s??? ri??ng t??</li>
          </ul>
        </div>
      </div>
      <div className="footer-cha-2">
          <div>
            <h3 className="footer-add">Tr??? s??? ch??nh t???i H?? N???i</h3>
            <p className="footer-add"><ImLocation2></ImLocation2> T???ng 2, t??a nh?? s??? 10-ng??ch 30, Ng?? 75, ???????ng Gi???i Ph??ng, H?? N???i</p>
            <p className="footer-add"><ImPhoneHangUp></ImPhoneHangUp> 19004953-09999999999</p>
            <p className="footer-add"><ImEnvelop></ImEnvelop> tai195365@huce.edu.vn</p>
          </div>
           <div>
            <h3 className="footer-add-1">Tr??? s??? ch??nh t???i Nam ?????nh</h3>
            <p className="footer-add-1"><ImLocation2></ImLocation2> T???ng 5, t??a nh?? VinCom, Ng?? 69, Phan ????nh Ph??ng, Nam ?????nh</p>
            <p className="footer-add-1"><ImPhoneHangUp></ImPhoneHangUp> 19004953-066666666666</p>
            <p className="footer-add-1"><ImEnvelop></ImEnvelop> thuan195365@huce.edu.vn</p>
           </div>
        </div>
      <div className="footer-cha-3">
            <div>
              <h3 className="footer-add-2">T???p ??o??n ??a qu???c gia Santaryot</h3>
              <p className="footer-add-2"><ImLocation2></ImLocation2> T???ng 81, t??a Landmarkmark 81, 720A ??i???n Bi??n Ph???, B??nh Th???nh, H??? Ch?? Minh</p>
              <p className="footer-add-2"><ImPhoneHangUp></ImPhoneHangUp> 49534953-190000000000</p>
              <p className="footer-add-2"><ImEnvelop></ImEnvelop> santaryot@gmail.com</p>
            </div>
            <div>
              <h3 className="footer-add-3">M???ng x?? h???i</h3>
              <span className="footer-icon-fa"><a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare></FaFacebookSquare></a></span>
              <span className="footer-icon-fa"><a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare></FaInstagramSquare></a></span>
              <span className="footer-icon-fa"><a href="https://twitter.com/?lang=vi" target="_blank"><FaTwitterSquare></FaTwitterSquare></a></span>
              <span className="footer-icon-fa"><a href="https://www.youtube.com/" target="_blank"><FaYoutube></FaYoutube></a></span>
            </div>
      </div>
    </div>
    
  </>
  );
}

export default App;
