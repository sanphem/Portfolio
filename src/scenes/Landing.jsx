import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                        before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                        before:border-2 before:border-blue before:z-[-1]">

                        <img
                          className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                            max-w-[400px] md:max-w-[500px] rounded-t-[400px]"
                          src="assets/profile-pics.jpg"
                          alt="profile"
                        />
                    </div>
                ) : (
                    <img
                      className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                        max-w-[400px] md:max-w-[500px] rounded-t-[400px]"
                      src="assets/profile-pics.jpg"
                      alt="profile"
                    />
                )}
            </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                      }}>
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Oluwafemi {""}
                            <span 
                              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                                xs:before:content-brush before:absolute before:-left-[25px] 
                                before:-top-[70px] before:z-[-1]">
                                Sanumi
                            </span>
                        </p>

                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            I am an highly motivated professional with an outstanding background in material science and engineering and a strong
                            passion for machine learning and data analysis particularly in energy material and technologies.
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                       className="flex mt-5 justify-center md:justify-start"                   
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ delay: 0.2, duration: 0.5 }}
                       variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 }
                       }}>
                        <AnchorLink
                          className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500"
                          onClick={() => setSelectedPage("contact")}
                          href="#contact"
                        >
                            Contact Me
                        </AnchorLink>

                        <a
                          className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                          href="https://drive.google.com/file/d/1908BPPvcgvOADGxusxzzGgqQErFHUSYl/view?usp=drive_link"
                          target="_blank"
                        >
                            <div
                              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                                justify-center font-playfair px-10"
                                >
                                Download CV
                            </div>
                        </a>
                    </motion.div>

                    <motion.div
                      className="flex mt-5 justify-center md:justify-start"                   
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                      }}>
                        <SocialMediaIcons />

                    </motion.div>
                </div>
        </section>
    )
}

export default Landing;