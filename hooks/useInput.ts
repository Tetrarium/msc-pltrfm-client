import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return { value, onChange, clear };
};

export type UseInputType = ReturnType<typeof useInput>;
