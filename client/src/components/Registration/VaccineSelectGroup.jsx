import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from 'react';
import VaccineSelect from '../VaccineSelect';

export default function VaccineSelectGroup({ onChange }) {
  const [isPackage, setIsPackage] = useState(false);

  return (
    <>
      <ButtonGroup disableElevation sx={{ marginBottom: '12px' }}>
        <Button
          variant={isPackage ? 'outlined' : 'contained'}
          onClick={() => setIsPackage(false)}>
          Vắc xin lẻ
        </Button>
        <Button
          variant={isPackage ? 'contained' : 'outlined'}
          onClick={() => setIsPackage(true)}>
          Vắc xin gói
        </Button>
      </ButtonGroup>

      <VaccineSelect isPackage={isPackage} onChange={onChange} />
    </>
  );
}
