function ProgressBar(props) {
  return (
    <div className="myProgress">
      <div
        className="myBar"
        style={{ width: `${props.progress}%` }}
      >
        <span className="Progess">{props.progress}%</span>
      </div>
    </div>
  );
}
export default ProgressBar;