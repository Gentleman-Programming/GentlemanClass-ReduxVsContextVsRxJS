import ComponentContext1 from './components/ComponentContext1';
import ComponentContext2 from './components/ComponentContext2';
import ComponentRedux2 from './components/ComponentRedux2';
import { GentlemanProvider } from './context/gentleman.context';

function Gentleman() {
  return (
    <div>
      <GentlemanProvider>
        <ComponentContext1 />
        <ComponentContext2 />
        <ComponentRedux2 />
      </GentlemanProvider>
    </div>
  );
}
export default Gentleman;
