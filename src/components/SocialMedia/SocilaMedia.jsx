import { Link } from "react-router-dom";
import "./SocialMedia.scss"


export function SocialMedia() {
  return (
    <div className="social-media-container">
      <div className="social-media-content">
        <div className="text">
          <h3 className="title">Pratite nas na:</h3>
        </div>

        <div className="icons">
        <Link
          to="https://www.facebook.com/HrvatskaGospodarskaKomora/?locale=hr_HR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-40p h-40p cursor-pointer"
            src="/assets/icons/social-icons/Facebook.svg"
            alt="facebook"
          />
        </Link>
        <Link to="https://x.com/hgk" target="_blank" rel="noopener noreferrer">
          <img
            className="w-40p h-40p cursor-pointer"
            src="/assets/icons/social-icons/X.svg"
            alt="twitter"
          />
        </Link>
        <Link to="" target="_blank" rel="noopener noreferrer">
          <img
            className="w-40p h-40p cursor-pointer"
            src="/assets/icons/social-icons/Instagram.svg"
            alt="instagram"
          />
        </Link>
        <Link
          to="https://www.linkedin.com/company/hrvatska-gospodarska-komora/?originalSubdomain=hr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-40p h-40p cursor-pointer"
            src="/assets/icons/social-icons/Linkedin.svg"
            alt="youtube"
          />
        </Link>
        <Link
          to="https://www.youtube.com/c/hrvatskagospodarskakomora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-40p h-40p cursor-pointer"
            src="/assets/icons/social-icons/Youtube.svg"
            alt="youtube"
          />
        </Link>
        </div>
        
      </div>
    </div>
  );
}
