import Input from "./from/Input";
import Title from "./ui/Title";
import {useFormik } from "formik";
import { reservationSchema } from "@/schema/Reservation";


const Reservation = () => {
  const onSubmit = async (actions) => {
    await new Promise((resolve) => setTimeout(resolve,4000));
    actions.resetFrom();
  }

  const {values, errors, touched,handleSubmit,handleChange, handleBlur} = useFormik({
    initialValues:{
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
    validationSchema: reservationSchema,

  })
  

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value:values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value:values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value:values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value:values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value:values.date,
      errorMessage: errors.date,
      touched: touched.date,

    },
  ];


  return (
    <div className="container mx-auto py-8">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => 
              <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
            )}
          </div>
          <button className="btn-primary mt-4" type="submit">BOOK NOW</button>
        </form>
        <div className="lg:flex-1 !h-[384px] w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178941.27482757304!2d49.690590628784456!3d40.398565695851225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBak%C3%BC%2C%20Azerbaycan!5e0!3m2!1str!2str!4v1682235132323!5m2!1str!2str"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="h-full w-full"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
