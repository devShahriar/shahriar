import Icon from "./Icon";

export default function Logos(props){
  const {items, direction = 'column'} = props;
  return <div className={`flex flex-${direction === 'column' ? 'col' : 'row'}`}>
    {items.map(item=><Icon direction={direction} item={item} key={item.label ?? item}/>)}
  </div>
}