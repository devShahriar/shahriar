export default function Grid(props){
  const {children, fullWidth = false} = props; 
  return <div className={`grid sm:grid-cols-1 md:grid-cols-2 gap-2 ${fullWidth ? `lg:grid-cols-${children.length}` : 'lg:grid-cols-3'}`}>
    {children}
  </div>
}