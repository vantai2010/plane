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
      return setMessage("Vui lòng nhập đầy đủ thông tin điểm bắt đầu !")
    }
    if(finds_2 === ''){
      setShow(true)
      return setMessage("Vui lòng nhập đầy đủ thông tin điểm đến !")
    }
    if(finds_1 === finds_2){
      setShow(true)
      return setMessage("Vui lòng không để điểm đến giống điểm đi !")
    }
    if(finds_3 === ''){
      setShow(true)
      return setMessage("Vui lòng nhập đầy đủ thông tin thời gian khởi hành !")
    } 
    if(finds_4 ===''){
      setShow(true)
      return setMessage("Vui lòng nhập đầy đủ thông tin thời gian kết thúc !")
    }
    if(finds_5 ===''){
      setShow(true)
      return setMessage("Vui lòng nhập đầy đủ thông tin hạng khoang !")
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
        setMessage('Không có chuyến bay nào phù hợp với yêu cầu')
      }
    }).catch(() => {
      setMessage('Server đã gặp lỗi !!!')
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
      alert('Vui lòng nhập mật khẩu !!!')
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
      <h1 className="heading-h1">Website đặt <p id='str-flight'>vé máy bay <strong>tốt nhất</strong></p></h1>
      <img  className='image-background'src={imageBackground} alt='Plane' />
        <div id="menu">
          <ul className="meme">
            <li><a> Về Chúng Tôi</a></li>
            <li><a>Thanh Toán</a></li>
            <li><a>Hướng Dẫn</a></li>
            <li><a>Khuyến Mại</a></li>
            <li><a><button  onClick={() => handleAccess()}>Admin</button></a></li>
          </ul>
        </div>

        {
          showDialog &&
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
        }
        <div id="table-tikit">
            <div className="mono  ">
              <div className="option"><input type="radio" name="radio-op" /><span>Khứ hồi</span></div>
              <div className="option"><input type="radio" name="radio-op"/><span>Một chiều</span></div>
              <div className="option"><input type="radio" name="radio-op"/><span>Nhiều thành phố</span></div>
            </div>
            <div className="mimi">
              <div className="lab-atribute">
                <lable>Từ:</lable>
                <select 
                  className="inp-atribute" 
                  type="text" 
                  value={finds_1} 
                  onChange={e => {
                    setFinds_1(e.target.value)
                    setShow(false)
                  }}>
                    <option></option>
                    <option>Hà Nội</option>
                    <option>Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                    <option>Hải Phòng</option>
                    <option>Nghệ An</option>
                    <option>Huế</option>
                    <option>Khánh Hòa</option>
                    <option>Lâm Đồng</option>
                    <option>Bình Định</option>
                    <option>Cần Thơ</option>
                    <option>Kiên Giang</option>
                    <option>Đồng Nai</option>

                  </select>
              </div>
              <div className="lab-atribute">
                <lable>Đến:</lable>

                <select className="inp-atribute" 
                  type="text"  
                  value={finds_2} 
                  onChange={e => {
                    setShow(false)
                    setFinds_2(e.target.value)
                  }}>
                    <option></option>
                    <option>Hà Nội</option>
                    <option>Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                    <option>Hải Phòng</option>
                    <option>Nghệ An</option>
                    <option>Huế</option>
                    <option>Khánh Hòa</option>
                    <option>Lâm Đồng</option>
                    <option>Bình Định</option>
                    <option>Cần Thơ</option>
                    <option>Kiên Giang</option>
                    <option>Đồng Nai</option>
                  </select> 


              </div>
              <div className="lab-atribute">
                <lable>Khởi hành:</lable>
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
                <lable>Kết thúc:</lable>
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
                <lable>Hạng khoang:</lable>
                <select className="inp-atribute" value={finds_5} onChange={e => {
                  setShow(false)
                  setFinds_5(e.target.value)
                }}>
                  <option>-------------------------</option>
                  <option>Phổ thông</option>
                  <option>Phổ thông đặc biệt</option>
                  <option>Thương gia</option>
                  <option>Hạng nhất</option>
                </select>
              </div>
            </div>
            <div className="mami">
                <div className ="check-option"><input type="checkbox" /><span>Thêm các sân bay gần nhất</span></div>
                <div className ="check-option"><input type="checkbox" /><span>Chỉ các chuyển bay thẳng</span></div>
            </div>
            <div className="mumu">
              <div>
                { show && <p style={css} className="mes-p">{message}</p>}
              </div>
              <div><button className="btn-op" onClick={() => handleOption()}>Tìm chuyến bay</button></div>
            </div>
        </div>
    </div>
    <div className="body_heading">
      <h2 className="body_h2">Tại sao chúng tôi lại ở đây ?</h2>
      <div className="body-fat">
        <div className="body-span-1">
          <img className="span-img"  src="https://js.skyscnr.com/sttc/blackbird/static/media/first_pillar.5de1acf4.svg"/>
          <span className="span-b"><b>Chúng tôi luôn sẵn sàng hỗ trợ</b></span><br></br>
          <span>Xem những nơi bạn có thể đến du lịch ngay bây giờ và tìm những ưu đãi tốt nhất cho hàng nghìn chuyến bay</span>
        </div>
        <div className="body-span-2">
          <img  className="span-img-2"src="https://js.skyscnr.com/sttc/blackbird/static/media/second_pillar.b0aba788.svg"/>
          <span className="span-b"><b>Phương thức thanh toán đơn giản</b></span><br></br>
          <span>Với 2 tiêu chí làm việc là không lừa đảo và không phí ngầm, bạn chẳng lo mất tiền oan vì các khoản chi tiêu rõ như ban ngày</span>

        </div>
        <div className="body-span-3">
          <img className="span-img-3" src ="https://js.skyscnr.com/sttc/blackbird/static/media/third_pillar.f5197051.svg"/>
          <span className="span-b"><b>Chăm sóc khách hàng chu đáo, tận tâm</b></span><br></br>
          <span>Luôn đi trước một bước bằng cách tìm hiểu thông tin cập nhật về đi lại, dự báo thời tiết</span>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-cha">
        <div className="footer-con">
          <h2 className="footer-title">Khám phá</h2>
          <ul>
            <li className="footer-chau">Chuyến bay nội địa</li>
            <li className="footer-chau">Thành phố</li>
            <li className="footer-chau">Các sân bay</li>
            <li className="footer-chau">Quốc gia</li>
            <li className="footer-chau">Hãng hàng không</li>
            <li className="footer-chau">Khách sạn</li>
            <li className="footer-chau">Thuê xe</li>
            <li className="footer-chau">Ứng dụng</li>

          </ul>
        </div>
        <div className="footer-con">
          <h2 className="footer-title">Đối tác</h2>
          <ul>
            <li className="footer-chau">Làm việc với chúng tôi</li>
            <li className="footer-chau">Quảng cáo với chúng tôi</li>
            <li className="footer-chau">Hiểu biết về du lịch</li>
            <li className="footer-chau">Đơn vị liên kết</li>
            <li className="footer-chau">API du lịch</li>

          </ul>
        </div>
        <div className="footer-con">
          <h2 className="footer-title">Công ty</h2>
          <ul>
            <li className="footer-chau">Về chúng tôi</li>
            <li className="footer-chau">Truyền thông</li>
            <li className="footer-chau">Đội ngũ chúng tôi</li>
            <li className="footer-chau">Hỗ trợ người khuyết tật</li>
            <li className="footer-chau">Tính bền vững</li>
            <li className="footer-chau">Câu chuyện công việc</li>
            <li className="footer-chau">Việc làm</li>
            <li className="footer-chau">Điều kiện dịch vụ</li>

          </ul>
        </div>
        <div className="footer-con">
          <h2 className="footer-title">Giúp đỡ</h2>
          <ul>
            <li className="footer-chau">Trợ giúp</li>
            <li className="footer-chau">Cài đặt về sự riêng tư</li>
          </ul>
        </div>
      </div>
      <div className="footer-cha-2">
          <div>
            <h3 className="footer-add">Trụ sở chính tại Hà Nội</h3>
            <p className="footer-add"><ImLocation2></ImLocation2> Tầng 2, tòa nhà số 10-ngách 30, Ngõ 75, Đường Giải Phóng, Hà Nội</p>
            <p className="footer-add"><ImPhoneHangUp></ImPhoneHangUp> 19004953-09999999999</p>
            <p className="footer-add"><ImEnvelop></ImEnvelop> tai195365@huce.edu.vn</p>
          </div>
           <div>
            <h3 className="footer-add-1">Trụ sở chính tại Nam Định</h3>
            <p className="footer-add-1"><ImLocation2></ImLocation2> Tầng 5, tòa nhà VinCom, Ngõ 69, Phan Đình Phùng, Nam Định</p>
            <p className="footer-add-1"><ImPhoneHangUp></ImPhoneHangUp> 19004953-066666666666</p>
            <p className="footer-add-1"><ImEnvelop></ImEnvelop> thuan195365@huce.edu.vn</p>
           </div>
        </div>
      <div className="footer-cha-3">
            <div>
              <h3 className="footer-add-2">Tập đoàn đa quốc gia Santaryot</h3>
              <p className="footer-add-2"><ImLocation2></ImLocation2> Tầng 81, tòa Landmarkmark 81, 720A Điện Biên Phủ, Bình Thạnh, Hồ Chí Minh</p>
              <p className="footer-add-2"><ImPhoneHangUp></ImPhoneHangUp> 49534953-190000000000</p>
              <p className="footer-add-2"><ImEnvelop></ImEnvelop> santaryot@gmail.com</p>
            </div>
            <div>
              <h3 className="footer-add-3">Mạng xã hội</h3>
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
