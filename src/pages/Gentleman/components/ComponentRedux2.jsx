import { useSelector } from 'react-redux';

function ComponentRedux2() {
  const userState = useSelector(store => store.user);
  return <div>El state del user es: {JSON.stringify(userState)}</div>;
}
export default ComponentRedux2;
