import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    'hover: text-sm font-semibold text-red-700 hover:text-base hover:text-red-500';
  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
