import React from 'react';
import {Link} from 'react-router-dom';
import useStyle from './style';

function Footer() {
    const classes = useStyle();

    return (
        <footer className={classes.footer}>
          <div className={classes.container}>
              <div className={classes.row}>
                  <div className={classes.item}>
                      <Link className={classes.label} to="">
                      <img src="https://vnvc.vn/wp-content/uploads/2017/04/logo.png"></img>
                      </Link>
                  </div>
                  <div className={classes.item}>
                      <Link className={classes.label} to="">LIÊN HỆ</Link>
                  </div>
                  <div className={classes.item}>
                      <Link className={classes.label} to="">TÌM TRUNG TÂM</Link>
                  </div>
                  <div className={classes.item}>
                      <div>
                          <img src="https://vnvc.vn/wp-content/themes/wg/images/i-phone-red.png" style={{marginRight: '14px'}}></img>
                          <span className={classes.hotline}>Hotline: </span>
                          <Link to="">
                              <span className={classes.number}>028 7300 6595</span>
                          </Link>
                      </div>
                      <div>
                          <span >Thời gian làm việc: Từ thứ 2 đến chủ nhật</span>
                          <br />Từ 7h30 – 17h00 (không nghỉ trưa)
                      </div>
                  </div>
              </div>
            <div className="footer__line"></div>
              <div className={classes.row}>
                  <div className={classes.VNVC}>
                      <div className={classes.label}>Hệ thống miền Bắc</div>
                      <div className={classes.menu}>
                          <div className={classes.col}>
                              <div className={classes.itemvnvc}>
                                  Bắc Giang
                              </div>
                              <div className={classes.itemvnvc}>
                                  Hà Nội
                              </div>
                              <div className={classes.itemvnvc}>
                                  Ninh Bình
                              </div>
                              <div className={classes.itemvnvc}>
                                  Quảng Ninh
                              </div>
                              <div className={classes.itemvnvc}>
                                  Vĩnh Phúc
                              </div>
                              <div className={classes.itemvnvc}>
                                  Hải Phòng
                              </div>
                              <div className={classes.itemvnvc}>
                                  Thái Bình
                              </div>
                          </div>
                          <div className={classes.col}>
                              <div className={classes.itemvnvc}>
                                  Bắc Ninh
                              </div>
                              <div className={classes.itemvnvc}>
                                  Nam Định
                              </div>
                              <div className={classes.itemvnvc}>
                                  Phú Thọ
                              </div>
                              <div className={classes.itemvnvc}>
                                  Thái Nguyên
                              </div>
                              <div className={classes.itemvnvc}>
                                  Hưng Yên
                              </div>
                              <div className={classes.itemvnvc}>
                                  Yên Bái
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classes.VNVC}>
                      <div className={classes.label}>Hệ thống miền Tung</div>
                      <div className={classes.menu}>
                          <div className={classes.col}>
                              <div className={classes.itemvnvc}>
                                  Đắk Lắk
                              </div>
                              <div className={classes.itemvnvc}>
                                  Đà Nẵng
                              </div>
                              <div className={classes.itemvnvc}>
                                  Quảng Ngãi
                              </div>
                              <div className={classes.itemvnvc}>
                                  Bình Định
                              </div>
                              <div className={classes.itemvnvc}>
                                  Nghệ An
                              </div>
                              <div className={classes.itemvnvc}>
                                  Hà Tĩnh
                              </div>
                              <div className={classes.itemvnvc}>
                                  Đức Trọng
                              </div>
                          </div>
                          <div className={classes.col}>
                              <div className={classes.itemvnvc}>
                                  Gia Lai
                              </div>
                              <div className={classes.itemvnvc}>
                                  Khánh Hòa
                              </div>
                              <div className={classes.itemvnvc}>
                                  Quảng Nam
                              </div>
                              <div className={classes.itemvnvc}>
                                  Thừa Thiên Huế
                              </div>
                              <div className={classes.itemvnvc}>
                                  Thanh Hóa
                              </div>
                              <div className={classes.itemvnvc}>
                                  Đồng Hới
                              </div>
                              <div className={classes.itemvnvc}>
                                  Bình Thuận
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className={classes.VNVC}>
                      <div className={classes.label}>Hệ thống miền Nam</div>
                      <div className={classes.menu}>
                          <div className={classes.col}>
                              <div className={classes.itemvnvc}>
                                  An Giang
                              </div>
                              <div className={classes.itemvnvc}>
                                  Cần Thơ
                              </div>
                              <div className={classes.itemvnvc}>
                                  Kiên Giang
                              </div>
                              <div className={classes.itemvnvc}>
                                  Tiền Giang
                              </div>
                              <div className={classes.itemvnvc}>
                                  Bến Tre
                              </div>
                              <div className={classes.itemvnvc}>
                                  Cà Mau
                              </div>
                              <div className={classes.itemvnvc}>
                                  Bình Phước
                              </div>
                          </div>
                          <div className={classes.col}>
                              <div className={classes.itemvnvc}>
                                  Bình Dương
                              </div>
                              <div className={classes.itemvnvc}>
                                  Đồng Nai
                              </div>
                              <div className={classes.itemvnvc}>
                                  Long An
                              </div>
                              <div className={classes.itemvnvc}>
                                  Hồ Chí Minh
                              </div>
                              <div className={classes.itemvnvc}>
                                  Vĩnh Long
                              </div>
                              <div className={classes.itemvnvc}>
                                  Tây Ninh
                              </div>
                              <div className={classes.itemvnvc}>
                                  Bà Rịa - Vũng Tàu
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={classes.line}>

              </div>
              <div className={classes.row}>
                  <div className={classes.item} style={{fontSize: '14px'}}>
                  CÔNG TY CỔ PHẦN VACXIN VIỆT NAM
                  <br />
                  Giấy chứng nhận ĐKKD số 0107631488 do sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 11/11/2016
                  <br />
                  Địa chỉ: 180 Trường Chinh, P. Khương Thượng, Q. Đống Đa,Tp. Hà Nội
                  <br />
                  Mail: cskh@vnvc.vn
                  <br />
                  Mail: hangtt3@vnvc.vn
                  <br />
                  Bản quyền © 2016 thuộc về CÔNG TY CỔ PHẦN VACXIN VIỆT NAM
                  </div>
                  <div className={classes.item}>
                      CHÍNH SÁCH BẢO MẬT
                      <br />
                      KHẢO SÁT TIÊM CHỦNG
                      <br />
                      <img src ="https://images.dmca.com/Badges/dmca-badge-w100-5x1-10.png?ID=ce267d6f-3c89-482c-b52d-d9a2c36ef544" style={{margin: '14px'}}/>
                      <img src="https://vnvc.vn/img/dathongbao.png" style={{width: '100px'}}></img>
                  </div>

              </div>
          </div>
        </footer>

    );
}

export default Footer;