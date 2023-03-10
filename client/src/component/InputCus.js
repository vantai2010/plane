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
                    setMessage('B???n ???? ????ng k?? v?? th??nh c??ng')
                  }else {
                    setShowMessage(false)
                    setMessage('Y??u c???u c???a b???n ???? x???y ra l???i !!')
                  }
                })
              }else {
                setShowMessage(false)
                setMessage('Y??u c???u c???a b???n ???? x???y ra l???i !!')
              }
            })
            
            
          }else {
            setShowMessage(false)
            setMessage('Y??u c???u c???a b???n ???? x???y ra l???i !!')
          }
        })
      }else {
        setShowMessage(false)
        setMessage('Y??u c???u c???a b???n ???? x???y ra l???i !!')
      }
    })

    

    
  }
  
  
  return (
    <div className="heading-title-plane">
      <div className="head-title">
          <h2>Th??ng tin x??c nh???n chuy???n bay c???a qu?? kh??ch !</h2>
          <p>Ch??c qu?? kh??ch c?? m???t chuy???n bay vui v???</p>
      </div>
      
      <div className="content-confirm">
        <div className="adv-left">
          <div className="adv-left-1">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Qu???ng c??o:</span><br></br>
            <a className="link-adv" href="https://vietnamese.alibaba.com/" target="_blank">Alibaba.com</a>
            <p className="blog-plane-1">Mua c??c s???n ph???m t??? c??c nh?? cung c???p ????? ??i???u ki???n.</p>
            <p className="blog-plane-1">Nh???n b??o gi?? tr???c ti???p ngay!</p>
            <button className="adver-1">Research</button>
          </div>

          <br></br>
          <div className="adv-left-2">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Qu???ng c??o:</span><br></br>
            <a className="link-adv" href="http://vebay24h.net/" target="_blank">vemaybay24h.net</a>
            <p className="blog-plane-1">Tua du l???ch Nh???t B???n tr???n g??i ch??? t??? 33tr.??i???m ?????n </p>
            <p className="blog-plane-1">h???p d???n, h??nh tr??nh ?????c ????o</p>
            <button className="adver-1">Research</button>
          </div>
          <br></br>
          <div className="adv-left-3">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Qu???ng c??o:</span><br></br>
            <a  className="link-adv" href="http://vietjet.online/" target="_blank">Vietjet.vn</a>
            <p className="blog-plane-1">V?? m??y bay n???i ?????a, qu???c t??? d???p t???t nguy??n ????n 2023</p>
            <p className="blog-plane-1">gi???m 50% t???i 100k khi nh???p m?? VNPAY100</p>
            <button className="adver-1">Research</button>
          </div>

        </div>
        <div className="head-plane-cus">
          <div className="head-table-tt">
            <p className="head-tt">H??? v?? t??n: </p> 
            <p className="head-tt">S??? ??i???n tho???i: </p>
            <p className="head-tt">C??n c?????c c??ng d??n: </p>
            <p className="head-tt">M?? chuy???n bay: </p>
            <p className="head-tt">??i???m b???t ?????u chuy???n bay: </p>
            <p className="head-tt">??i???m k???t th??c chuy???n bay: </p>
            <p className="head-tt">Th???i gian b???t ?????u chuy???n bay: </p>
            <p className="head-tt">Th???i gian k???t th??c chuy???n bay: </p>
            <p className="head-tt">H???ng gh??? - s??? gh???: </p>
          </div>
          <div className="information">
            <p className="head-tt">{customer.CUS_NAME || 'ch??a r?? th??ng tin'}</p> 
            <p className="head-tt">{customer.CUS_PHONE || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{customer.CUS_ID || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{flight.PLANE_CODE || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{flight.FLI_S_PLACE || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{flight.FLI_E_PLACE || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{flight.FLI_S_DATE || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{flight.FLI_E_DATE || 'ch??a r?? th??ng tin'}</p>
            <p className="head-tt">{ticket.TIK_RANK || 'ch??a r?? th??ng tin'} - {plane.CHAIR_BOOKED || 'ch??a r?? th??ng tin'}</p>
          </div>
         </div>
        <div className="adv-right">
          <div className="adv-right-1">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Qu???ng c??o:</span><br></br>
            <a  className="link-adv" href="https://www.skyscanner.com.vn/" target="_blank">Skyscanner.vn</a>
            <p className="blog-plane-1">?????t v?? d??? d??ng t???i website ho???c li??n h??? hotline ????? nh???n ???????c </p>
            <p className="blog-plane-1"> t?? v???n v?? b??o gi??</p>
            <button className="adver-2">Research</button>
          </div>
          <br></br>
          <div className="adv-right-2">
          <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Qu???ng c??o:</span><br></br>
            <a className="link-adv" href="https://sanvemaybay.vn/dat-ve-may-bay?gclid=EAIaIQobChMIxu7Moavq-wIV2F1gCh2sgwvGEAAYASAAEgImFPD_BwE" target="_blank">Sanvemaybay.com</a>
            <p className="blog-plane-1">S??n v?? m??y bay gi?? r??? t???i Sanvemaybay.vn.T??m ??u ????i,</p>
            <p className="blog-plane-1"> khuy???n m??i m???i nh???t</p>
            <button className="adver-2">Research</button>
          </div>
          <br></br>
          <div className="adv-right-3">
            <span className="blog-plane-a"><BiPurchaseTag></BiPurchaseTag>Qu???ng c??o:</span><br></br>
            <a className="link-adv" href="https://www.bambooairways.com/vn-vi/?utm_content=DopfGtl2fdhqvg9XUZqn6POG9Hvat8DpcrMvowsvCo6rchdn&utm_medium=affiliate&campaign_id=511&utm_source=accesstrade&aff_sid=DopfGtl2fdhqvg9XUZqn6POG9Hvat8DpcrMvowsvCo6rchdn&atnct1=a760880003e7ddedfef56acb3b09697f&atnct2=DopfGtl2fdhqvg9XUZqn6POG9Hvat8DpcrMvowsvCo6rchdn&atnct3=EmMmo0006ys00mytz&gclid=CjwKCAiAs8acBhA1EiwAgRFdwwnyFvSDcX8lTDyeGhA9h9duX-CBiBAusAbCfuvBDhcohFzhB0BZDhoCzO0QAvD_BwE" target="_blank">Bamboo.vn</a>
            <p className="blog-plane-1">?????t c???p 1 h??ng h??ng kh??ng trong n?????c v?? qu???c t???.</p>
            <p className="blog-plane-1"> Uy t??n - t???n t??m</p>
            <button className="adver-2">Research</button>
          </div>
        </div>
      </div>
      <div className="button-add-div">
        <button className="button-add" onClick={() => handleConfirm() }>X??c nh???n</button>
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
    </div>
    
  );
}

export default App;