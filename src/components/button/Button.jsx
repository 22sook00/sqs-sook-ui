import * as SC from '../../styles/components/button/Button.styles';

const Button = ({
  role = 'primary',
  size = 'lg',
  children,
  active,
  ...props
}) => {
  return (
    <>
      {role === 'primary' && (
        <SC.Primary size={size} {...props}>
          {children}
        </SC.Primary>
      )}
      {role === 'text' && (
        <SC.TextButton size={size} active={active} {...props}>
          {children}
        </SC.TextButton>
      )}
    </>
  );
};

export default Button;
