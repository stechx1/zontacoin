export const Button = ({type, onClick, children}) => {
  if(type === "secondary") {
    return <button className="bg-transparent py-4 px-6 rounded-full border-2 border-gray-500 hover:bg-gray-500 hover:border-gray-500 hover:border-2" onClick={onClick}>{children}</button>;
  } else {
    return <button className="bg-blue-700 py-4 px-6 rounded-full hover:bg-blue-800" onClick={onClick}>{children}</button>;
  }
};
