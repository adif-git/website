import { IconType } from 'react-icons/lib';

export interface LayoutProps {
  title: string;
  keywords?: string;
  description?: string;
  bgColor?: string;
  children: React.ReactNode;
}

export interface SkillProps {
  name: string;
  list: Array<{ src: string; name: string }>;
  Icon: IconType;
}

export interface HomeCardProps {
  title: string;
  Icon: IconType;
}

export interface DropdownProps {
  route: string;
}

export interface ProjectImageProps {
  data: Array<{
    attributes: {
      formats: {
        small: {
          url: string;
        };
      };
    };
  }>;
}

export interface ProjectCategoryProps {
  data: {
    attributes: {
      name: string;
    };
  };
}
export interface ProjectProps {
  attributes: {
    title: string;
    description: string;
    updatedAt: string;
    slug: string;
    article?: string;
    link_project?: string;
    link_github?: string;
    vid?: {
      data: { attributes: { url: string } }[];
    };
    img: ProjectImageProps;
    category: ProjectCategoryProps;
  };
}

export interface ProjectLinkProps extends ProjectProps {
  size?: number;
}

export interface ProjectPageProps {
  projects: ProjectProps;
}
