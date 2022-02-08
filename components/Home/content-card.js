import { UserIcon, CodeIcon, ChatIcon } from '@heroicons/react/outline';

const styles = 'h-10 w-10 md:h-40 md:w-40';

const content = {
  profile: {
    image: <UserIcon className={styles} />,
    title: 'Profile',
  },
  projects: {
    image: <CodeIcon className={styles} />,
    title: 'Projects',
  },
  contact: {
    image: <ChatIcon className={styles} />,
    title: 'Contact',
  },
};

export default content;
