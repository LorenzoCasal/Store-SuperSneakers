export default function AddCart({ onClick }) {
  return <button onClick={onClick} type="button" className='w-30 h-12 text-sm my-5 border-2 border-black rounded-2xl cursor-pointer'>
    Add to Cart
  </button>
}