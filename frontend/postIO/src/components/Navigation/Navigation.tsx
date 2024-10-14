import { useState } from 'react';
import CategoryButton from '../CategoryButton';
import { CategoryFilter } from '../../types';
import CategoryFilterSelector from '../CategoryFilterSelector';

interface NavigationProps {
  children: React.ReactNode;
}

function Navigation({ children }: NavigationProps) {
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);

  const handleSwitchMenuStatus = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <div className="h-screen">
      <nav className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-start text-primary-foreground text-sm">
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleSwitchMenuStatus}
              >
                {!showMenuItems ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            <span className="ml-4">Posts</span>
          </div>
        </div>
      </nav>

      <div
        className={`${showMenuItems ? 'max-h-40' : 'max-h-0'} overflow-hidden md:hidden transition-all ease-in-out delay-200 border-b-2 mb-2`}
        id="mobile-menu"
      >
        <div className="space-y-1 pt-6 px-2">
          <CategoryFilterSelector />
        </div>
        <div className="space-y-1 px-2 pb-3 pt-12 sm:px-3">
          <CategoryButton title="Home" activated={false} />
        </div>
      </div>
      <div id="contentContainer bg-accent">{children}</div>
    </div>
  );
}
export default Navigation;
