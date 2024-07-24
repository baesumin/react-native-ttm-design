import { Text as NativeText } from 'react-native';
import type { TextProps } from 'react-native';

type VariantProps = {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: 'bold' | 'regular';
};
type VariantType = {
  SH: VariantProps;
  H1: VariantProps;
  H2: VariantProps;
  H3: VariantProps;
  H4: VariantProps;
  H5: VariantProps;
  H6: VariantProps;
  H7: VariantProps;
  H8: VariantProps;
  Body1: VariantProps;
  Body2: VariantProps;
  Body3: VariantProps;
  Body4: VariantProps;
  Body5: VariantProps;
  Body6: VariantProps;
};

const Variant: VariantType = {
  SH: {
    fontSize: 44,
    lineHeight: 55,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H1: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H2: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H3: {
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H4: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H5: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H6: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H7: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  H8: {
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.3,
    fontWeight: 'bold',
  },
  Body1: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontWeight: 'regular',
  },
  Body2: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.3,
    fontWeight: 'regular',
  },
  Body3: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: -0.3,
    fontWeight: 'regular',
  },
  Body4: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontWeight: 'regular',
  },
  Body5: {
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.3,
    fontWeight: 'regular',
  },
  Body6: {
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.3,
    fontWeight: 'regular',
  },
} as const;
type VariantValue = keyof typeof Variant;

interface BaseProps {
  text: string;
  variant: VariantValue;
}

type TypographyProps = BaseProps & TextProps;

const Typography = (props: TypographyProps) => {
  const { text, variant, ...rest } = props as TypographyProps;
  return (
    <NativeText style={[Variant[variant], rest.style]} {...rest}>
      {text}
    </NativeText>
  );
};

export default Typography;
