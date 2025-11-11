import video from "../assets/contact.mp4";
import { AtSignIcon } from "~/assets/mail";
import { LinkedinIcon } from "~/assets/linkdin";
import { GithubIcon } from "~/assets/github";
import {Link} from "react-router";

export default function Contact() {
  return (
    <>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen top-0 object-cover fixed z-0"
      ></video>
      <div className="font-cedarville relative z-10 text-7xl flex flex-col items-center justify-center text-center mt-50 text-white">
        <h2>want to say something to me </h2>
        <h2> reach out at </h2>
        
        <div className="flex flex-row gap-12 mt-20 items-center justify-center">
          <div className="flex flex-col items-center gap-4">
           <Link to="https://www.linkedin.com/in/swarnim-arya/"> <LinkedinIcon className="w-28 h-28" /></Link> 
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link to="https://github.com/swarnim3103"><GithubIcon className="w-28 h-28" /></Link>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link to="swarnim3103@gmail.com"><AtSignIcon className="w-28 h-28" /></Link>
          </div>
        </div>
      </div>
    </>
  );
}
