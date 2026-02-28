import { useNavigate } from "react-router";

export default function BuyButton({ model }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/Products/${model}`);
  }

  return <button onClick={handleClick} type="button" className='w-30 h-12 border-2 border-black rounded-2xl cursor-pointer btn-buy'>
    Buy
  </button>
}

