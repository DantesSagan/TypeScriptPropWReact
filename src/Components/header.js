import { Link } from 'react-router-dom';
import * as ROUTES from './routes/routes';

export default function Header() {
  return (
    <div>
      <header className='mt-14'>
        <nav className='grid grid-cols-4 rounded-t-lg p-2 border-4 border-blue-900 shadow-inner font-mono gridCol '>
          <div className='border border-blue-700 rounded-2xl m-2 '>
            <div className='button p-4 border border-blue-800 rounded-2xl'>
              <Link to='/'>Home</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.Props}>Props#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.BasicProps}>Props#2</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.AdvancedProps}>AdvancedProps</Link>
            </div>
          </div>
          <div className='border border-blue-700 rounded-2xl m-2'>
            <div className='button p-2'>
              <Link to={ROUTES.EventProps}>EventProps</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.StyleProps}>StyleProps</Link>
            </div>
            <div className='button p-2' style={{ fontSize: '1rem' }}>
              <Link to={ROUTES.PropsTypesAndTips}>PropsTypesAndTips</Link>
            </div>
            <div className='button p-2' style={{ fontSize: '1rem' }}>
              <Link to={ROUTES.UseStateHook}>UseStateHook</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
