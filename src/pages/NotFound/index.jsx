const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
