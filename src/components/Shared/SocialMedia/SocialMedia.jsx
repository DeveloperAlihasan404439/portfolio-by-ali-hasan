import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./SocialMedia.css";
function SocialMedia() {
  return (
    <div className="wrapper">
      <div className="icon facebook">
        <div className="tooltip">Facebook</div>
        <Link href="https://www.facebook.com/alihasan404439">
          <FaFacebookF />
        </Link>
      </div>
      <div className="icon linkedin">
        <div className="tooltip">Linkedin</div>
        <Link href="https://www.linkedin.com/in/ali-hasan-409845256">
          <FaLinkedinIn />
        </Link>
      </div>
      <div className="icon github">
        <div className="tooltip">Github</div>
        <Link href="https://github.com/DeveloperAlihasan404439">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
