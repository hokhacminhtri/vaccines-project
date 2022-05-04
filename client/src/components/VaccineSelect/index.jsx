import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';
import vaccineApi from '../../apis/vaccineApi';
import vaccinePackageApi from '../../apis/vaccinePackageApi';

export default function VaccineSelect({ isPackage = false, onChange }) {
  const [options, setOptions] = useState([]);
  const vaccines = useRef(null);
  const vaccinePackages = useRef(null);

  // Get vaccines or vaccine packages
  useEffect(() => {
    if (isPackage) {
      if (vaccinePackages.current) {
        setOptions(vaccinePackages.current);
      } else {
        (async function () {
          const apiRes = await vaccinePackageApi.getAllPackages({
            select: 'name',
          });
          if (apiRes.status === 200) {
            const packageOptions = apiRes.data.map((v) => ({
              ...v,
              label: v.name,
            }));
            vaccinePackages.current = packageOptions;
            setOptions(packageOptions);
          }
        })();
      }
    } else {
      if (vaccines.current) {
        setOptions(vaccines.current);
      } else {
        (async function () {
          const apiRes = await vaccineApi.getAllVaccines({ select: 'name' });
          if (apiRes.status === 200) {
            const vaccineOptions = apiRes.data.map((v) => ({
              ...v,
              label: v.name,
            }));
            vaccines.current = vaccineOptions;
            setOptions(vaccineOptions);
          }
        })();
      }
    }
    return () => {};
  }, [isPackage]);

  return (
    <Autocomplete
      disablePortal
      disableClearable
      options={options}
      size="small"
      fullWidth
      onChange={(e, value) => onChange(value._id)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={isPackage ? 'Chọn gói vaccine' : 'Chọn vaccine'}
        />
      )}
    />
  );
}
