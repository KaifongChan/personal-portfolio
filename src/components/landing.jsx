import { Link, NavLink } from "react-router-dom"

export default function Landing() {
    return (
        <div className="flex flex-col h-screen bg-[url('assets/interior.jpg')] bg-cover">
            <header id="header" className="basis-1/8 grow flex flex-row justify-end">
                {/* <h1 className="">Hello</h1> */}
                <ul className="flex flex-row gap-3 text-2xl text-white">
                    <li>
                        <a className="hover:text-slate-200" href="">Sign Up</a>
                    </li>
                    <li>
                        <a className="hover:text-slate-200" href="">Sign In</a>
                    </li>
                </ul>
            </header>
            <div id="container" className="flex flex-col basis-7/8 grow items-center justify-between pb-20">
                <h1 className="text-8xl text-gray-700 font-semibold animate-pulse duration-700 ">Comfort starts from the sofa</h1>
                {/* text-teal-950 */}
                {/* <p className="text-white animate-pulse pt-5">
                    <Link to="about">Click me</Link>
                </p> */}
            </div >
            <p className="text-white animate-pulse pt-5 absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link to="about">Click me</Link>
            </p>
        </div >
    )
}

