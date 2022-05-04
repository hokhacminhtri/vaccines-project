import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useRef, useState } from 'react';
import VaccineSelect from '../VaccineSelect';

export default function VaccineSelectGroup({ onChange }) {
  const [isPackage, setIsPackage] = useState(false);
  const vaccineId = useRef(null);
  const packageId = useRef(null);

  const onSelectChange = (_id) => {
    if (isPackage) {
      packageId.current = _id;
    } else {
      vaccineId.current = _id;
    }
    onChange(isPackage, _id);
  };

  return (
    <>
      <ButtonGroup disableElevation sx={{ marginBottom: '12px' }}>
        <Button
          variant={isPackage ? 'outlined' : 'contained'}
          onClick={() => {
            setIsPackage(false);
            onChange(false, vaccineId.current);
          }}>
          Vắc xin lẻ
        </Button>
        <Button
          variant={isPackage ? 'contained' : 'outlined'}
          onClick={() => {
            setIsPackage(true);
            onChange(true, packageId.current);
          }}>
          Vắc xin gói
        </Button>
      </ButtonGroup>

      <VaccineSelect isPackage={isPackage} onChange={onSelectChange} />
    </>
  );
}
