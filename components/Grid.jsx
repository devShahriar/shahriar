export default function Grid(props){
  const {children, className=''} = props; 
  return <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-1 md:gap-2 lg:gap-3 ${className}`}>
    {children}
  </div>
}