import { useEffect } from "react";
import { AllPlans } from "../Api/Api";
import { useSelector } from "react-redux";


const Home = () => {

    useEffect(() => {
      AllPlans()
    },[])

const allPlans = useSelector((state) => state.total.total)
console.log(allPlans)

    return (
        <>
            <h1>Plans Summery</h1>
           <div className=" flex flex-wrap justify-between gap-y-10 pr-10 mt-10"> 
           {
            allPlans?.map((item,i) => {
                return (
                    <div key={i} className="w-[48%] bg-pink-500 bg-opacity-[.2] p-5 rounded-lg">
                        <h1 className="text-2xl">{item._id}</h1>
                        <h1 className="text-2xl">{item.count}</h1>
                       
                    </div>
                )
            })
           }
          

            </div>
        </>



       
    );
};

export default Home;