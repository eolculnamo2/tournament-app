import React from 'react';
import { ICircleLink } from '../../../../constants/interfaces';
import '../../scss/pages/dashboard.scss';

function Dashboard(): JSX.Element {
  const circleLinks: Array<ICircleLink> = [
    {
      text: 'My HEMA Profile',
      link: '/create-tournament',
      color: 'red2',
    },
    {
      text: 'Tournament Stats',
      link: '/create-tournament',
      color: 'blue1',
    },
    {
      text: 'Register for Event',
      link: '/create-tournament',
      color: 'red1',
    },
    {
      text: 'Upcoming Tournaments',
      link: '/create-tournament',
      color: 'blue2',
    },
    {
      text: 'View Articles',
      link: '/create-tournament',
      color: 'blue2',
    },
    {
      text: 'Discuss',
      link: '/create-tournament',
      color: 'red1',
    },
    {
      text: "Judge's Table",
      link: '/create-tournament',
      color: 'red2',
    },
    {
      text: 'Create Tournament',
      link: '/create-tournament',
      color: 'blue1',
    },
  ];

  return (
    <div>
      <h1 className="Dashboard__title">Sword Point Tournaments</h1>
      <div className="Dashboard__circles-wrap">
        {circleLinks.map((x: ICircleLink, i: number) => {
          return (
            <div
              key={x.link + i}
              className={`Dashboard__circle Dashboard__circle--${x.color}`}
            >
              <div className="Dashboard__circle-txt">{x.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
