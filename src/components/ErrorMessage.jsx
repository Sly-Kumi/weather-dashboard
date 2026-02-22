function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="mt-6 text-red-600 font-medium text-center">
      {message}
    </div>
  );
}

export default ErrorMessage;