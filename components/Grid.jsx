export default function Grid(props){
  const {children, className=''} = props; 
  return <div className={`grid sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 ${className}`}>
    {children}
  </div>
}