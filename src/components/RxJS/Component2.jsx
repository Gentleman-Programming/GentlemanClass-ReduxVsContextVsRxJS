import { useEffect, useState } from 'react';
import { sharingInformationService } from '../../services/sharing-information.service';

function Component2() {
  const [count, setCount] = useState(0);
  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe(data => {
      if (!!data) setCount(count + 1);
    });
  }); 

  return <div>{count}</div>;
}
export default Component2;
