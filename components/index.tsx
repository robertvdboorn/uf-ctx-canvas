import { ComponentInstance } from '@uniformdev/canvas';
import { ComponentProps, DefaultNotImplementedComponent } from '@uniformdev/canvas-react';
import { ComponentType } from 'react';

import Footer from './Footer';
import { Hero } from './Hero';
import Navbar from './Navbar';
import Page from './Page';
import { RegisterForm } from './RegisterForm';
import { Talk } from './Talk';
import TalkList from './TalkList';
import { WhyAttend } from './WhyAttend';

const mappings: ComponentMapping = {
  hero: Hero,
  talklist: TalkList,
  talk: Talk,
  whyattend: WhyAttend,
  registrationForm: RegisterForm,
  header: Navbar,
  footer: Footer,
  page: Page,
};

type ComponentMapping = Record<string, ComponentType<any>>;

export function resolveRenderer(component: ComponentInstance): ComponentType<ComponentProps<any>> | null {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}
export default mappings;
