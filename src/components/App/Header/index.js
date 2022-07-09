import { Button, Dropdown, Navbar } from "react-daisyui";

export default function Header() {
    return (
        <div className="flex w-full p-4 items-center justify-center shadow-xl">
            <Navbar>
                <Navbar.Start>
                    <Dropdown>
                        <Button color="ghost" shape="circle" tabIndex={0}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7"/></svg>
                        </Button>

                        <Dropdown.Menu tabIndex={0} className="menu-compact w-52">
                            <Dropdown.Item>ToDo 1</Dropdown.Item>
                            <Dropdown.Item>ToDo 2</Dropdown.Item>
                            <Dropdown.Item>ToDo 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Start>

                <Navbar.Center>
                    <Button color="ghost" className="normal-case text-xl">
                        ToDo-List
                    </Button>
                </Navbar.Center>

                <Navbar.End className="navbar-end">
                    <Button color="ghost" shape="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </Button>
                </Navbar.End>
            </Navbar>
        </div>
    )
}
