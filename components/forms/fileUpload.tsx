import React, { Dispatch, PropsWithChildren, SetStateAction, useRef } from "react";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

interface FileUploadProps {
  setFile: Dispatch<SetStateAction<File>>;
  accept: string;
}

const VisuallyHiddenInput = styled('input')({
  display: 'none',
});

const FileUpload: React.FC<FileUploadProps & PropsWithChildren> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <Box onClick={() => ref.current?.click()}>
      <VisuallyHiddenInput
        type="file"
        accept={accept}
        ref={ref}
        onChange={handleChange}
      />
      <Button>
        {children}
      </Button>
    </Box>
  );
};

export default FileUpload;