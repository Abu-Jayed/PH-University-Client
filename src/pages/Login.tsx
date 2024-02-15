import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const {register,handleSubmit} = useForm()

  const [login,{data,error,isLoading,isSuccess}] = useLoginMutation()
  

  const onSubmit = (data) => {
    console.log(data);
    const userInfo = {
      id: data.userId,
      password: data.password
    }
    login(userInfo)
  }
  console.log("success",isSuccess);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" {...register("userId")} id="id" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" {...register("password")} id="password" />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
