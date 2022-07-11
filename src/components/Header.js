import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Navbar } from "react-daisyui";

const Header = () => {
    const navigate = useNavigate();

    const clickHandler = (location) => {
        navigate(location);
        // TODO: close dropdown
    };

    return (
        <div className="flex w-full component-preview p-1 items-center justify-center gap-2 font-sans shadow-xl">
            <Navbar>
                <Navbar.Start>
                    <Dropdown>
                        <Button color="ghost" shape="circle" tabIndex={0}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </Button>

                        <Dropdown.Menu className="menu-compact w-52" tabIndex={0}>
                            <Dropdown.Item onClick={() => clickHandler("/")}>Homepage</Dropdown.Item>
                            <Dropdown.Item onClick={() => clickHandler("/contact")}>Contact</Dropdown.Item>
                            <Dropdown.Item onClick={() => clickHandler("/about")}>About</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Start>

                <Navbar.Center>
                    <Button className="normal-case text-xl" color="ghost" onClick={() => clickHandler("/")}>
                        ToDo-List
                    </Button>
                </Navbar.Center>

                <Navbar.End>
                    <Button color="ghost" shape="circle" tabIndex={0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default Header;
