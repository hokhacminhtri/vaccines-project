import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import CenterAddressSelect from '../CenterAddressSelect';
import PageHeading from '../commons/PageHeading';
import NewMemberForm from './NewMemberForm';
import OldMemberForm from './OldMemberForm';
import RegisteredRadio from './RegisteredRadio';
import VaccineSelectGroup from './VaccineSelectGroup';

const REGISTERED_DEFAULT = 0;

function TitleTypography({ children }) {
  return (
    <Typography
      variant="h6"
      component="h3"
      color="primary.dark"
      mb={1}
      textTransform="uppercase"
      fontWeight="medium">
      {children}
    </Typography>
  );
}

export default function Registration() {
  const [isRegistered, setIsRegistered] = useState(REGISTERED_DEFAULT);

  const onRadioChange = (registered = 0) => {
    setIsRegistered(registered);
  };

  const onVaccineSelectChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <PageHeading title="Đăng ký tiêm chủng" />

      <Box mt={2}>
        <RegisteredRadio
          onChange={onRadioChange}
          defaultValue={REGISTERED_DEFAULT}
        />
      </Box>

      {/* register form */}
      <Box mt={3}>
        {isRegistered ? (
          <>
            <TitleTypography>
              đăng ký với thành viên khách hàng thân thiết
            </TitleTypography>
            <OldMemberForm />
          </>
        ) : (
          <>
            <TitleTypography>đăng ký cho khách hàng mới</TitleTypography>
            <NewMemberForm />
          </>
        )}
      </Box>

      {/* choose center */}
      <Box mt={3}>
        <TitleTypography>chọn địa điểm mong muốn tiêm</TitleTypography>
        <CenterAddressSelect />
      </Box>

      {/* choose vaccine or package */}
      <Box mt={3}>
        <TitleTypography>chọn vắc xin cho người tiêm</TitleTypography>
        <VaccineSelectGroup onChange={onVaccineSelectChange} />
      </Box>

      {/* Submit button */}
      <Box mt={3} textAlign="right">
        <Button variant="contained" size="large">
          Tiến hành đăng ký
        </Button>
      </Box>
    </>
  );
}
