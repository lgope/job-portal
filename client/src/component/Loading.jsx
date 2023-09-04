import loadingImage from "../assets/images/loading.webp";

const Loading = () => (
  <div className="text-center loading-status">
    <img
      src={loadingImage}
      className="rounded loading-img"
      alt="loadingImage"
    />
  </div>
);

export default Loading;
