function Contact(){
    return(
        <div id="contact" className="m-[1rem] p-4 pt-4 text-left sm:p-6 md:p-8 lg:pt-6 lg:p-10 bg-gray-200 border border-mint-green rounded-xl">
            <h2 className="font-semibold text-4xl text-center md:text-left mb-4">Contact Me</h2>
            <form action="POST" className=" text-center md:text-left">
                <div className=" my-4">
                    <input type="text" name="name" placeholder="Name" className="border border-dark-purple p-1 pl-2 rounded-sm w-3/4"/>
                </div>
                <div className=" my-4">
                    <input type="text" name="email" placeholder="Email Address" className="border border-dark-purple p-1 pl-2 rounded-sm w-3/4"/>
                </div>
                <div className=" my-4">
                    <textarea type="text" name="message" placeholder="Your Message" className="border border-dark-purple p-1 pl-2 rounded-sm w-3/4 h-[8rem]"/>
                </div>
            </form>
        </div>
    )
}
export default Contact;