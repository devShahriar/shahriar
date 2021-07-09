import Typography from "./Typography";

export default function Card(props){
  const {header, content, headerElement = 'H3', scaleOnHover = true, classNames={}} = props;
  return <div className={`m-2 bg-gradient-to-r ${scaleOnHover ? 'hover:scale-105 transition duration-200 transform' : ''} cursor-pointer from-secondary-800 via-secondary-800 to-secondary-900 bg-secondary-800 p-5 rounded ${classNames.container}`}>
    {headerElement === 'H3' ? <Typography.H3 className={classNames.header}>{header}</Typography.H3> : <Typography.H2 className={classNames.header}>{header}</Typography.H2>}
    {content}
  </div>
}