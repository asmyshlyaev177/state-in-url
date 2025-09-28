'use client'

import React from 'react';
import { useTestState } from './useTestState';
import { Input } from 'shared/components/Input';
import { Field } from 'shared/components/Field';

export function UseStateComp({ showCheckbox = true }: { showCheckbox?: boolean}) {
  const { urlState, setUrl } = useTestState();

  const onChangeVal = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setUrl({ value: +ev.target.value })
  }, [setUrl])

  const onChangeShow = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setUrl({ showForm: ev.target.checked })
  }, [setUrl])


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: "12px"}}>
      <Field id="valueInput" text="value">
        <Input id='valueInput' name="valueInput" value={urlState.value} onChange={onChangeVal} type="number" data-testid="valueInput" />
      </Field>

      {showCheckbox && <Field id="showForm" text="show form">
        <Input
          id="showForm"
          name="showForm"
          type="checkbox"
          checked={urlState.showForm}
          onChange={onChangeShow}
          style={{ width: '20px', height: '20px'}}
          data-testid="showForm"
        />
      </Field>}
    </div>
  )
}
