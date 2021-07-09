import Icon from "./Icon";

export default function Logos(props){
  const {items, direction = 'column', iconSize = 24} = props;
  return <div className={`flex flex-${direction === 'column' ? 'col' : 'row'}`}>
    {items.map(item=><Icon iconSize={iconSize} direction={direction} item={item} key={item.label ?? item}/>)}
  </div>
}