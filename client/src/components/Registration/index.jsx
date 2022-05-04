import { Box, Button, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { GENDER } from '../../constants';
import CenterAddressSelect from '../CenterAddressSelect';
import PageHeading from '../commons/PageHeading';
import ContactInfoForm from './ContactInfoForm';
import NewMemberForm from './NewMemberForm';
import OldMemberForm from './OldMemberForm';
import RegisteredRadio from './RegisteredRadio';
import VaccineSelectGroup from './VaccineSelectGroup';

const REGISTERED_DEFAULT = 0;
const oldMemFormDefault = { memberCode: null };
const newMemFormDefault = {
  fullName: null,
  birthday: null,
  gender: GENDER.MALE,
  phone: null,
  provinceId: null,
  districtId: null,
  wardId: null,
  addrDetail: null,
};
const contactInfoDefault = {
  relName: null,
  relPhone: null,
  relRelationship: null,
};

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

export default function Registration({ onSubmit }) {
  const [isRegistered, setIsRegistered] = useState(REGISTERED_DEFAULT);

  const oldMemForm = useRef(oldMemFormDefault);
  const newMemForm = useRef(newMemFormDefault);
  const contactInfo = useRef(contactInfoDefault);
  const center = useRef(null);
  const vaccine = useRef(null);

  const onRadioChange = (registered = 0) => {
    setIsRegistered(registered);
  };
  const onVaccineSelectChange = (isPackage, _id) => {
    vaccine.current = { isPackage, _id };
  };
  const onCenterChange = (centerId) => {
    center.current = centerId;
  };
  const onAddressChange = (value) => {
    newMemForm.current.addrDetail = value.trim();
  };
  const onAddressSelect = (value) => {
    newMemForm.current.provinceId = value.provinceId;
    newMemForm.current.districtId = value.districtId;
    newMemForm.current.wardId = value.wardId;
  };
  const onContactInfoChange = (key, value) => {
    contactInfo.current[key] = value;
  };
  const onInfoChange = (key, value) => {
    newMemForm.current[key] = value;
  };

  const onSubmitForm = () => {
    const value = {
      isRegistered,
      contactInfo: contactInfo.current,
      vaccine: vaccine.current,
      center: center.current,
      info: isRegistered ? oldMemForm.current : newMemForm.current,
    };
    onSubmit(value);
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
            <OldMemberForm
              onSaveCode={(code) => (oldMemForm.current.memberCode = code)}
            />
          </>
        ) : (
          <>
            <TitleTypography>đăng ký cho khách hàng mới</TitleTypography>
            <NewMemberForm
              onAddressChange={onAddressChange}
              onAddressSelect={onAddressSelect}
              onInfoChange={onInfoChange}
            />
          </>
        )}
      </Box>

      {/* contact form */}
      <Box mt={3}>
        <ContactInfoForm onChange={onContactInfoChange} />
      </Box>

      {/* choose center */}
      <Box mt={3}>
        <TitleTypography>chọn địa điểm mong muốn tiêm</TitleTypography>
        <CenterAddressSelect onSelect={onCenterChange} />
      </Box>

      {/* choose vaccine or package */}
      <Box mt={3}>
        <TitleTypography>chọn vắc xin cho người tiêm</TitleTypography>
        <VaccineSelectGroup onChange={onVaccineSelectChange} />
      </Box>

      {/* Submit button */}
      <Box mt={3} textAlign="right">
        <Button variant="contained" size="large" onClick={onSubmitForm}>
          Tiến hành đăng ký
        </Button>
      </Box>
    </>
  );
}
