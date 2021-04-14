import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter }from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

export const Footer = () => {
    return (
        <div>
        <footer className="items-center">
          <p className="text-center text-darkGray text-xs py-2">Designed & Built by Swaraj Pawar</p>
          <div className="flex justify-center py-1">
          <div className="px-2 ">
            <Link href="https://www.linkedin.com/in/swaraj-pawar-95405a124" passHref={true}>
              <FontAwesomeIcon icon={faLinkedin} className="w-4 hover:text-primaryGray text-primaryGreen" />
            </Link> 
          </div>
          <div className="px-2"> 
            <Link href="https://github.com/swaraj27" passHref={true}>
              <FontAwesomeIcon icon={faGithub} className="w-4 hover:text-primaryGray text-primaryGreen" />
            </Link>
          </div>
          <div className="px-2">
              <Link href="https://twitter.com/SwarajP63917110?s=08" passHref={true}>
                <FontAwesomeIcon icon={faTwitter} className="w-4 hover:text-primaryGray text-primaryGreen" />
              </Link>
          </div>
          </div>
        </footer>
      </div>
    )
}
export default Footer