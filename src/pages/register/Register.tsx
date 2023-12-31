import React from 'react'
import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";
import starRed from "../../assets/star-red.png";
import man from "../../assets/register-img.png";
import walking from "../../assets/movement.png";
import Congrats from './Congrats';
// import * as yup from "yup";
// import axios from 'axios';
// import { registerTeam } from '../../utils/Api';


// const url = "https://backend.getlinked.ai/hackathon"

const Register = () => {

    const [popUp, setPopUp] = React.useState(false)

    const showPopUp = () => {
        setPopUp(!popUp)
    }

       // consume api
    //    const [formData, setFormData] = useState({
    //     phone_number: '',
    //     team_name: '',
    //     group_size: '',
    //     project_topic: '',
    //     category: '',
    //     privacy_policy_accepted: '',
    //   });
    
    //   const [errors, setErrors] = useState<any>({});
    
    //   const schema = yup.object().shape({
    //     phone_number: yup.string().required(),
    //     team_name: yup.string().required(),
    //     group_size: yup.string().required(),
    //     project_topic: yup.string().required(),
    //     category: yup.string().required(),
    //     privacy_policy_accepted: yup.boolean().required(),
    // });
    
    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };
    
    //   const handleSubmit = async (e: React.FormEvent ) => {
    //     e.preventDefault();
    
    //     try {
    //       await schema.validate(formData, { abortEarly: false });
    //       const response = await axios.post(`${url}/registration`, formData);

    //     //   console.log(response)
          
    //       if (response.status === 200) {
    //         // Handle successful submission
    //         console.log('Contact form submitted');
    //         setFormData({
    //             phone_number: '',
    //             team_name: '',
    //             group_size: '',
    //             project_topic: '',
    //             category: '',
    //             privacy_policy_accepted: '',
    //         });
    //         setErrors({});
    //       }
    //     } catch (error) {
    //       if (error instanceof yup.ValidationError) {
    //         const validationErrors: any = {};
    //         error.inner.forEach((e:any) => {
    //           validationErrors[e.path] = e.message;
    //         });
    //         setErrors(validationErrors);
    //       } else {
    //         console.error('An error occurred:', error);
    //       }
    //     }
    // }

  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden lg:h-screen flex justify-center items-center pb-[20px]'>

        <div className="absolute top-[70px] left-[-30px] w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

        <div className="relative w-[85%] h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between" 
        // onSubmit={handleSubmit}
        >

        
<img src={starBlue} alt="" className="absolute w-[10px] lg:w-[13px]  bottom-[60px] left-[35px] lg:bottom-[90px] lg:left-[50px]" />

<img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px]  top-[75px] left-[20px] lg:top-[120px]" />

<img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[170px] right-[0px] lg:right-[-30px]" />

            <div className="relative lg:mt-[70px]">
                <img src={man} alt="" className="w-[200px] lg:w-[500px] mt-[100px] lg:mt-0 " />

<img src={starBlue} alt="" className="absolute w-[15px] bottom-[60px] lg:bottom-[90px] lg:right-[-50px]" />
            </div>

            <div className="lg:w-[50%] rounded lg:bg-[#1b142d] lg:p-[30px] lg:mt-[90px] lg:pl-[70px] lg:pr-[70px] lg:border-[#d434fe] lg:border-[1px]">

                <h4 className="hidden lg:block text-[20px] mb-[30px] text-[#d434fe] font-semibold">Register</h4>

                <h5 className="text-white text-[13px] flex items-center">
                    Be Part of this movement 
                    <span><img src={walking} alt="" className="w-[50px] ml-[10px]" /></span>
                </h5>

                <h4 className="text-white text-[18px] mb-[15px]">CREATE YOUR ACCOUNT</h4>

                <div className="flex flex-wrap lg:justify-between w-full items-center">
                    <div className=" w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Team's Name</h5>
                        <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px] " type="text" placeholder="Enter the name of your group" 
                        // {...register("team_name")}
                        // name='team_name'
                        // value={formData.team_name}
                        // onChange={handleChange}
                        />
                    </div>

                    <div className="w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Phone</h5>
                        <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter your phone number" 
                        // {...register("phone_number")}
                        // name='phone_number'
                        // value={formData.phone_number}
                        // onChange={handleChange}
                        />      
                        {/* <p className='text-[9px]'>{errors.phone.number}</p> */}
                    </div>
                </div>

                <div className="flex flex-wrap lg:justify-between w-full items-center">
                    <div className="w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Email</h5>
                        <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter your email adress" 
                        // {...register("email")}
                        // name='team_name'
                        // value={formData.team_name}
                        // onChange={handleChange}
                       
                        />
                    </div>

                    <div className=" w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Project Topic</h5>
                        <input className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="What is your group's project topic" 
                        // {...register("project_topic")}
                        // name='team_name'
                        // value={formData.team_name}
                        // onChange={handleChange}
                       
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="w-[65%] lg:w-[48%]">
                        <h5 className="text-white text-[12px]">Category</h5>
                        <select className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px] text-white" id=""
                        // {...register("category")}
                        // name='category'
                        // value={formData.category}
                        // onChange={handleChange}
                       
                        >
                            <option value="">Select your category</option>
                            <option value="">Mobile</option>
                            <option value="">Web</option>
                        </select>
                    </div>

                    <div className="w-[30%] lg:w-[48%]">
                        <h5 className="text-white text-[12px]">Group Size</h5>
                        <select className="bg-[#1b142d] boreder-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px] text-white" id=""
                        // {...register("group_size")}
                        // name='group_size'
                        // value={formData.group_size}
                        // onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                        </select>
                    </div>
                </div>

                <h6 className="text-[10px] text-center lg:text-left text-[#d434fe] mb-[10px]">Please review your registration details before submitting</h6>

                <div className="flex items-center mb-[15px]">
                    <input type="check" className="w-[13px] h-[13px] mr-[10px]" 
                        // {...register("privacy_policy_accepted")}
                        // name='privacy_policy_accepted'
                        // value={formData.privacy_policy_accepted}
                        // onChange={handleChange}
                       
                        />
                    <h5 className="text-white text-[11px]">
                        I agreed with the event terms and conditions and privacy policy
                    </h5>
                </div>

            {/* {} */}
                <div className="flex justify-center items-center mb-[10px] ">
                    <button className="flex justify-center items-center lg:w-full lg:border-[1px] rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff] cursor-pointer text-white text-[13px] h-[40px] hover:border-white" 
                    type="submit" 
                    onClick={showPopUp}
                    >
                        Register Now
                    </button>
                </div>
            </div>

        </div>

        { popUp ? 
            <div className='absolute z-50 h-full w-full'>
                <Congrats />
            </div>
        :
            null
        }

    </div>
  )
}

export default Register