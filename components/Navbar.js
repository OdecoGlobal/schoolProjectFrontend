import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar  navbar-expand-lg bg-body-tertiary  '>
        <div className='container-fluid'>
          <div></div>
          <Link className='navbar-brand' href='/'>
            SUPER SCHOOL <br />
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Super School
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link
                    href='/'
                    className='nav-link active'
                    aria-current='page'
                  >
                    Home
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/about' className='nav-link'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/register' className='nav-link'>
                    Register
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/loginPage' className='nav-link'>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
