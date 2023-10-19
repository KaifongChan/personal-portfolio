import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="relative">
            <p className="text-white animate-pulse pt-5 absolute top-10 left-1/2  -translate-x-1/2 -translate-y-1/2">
                <Link to="/">Click me</Link>
            </p>
            <div className="h-screen bg-[url('assets/interior.jpg')] bg-cover flex flex-col justify-center items-center ">

                <h1 className="text-4xl text-teal-950 font-semibold">What do we stand for?</h1>
            </div>
            <p className="text-white animate-pulse pt-5 absolute bottom-10 left-1/2  -translate-x-1/2 -translate-y-1/2">
                <Link to="about">Click me</Link>
            </p>
        </div>
    )
}
