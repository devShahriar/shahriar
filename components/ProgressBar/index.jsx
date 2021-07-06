export default function ProgressBar(props){
  const {progress} = props;
  const width = 100;
  const progressInWidth = progress/100 * width
  return <div className="ProgressBar flex items-center" style={{width}}>
    <div className="mr-5 flex">
      <div className="bg-primary-500 rounded-l" style={{ height: 15, width: progressInWidth}}></div>
      <div className="bg-secondary-900 rounded-r" style={{ height: 15, width: width - progressInWidth}}></div>
    </div>
    <div className="font-bold">{progress}%</div>
  </div>
}