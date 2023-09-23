import {useState} from 'react'

import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"
import { BiLogoLinkedin } from "react-icons/bi"
import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";
import starRed from "../../assets/star-red.png";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";

const url = "https://backend.getlinked.ai/hackathon"

const ContactPage = () => {

    // consume api
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        first_name: '',
        message: '',
      });
    
      const [errors, setErrors] = useState<any>({});
    
      const schema = yup.object().shape({
        email: yup.string().email('Invalid email address').required(''),
        phone_number: yup.number().required(),
        first_name: yup.string().required(),        message: yup.string().required('Message is required'),
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          await schema.validate(formData, { abortEarly: false });
          const response = await axios.post(`${url}/contact-form`, formData);

          console.log(response)
          
          if (response.status === 200) {
            // Handle successful submission
            console.log('Contact form submitted successfully');
            setFormData({
                email: '',
                phone_number: '',
                first_name: '',
                message: '',
            });
            setErrors({});
          }
        } catch (error) {
          if (error instanceof yup.ValidationError) {
            const validationErrors: any = {};
            error.inner.forEach((e:any) => {
              validationErrors[e.path] = e.message;
            });
            setErrors(validationErrors);
          } else {
            console.error('An error occurred:', error);
          }
        }

        onSuccess: (data: any) => {

            console.log(data)
        
                if (data.data) {
                        Swal.fire({
                          title: "Message sent",
                          text: "We will reach out to you",
                          icon: "success",
                        });
                      }
                }
      };


  return (
    <div className='w-full h-screen bg-[#150E28] relative font-pop overflow-hidden flex justify-center items-center'>

        <div className="absolute top-[70px] left-[-30px] w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

        <div className="relative w-[85%] h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between" 
        onSubmit={handleSubmit}
        >

            
<img src={starBlue} alt="" className="absolute w-[10px] lg:w-[13px]  bottom-[60px] left-[35px] lg:bottom-[90px] lg:left-[50px]" />

<img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px]  top-[75px] left-[20px] lg:top-[120px]" />

<img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[170px] right-[0px] lg:right-[-30px]" />

            <div className="hidden lg:block text-white relative">
                <h5 className="text-[#d434fe] text-[22px] font-bold mb-4">Get in touch</h5>
                <h5 className="text-[14px] mb-4 font-semibold">Contact <br/>Information</h5>
                <h5 className="text-[14px] mb-4 font-semibold">
                    27, Alara Street<br/>Yaba, 100012<br/>Lagos State.
                </h5>
                <h5 className="text-[14px] mb-4 font-semibold">Call Us : 07067981519</h5>
                <h5 className="text-[14px] font-semibold">we are open from Monday-Friday</h5>
                <h5 className="text-[14px] mb-4 font-semibold">08:00am - 05:00pm</h5>

                <div className="flex flex-col ">
                    <h5 className="text-[#d434fe] mb-[5px] text-[13px]">Share on</h5>
                    <div className="flex text-white text-[14px] gap-2">
                        <FiInstagram />
                        <RiTwitterXLine />
                        <FaFacebookF />
                        <BiLogoLinkedin />
                    </div>
                </div>
         
<img src={starBlue} alt="" className="absolute w-[15px] bottom-[60px] lg:bottom-[90px] lg:right-[-150px]" />
            </div>

            <div className="lg:w-[60%] rounded lg:bg-[#1b142d] lg:p-[50px] lg:mt-[65px] lg:pl-[70px] lg:pr-[70px]">

                <h5 className="text-[#d434fe] text-[18px] mt-[80px] lg:mt-0 mb-[10px] ">
                    Questions or Need assistance?<br/>Let us know about it
                </h5>

                <h5 className="text-white text-[15px] mb-[10px] ">
                    Email us below to any question related to our event
                </h5>

                <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[13px] mb-[10px] text-white " type="text" placeholder="Email" 
                // {...register("email")}
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
                <p className='text-[9px]'>{errors.name}</p>

                <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[13px] mb-[10px] text-white "  type="text" placeholder="Phone Number"  
                // {...register("phone_number")}
                name='phone_number'
                value={formData.phone_number}
                onChange={handleChange}
                
                />

                <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[13px] mb-[10px] text-white"  type="text" placeholder="First Name"  
                // {...register("first_name")}
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
                
                />
                
                <textarea id="" placeholder="Message" className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[100px] rounded text-[13px] mb-[10px] text-white"  
                // {...register("message")}
                name='message'
                value={formData.message}
                onChange={handleChange}
                
                />

                {/* {
                    handleSubmit.isLoading ? (
                                <>
                                    <DatasIsaLoading />
                                </>
                ) : ( */}
                    
                    <div className="flex justify-center items-center mb-[10px] " >
                        <button className="flex justify-center items-center rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff] cursor-pointer text-white text-[13px] p-[10px] pr-[40px] pl-[40px] hover:border-white" type="submit">
                            Submit
                        </button>
                    </div>

                    {/* )
                } */}


                <div className="flex flex-col justify-center items-center lg:hidden">
                    <h5 className="text-white text-[13px]">Share on</h5>
                    <div className="flex text-white text-[14px] gap-2">
                        <FiInstagram />
                        <RiTwitterXLine />
                        <FaFacebookF />
                        <BiLogoLinkedin />
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default ContactPage;