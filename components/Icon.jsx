import { getIcon } from "../utils";

export default function Icon(props){
  const {item} = props;
  let icon = '',label = '';
  if(typeof item === "string"){
    icon = getIcon(item)
    label = item
  } else {
    icon = getIcon(item.icon ?? item.label)
    label = item.label;
  }
  return <div className="text-primary-500 my-3" key={label}>
    <div className="flex items-center">
      <span className="mr-5 hover:scale-125 transform transition">{icon}</span>
      <span className="flex-grow text-lg font-bold">{label}</span>
    </div>
  </div>
}