import "./style.css";

const SuspenseFallback = () => {
  return (
    <div className="SuspenseFallbackContainer">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SuspenseFallback;
