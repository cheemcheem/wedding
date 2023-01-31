import { UserGroupSolidIcon, UserSolidIcon } from '@salt-ds/icons';
import { StudentHallProps } from '@wedding/components';

export const halls: StudentHallProps[] = [
  {
    email: 'agnes.blackadder@st-andrews.ac.uk',
    name: 'Agnes Blackadder Hall',
    type: 'B&B ensuite double beds',
    prices: [
      {
        discountPercent: 10,
        icon: [UserSolidIcon],
        price: 65,
        title: 'Single Occupancy',
      },
      {
        discountPercent: 10,
        icon: [UserGroupSolidIcon],
        price: 85,
        title: 'Double Occupancy',
      },
      {
        icon: [UserGroupSolidIcon, UserGroupSolidIcon],
        price: 120,
        title: 'Twin (family) room',
      },
    ],
    telephone: '01334467000',
    website: 'https://ace.st-andrews.ac.uk/accommodation/agnes-blackadder-hall',
  },
  {
    email: 'drareception@st-andrews.ac.uk',
    name: 'David Russell Apartments',
    type: 'B&B ensuite double beds',
    prices: [
      {
        discountPercent: 10,
        icon: [UserSolidIcon],
        price: 65,
        title: 'Single Occupancy',
      },
      {
        discountPercent: 10,
        icon: [UserGroupSolidIcon],
        price: 85,
        title: 'Double Occupancy',
      },
      {
        icon: [
          UserGroupSolidIcon,
          UserGroupSolidIcon,
          UserGroupSolidIcon,
          UserGroupSolidIcon,
          UserGroupSolidIcon,
        ],
        subtitle: 'Apartment of 5 bedrooms for 2 nights',
        price: 365,
        title: 'Occupancy for 5 to 10 people',
      },
    ],
    telephone: '01334467100',
    website:
      'https://ace.st-andrews.ac.uk/accommodation/david-russell-apartments',
  },
];
