const Typography = {
  H1(props){
    const {className = '', secondary=false, children} = props;
    return <div className={`text-5xl font-extrabold ${secondary ? 'text-secondary-100' : 'text-primary-500' } mb-5 ${className}`}>{children}</div>
  },
  H2(props){
    const {className = '', secondary=false, children} = props;
    return <div className={`text-3xl font-bold ${secondary ? 'text-secondary-100' : 'text-primary-500' } mb-5 ${className}`}>{children}</div>
  },
  H3(props){
    const {className = '', secondary=false, children} = props;
    return <div className={`text-2xl font-bold ${secondary ? 'text-secondary-100' : 'text-primary-500' } mb-3 ${className}`}>{children}</div>
  },
  Body1(props){
    const {className = '', bold=false, primary=false, children} = props;
    return <div className={`text-xl ${bold ? 'font-bold' : ''} ${!primary ? 'text-secondary-200' : 'text-primary-500' } ${className}`}>{children}</div>
  }
}

export default Typography;