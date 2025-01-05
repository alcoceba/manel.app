import {
  DailyDevIcon,
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from './Icons';

export const Icons = {
  DailyDev: DailyDevIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  StackOverflow: StackOverflowIcon,
};

export type IconKeys = keyof typeof Icons;
