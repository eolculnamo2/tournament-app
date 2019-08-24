import React from 'react';
import { ICircleLink } from '../../../../constants/interfaces';
import { Link } from 'react-router-dom';
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
      link: '/upcoming-tournaments',
      color: 'blue2',
    },
    {
      text: 'Discuss',
      link: '/create-tournament',
      color: 'blue2',
    },
    {
      text: 'Manage Event',
      link: '/create-tournament',
      color: 'red1',
    },
    {
      text: "Judge's Table",
      link: '/judges-table',
      color: 'red2',
    },
    {
      text: 'Create Tournament',
      link: '/create-tournament',
      color: 'blue1',
    },
  ];

  return (
    <>
      <h1 className="Dashboard__title">Sword Point Tournaments</h1>
      <div className="Dashboard__circles-wrap">
        {circleLinks.map((x: ICircleLink, i: number) => {
          return (
            <Link to={x.link} key={x.link + i}>
              <div
                className={`Dashboard__circle Dashboard__circle--${x.color}`}
              >
                <div className="Dashboard__circle-txt">{x.text}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
