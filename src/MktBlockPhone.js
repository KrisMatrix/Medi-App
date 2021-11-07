import './MktBlockPhone.css';
import mockup_demo from './mockup_demo.png';

function MktBlockPhone() {
  return (
    <div className="mkt-block-phone">

      <div className="blurb">
        Another Marketing Blurb
      </div>

      <div>
        <div className="white-solid-circle">
          <img src={ mockup_demo } alt="phone mockup" width="100%" height="100%"/>
        </div>
      </div>

    </div>
  );
}

export default MktBlockPhone;
