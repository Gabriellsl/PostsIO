interface NavigationButton {
  title: string;
}

function NavigationButton({ title }: NavigationButton) {
  return (
    <a
      href="#"
      className="w-fit block rounded-md bg-gray-900 pl-6 py-2 pr-4 text-base font-medium text-white"
      aria-current="page"
    >
      {title}
    </a>
  );
}

export default NavigationButton;
