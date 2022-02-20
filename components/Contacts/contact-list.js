import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

const style = 'mr-3 md:mr-5 h-8 w-8 md:h-14 md:w-14';

const contactList = [
  {
    title: 'email',
    icon: <AiFillGithub className={style} />,
    link: 'https://github.com/adif-git',
    alias: 'adif-git',
  },
  {
    title: 'email',
    icon: <AiOutlineMail className={style} />,
    link: 'mailto:adif.ladiva@gmail.com',
    alias: 'adif.ladiva@gmail.com',
  },
  {
    title: 'linkedin',
    icon: <AiFillLinkedin className={style} />,
    link: 'https://linkedin.com/in/ladivab',
    alias: 'ladivab',
  },
];

export default contactList;
