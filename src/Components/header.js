import { Link } from 'react-router-dom';
import * as ROUTES from './routes/routes';

export default function Header() {
  return (
    <div>
      <header className='mt-14'>
        <nav className='grid grid-cols-3  rounded-t-lg border-4 border-blue-900 shadow-inner font-mono gridCol '>
          <div className='border border-blue-700 rounded-2xl m-2 col-start-1 col-span-4 button'>
            <Link to='/'>Home</Link>
          </div>
          <div
            className='border border-blue-700 rounded-2xl m-2 '
            style={{ display: 'inline-block', padding: '10px' }}
          >
            <button
              className='buttonM dropdown'
              style={{ display: 'inline-block'  }}
            >
              Props
              <div className='dropdown-content' style={{ fontSize: '1rem' }}>
                <div className='button'>
                  <Link to={ROUTES.EventProps}>EventProps</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.Props}>Props#1</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.BasicProps}>Props#2</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.AdvancedProps}>AdvancedProps</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.StyleProps}>StyleProps</Link>
                </div>
              </div>
            </button>
          </div>
          <div
            className='border border-blue-700 rounded-2xl m-2'
            style={{ display: 'inline-block', padding: '10px' }}
          >
            <button
              className='buttonM dropdown'
              style={{ display: 'inline-block' }}
            >
              Hook's
              <div className='dropdown-content' style={{ fontSize: '1rem' }}>
                <div className='button'>
                  <Link to={ROUTES.UseStateHook}>UseStateHook</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.UseReducerHook}>UseReducerHook</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.UseContextHook}>UseContextHook</Link>
                </div>{' '}
                <div className='button'>
                  <Link to={ROUTES.UserContext}>UserContext</Link>
                </div>{' '}
                <div className='button'>
                  <Link to={ROUTES.UseRef}>UseRef</Link>
                </div>
              </div>
            </button>
          </div>
          <div
            className='border border-blue-700 rounded-2xl m-2'
            style={{ display: 'inline-block', padding: '10px' }}
          >
            <button
              className='buttonM dropdown'
              style={{ display: 'inline-block' }}
            >
              Complex Props
              <div className='dropdown-content' style={{ fontSize: '1rem' }}>
                {' '}
                <div className='button'>
                  <Link to={ROUTES.PropsTypesAndTips}>PropsTypesAndTips</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.ClassComponent}>Class Component Prop</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.ComponentProp}>Component Prop</Link>
                </div>{' '}
                <div className='button'>
                  <Link to={ROUTES.GenericProp}>Generic Prop</Link>
                </div>
                <div className='button'>
                  <Link to={ROUTES.RestrictProps}>Restrict Props</Link>
                </div>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
