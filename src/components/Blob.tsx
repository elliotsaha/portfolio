import { Box, BoxProps } from "@chakra-ui/react";

interface BlobProps extends BoxProps {
  bg: string;
  size: string;
  blur: string;
}

export const Blob = ({ bg, size, blur, ...props }: BlobProps) => {
  return (
    <Box
      bg={bg}
      w={size}
      h={size}
      filter={`blur(${blur})`}
      willChange="transform"
      transform="translate3d(0, 0, 0)"
      borderRadius="full"
      zIndex="-1"
      {...props}
    />
  );
};
