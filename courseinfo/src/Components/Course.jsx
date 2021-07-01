import React from 'react';

import Content from './Content';
import Total from './Total';
import Header from './Header';

const Course = ({ course }) => {
  return (
    <div className="flex flex-col items-center">
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

export default Course;
