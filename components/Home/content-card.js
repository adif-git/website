import { FiCode, FiMail, FiUser } from 'react-icons/fi';

const styles = 'h-10 w-10 md:h-36 md:w-36';

const content = {
  profile: {
    image: <FiUser className={styles} />,
    title: 'Profile',
  },
  projects: {
    image: <FiCode className={styles} />,
    title: 'Projects',
  },
  contacts: {
    image: <FiMail className={styles} />,
    title: 'Contacts',
  },
};

export default content;
