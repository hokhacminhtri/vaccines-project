import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from './style';
import iconContact from '../../assets/icons/contact.png';
import iconLocation from '../../assets/icons/location.png';
import logo from '../../assets/icons/logo.png';
import iconPhone from '../../assets/icons/i-phone-red.png';
import iconNotice from '../../assets/icons/dathongbao.png';
import iconDMCA from '../../assets/icons/dmca-icon.png';

const proNorth_1 = [
  'Bắc Giang',
  'Hà Nội',
  'Ninh Bình',
  'Quảng Ninh',
  'Vĩnh Phúc',
  'Hải Phòng',
  'Thái Bình',
];
const proNorth_2 = [
  'Bắc Ninh',
  'Nam Định',
  'Phú Thọ',
  'Thái Nguyên',
  'Hưng Yên',
  'Yên Bái',
];

const proCen_1 = [
  'Đắk Lắk',
  'Đà Nẵng',
  'Quảng Ngãi',
  'Bình Định',
  'Nghệ An',
  'Hà Tĩnh',
  'Đức Trọng',
];
const proCen_2 = [
  'Gia Lai',
  'Khánh Hòa',
  'Quảng Nam',
  'Thừa Thiên Huế',
  'Thanh Hóa',
  'Đồng Hới',
  'Bình Thuận',
];

const proSouth_1 = [
  'An Giang',
  'Cần Thơ',
  'Kiên Giang',
  'Tiền Giang',
  'Bến Tre',
  'Cà Mau',
  'Bình Phước',
];
const proSouth_2 = [
  'Bình Dương',
  'Đồng Nai',
  'Hồ Chí Minh',
  'Vĩnh Long',
  'Tây Ninh',
  'Bà Rịa-Vũng Tàu',
];

function Footer() {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.item}>
            <Link className={classes.label} to="">
              <img src={logo} />
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.label} to="">
              <img src={iconContact} alt="" className={classes.img} />
              LIÊN HỆ
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.label} to="">
              <img src={iconLocation} alt="" className={classes.img} />
              TÌM TRUNG TÂM
            </Link>
          </div>
          <div className={classes.item}>
            <div>
              <img src={iconPhone} style={{ marginRight: '14px' }} />
              <span className={classes.hotline}>Hotline: </span>
              <Link to="">
                <span className={classes.number}>028 7300 6595</span>
              </Link>
            </div>
            <div>
              <span>Thời gian làm việc: Từ thứ 2 đến chủ nhật</span>
              <br />
              Từ 7h30 – 17h00 (không nghỉ trưa)
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className={classes.row}>
          <div className={classes.VNVC}>
            <div className={classes.label1}>Hệ thống miền Bắc</div>
            <div className={classes.menu}>
              <div className={classes.col}>
                {proNorth_1.map((item, index) => (
                  <div className={classes.itemvnvc} key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={classes.col}>
                {proNorth_2.map((item, index) => (
                  <div className={classes.itemvnvc} key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.VNVC}>
            <div className={classes.label1}>Hệ thống miền Trung</div>
            <div className={classes.menu}>
              <div className={classes.col}>
                {proCen_1.map((item, index) => (
                  <div className={classes.itemvnvc} key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={classes.col}>
                {proCen_2.map((item, index) => (
                  <div className={classes.itemvnvc} key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={classes.VNVC}>
            <div className={classes.label1}>Hệ thống miền Nam</div>
            <div className={classes.menu}>
              <div className={classes.col}>
                {proSouth_1.map((item, index) => (
                  <div className={classes.itemvnvc} key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={classes.col}>
                {proSouth_2.map((item, index) => (
                  <div className={classes.itemvnvc} key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.row}>
          <div className={classes.item} style={{ fontSize: '14px' }}>
            CÔNG TY CỔ PHẦN VACXIN VIỆT NAM
            <br />
            Giấy chứng nhận ĐKKD số 0107631488 do sở Kế hoạch và Đầu tư TP. Hà
            Nội cấp ngày 11/11/2016
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
            <img src={iconDMCA} style={{ margin: '14px' }} />
            <img src={iconNotice} style={{ width: '100px' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
