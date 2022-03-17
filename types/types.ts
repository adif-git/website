import { IconType } from 'react-icons/lib';

export interface LayoutProps {
  title: string;
  keywords?: string;
  description?: string;
  bgColor?: string;
  children: React.ReactNode;
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
      slug: string;
    };
  };
}
export interface ProjectProps {
  id?: number;
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

export interface ProjectsProps extends Array<ProjectProps> {}

export interface ProjectLinkProps extends ProjectProps {
  size?: number;
}

export interface SkillProps {
  attributes: {
    name: string;
    list: {
      src: string;
      name: string;
    }[];
  };
}

export interface SkillsProps {
  skills: SkillProps[];
}
export interface SkillsListProps extends SkillProps {
  Icon: IconType;
}

export interface CategoryProps {
  attributes: {
    name: string;
    slug: string;
  };
}

export interface CategoriesProps extends Array<CategoryProps> {}
