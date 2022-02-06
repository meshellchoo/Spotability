import * as React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import {
  Link as ReactRouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';

type button_link_props = ButtonProps & RouterLinkProps;

export const ButtonLink: React.FC<button_link_props> = React.forwardRef(
  (props: button_link_props, ref: React.Ref<any>) => {
    return <Button ref={ref} as={ReactRouterLink} {...props} />;
  }
);