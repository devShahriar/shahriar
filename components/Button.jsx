export default function Button(props){
  const { children, className= '' ,size = 'large', scaleOnHover = false } = props;
  let sizeClasses = '';
  if(size === 'large'){
    sizeClasses = 'px-8 py-3 text-lg font-extrabold my-5 mx-5'
  } else if(size === 'medium'){
    sizeClasses = 'px-6 py-2 text-base font-bold my-3 mx-3'
  } else if(size === 'small'){
    sizeClasses = 'px-4 py-2 text-sm font-medium my-2 mx-2'
  }

  let scaleClasses = '';

  if(scaleOnHover){
    scaleClasses = 'hover:scale-105 transition duration-200 transform'
  }

  return <button type="button" className={`bg-primary-500 text-lg rounded flex items-center ${scaleClasses} ${sizeClasses} ${className}`}>
    {children}
  </button>
}