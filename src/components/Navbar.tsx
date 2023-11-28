import { useState } from "react"
import logo from "../assets/logo.svg"
import { Link } from "react-scroll"
import { Modal } from 'antd';
import Login from "./Login";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
      };

  return (
    <nav className="py-12" id="home">
        <div className="container">
            <div className="flex justify-between">
                <Link className="flex items-center gap-8 text-white" to="home" duration={500} smooth={true}>
                    <img src={logo} className="w-1/4 md:w-full"/>
                    <h1 className="md:text-2xl text-xl font-bold">Home</h1>
                </Link>
                <div className="items-center gap-8 hidden md:flex">
                    <Link className="font-bold text-2xl" to="about" duration={500} smooth={true}>About</Link>
                    <Link className="font-bold text-2xl" to="pricing" duration={500} smooth={true}>Pricing</Link>
                    <Link className="font-bold text-2xl" to="contact" duration={500} smooth={true}>Contact</Link>
                    <div className="border-2 border-cyan-400 py-2 px-20 lg:px-16 rounded-lg text-cyan-400 text-2xl font-medium cursor-pointer hover:scale-105 active:scale-95 duration-200" onClick={showModal}>Login</div>
                </div>
                <div className="hamburger md:hidden flex flex-col gap-1 w-4 justify-center">
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="w-full h-[1px] bg-black"></div>
                  <div className="w-full h-[1px] bg-black"></div>
                </div>
                <Modal
                  title="Login"
                  open={open}
                  onOk={handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <Login/>
                </Modal>
            </div>
        </div>
    </nav>
  )
}

export default Navbar