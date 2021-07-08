export default function Button(props){
  const { children, className= '' } = props;
  return <button type="button" className={`bg-primary-500 px-8 py-3 text-lg rounded font-extrabold my-5 flex items-center ${className}`}>
    {children}
  </button>
}