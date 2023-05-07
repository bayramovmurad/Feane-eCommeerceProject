import Link from "next/link"
import Input from "@/components/from/Input"
import Title from "@/components/ui/Title"
import { useFormik } from "formik"
import { loginSchema } from "@/schema/Login"
import { useSession, signIn } from "next-auth/react"


const Login = () => {
    const { data: session } = useSession();
    

    const onSubmit = async (values, actions) => {
        const { email, password } = values;
        let options = { redirect: false, email, password };
        const res = await signIn("credentials", options);
        /*   actions.resetForm(); */
    };

    console.log(session);

const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
})

const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Your Email Address",
        value: values.email,
        errorMessage: errors.email,
        touched: touched.email,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Your Password",
        value: values.password,
        errorMessage: errors.password,
        touched: touched.password,
    },
];
return (
    <div className="container mx-auto">
        <form className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto" onSubmit={handleSubmit}>
            <Title addClass="text-[40px] mb-6">
                Login
            </Title>
            <div className="flex flex-col gap-y-3 w-full">
                {
                    inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))
                }
            </div>
            <div className="flex flex-col w-full gap-y-3 mt-6">
               
                    <button type="submit" className="btn-primary w-full">
                        Login
                    </button>
                
                <button className="btn-primary !bg-secondary" type="button" onClick={() => signIn("github")}>
                    GITHUB
                </button>
                <Link href="/auth/Register">
                    <span className="text-sm underline cursor-pointer text-secondary">
                        Do you no have a account?
                    </span>
                </Link>
            </div>
        </form>
    </div>
)
}

export default Login