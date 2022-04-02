import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function customNavigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const onMenuClick = (index) => {
  switch (index) {
    case 0:
    default:
      customNavigate('Words');
      break;

    case 1:
      customNavigate('Wallet');
      break;

    case 2:
      customNavigate('AddWords');
      break;

    case 3:
      customNavigate('Quiz');
      break;

    case 4:
      customNavigate('Settings');
      break;
  }
};
