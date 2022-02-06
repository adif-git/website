import { UserIcon, ChipIcon, ChatIcon } from '@heroicons/react/outline';
const content = {
  profile: {
    image: <UserIcon className="h-48 w-48" />,
    title: 'Profile',
  },
  projects: {
    image: <ChipIcon className="h-48 w-48" />,
    title: 'Projects',
  },
  contact: {
    image: <ChatIcon className="h-48 w-48" />,
    title: 'Contact',
  },
};

export default content;
