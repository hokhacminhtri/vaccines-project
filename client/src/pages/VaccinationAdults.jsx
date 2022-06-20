import { Container, Grid } from '@mui/material';
import image1 from '../assets/images/vc-adults01.jpg';
import image2 from '../assets/images/vc-adults02.jpg';
import image3 from '../assets/images/vc-adults03.jpg';
import image4 from '../assets/images/vc-adults04.jpg';
import image5 from '../assets/images/vc-adults05.jpg';
import image6 from '../assets/images/vc-adults06.jpg';
import image7 from '../assets/images/vc-adults07.jpg';
import image8 from '../assets/images/vc-adults08.jpg';
import image9 from '../assets/images/vc-children07.jpg';
import VaccinationCard from '../components/VaccinationCard';
import usePageTitle from '../hooks/usePageTitle';

export default function VaccinationChildren() {
  usePageTitle('Tiêm chủng cho người lớn');
  return (
    <Container sx={{ paddingBottom: 5 }}>
      <h3 className="content-title" style={{ marginTop: '24px' }}>
        <span className="text-blue">TIÊM CHỦNG CHO NGƯỜI LỚN</span>
      </h3>
      <p>
        Theo thống kê của Tổ chức Y tế Thế giới WHO, mỗi năm có đến 600.000
        người lớn tử vong vì những căn bệnh truyền nhiễm nguy hiểm có thể phòng
        ngừa bằng vắc xin. Trong khi đó, người lớn lại là nhóm có tỷ lệ tiêm
        chủng thấp vì chưa quan tâm hoặc thiếu thông tin về việc tiêm chủng vắc
        xin cho người lớn. Điều này không chỉ ảnh hưởng đến sức khoẻ của chính
        họ và đặc biệt là nguy cơ lây lan bệnh dịch sang cho trẻ em. Người lớn
        hãy chủ động tiêm phòng để bản thân phòng tránh các căn bệnh nguy hiểm,
        đồng thời bảo vệ sức khỏe của gia đình và cộng đồng.
      </p>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image1}
            title="Vì sao người lớn cần tiêm vắc xin"
            desc="VÌ SAO NGƯỜI LỚN CẦN TIÊM VẮC XIN?
            Vắc xin không chỉ cần thiết cho trẻ em mà còn rất quan trọng với người lớn.
            Vì sao người lớn cần tiêm vắc xin? Những loại vắc xin nào dành cho người lớn?"
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image2}
            title="Lịch tiêm chủng cho tuổi vị thành niên và người lớn"
            desc="Dựa trên thực tiễn dịch tễ và đặc điểm sức khỏe người trưởng thành tại Việt Nam,
            các chuyên gia khuyến cáo lịch tiêm chủng cho tuổi vị thành niên và người lớn như sau."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image3}
            title="Những điều cần biết trước khi tiêm"
            desc="Những điều cần biết trước khi tiêm chủng giúp phát hiện bất thường,
            tạm hoãn tiêm hoặc không tiêm một loại vắc xin nào đó, đảm bảo an toàn cho người được tiêm chủng."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image4}
            title="Những điều cần biết sau khi tiêm"
            desc="Hướng dẫn chi tiết những điều cần biết sau khi tiêm chủng,
            cách chăm sóc khoa học và phương pháp theo dõi sau tiêm giúp đảm bảo an toàn tiêm chủng cho người được tiêm."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image5}
            title="Các loại vắc xin cho người lớn"
            desc="Theo tình hình dịch tễ và đặc điểm sức khỏe người trưởng thành,
            các chuyên gia đưa ra khuyến cáo các loại vắc xin cho người lớn, trong đó có 6 loại đặc biệt ưu tiên."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image6}
            title="Gói vắc xin cho trẻ vị thành niên và thanh niên"
            desc="Chuyên gia khuyến cáo, việc tiêm chủng cũng như tiêm nhắc các vắc xin cho tuổi vị thành niên và thanh niên vô cùng quan trọng để phòng ngừa dịch bệnh nguy hiểm."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image7}
            title="Gói vắc xin cho người trưởng thành"
            desc="Gói vắc xin cho người trưởng thành gồm nhiều loại vắc xin quan trọng được các chuyên gia khuyến cáo nên tiêm càng sớm càng tốt để phòng các bệnh truyền nhiễm nguy hiểm."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image8}
            title="Gói vắc xin cho phụ nữ chuẩn bị mang thai và mang thai"
            desc="Gói vắc xin cho phụ nữ chuẩn bị mang thai và mang thai gồm những vắc xin cần thiết giúp bảo vệ mẹ và bé phòng ngừa các bệnh truyền nhiễm nguy hiểm trước, trong thai kỳ."
            link="/"
          />
        </Grid>
        <Grid item xs={4}>
          <VaccinationCard
            avt={image9}
            title="Quy trình tiêm chủng"
            desc="Quy trình tiêm chủng khoa học, khép kín gồm 5 bước, giúp khách hàng tiêm chủng an toàn, thuận tiện, nhanh chóng, tiết kiệm thời gian, không lo chờ đợi."
            link="/"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
