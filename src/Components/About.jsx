import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About Our School</h1>
      <p className="text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam sollicitudin lacinia justo, id commodo libero suscipit a.
        Aliquam erat volutpat. Nunc pellentesque mauris id aliquam tempor.
        Donec vel elit at sem blandit feugiat vel vel velit.
      </p>
      <h2 className="text-2xl font-bold mb-6">Location</h2>
      <p className="text-lg mb-6">
        123 Main St.<br />
        Anytown, USA 12345
      </p>
      <h2 className="text-2xl font-bold mb-6">Facilities</h2>
      <ul className="list-disc pl-5 text-lg mb-6">
        <li>Library</li>
        <li>Gymnasium</li>
        <li>Cafeteria</li>
        <li>Playground</li>
      </ul>
      <h2 className="text-2xl font-bold mb-6">Staff</h2>
      <p className="text-lg mb-6">
        Our school has a dedicated and experienced staff, including teachers,
        administrators, and support staff. Contact us to learn more.
      </p>
    </div>
  );
};

export default About;
