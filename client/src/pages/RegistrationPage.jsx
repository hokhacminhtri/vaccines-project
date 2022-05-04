import Container from '@mui/material/Container';
import React, { useState } from 'react';
import Toast from '../components/commons/Toast';
import Registration from '../components/Registration';
import { GENDER, RELATIONSHIP_OPTIONS } from '../constants';
import { MAX } from '../constants/validation';
import AddressContextProvider from '../contexts/addressContext';
import usePageTitle from '../hooks/usePageTitle';

function verifyOldMemberInfo(info) {
  const { memberCode } = info;
  if (!memberCode || memberCode.length > MAX.MEMBER_CODE) {
    return [false, 'Mã thành viên không hợp lệ'];
  }

  return [true, ''];
}

function verifyNewMemberInfo(info) {
  const {
    fullName,
    birthday,
    gender,
    phone,
    provinceId,
    districtId,
    wardId,
    addrDetail,
  } = info;
  if (!fullName || !fullName.trim() || fullName.length > MAX.CUSTOMER_NAME) {
    return [false, 'Họ tên không hợp lệ'];
  }

  if (!/^0[1-9]\d{8}$/.test(phone)) {
    return [false, 'Số điện thoại không hợp lệ'];
  }

  const bdTime = new Date(birthday).getTime();
  if (!birthday || isNaN(bdTime) || bdTime >= Date.now()) {
    return [false, 'Ngày sinh không hợp lệ'];
  }

  if (gender !== GENDER.FEMALE && gender !== GENDER.MALE) {
    return [false, 'Giới tính không hợp lệ'];
  }

  if (
    provinceId <= 0 ||
    districtId <= 0 ||
    wardId <= 0 ||
    !addrDetail ||
    !addrDetail.trim()
  ) {
    return [false, 'Địa chỉ không hợp lệ'];
  }

  return [true, ''];
}

function verifyContactInfo(info) {
  const { relName, relPhone, relRelationship } = info;
  if (!relName || !relName.trim() || relName.length > MAX.CUSTOMER_NAME) {
    return [false, 'Họ tên người liên hệ không hợp lệ'];
  }

  if (!/\d{10}/.test(relPhone)) {
    return [false, 'Số điện thoại người liên hệ không hợp lệ'];
  }

  if (
    !relRelationship ||
    relRelationship < 0 ||
    relRelationship >= RELATIONSHIP_OPTIONS.length
  ) {
    return [false, 'Mối quan hệ với người tiêm không hợp lệ'];
  }

  return [true, ''];
}

export default function RegistrationPage() {
  usePageTitle('Đăng ký tiêm chủng');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const verifyResult = (result) => {
    const [isValid, errorMsg] = result;
    if (!isValid) {
      setError(errorMsg);
      return false;
    }
    return true;
  };

  const verifyForm = (value) => {
    const { isRegistered, center, info, contactInfo, vaccine } = value;
    let isValid = true;

    // verify info
    if (isRegistered) {
      isValid = verifyResult(verifyOldMemberInfo(info));
      if (!isValid) return false;
    } else {
      isValid = verifyResult(verifyNewMemberInfo(info));
      if (!isValid) return false;
    }

    // verify center
    if (!center || center < 0) {
      setError('Vui lòng chọn trung tâm tiêm ngừa !');
      return false;
    }

    // verify contact info
    isValid = verifyResult(verifyContactInfo(contactInfo));
    if (!isValid) return false;

    // verify vaccine
    if (!vaccine || !vaccine._id || vaccine.isPackage === null) {
      setError('Vui lòng chọn vaccine muốn tiêm');
      return false;
    }

    return true;
  };

  const onSubmit = async (value) => {
    setIsSubmitting(true);
    const isValid = verifyForm(value);
    console.log(isValid);

    setIsSubmitting(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 2 }}
      className={isSubmitting ? 'disabled' : ''}>
      {/* Show Error */}
      <Toast message={error} onClose={() => setError(null)} />

      <AddressContextProvider>
        <Registration onSubmit={onSubmit} />
      </AddressContextProvider>
    </Container>
  );
}
