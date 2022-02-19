import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

const size = 40;
const style = 'mr-5';

const contactList = [
  {
    title: 'email',
    icon: <AiFillGithub size={size} className={style} />,
    link: 'https://github.com/adif-git',
    alias: 'adif-git',
  },
  {
    title: 'email',
    icon: <AiOutlineMail size={size} className={style} />,
    link: 'mailto:adif.ladiva@gmail.com',
    alias: 'adif.ladiva@gmail.com',
  },
  {
    title: 'linkedin',
    icon: <AiFillLinkedin size={size} className={style} />,
    link: 'https://linkedin.com/in/ladivab',
    alias: 'ladivab',
  },
];

export default contactList;
