import logo from "../assets/logo-40x40.png";

export function Header() {
  return (
    <div className="ml-4 mr-4 border-b-2 border-white">
      <div className="flex flex-row items-center p-4">
        <img src={logo} alt="logo" />
        <div className="m-4">Friendster</div>
      </div>
    </div>
  );
}
