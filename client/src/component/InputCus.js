import {BiPurchaseTag} from "react-icons/bi";
import { useState } from "react";
import {FaFacebookSquare , FaInstagramSquare,FaTwitterSquare,FaYoutube} from "react-icons/fa";
import { ImEnvelop ,ImLocation2,ImPhoneHangUp} from "react-icons/im";
import { useNavigate } from "react-router-dom";
import './InputCustomer.css'
import {useSelector} from 'react-redux'
import axios from 'axios'


function App() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const customer = useSelector(state => state.customer)
  const flight = useSelector(state => state.flight)
  const ticket = useSelector(state => state.ticket)
  const plane = useSelector(state => state.plane)
  
  const handleConfirm = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/customer/create',
      data: {
        CUS_ID: customer.CUS_ID,
        CUS_NAME: customer.CUS_NAME,
        CUS_PHONE: customer.CUS_PHONE
      }
    }).then(response => {
      if(response.data.success) {
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/ticket/create',
          data: {
            TIK_RANK: ticket.TIK_RANK,
            PLANE_CODE: flight.PLANE_CODE,
            CUS_ID: customer.CUS_ID,
            CHAIR_CODE: plane.CHAIR_BOOKED,
            TIK_CODE: customer.CUS_ID.slice(0, 6)
          }
        }).then(response => {
          if(response.data.success) {
            axios({
              method: 'get',
              url: `http://localhost:5000/api/plane/${flight.PLANE_CODE}`
            }).then(response => {
              if(response.data.success) {
                const index = response.data.plane.CHAIR_FREE.indexOf(plane.CHAIR_BOOKED);
                console.log(index);
                axios({
                  method: 'put',
                  url: `http://localhost:5000/api/plane/${flight.PLANE_CODE}`,
                  data: {
                    PLANE_CODE: response.data.plane.PLANE_CODE,
                    CHAIR_FREE: response.data.plane.CHAIR_FREE.slice(0, index) + response.data.plane.CHAIR_FREE.slice(index +4) ,
                    CHAIR_BOOKED: response.data.plane.CHAIR_BOOKED + ' ' + plane.CHAIR_BOOKED
                  }
                }).then(function (response) {
                  if (response.data.success){
                    setShowMessage(true)
                    setMessage('Bạn đã đăng ký vé thành công')
                  }else {
                    setShowMessage(false)
                    setMessage('Yêu cầu của bạn đã xảy ra lỗi !!')
                  }
                })
              }else {
                setShowMessage(false)
                setMessage('Yêu cầu của bạn đã xảy ra lỗi !!')
              }
            })
            
            
          }else {
            setShowMessage(false)
            setMessage('Yêu cầu của bạn đã xảy ra lỗi !!')
          }
        })
      }else {
        setShowMessage(false)
        setMessage('Yêu cầu của bạn đã xảy ra lỗi !!')
      }
    })

    

    
  }
  
  
  return (
    <div className="heading-title-plane">
      <div className="head-title">
          <h2>Thông tin xác nhận chuyến bay của quý khách !</h2>
          <p>Chúc quý khách có một chuyến bay vui vẻ</p>
      </div>
      
      <div className="content-confirm">
        <div className="adv-left">
          <div className="adv-left-1">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Quảng cáo:</span><br></br>
            <a className="link-adv" href="https://vietnamese.alibaba.com/" target="_blank">Alibaba.com</a>
            <p className="blog-plane-1">Mua các sản phẩm từ các nhà cung cấp đủ điều kiện.</p>
            <p className="blog-plane-1">Nhận báo giá trực tiếp ngay!</p>
            <button className="adver-1">Research</button>
          </div>

          <br></br>
          <div className="adv-left-2">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Quảng cáo:</span><br></br>
            <a className="link-adv" href="http://vebay24h.net/" target="_blank">vemaybay24h.net</a>
            <p className="blog-plane-1">Tua du lịch Nhật Bản trọn gói chỉ từ 33tr.Điểm đến </p>
            <p className="blog-plane-1">hấp dẫn, hành trình độc đào</p>
            <button className="adver-1">Research</button>
          </div>
          <br></br>
          <div className="adv-left-3">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Quảng cáo:</span><br></br>
            <a  className="link-adv" href="http://vietjet.online/" target="_blank">Vietjet.vn</a>
            <p className="blog-plane-1">Vé máy bay nội địa, quốc tế dịp tết nguyên đán 2023</p>
            <p className="blog-plane-1">giảm 50% tới 100k khi nhập mã VNPAY100</p>
            <button className="adver-1">Research</button>
          </div>

        </div>
        <div className="head-plane-cus">
          <div className="head-table-tt">
            <p className="head-tt">Họ và tên: </p> 
            <p className="head-tt">Số điện thoại: </p>
            <p className="head-tt">Căn cước công dân: </p>
            <p className="head-tt">Mã chuyến bay: </p>
            <p className="head-tt">Điểm bắt đầu chuyến bay: </p>
            <p className="head-tt">Điểm kết thúc chuyến bay: </p>
            <p className="head-tt">Thời gian bắt đầu chuyến bay: </p>
            <p className="head-tt">Thời gian kết thúc chuyến bay: </p>
            <p className="head-tt">Hạng ghế - số ghế: </p>
          </div>
          <div className="information">
            <p className="head-tt">{customer.CUS_NAME || 'chưa rõ thông tin'}</p> 
            <p className="head-tt">{customer.CUS_PHONE || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{customer.CUS_ID || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{flight.PLANE_CODE || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{flight.FLI_S_PLACE || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{flight.FLI_E_PLACE || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{flight.FLI_S_DATE || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{flight.FLI_E_DATE || 'chưa rõ thông tin'}</p>
            <p className="head-tt">{ticket.TIK_RANK || 'chưa rõ thông tin'} - {plane.CHAIR_BOOKED || 'chưa rõ thông tin'}</p>
          </div>
         </div>
        <div className="adv-right">
          <div className="adv-right-1">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Quảng cáo:</span><br></br>
            <a  className="link-adv" href="https://www.skyscanner.com.vn/" target="_blank">Skyscanner.vn</a>
            <p className="blog-plane-1">Đặt vé dễ dàng tại website hoặc liên hệ hotline để nhận được </p>
            <p className="blog-plane-1"> tư vấn và báo giá</p>
            <button className="adver-2">Research</button>
          </div>
          <br></br>
          <div className="adv-right-2">
          <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Quảng cáo:</span><br></br>
            <a className="link-adv" href="https://sanvemaybay.vn/dat-ve-may-bay?gclid=EAIaIQobChMIxu7Moavq-wIV2F1gCh2sgwvGEAAYASAAEgImFPD_BwE" target="_blank">Sanvemaybay.com</a>
            <p className="blog-plane-1">Săn vé máy bay giá rẻ tại Sanvemaybay.vn.Tìm ưu đãi,</p>
            <p className="blog-plane-1"> khuyến mãi mới nhất</p>
            <button className="adver-2">Research</button>
          </div>
          <br></br>
          <div className="adv-right-3">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Quảng cáo:</span><br></br>
            <a className="link-adv" href="https://www.bambooairways.com/vn-vi/?utm_content=DopfGtl2fdhqvg9XUZqn6POG9Hvat8DpcrMvowsvCo6rchdn&utm_medium=affiliate&campaign_id=511&utm_source=accesstrade&aff_sid=DopfGtl2fdhqvg9XUZqn6POG9Hvat8DpcrMvowsvCo6rchdn&atnct1=a760880003e7ddedfef56acb3b09697f&atnct2=DopfGtl2fdhqvg9XUZqn6POG9Hvat8DpcrMvowsvCo6rchdn&atnct3=EmMmo0006ys00mytz&gclid=CjwKCAiAs8acBhA1EiwAgRFdwwnyFvSDcX8lTDyeGhA9h9duX-CBiBAusAbCfuvBDhcohFzhB0BZDhoCzO0QAvD_BwE" target="_blank">Bamboo.vn</a>
            <p className="blog-plane-1">Đặt cấp 1 hãng hàng không trong nước và quốc tế.</p>
            <p className="blog-plane-1"> Uy tín - tận tâm</p>
            <button className="adver-2">Research</button>
          </div>
        </div>
      </div>
      <div className="button-add-div">
        <button className="button-add" onClick={() => handleConfirm() }>Xác nhận</button>
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
    </div>
    
  );
}

export default App;