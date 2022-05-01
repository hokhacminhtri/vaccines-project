import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';

// Dummy data
const dummyVaccines = [
  {
    label: 'VẮC XIN PHÒNG VIÊM GAN A - AVAXIM 80U',
    id: 1,
  },
];
const dummyVaccinePackages = [
  {
    label:
      'GÓI VẮC XIN CHO PHỤ NỮ CHUẨN BỊ TRƯỚC MANG THAI (BOOSTRIX+VGB) GÓI 3',
    id: 1,
  },
];

export default function VaccineSelect({ isPackage = false, onChange }) {
  const [options, setOptions] = useState([]);
  const vaccines = useRef(null);
  const vaccinePackages = useRef(null);

  // Get vaccines or vaccine packages
  useEffect(() => {
    if (isPackage) {
      if (vaccinePackages.current) {
        return setOptions(vaccinePackages.current);
      }

      setOptions(dummyVaccinePackages);
    } else {
      if (vaccines.current) {
        return setOptions(vaccines.current);
      }
      setOptions(dummyVaccines);
    }
    return () => {};
  }, [isPackage]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      size="small"
      fullWidth
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={isPackage ? 'Chọn gói vaccine' : 'Chọn vaccine'}
        />
      )}
    />
  );
}
