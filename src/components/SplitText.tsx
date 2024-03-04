import { BoxProps, Box } from "@chakra-ui/react";

interface SplitTextProps extends BoxProps {
  children: string;
}

export const SplitText = ({ children, ...props }: SplitTextProps) => (
  <>
    {children.split("").map((i, idx) =>
      i === " " ? (
        " "
      ) : (
        <Box key={idx} display="inline-block" {...props}>
          {i}
        </Box>
      ),
    )}
  </>
);
