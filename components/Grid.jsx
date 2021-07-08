export default function Grid(props){
  return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {props.children}
  </div>
}