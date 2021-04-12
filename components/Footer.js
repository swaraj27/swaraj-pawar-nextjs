import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter }from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div>
        <footer className="items-center">
          <p className="text-center text-darkGray text-xs py-2">Designed & Built by Swaraj Pawar</p>
          <div className="flex justify-center py-1">
          <div className="px-2 "><button><FontAwesomeIcon icon={faLinkedin} className="w-4 text-primaryGreen" /></button> </div>
          <div className="px-2"><button><FontAwesomeIcon icon={faGithub} className="w-4 text-primaryGreen" /></button></div>
          <div className="px-2"> <button><FontAwesomeIcon icon={faTwitter} className="w-4 text-primaryGreen" /></button></div>
          </div>
        </footer>
      </div>
    )
}
export default Footer