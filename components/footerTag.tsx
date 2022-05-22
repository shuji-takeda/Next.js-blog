import React from 'react';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function FooterTag() {
  return (
    <footer className=" bg-gray-900 w-screen flex flex-col bottom-0">
      <div>
        <p className="m-3 text-white">Webエンジニアの何か色々なお話...</p>
        <div className="flex flex-col mb-5">
          <ul className="mx-auto">
            <li className="mb-3">
              <a href="./profile" className="text-white">
                <SupervisorAccountIcon color="primary" />
                <span className="ml-2">MyProfile</span>
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/eofdXus6LwuHe6RXA"
                className="text-white mt-3"
              >
                <ContactsIcon color="primary" />
                <span className="ml-2">Contact Me</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="copyright" className=" text-center my-3">
        <p className="text-white">©takeshu All right reserved.</p>
      </div>
    </footer>
  );
}
