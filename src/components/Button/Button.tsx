import styled from '@emotion/styled';

interface Props {
  round?: boolean;
  children: React.ReactNode;
}

const Button = ({ round, children }: Props) => (
  <StyledButton round={round}>{children}</StyledButton>
);

const StyledButton = styled('button')<Pick<Props, 'round'>>(
  {
    paddin: 8,
    cursor: 'pointer',
  },
  ({ round }) => ({
    borderRadius: round ? 8 : 'none',
  })
);

export default Button;
