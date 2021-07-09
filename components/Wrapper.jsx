import { Links, Navbar } from "../components";

export default function Wrapper(props){
  const {children, showNavbar = true} = props;
  return <div className="px-24 py-10 font-mono bg-secondary-900 h-screen overflow-auto scrollbar scrollbar-thumb-green-500 scrollbar-track-gray-100">
    {showNavbar && <Navbar />}
    <Links />
    {children}
  </div>
}