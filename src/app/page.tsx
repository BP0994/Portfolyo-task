"use client";

import Introduction from "@/components/Introduction";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [name,setName] =useState("")
  const [tille,setTille] =useState("")
  const [description,setDescription] =useState("")
  const [address , setAddress] =useState("")
  const [email, setEmail] =useState("")
  const [image, setImage] =useState("")


  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
        setName(data.user.about.name)
        setTille(data.user.about.title)
        setDescription(data.user.about.description)
        setAddress(data.user.about.address)
        setEmail(data.user.email)
        setImage(data.user.about.avatar.url)


        // console.log(data.user);
        // console.log(userData)
      });
  }, []);

  return (
    <div className="body w-screen">
      <div className="w-full hidden lg:flex fixed z-40">
        <Header name={name}  title={tille}/>
      </div>
      <div className="lg:ml-72 lg:w-[900px]  z-20">
        <Introduction description={description} name={name} address={address} email={email} image={image} />

        <Footer />
      </div>
      
    </div>
  );
}
