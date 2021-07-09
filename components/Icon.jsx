import { getIcon } from "../utils";

export default function Icon(props){
  const {item, direction='column'} = props;
  let icon = '',label = '';
  if(typeof item === "string"){
    icon = getIcon(item)
    label = item
  } else {
    icon = getIcon(item.icon ?? item.label)
    label = item.label;
  }
  return <div className={`text-primary-500 ${direction === 'column' ? 'mb-4' : 'mr-4'}`} key={label}>
    <div className="flex items-center">
      <span className="mr-2 hover:scale-125 transform transition">{icon}</span>
      <span className="flex-grow text-lg font-medium">{label}</span>
    </div>
  </div>
}