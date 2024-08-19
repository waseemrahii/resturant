import React from 'react';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Page404 = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-4 w-full h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h3 className="text-5xl font-bold text-gray-600">Page Not Found</h3>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Go To Home
      </Button>
    </div>
  );
};

export default Page404;