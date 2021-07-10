import { Navbar, Socials } from "../components";

export default function Wrapper(props){
  const {children, showNavbar = true} = props;
  return <div className="px-10 py-6 sm:px-24 sm:py-10 font-mono bg-secondary-900 h-screen overflow-auto scrollbar scrollbar-thumb-green-500 scrollbar-track-gray-100 relative">
    {showNavbar && <Navbar />}
    <Socials />
    {children}
  </div>
}