import {Container,Grid,Card,CardMedia,Typography,CardContent} from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VaccinationCard from '../components/VaccinationCard';
import usePageTitle from '../hooks/usePageTitle';
import image1 from '../assets/images/vc-children01.jpg';
import image2 from '../assets/images/vc-children02.jpg';
import image3 from '../assets/images/vc-children03.jpg'
import image4 from '../assets/images/vc-children04.jpg'
import image5 from '../assets/images/vc-children05.jpg'
import image6 from '../assets/images/vc-children06.jpg'
import image7 from '../assets/images/vc-children07.jpg'
import image8 from '../assets/images/vc-children08.jpg'

export default function VaccinationChildren()
{
  usePageTitle("Tiêm chủng cho trẻ em");
  return (
    <>
      <Header />
      <Container sx={{paddingBottom:5}}>
        <div class="row div-breckum">
          <div class="col-xs-12">
            <span typeof="v:Breadcrumb"><a href="/" rel="v:url" property="v:title">TRANG CHỦ</a> » <span class="breadcrumb_last">Tiêm Chủng Cho Trẻ Em</span></span>
          </div>
        </div>
        <h3 class="content-title">
			    <span class="text-blue">
            Tiêm Chủng Cho Trẻ Em
          </span>
		    </h3>
        <p>
          Từ khi có vắc xin, Việt Nam đã bảo vệ hơn 1.6 triệu trẻ em khỏi gần 30 bệnh lý truyền nhiễm có thể gây tử vong;
          thanh toán thủy đậu từ năm 1979; thanh toán bại liệt từ năm 2000;
          thanh toán uốn ván sơ sinh từ năm 2005; tiết kiệm hàng ngàn tỷ đồng mỗi năm cho các chi phí chăm sóc y tế…
          Chúng ta hoàn toàn có thể làm giảm tỷ lệ mắc bệnh, giảm biến chứng, giảm tử vong ở trẻ em dưới 5 tuổi do một số bệnh truyền nhiễm nguy hiểm gây ra nhờ chủng ngừa.
          Hãy chủ động tiêm vắc xin để con yêu lớn lên an toàn và khỏe mạnh!
        </p>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image1}
            title='Lịch tiêm chủng cho trẻ'
            desc='Cập nhật mới và đầy đủ nhất lịch tiêm chủng cho trẻ em,
            đảm bảo bé yêu được chủng ngừa sớm, đầy đủ, đúng lịch,
            bảo vệ bé trước nhiều bệnh truyền nhiễm nguy hiểm.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image2}
            title='Những điều cần biết trước khi tiêm'
            desc='Những điều cần biết trước khi tiêm giúp bác sĩ phát hiện bất thường,
            tạm hoãn tiêm hoặc không tiêm một loại vắc xin nào đó,
            đảm bảo an toàn cho trẻ khi đi tiêm chủng.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image3}
            title='Những điều cần biết sau khi tiêm'
            desc='Hướng dẫn chi tiết những điều cần biết sau khi tiêm chủng,
            những phương pháp giúp phụ huynh theo dõi và chăm sóc trẻ sau tiêm,
            đảm bảo an toàn tiêm chủng cho trẻ.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image4}
            title='Các loại vắc xin cho trẻ em'
            desc='VNVC có đủ các loại vắc xin cho trẻ em, được nhập khẩu từ nước ngoài của các hãng sản xuất uy tín,
            nổi tiếng Thế giới, và số ít các vắc xin được sản xuất tại Việt Nam.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image5}
            title='Gói vắc xin cho trẻ em'
            desc='Gói vắc xin cho trẻ em đảm bảo có đầy đủ những loại vắc xin đã cam kết trong gói - ngay cả khi tình trạng khan hiếm vắc xin xảy ra,
            cùng nhiều quyền lợi đặc biệt khác.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image6}
            title='Gói vắc xin cho trẻ tiền học đường'
            desc='Gói vắc xin cho trẻ tiền học đường giúp bố mẹ chủ động phòng ngừa nhiều bệnh truyền nhiễm nguy hiểm cho trẻ,
            giúp trẻ được bảo vệ tối đa và phát triển toàn diện.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image7}
            title='Quy trình tiêm chủng tại VNVC'
            desc='Quy trình tiêm chủng tại VNVC khoa học, khép kín gồm 5 bước, giúp khách hàng tiêm chủng an toàn,
            thuận tiện, nhanh chóng, tiết kiệm thời gian, không lo chờ đợi.'
            link='/'/>
          </Grid>
          <Grid item xs={4}>
            <VaccinationCard
            avt={image8}
            title='Bảng giá vắc xin'
            desc='Cập nhật bảng giá vắc xin mới và đầy đủ nhất tại Hệ thống trung tâm tiêm chủng VNVC,
            giá vắc xin cạnh tranh, cam kết bình ổn giá ngay trong thời điểm khan hiếm.'
            link='/'/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}