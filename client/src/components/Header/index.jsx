import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ePlusIcon from '../../assets/icons/eplus-icon.png';
import nutriHomeIcon from '../../assets/icons/nutrihome-icon.png';
import logoUrl from '../../assets/images/vnvc-logo.svg';
import useStyle from './style';

const navBarItems = [
  {
    name: 'Tìm trung tâm',
    to: '/',
    Icon: LocationOnIcon,
  },
  {
    name: 'Đăng ký tiêm',
    to: '/',
    Icon: CalendarMonthIcon,
  },
  {
    name: 'Đặt mua vaccine',
    to: '/',
    Icon: ShoppingCartIcon,
  },
  {
    name: 'Tư vấn',
    to: '/',
    Icon: ContactSupportIcon,
  },
];

const menuBarItems = [
  {
    name: 'Trang chủ',
    to: '/',
    subMenu: [],
  },
  {
    name: 'Giới thiệu',
    to: '/',
    subMenu: [
      {
        name: 'Về công ty vaccine Việt Nam',
        to: '/',
      },
      {
        name: 'Vaccine - Cách mạng trong công cuộc y học',
        to: '/',
      },
      {
        name: 'Đội ngũ chuyên gia',
        to: '/',
      },
    ],
  },
  {
    name: 'Tiêm chủng cho trẻ em',
    to: '/',
    subMenu: [
      {
        name: 'Lịch tiêm chủng cho trẻ em',
        to: '/',
      },
      {
        name: 'Những điều cần biết trước khi tiêm',
        to: '/',
      },
      {
        name: 'Những điều cần biết sau khi tiêm',
        to: '/',
      },
      {
        name: 'Các loại vaccine cho trẻ em',
        to: '/',
      },
      {
        name: 'Gói vaccine cho trẻ em',
        to: '/',
      },
      {
        name: 'Gói vaccine cho trẻ em tiền học đường',
        to: '/',
      },
      {
        name: 'Quy trình tiêm chủng tại VNVC',
        to: '/',
      },
      {
        name: 'Bảng giá vaccine',
        to: '/',
      },
    ],
  },
  {
    name: 'Tiêm chủng cho người lớn',
    to: '/',
    subMenu: [
      {
        name: 'Vì sao người lớn cần tiêm vaccine',
        to: '/',
      },
      {
        name: 'Lịch tiêm chủng cho tuổi vị thành niên và người lớn',
        to: '/',
      },
      {
        name: 'Những điều cần biết trước khi tiêm',
        to: '/',
      },
      {
        name: 'Những điều cần biết sau khi tiêm',
        to: '/',
      },
      {
        name: 'Các loại vaccine cho người lớn',
        to: '/',
      },
      {
        name: 'Gói vaccine cho tr3 vị thành niên và thanh niên',
        to: '/',
      },
      {
        name: 'Gói vaccine cho người trưởng thành',
        to: '/',
      },
      {
        name: 'Gói vaccine cho phụ nữ chuẩn bị mang thai và mang thai',
        to: '/',
      },
      {
        name: 'Quy trình tiêm chủng',
        to: '/',
      },
    ],
  },
  {
    name: 'Gói tiêm',
    to: '/',
    subMenu: [
      {
        name: 'Tiêm chủng trọn gói',
        to: '/',
      },
      {
        name: 'Tiêm chủng theo yêu cầu',
        to: '/',
      },
      {
        name: 'Trả góp 0% khi mua vaccine',
        to: '/',
      },
    ],
  },
  {
    name: 'Cẩm nang',
    to: '/',
    subMenu: [
      {
        name: 'Lịch tiêm chủng',
        to: '/',
      },
      {
        name: 'Thông tin sản phẩm vaccine',
        to: '/',
      },
      {
        name: 'Những điều cần biết trước khi tiêm chủng',
        to: '/',
      },
      {
        name: 'Quy trình tiêm chủng tại VNVC',
        to: '/',
      },
      {
        name: 'Những điều cần biết sau khi tiêm chủng',
        to: '/',
      },
      {
        name: 'Tiêm chủng trước khi đi nước ngoài',
        to: '/',
      },
      {
        name: 'Download cẩm nang',
        to: '/',
      },
      {
        name: 'Câu hỏi thường gặp',
        to: '/',
      },
      {
        name: 'Trực tuyến',
        to: '/',
      },
    ],
  },
  {
    name: 'Bảng giá',
    to: '/',
    subMenu: [],
  },
  {
    name: 'Bệnh học',
    to: '/',
    subMenu: [
      {
        name: 'Thông tin bệnh học',
        to: '/',
      },
    ],
  },
  {
    name: 'Tin tức',
    to: '/',
    subMenu: [],
  },
];

function Navbar() {
  const classes = useStyle();
  return (
    <Box borderBottom="solid 1px" borderColor="grey.400" py={0.5}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between">
          <Link to="/">
            <Box width="8rem" flexShrink={0}>
              <img width="100%" src={logoUrl} alt="" />
            </Box>
          </Link>
          <Stack direction="row" spacing={2}>
            {navBarItems.map((item, index) => (
              <Link to={item.to} key={index} className="vertical-center">
                <item.Icon color="primary" />
                <Typography
                  fontSize="0.75rem"
                  variant="inherit"
                  component="strong"
                  color="primary"
                  textTransform="uppercase"
                  ml={0.5}>
                  {item.name}
                </Typography>
              </Link>
            ))}
            <Link to="https://eplus.vnvc.vn/" className="vertical-center">
              <Box width="4rem">
                <img src={ePlusIcon} alt="" width="100%" />
              </Box>
            </Link>

            <Link to="https://nutrihome.vn/" className="vertical-center">
              <Box width="3rem">
                <img src={nutriHomeIcon} alt="" width="100%" />
              </Box>
            </Link>

            <Box>
              <a href="tel:+02873006595" className={classes.phone}>
                Hotline: 028 7300 6595
              </a>
              <p className={classes.openingTime}>
                Mở cửa 7h30 - 17h00 / T2 - CN xuyên trưa
              </p>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function Menubar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleOpenMenu(event, id) {
    console.log(111);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl({ id, target: event.currentTarget });
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="center">
            {menuBarItems.map((item, index) => (
              <Box key={index} zIndex={9999}>
                <Link to={item.to}>
                  <Button
                    aria-owns={anchorEl ? `menu-${index}` : undefined}
                    aria-haspopup="true"
                    onMouseOver={(e) => handleOpenMenu(e, `menu-${index}`)}>
                    {item.name}
                  </Button>
                </Link>
                {item.subMenu.length > 0 && (
                  <Menu
                    onMouseLeave={handleClose}
                    id={`menu-${index}`}
                    anchorEl={anchorEl?.target}
                    open={anchorEl?.id === `menu-${index}`}
                    onClose={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}>
                    {item.subMenu.map((i, id) => (
                      <MenuItem key={id}>
                        <Link to={i.to}>{i.name}</Link>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}

            <TextField
              sx={{ width: '7rem', mt: '-1rem' }}
              id="standard-basic"
              label="Tìm kiếm"
              variant="standard"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default function Header() {
  return (
    <>
      <Navbar />
      <Menubar />
    </>
  );
}
