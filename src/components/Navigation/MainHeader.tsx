import MainNavigation from './MainNavigation';
import NavLogo from './NavLogo';

function MainHeader() {
  return (
    <header className="flex justify-center items-center gap-x-6 p-6 text-center font-bold text-xl border-b border-zinc-200">
        <NavLogo />
        <MainNavigation />
    </header>
  )
}

export default MainHeader