import StyledHeader from '../styles/StyledHeader';
import { HeaderProps } from '../types';
import MoonImg from '/images/icon-moon.svg';
import SunImg from '/images/icon-sun.svg';



function Header({ mode, setMode }: HeaderProps) {
  const changeTheme = () => {
    setMode(!mode);
  };

  return (
    <StyledHeader>
      <h1>TODO</h1>
      <img onClick={changeTheme} src={mode ? SunImg : MoonImg} alt="mode icon" />
    </StyledHeader>
  );
}

export default Header;