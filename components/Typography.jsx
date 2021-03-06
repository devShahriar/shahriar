const Typography = {
  H1(props){
    const {className = '', secondary=false, children, capitalizeHeader = false} = props;
    return <div className={`text-5xl ${capitalizeHeader ? 'uppercase' : ''} font-extrabold ${secondary ? 'text-secondary-100' : 'text-primary-500' } mb-5 ${className}`}>{children}</div>
  },
  H2(props){
    const {className = '', secondary=false, children, capitalizeHeader = false} = props;
    return <div className={`text-3xl ${capitalizeHeader ? 'uppercase' : ''} font-bold ${secondary ? 'text-secondary-100' : 'text-primary-500' } mb-3 ${className}`}>{children}</div>
  },
  H3(props){
    const {className = '', secondary=false, children, capitalizeHeader = false} = props;
    return <div className={`text-2xl ${capitalizeHeader ? 'uppercase' : ''} font-bold ${secondary ? 'text-secondary-100' : 'text-primary-500' } mb-2 ${className}`}>{children}</div>
  },
  Body1(props){
    const {className = '', bold=false, primary=false, children} = props;
    return <div className={`text-xl mb-2 ${bold ? 'font-bold' : 'font-medium'} ${!primary ? 'text-secondary-200' : 'text-primary-500' } ${className}`}>{children}</div>
  },
  Body2(props){
    const {className = '', bold=false, primary=false, children} = props;
    return <div className={`text-lg mb-1 ${bold ? 'font-bold' : ''} ${!primary ? 'text-secondary-300' : 'text-primary-500' } ${className}`}>{children}</div>
  },
  Subtitle1(props){
    const {className = '', bold=false, children} = props;
    return <div className={`text-secondary-400 text-base mb-1 ${bold ? 'font-bold' : ''} ${className}`}>{children}</div>
  },
  Link(props){
    const {className = '', children, link} = props;
    return <a href={link} target="_blank" rel="noreferrer" className={`text-primary-500 underline text-base mb-1 font-bold ${className}`}>{children}</a>
  },
  ListItem(props){
    const {className = '', bold=false, primary=false, children} = props;
    return <li className={`text-lg mb-1 ${bold ? 'font-bold' : ''} ${!primary ? 'text-secondary-200' : 'text-primary-500' } ${className}`}>{children}</li>
  },
  OrderedList(props){
    const {items, ...listItemProps} = props;
    return <ol className="list-inside list-decimal">{
      items.map(item=><Typography.ListItem key={item} {...listItemProps}>{item}</Typography.ListItem>)
    }</ol>
  }
}

export default Typography;