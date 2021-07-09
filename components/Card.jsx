import Typography from "./Typography";

export default function Card(props){
  const {header, content, scaleOnHover = true} = props;
  return <div className={`m-2 bg-gradient-to-r ${scaleOnHover ? 'hover:scale-105 transition duration-200 transform' : ''} cursor-pointer from-secondary-800 via-secondary-800 to-secondary-900 bg-secondary-800 p-5 rounded`}>
    <Typography.H3>{header}</Typography.H3>
    {content}
  </div>
}