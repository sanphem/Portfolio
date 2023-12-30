import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                  className="md:w-1/3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Hi! I'm thrilled to have you here, exploring the facets of my professional repertoire.
                        In this section, I aim to provide a comprehensive overview of the skills that define my journey in the world of Engineering.
                        As a passionate and dedicated Materials Engineer, I've cultivated a diverse set of abilities that empower me to tackle challenges, innovate, and contribute meaningfully to projects.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                             className="z-10"
                             src="assets/skills-image.png"
                             alt="skills"
                            />
                        </div>
                    ) : (
                        <img
                         className="z-10"
                         src="assets/skills-image.png"
                         alt="skills"
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Experience
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        <ul>
                            <li className="text-red font-bold">GRADUATE RESEARCH ASSISTANT&nbsp;&nbsp;&nbsp;<span>AUGUST ‘22 – PRESENT</span></li>
                            <p>University of Connecticut | Storrs, Mansfield, Connecticut</p>
                            <li className="text-red font-bold">DATA SCIENTIST&nbsp;&nbsp;&nbsp;<span>FEB ‘22 – JUNE ‘22</span></li>
                            <p>Eroute2Market | Johannesburg, South Africa | Supply Chain Industry</p>
                        </ul>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;