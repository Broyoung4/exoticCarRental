import './download.css';
import Img1 from "../../assets/appstore.svg";
import Img2 from "../../assets/googleapp.svg";

function Download() {
  return (
   
      <div className="cr__download section__padding">
        <div className="cr__container">
          <div className="cr__download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="cr__download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Download;
