import React from "react";
import { motion } from "framer-motion";

const InfoSection: React.FC = () => {
    return (
        <section className="wrapper !bg-gray-50">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[3rem] lg:!mb-[3rem] md:!mb-[3rem] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px], lg:!px-[20px], !px-[15px] max-w-full mt-[50px] relative">
                    <div
                        className="shape bg-line leaf rounded-full rellax w-[7rem] h-[7rem] absolute z-[1] opacity-50"
                        data-rellax-speed="1"
                        style={{ top: "-2rem", right: "-0.6rem" }}
                    ></div>
                    <div
                        className="shape bg-[#f0eaf6] rounded-full rellax w-[7rem] h-[7rem] absolute z-[1] opacity-50"
                        data-rellax-speed="1"
                        style={{ bottom: "-2rem", left: "-0.4rem" }}
                    ></div>
                    <figure className="space-y-5 md:ml-16">
                        <div className="w-full max-w-[550px] aspect-[16/9] overflow-hidden rounded-md">
                            <img
                                src="/info1.png"
                                alt="Quality Policy Statement"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full max-w-[550px] aspect-[16/9] overflow-hidden rounded-md">
                            <img
                                src="/info2.png"
                                alt="Quality Policy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </figure>
                </div>

                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[15px] !px-[10px] max-w-full !mt-[50px]">
                    <motion.h2
                        className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-2"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Quality Policy Statement
                    </motion.h2>
                    <motion.p
                        className="text-base text-gray-600 max-w-3xl mx-auto !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We, at HARDROCK AGGREGATES, INC. are committed to our customers with efficient
                        services at the most competitive cost, on timely delivery of products and with high quality for the
                        technical and construction services, satisfying customer requirements making it as our measure
                        of success. It is also our commitment to satisfy and hold in the highest regard our colleagues and
                        the country.
                    </motion.p>

                    <motion.p
                        className="text-base text-gray-600 max-w-3xl mx-auto !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        To meet this policy, Hardrock Aggregates, Inc. will implement the Quality Management System that will ensure:
                    </motion.p>

                    <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                        {[
                            [
                                "Frequent meeting exceeding our customer’s expectations for quality product and performance.",
                                "Highly motivated Competent Personnel who will implement and maintain our quality services in the industry.",
                                "Continuously improve the effectiveness of our Quality Management System (QMS), Processes and Deliverables to maintain our competitiveness and profitability locally and to be global in the future.",
                            ],
                            [
                                "Integrated coordination with our customers to fully understand the requirement.",
                                "Timely delivery of Products, Plants and Services to meet Customer Schedule.",
                                "Develop our technology and infrastructure continuously in order that we may offer the latest available technology to meet our customer’s expectation with the continuous changing market demands.",
                            ],
                        ].map((group, i) => (
                            <div key={i} className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-neutral !mb-0">
                                    {group.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className={`relative !pl-6 text-base text-gray-600 !mb-3 ${idx !== 0 ? "!mt-3" : ""}`}
                                            initial={{ opacity: 0, y: -10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <span>
                                                <i className="uil uil-dot-circle !w-4 !h-4 text-[0.8rem] leading-none text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-full left-0 top-[0.2rem] before:content-['\e9dd'] before:table-cell before:align-middle"></i>
                                            </span>
                                            <span className="block">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <motion.p
                        className="text-base text-gray-600 max-w-3xl mx-auto !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Moreover, Hardrock Aggregates, Inc. is committed to upgrade the capabilities of its technical and administrative colleagues through formal training and continuous technical quality awareness.
                    </motion.p>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 py-10 bg-white rounded-lg shadow-sm">
                <motion.h3
                    className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Health & Safety Policy
                </motion.h3>
                <div className="text-gray-700 space-y-5 leading-relaxed">
                    <motion.p
                        className="text-base text-gray-600 !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hardrock Aggregates, Inc. is committed to ensuring a safe and healthy work environment is provided and maintained for all personnel and minimizes impact on the local community.
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-600 !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hardrock Aggregates, Inc. accepts responsibility for the effective implementation of this policy and will provide systems, training, supervision and visible support to ensure safety in the local community.
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-600 !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Line management shall be responsible for the safety performance of activities within their area of responsibility and must accept that all safety and health occurrences are preventable. Acceptance of this responsibility is not negotiable.
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-600 !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        All employees have the responsibility to perform their duties in a manner that ensures their own safety and that of others.
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-600 !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        To achieve this, Hardrock Aggregates, Inc. will:
                    </motion.p>
                </div>

                <ul className="mt-8 space-y-4 list-none">
                    {[
                        "Ensure compliance with the law, including ECC and other permit conditions.",
                        "Formally assess health & safety in all stages of planning, design & construction and incorporate systems to eliminate or control hazards.",
                        "Commit sufficient resources for the effective implementation of safety management system in all areas of operation.",
                        "Ensure all personnel are motivated, skilled, informed and resourced to carry out assigned work in a safe manner.",
                        "Provide a continuous program of education and learning to enhance skills and increase health and safety awareness.",
                        "Investigate, correct and report all safety and health occurrences.",
                        "Promote consultation with safety and health representatives and employees on all matters of safety and health.",
                        "Audit and evaluate health and safety management systems and programs to continuously improve our safety performance.",
                        "Provide an effective system of injury/illness rehabilitation management.",
                        "Implement and maintain Client health and safety requirements and compliance with all statutory regulations.",
                        "Have in-place appropriate contingency procedures to address all likely emergency response situations including soil and water pollution.",
                    ].map((item, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-base text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <span className="mt-1 w-3 h-3 rounded-full bg-gray-800 flex-shrink-0"></span>
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[2px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[15px] px-[10px] max-w-full !mt-[50px]">
                    <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-2">Environmental Policy</h3>
                    <motion.p
                        className="text-base text-gray-600 max-w-3xl mx-auto !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        HARDROCK AGGREGATES, INC. recognizes the principles of sustainable development through the commitment and involvement of management and employees, is dedicated to the provision of environmental responsible services to its customers, workforce and community.
                    </motion.p>

                    <motion.p
                        className="text-base text-gray-600 max-w-3xl mx-auto !mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Key environment policy objectives are:
                    </motion.p>
                    <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
                        {[
                            [
                                "To conduct all operations in accordance with appropriate legislation",
                                "To communicate constructively with customers, workforce and the community on environmental effects of proposed project operations.",
                                
                                "To provide employees training as appropriate to improve awareness and knowledge of environmental issues.",
                            ],
                            [
                               "To establish environmental objectives and incorporate environmental management practices in project planning.",
                                "HARDROCK AGGREGATES, INC. supports environmentally sustainable practices including conservation of resources, emission control, protection of ecosystems and energy consistent with current technical knowledge.",
                            ],
                        ].map((group, i) => (
                            <div key={i} className="xl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[15px]">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-neutral !mb-0">
                                    {group.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className={`relative !pl-6 text-base text-gray-600 !mb-3 ${idx !== 0 ? "!mt-3" : ""}`}
                                            initial={{ opacity: 0, y: -10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <span>
                                                <i className="uil uil-dot-circle !w-4 !h-4 text-[0.8rem] leading-none text-center table !text-[#7cb798] !bg-[#e7f2ec] absolute rounded-full left-0 top-[0.2rem] before:content-['\e9dd'] before:table-cell before:align-middle"></i>
                                            </span>
                                            <span className="block">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px] !relative">
                    <div
                        className="shape bg-line leaf !rounded-[50%] rellax !w-[7rem] !h-[7rem] !absolute z-[1] opacity-50"
                        data-rellax-speed="1"
                        style={{ top: "-2rem", right: "-0.6rem" }}
                    ></div>
                    <div
                        className="shape bg-[#f0eaf6] !rounded-[50%] rellax !w-[7rem] !h-[7rem] !absolute z-[1] opacity-50"
                        data-rellax-speed="1"
                        style={{ bottom: "-2rem", right: "-0.4rem" }}
                    ></div>
                    <figure className="!rounded-[.4rem] !mb-0">
                        <img
                            className="!rounded-[.4rem]"
                            src="/info3.png"
                            alt="Environmental Policy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;