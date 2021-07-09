import Typography from "./Typography";

export default function Card(props){
  const {items} = props;
  return <div className="m-2 bg-gradient-to-r hover:scale-105 transition duration-200 cursor-pointer transform from-secondary-800 via-secondary-800 to-secondary-900 bg-secondary-800 p-5 rounded">
    {items.map(([header, content])=><>
      <Typography.H3>{header}</Typography.H3>
      {content}
    </>)}
</div>
}