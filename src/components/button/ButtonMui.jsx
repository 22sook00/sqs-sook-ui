import * as SC from '../../styles/components/button/ButtonMui.styles';

const ButtonMui = ({
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

export default ButtonMui;
