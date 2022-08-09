import { useGentlemanContext } from '../context/gentleman.context';

function ComponentContext1() {
  const { setGentlemanContextValue } = useGentlemanContext();

  const handleClick = () => {
    setGentlemanContextValue('Hola mi ciela');
  };
  return (
    <div>
      <button onClick={handleClick}>Enviar informacion por un context</button>
    </div>
  );
}
export default ComponentContext1;
