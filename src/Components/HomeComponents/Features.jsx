import { BsBookFill } from 'react-icons/bs';
import { FaUserGraduate, FaUsers, FaHandshake,FaUserTie } from 'react-icons/fa';
import Fixedwidth from '../../Layouts/Fixedwidth';
import {GiNetworkBars} from "react-icons/gi";
import Title from '../../shared/sharedComponents/Title';

const Features = () => {
    const boxInfo = [
        {
          "heading": "Interactive",
          "info": "Engaging and immersive educational experiences for active learning",
          "icon": <BsBookFill />
        },
        {
          "heading": "Personalized",
          "info": "Tailored guidance to meet individual student needs and learning styles",
          "icon": <FaUserGraduate />
        },
        {
          "heading": "Progress",
          "info": "Track and assess learning milestones to monitor academic advancement",
          "icon": <GiNetworkBars />
        },
        {
          "heading": "Collaborative",
          "info": "Foster teamwork and peer-to-peer learning for enhanced knowledge sharing",
          "icon": <FaUsers />
        },
        {
          "heading": "Resourceful",
          "info": "Access an extensive library of study materials for comprehensive learning",
          "icon": <FaHandshake />
        },
        {
          "heading": "Expert",
          "info": "Receive dedicated support and guidance from experienced educators",
          "icon": <FaUserTie />
        }
      ]

    return (
        <div className='bg-[#F0F9F5] py-20'>
            <Fixedwidth>
                <Title title="Features" subTitle="Our primary objective is to provide professional guidance to students in order to facilitate their optimal learning experience." align="center" />

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-10'>
                    {
                        boxInfo.map((box, index) =>
                            <div key={index} className='flex gap-2 items-center'>
                                <div className='border rounded-full text-white bg-[#2E836F] p-4 text-lg'>
                                   {box.icon}
                                </div>
                                <div>
                                    <h4 className='font-bold text-2xl'>{box.heading}</h4>
                                    <p>{box.info}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </Fixedwidth>

        </div>
    );
};

export default Features;