interface NavProps {
  handleSwitchMenuStatus: (isOpen: boolean) => void;
  showMenuItems: boolean;
}

function Nav({ handleSwitchMenuStatus, showMenuItems }: NavProps) {
  return (
    <nav className="bg-primary md:w-80 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center sm:justify-start md:justify-center text-primary-foreground text-sm">
          <div className="-mr-2 flex md:hidden">
            <button
              data-testid="nav-button"
              type="button"
              className="md:hidden relative p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => handleSwitchMenuStatus(!showMenuItems)}
            >
              {!showMenuItems ? (
                <svg
                  data-testid="menu-icon"
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  data-testid="close-icon"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <span className="ml-4">Posts</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
